import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../public/Pace'
import './Satellite.css';

const SatelliteComponent: React.FC = () => {
    return (
        <>
            <div className='satellite-container'>
                <Canvas>
                    <Suspense fallback={null}>
                        <directionalLight intensity={1} />
                        <ambientLight intensity={1.2} />
                        <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Model />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </div>
        </>
    );
};

export default SatelliteComponent;