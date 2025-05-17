import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { setSelectedCoinSide } from "../../redux/coin-slice";
import { useDispatch } from "react-redux";
import { CoinSide } from "../../enums/coin";
import { clone } from 'three/examples/jsm/utils/SkeletonUtils';
import { themeApp } from "../../style-config";

interface CoinModelProps {
    scale: number;
    side: CoinSide;
    rotate: boolean,
    orbit: boolean

}
const coinMap: Record<CoinSide, [number, number, number]> = {
    [CoinSide.HEADS]: [0, 0, 0],
    [CoinSide.TAILS]: [0, Math.PI, 0],
};


const CoinModel = React.forwardRef<THREE.Object3D, CoinModelProps>(({ scale, side, rotate, orbit }, ref) => {
    const { scene } = useGLTF('/models/scene.gltf');
    const cloned = useRef<THREE.Object3D>(clone(scene));

    useEffect(() => {
        const [x, y, z] = coinMap[side];
        cloned.current.rotation.set(x, y, z);
    }, [side]);

    useEffect(() => {
        if (!rotate || !cloned.current) return;

        const targetRotation = {
            x: cloned.current.rotation.x - Math.PI * 2, // 3 оборота назад
            y: cloned.current.rotation.y,
        };

        const duration = 1000;
        const startTime = performance.now();

        const startRotation = {
            x: cloned.current.rotation.x,
            y: cloned.current.rotation.y,
        };

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1); // 0 → 1

            cloned.current!.rotation.x =
                startRotation.x + (targetRotation.x - startRotation.x) * t;
            cloned.current!.rotation.y =
                startRotation.y + (targetRotation.y - startRotation.y) * t;

            if (t < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [rotate]);

    useEffect(() => {
        if (orbit) {
            const duration = 2000;
            const delay = 300;

            const startY = cloned.current.rotation.y;
            const endY = startY + Math.PI * 2;

            let startTime: number;

            const animate = (time: number) => {
                if (!startTime) startTime = time;
                const elapsed = time - startTime;
                const t = Math.min(elapsed / duration, 1);

                const y = startY + (endY - startY) * t;
                cloned.current!.rotation.y = y;

                if (t < 1) {
                    requestAnimationFrame(animate);
                }
            };

            setTimeout(() => {
                requestAnimationFrame(animate);
            }, delay);
        }
    }, [orbit, rotate]);



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
            const side: CoinSide = isHeads ? CoinSide.HEADS : CoinSide.TAILS
            dispatch(setSelectedCoinSide(side))
        }
    });

    return null;
};



export const CoinScene = ({ scale, side = CoinSide.TAILS, orbit = false, rotate = false }: { rotate?: boolean, scale: number; side?: CoinSide, orbit?: boolean }) => {
    const coinRef = useRef<THREE.Object3D>(null!);

    return (

        <Canvas dpr={[1, 1.5]}
            style={{
                width: '300px',
                height: '300px',
            }} camera={{ position: [0, 0, 2] }}>
            <directionalLight color={themeApp.colors.light_color} position={[0, 1, -2]} intensity={3} />
            <directionalLight color={themeApp.colors.light_color} position={[0, 1, 2]} intensity={3} />

            <CoinModel ref={coinRef} scale={scale} side={side} rotate={rotate} orbit={orbit} />
            {orbit && <CoinLogic coinRef={coinRef} />
            }
            {orbit && (<OrbitControls minDistance={3} />
            )}
        </Canvas>
    );
};


