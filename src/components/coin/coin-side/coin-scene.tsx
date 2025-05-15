import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { setSelectedCoinSide } from "../../../redux/coin-slice";
import { useDispatch } from "react-redux";
import { CoinSide } from "../../../enums/coin";
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';

interface CoinModelProps {
    scale: number;
    side: CoinSide;

}
const coinMap: Record<CoinSide, [number, number, number]> = {
    [CoinSide.HEADS]: [0, 0, 0],
    [CoinSide.TAILS]: [0, Math.PI, 0],
};


const CoinModel = React.forwardRef<THREE.Object3D, CoinModelProps>(({ scale, side }, ref) => {
    const { scene } = useGLTF('/models/scene.gltf');
    const cloned = useRef<THREE.Object3D>(clone(scene)); // 👈 клонируем объект

    useEffect(() => {
        const [x, y, z] = coinMap[side];
        cloned.current.rotation.set(x, y, z);
    }, [side]);

    return <primitive object={cloned.current} ref={ref} scale={scale} />;
});



const CoinLogic = ({ coinRef }: { coinRef: React.RefObject<THREE.Object3D> }) => {
    const camera = useThree((state) => state.camera);
    const dispatch = useDispatch();

    useFrame(() => {
        if (coinRef.current) {
            const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(coinRef.current.quaternion);

            // куда смотреть от монеты что бы увидеть камеру
            const toCamera = new THREE.Vector3().subVectors(camera.position, coinRef.current.position).normalize();

            // скалярное произведение: >0 → "лицо" ближе к камере, <0 → "спина"
            const dot = forward.dot(toCamera);

            const isHeads = dot > 0;
            const side: CoinSide = isHeads ? CoinSide.TAILS : CoinSide.HEADS
            dispatch(setSelectedCoinSide(side))
        }
    });

    return null;
};



export const CoinScene = ({ pulse, side = CoinSide.TAILS, orbit = false }: { pulse: number; side?: CoinSide, orbit?: boolean }) => {

    const coinRef = useRef<THREE.Object3D>(null!);

    return (

        <Canvas dpr={[1, 1.5]}
            style={{
                width: '300px',
                height: '300px',
            }} camera={{ position: [0, 0, 3] }}>
            <directionalLight color="#dbc6f7" position={[0, 1, -2]} intensity={3} />
            <directionalLight color="#dbc6f7" position={[0, 1, 2]} intensity={3} />

            <CoinModel ref={coinRef} scale={pulse} side={side} />
            <CoinLogic coinRef={coinRef} />
            {orbit && (<OrbitControls minDistance={3} />
            )}
        </Canvas>
    );
};


