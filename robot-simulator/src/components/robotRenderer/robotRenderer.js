// src/RobotRenderer.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RobotRenderer = ({ position }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Robot setup
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const robot = new THREE.Mesh(geometry, material);
    scene.add(robot);

    // Grid setup
    const gridHelper = new THREE.GridHelper(5, 5);
    scene.add(gridHelper);

    // Position camera
    camera.position.set(2.5, 5, 2.5);
    camera.lookAt(2.5, 0, 2.5);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update robot position
      robot.position.x = 2 - position.x;
      robot.position.z = 2 - position.y; // Adjusting for 2D grid bottom-left origin
      robot.position.y = 0.4;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, [position]);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
};

export default RobotRenderer;
