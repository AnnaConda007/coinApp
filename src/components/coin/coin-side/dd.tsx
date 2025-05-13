import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { setSelectedCoinSide } from "../../../redux/coin-slice";
import { CoinSide } from "../../../enums/coin";
import { useDispatch } from "react-redux";


interface CoinModelProps {
    scale: number;
}
const CoinModel = React.forwardRef<THREE.Object3D, CoinModelProps>(({ scale }, ref) => {
    const { scene } = useGLTF('/models/scene.gltf');

    return <primitive object={scene} ref={ref} scale={scale} />;
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



export const Scene = ({ pulse }: { pulse: number }) => {

    const coinRef = useRef<THREE.Object3D>(null!);

    return (

        <Canvas style={{
            width: '300px',
            height: '300px',
        }} camera={{ position: [0, 0, 3] }}>
            <directionalLight color="#7b6597" position={[0, 1, -2]} intensity={12} />
            <directionalLight color="#7b6597" position={[0, 1, 2]} intensity={12} />

            <CoinModel ref={coinRef} scale={pulse} />
            <CoinLogic coinRef={coinRef} />

            <OrbitControls minDistance={3} />
        </Canvas>
    );
};

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}

