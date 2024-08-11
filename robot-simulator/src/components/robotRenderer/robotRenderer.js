import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RobotRenderer = ({ position }) => {
  const mountRef = useRef(null);
  const robotRef = useRef(null); // Reference to the robot model
  const staticModelRef = useRef(null); // Reference to the static model

  const targetPosition = useRef(new THREE.Vector3(2 - position.x, 0, position.y - 2));
  const targetRotation = useRef(new THREE.Euler(0, 0, 0));

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
    renderer.shadowMap.enabled = true; // Enable shadow maps
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows
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
    pointlight1.position.set(5, 10, 5); // Fixed position
    pointlight1.castShadow = true; // Enable shadows for the light
    pointlight1.shadow.mapSize.width = 1024; // Increase shadow map size for better quality
    pointlight1.shadow.mapSize.height = 1024;
    pointlight1.shadow.radius = 5; // Softer shadows
    scene.add(pointlight1);

    const pointlight2 = new THREE.PointLight(0x9f85cc, 7.5, 20);
    pointlight2.position.set(-5, 10, -5); // Fixed position
    pointlight2.castShadow = false; // Enable shadows for the light
    scene.add(pointlight2);

    // Load GLTF robot model
    const loader = new GLTFLoader();
    loader.load("/delivery_robot/scene.gltf", (gltf) => {
      const robot = gltf.scene;
      robot.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      robot.scale.set(1.5, 1, 1); // Adjust scale as necessary for robot
      robot.position.set(2, 0, 2); //Apple watch position (Adjust it here)
      robot.rotation.y = Math.PI; // Face south initially
      scene.add(robot);
      robotRef.current = robot; // Store reference to robot for later updates
    });

    // Load static GLTF model
    loader.load("apple_watch_7/scene.gltf", (gltf) => {
      const staticModel = gltf.scene;
      staticModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      staticModel.scale.set(2, 2, 2); // Adjust scale as necessary for apple watch
      staticModel.position.set(0, -5.45, -5.8); // Adjust position as needed for apple watch
      staticModel.rotateX(-1.57)
      staticModel.rotateZ(3.141)
      scene.add(staticModel);
      staticModelRef.current = staticModel; // Store reference to static model of apple watch
    });

    // Plane setup to receive shadows
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = - Math.PI / 2;
    plane.position.y = 0; // Adjust the position to be just below the robot
    plane.receiveShadow = true; // Enable shadows for the plane
    scene.add(plane);

    // Grid setup
    const gridHelper = new THREE.GridHelper(5, 5, 0x0000ff, 0x808080);
    scene.add(gridHelper);

    // Position camera
    camera.position.set(0, 6, -8);
    camera.lookAt(2.5, 0, 2.5);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (robotRef.current) {
        // Interpolate position
        robotRef.current.position.lerp(targetPosition.current, 0.1);

        // Interpolate rotation
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
      // Update target position
      targetPosition.current.set(2 - position.x, 0, position.y - 2);

      // Update target rotation based on direction
      switch (position.direction) {
        case 'NORTH':
          targetRotation.current.set(0, 0, 0); // Face north
          break;
        case 'EAST':
          targetRotation.current.set(0, - Math.PI / 2, 0); // Face east
          break;
        case 'SOUTH':
          targetRotation.current.set(0, Math.PI, 0); // Face south
          break;
        case 'WEST':
          targetRotation.current.set(0, Math.PI / 2, 0); // Face west
          break;
        default:
          break;
      }
    }
  }, [position]);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default RobotRenderer;
