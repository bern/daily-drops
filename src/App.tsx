import React, { useEffect } from 'react';
import { CanvasContainer } from './components/CanvasContainer';
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Fire } from './Fire';

const App = () => {
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
    const torchMaterial = new THREE.MeshBasicMaterial({ map: woodTexture })
    const torchMesh = new THREE.Mesh( torchGeometry, torchMaterial );
    const torchMesh2 = new THREE.Mesh( torchGeometry, torchMaterial );

    /***** *********/
    // var textureLoader = new THREE.TextureLoader();
    // var tex = textureLoader.load("firetex.png");
    // var fire = new Fire( tex, new THREE.Color(0x9900cc) );

    // scene.add( fire.FireMesh );

    // function animate() {
    //   requestAnimationFrame( animate );

    //   fire.update(performance.now() / 1000);
    //   renderer.render( scene, camera );
    // }
    // animate();

    //************ */

    dungeon.add(cube);
    dungeon.add(torchMesh);
    dungeon.add(torchMesh2);
    // dungeon.add(fire.FireMesh);

    // scene.add( cube );
    // scene.add( torchMesh );

    scene.add(dungeon);

    torchMesh.position.x = 4;
    torchMesh.position.y = 10;
    // torchMesh.position.z = 0;
    torchMesh.rotation.x = 80;

    torchMesh2.position.x = -4;
    torchMesh2.position.y = 10;
    // torchMesh.position.z = 0;
    torchMesh2.rotation.x = 80;

    console.log({
      floorPos: cube.position,
      torchPos: torchMesh.position
    });

    camera.position.z = 8;
    camera.rotation.x = 45;

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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;