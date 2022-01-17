import React, { useEffect } from 'react';
import { CanvasContainer } from './components/CanvasContainer';
import { getWeapon } from './components/drops';
import ReactDOM from "react-dom";
import * as THREE from "three";
import Fingerprint from '@fingerprintjs/fingerprintjs';
import './App.css';

export const App = () => {
  const weapon = getWeapon();

  const fingerprintAgent = Fingerprint.load()
    .then((agent) => agent.get())
    .then((result) => 
      {console.log('fingerprint: ', result.visitorId)}
    );

  return (
    <div className="container">
      <div>
        You enter a dark and empty room. As you stare through the blackness, an item resting against the corner catches your eye.
      </div>
      <div style={{ paddingTop: '8px' }}>
        You approach it, and pick up
      </div>
      <div style={{ paddingTop: '16px' }}>
        <h2>{weapon}</h2>
      </div>
      <div style={{ paddingTop: '16px' }}>
        A whisper in the darkness tells you to come back tomorrow for a chance at even greater riches.
      </div>
    </div>
  )
}

export default App;

/*const App = () => {
  useEffect(() => {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const dungeon = new THREE.Group();

    var floor = new THREE.PlaneGeometry( 1000, 1000, 1, 1 );

    const texture = new THREE.TextureLoader().load( 'floor_transparent.png' );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat = new THREE.Vector2(100, 100);

    var material = new THREE.MeshBasicMaterial({ map: texture })
    var cube = new THREE.Mesh( floor, material );

    const torchGeometry = new THREE.BoxGeometry(.5, 7, .5, 1, 1, 1);
    const woodTexture = new THREE.TextureLoader().load( 'wood.jpeg' );
    const torchMaterial = new THREE.MeshBasicMaterial()//{ map: woodTexture })
    torchMaterial.color = new THREE.Color(0x808080);
    const torchMesh = new THREE.Mesh( torchGeometry, torchMaterial );
    const torchMesh2 = new THREE.Mesh( torchGeometry, torchMaterial );

    const fireGeometry = new THREE.BoxGeometry(.7, .7, .7, 1, 1, 1);
    const fireMaterial = new THREE.MeshBasicMaterial();
    fireMaterial.color = new THREE.Color(0xff0000);
    const fireMesh = new THREE.Mesh( fireGeometry, fireMaterial );
    const fireMesh2 = new THREE.Mesh( fireGeometry, fireMaterial );

    const torchLight = new THREE.PointLight(0xff0000, 5, 5);
    //const torchLight = new THREE.AmbientLight( 0xff0000 );

    dungeon.add(cube);
    dungeon.add(torchMesh);
    dungeon.add(torchMesh2);
    dungeon.add(fireMesh);
    dungeon.add(fireMesh2);
    // dungeon.add(torchLight);
    // dungeon.add(fire.FireMesh);

    // scene.add( cube );
    // scene.add( torchMesh );

    scene.add(dungeon);
    scene.add(torchLight);

    torchMesh.position.x = 4;
    torchMesh.position.y = 10;
    // torchMesh.position.z = 0;
    torchMesh.rotation.x = 80;

    torchMesh2.position.x = -4;
    torchMesh2.position.y = 10;
    // torchMesh.position.z = 0;
    torchMesh2.rotation.x = 80;

    fireMesh.position.x = 3.9;
    fireMesh.position.y = 10.2;
    fireMesh.position.z = 4;

    torchLight.position.x = 2;
    torchLight.position.y = 2;
    torchLight.position.z = 2;

    fireMesh2.position.x = -3.9;
    fireMesh2.position.y = 10.2;
    fireMesh2.position.z = 4;

    console.log({
      floorPos: cube.position,
      torchPos: torchMesh.position
    });

    camera.position.z = 8;
    camera.rotation.x = 20;

    var animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      // camera.position.z = camera.position.z + 0.05;
    };
    animate();
  });

  return (
    <div />
  );
}*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);