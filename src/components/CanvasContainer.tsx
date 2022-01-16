import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export const CanvasContainer = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
  
    camera.position.z = 5;
  
    function animate() {
      requestAnimationFrame( animate );
  
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      renderer.render( scene, camera );
    };
  
    animate();
  });

  return (
    <div></div>
  );
}

// export const Box = (props: JSX.IntrinsicElements['mesh']) => {
//   const ref = useRef<THREE.Mesh>(null!)
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01))
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// };

// function Scene() {
//   const colorMap = useLoader(TextureLoader, 'floor_transparent.png')
//   colorMap.wrapT = THREE.RepeatWrapping;
//   colorMap.wrapS = THREE.RepeatWrapping;
//   colorMap.repeat = new THREE.Vector2(500, 500);

//   const pCam = PerspectiveCamera;

//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <directionalLight />
//       <perspectiveCamera args={[45, 500 / 500, 1, 1000]}/>
//       <mesh>
//         <planeGeometry args={[1000, 1000, 1, 1]} />
//         <meshStandardMaterial map={colorMap}/>
//       </mesh>
//     </>
//   )
// }

// export const CanvasContainer = () => {
//   return (
//     <Canvas>
//       <Suspense fallback={null}>
//         <Scene/>
//       </Suspense>
//     </Canvas>
//   )
// };
