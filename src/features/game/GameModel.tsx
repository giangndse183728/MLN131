'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Sky } from '@react-three/drei';
import { useState } from 'react';
import CharacterController from './CharacterController';
import ObjectHighlighter from './ObjectHighlighter';
import Crosshair from './Crosshair';
import MuseumObjectDialog from '../../components/ui/museum-object-dialog';



function KitchenModel() {
  const { scene } = useGLTF('/museum.glb');

  return (
    <primitive 
      object={scene} 
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} >
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial 
        color="#8B4513" 
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

export default function MuseumExplorerScene() {
  const [isDoorDialogOpen, setIsDoorDialogOpen] = useState(false);
  const [objectDialogOpen, setObjectDialogOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState<string>('');
  
  const spawnLocation = {
    x: 0,    
    y: 1.7,  
    z: 3     
  };

  const handleObjectClick = (objectName: string) => {
    setSelectedObject(objectName);
    setObjectDialogOpen(true);
  };

  const handleObjectDialogClose = () => {
    setObjectDialogOpen(false);
    setSelectedObject('');
  };
  
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-4 left-4 z-10 bg-black/50 text-white p-3 rounded">
        <h3 className="text-lg font-bold mb-2">Museum Explorer</h3>
        <p className="text-sm mb-1">Click to start exploring</p>
        <p className="text-sm mb-1">WASD - Move</p>
        <p className="text-sm mb-1">Space - Jump</p>
        <p className="text-sm mb-1">Mouse - Look around</p>
        <p className="text-sm">ESC - Exit</p>
      </div>
      <Crosshair/>
     
      <Canvas
        style={{ pointerEvents: isDoorDialogOpen ? 'none' : 'auto' }}
      >
        {/* Sunset Sky Environment */}
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0.49}
          azimuth={0.25}
          turbidity={20}
          rayleigh={0.5}
          mieCoefficient={0.005}
          mieDirectionalG={0.8}
        />
        
        {/* Sunset Environment */}
        <Environment preset="sunset" />
        
        {/* Sunset Lighting */}
        <ambientLight intensity={0.4} color={"#ff6b35"} />
        
        {/* Main sun light */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={2.0}
          color={"#ff8c42"}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Warm fill light */}
        <directionalLight
          position={[-3, 5, 3]}
          intensity={0.8}
          color={"#ffa500"}
        />
        
        {/* Rim light for sunset effect */}
        <directionalLight
          position={[0, 2, -8]}
          intensity={0.6}
          color={"#ff4500"}
        />
        
        {/* Point light for warm atmosphere */}
        <pointLight 
          position={[0, 3, 0]} 
          intensity={1.2} 
          color={"#ff6b35"}
          distance={20}
          decay={2}
        />

          
          
          
          {/* Floor */}
          <Floor />
          
          {/* Kitchen Model */}
          <KitchenModel />
          
          {/* Character Controller */}
          <CharacterController 
            enabled={!isDoorDialogOpen && !objectDialogOpen} 
            spawnLocation={spawnLocation}
          />
          
          
          {/* Object Highlighter */}
          <ObjectHighlighter 
            onDoorClick={() => setIsDoorDialogOpen(true)} 
            onObjectClick={handleObjectClick}
            inputEnabled={!isDoorDialogOpen && !objectDialogOpen} 
          />
      
      </Canvas>
      
      {/* Museum Object Dialog */}
      <MuseumObjectDialog
        isOpen={objectDialogOpen}
        onClose={handleObjectDialogClose}
        objectName={selectedObject}
      />
    
    </div>
  );
} 