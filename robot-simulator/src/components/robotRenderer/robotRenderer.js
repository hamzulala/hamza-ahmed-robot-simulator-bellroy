import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RobotRenderer = ({ position }) => {
  const mountRef = useRef(null);
  const robotRef = useRef(null);
  const staticModelRef = useRef(null);

  const targetPosition = useRef(new THREE.Vector3(2 - position.x, 0, position.y - 2));
  const targetRotation = useRef(new THREE.Euler(0, 0, 0));

  // Camera animation properties
  const initialCameraPosition = new THREE.Vector3(-5, 20, -10);
  const finalCameraPosition = new THREE.Vector3(0, 6, -8);
  const cameraLerpFactor = 0.02; // Adjust this value to control the speed of the camera animation
  let cameraAnimating = true;

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xc4c4c4);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // Load environment map
    new RGBELoader()
      .setPath(
        "https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/"
      )
      .load("ml_gradient_freebie_02.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      });

    // Lighting setup
    const pointlight1 = new THREE.PointLight(0x85ccb8, 7.5, 20);
    pointlight1.position.set(5, 10, 5);
    pointlight1.castShadow = true;
    pointlight1.shadow.mapSize.width = 1024;
    pointlight1.shadow.mapSize.height = 1024;
    pointlight1.shadow.radius = 5;
    scene.add(pointlight1);

    const pointlight2 = new THREE.PointLight(0x9f85cc, 7.5, 20);
    pointlight2.position.set(-5, 10, -5);
    pointlight2.castShadow = false;
    scene.add(pointlight2);

    // Set initial camera position
    camera.position.copy(initialCameraPosition);
    camera.lookAt(2.5, 0, 2.5);

    // Load GLTF robot model
    const loader = new GLTFLoader();
    loader.load("/delivery_robot/scene.gltf", (gltf) => {
      const robot = gltf.scene;
      robot.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      robot.scale.set(1.5, 1, 1);
      robot.position.set(2, 0, 2);
      robot.rotation.y = Math.PI;
      scene.add(robot);
      robotRef.current = robot;
    });

    // Load static GLTF model
    loader.load("apple_watch_7/scene.gltf", (gltf) => {
      const staticModel = gltf.scene;
      staticModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      staticModel.scale.set(2, 2, 2);
      staticModel.position.set(0, -5.45, -5.8);
      staticModel.rotateX(-1.57);
      staticModel.rotateZ(3.141);
      scene.add(staticModel);
      staticModelRef.current = staticModel;
    });

    // Plane setup to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;
    plane.receiveShadow = true;
    scene.add(plane);

    // Grid setup
    const gridHelper = new THREE.GridHelper(5, 5, 0x0000ff, 0x808080);
    scene.add(gridHelper);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (cameraAnimating) {
        camera.position.lerp(finalCameraPosition, cameraLerpFactor);
        if (camera.position.distanceTo(finalCameraPosition) < 0.01) {
          camera.position.copy(finalCameraPosition);
          cameraAnimating = false;
        }
        camera.lookAt(2.5, 0, 2.5);
      }

      if (robotRef.current) {
        robotRef.current.position.lerp(targetPosition.current, 0.1);
        robotRef.current.rotation.y = THREE.MathUtils.lerp(
          robotRef.current.rotation.y,
          targetRotation.current.y,
          0.1
        );
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  useEffect(() => {
    if (robotRef.current) {
      targetPosition.current.set(2 - position.x, 0, position.y - 2);
      switch (position.direction) {
        case "NORTH":
          targetRotation.current.set(0, 0, 0);
          break;
        case "EAST":
          targetRotation.current.set(0, -Math.PI / 2, 0);
          break;
        case "SOUTH":
          targetRotation.current.set(0, Math.PI, 0);
          break;
        case "WEST":
          targetRotation.current.set(0, Math.PI / 2, 0);
          break;
        default:
          break;
      }
    }
  }, [position]);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default RobotRenderer;
