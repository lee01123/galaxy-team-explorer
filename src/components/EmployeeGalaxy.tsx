import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { Employee, employees } from "@/data/employees";
import { EmployeeInfoPanel } from "./EmployeeInfoPanel";

export const EmployeeGalaxy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const employeeObjectsRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 30;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d9ff, 2, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create starfield background
    createStarfield(scene);

    // Create employee galaxy
    createEmployeeGalaxy(scene);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      // Rotate starfield slowly
      scene.rotation.y += 0.0001;
      
      // Make employee spheres pulse gently
      employeeObjectsRef.current.forEach((obj) => {
        const scale = 1 + Math.sin(Date.now() * 0.001 + obj.position.x) * 0.05;
        obj.scale.setScalar(scale);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Handle click
    const handleClick = (event: MouseEvent) => {
      if (!cameraRef.current || !sceneRef.current) return;

      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      
      const intersects = raycasterRef.current.intersectObjects(
        Array.from(employeeObjectsRef.current.values())
      );

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object as THREE.Mesh;
        const employeeId = clickedObject.userData.employeeId;
        const employee = employees.find(e => e.id === employeeId);
        
        if (employee) {
          setSelectedEmployee(employee);
          focusOnEmployee(clickedObject);
        }
      }
    };
    window.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const createStarfield = (scene: THREE.Scene) => {
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8
    });

    const starsVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
  };

  const createEmployeeGalaxy = (scene: THREE.Scene) => {
    const radius = 8;
    const employeeCount = employees.length;

    employees.forEach((employee, index) => {
      // Calculate position in a circle
      const angle = (index / employeeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 2; // Small random y variation

      // Calculate size based on exp points
      const baseSize = 0.3;
      const sizeMultiplier = 1 + (employee.expPoints / 200);
      const size = baseSize * sizeMultiplier;

      // Create sphere for employee
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00d9ff,
        emissive: 0x00d9ff,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      sphere.userData = { employeeId: employee.id };

      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(size * 1.3, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00d9ff,
        transparent: true,
        opacity: 0.2
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      sphere.add(glow);

      scene.add(sphere);
      employeeObjectsRef.current.set(employee.id, sphere);
    });
  };

  const focusOnEmployee = (object: THREE.Mesh) => {
    if (!cameraRef.current || !controlsRef.current) return;

    // Animate camera to focus on selected employee
    const targetPosition = object.position.clone();
    const cameraOffset = new THREE.Vector3(3, 2, 3);
    const newCameraPosition = targetPosition.clone().add(cameraOffset);

    gsap.to(cameraRef.current.position, {
      x: newCameraPosition.x,
      y: newCameraPosition.y,
      z: newCameraPosition.z,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (controlsRef.current) {
          controlsRef.current.target.copy(targetPosition);
          controlsRef.current.update();
        }
      }
    });

    // Highlight selected employee
    employeeObjectsRef.current.forEach((obj, id) => {
      const material = obj.material as THREE.MeshPhongMaterial;
      if (obj === object) {
        gsap.to(material, { emissiveIntensity: 1, duration: 0.3 });
      } else {
        gsap.to(material, { emissiveIntensity: 0.2, duration: 0.3 });
      }
    });
  };

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 z-0" />
      {selectedEmployee && (
        <EmployeeInfoPanel
          employee={selectedEmployee}
          onClose={() => {
            setSelectedEmployee(null);
            // Reset all employees to normal intensity
            employeeObjectsRef.current.forEach((obj) => {
              const material = obj.material as THREE.MeshPhongMaterial;
              gsap.to(material, { emissiveIntensity: 0.5, duration: 0.3 });
            });
          }}
        />
      )}
    </>
  );
};
