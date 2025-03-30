document.addEventListener('DOMContentLoaded', function() {
    // Create a logo container with proper sizing
    const logoContainer = document.querySelector('.logo-container');
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(80, 80); // Match your logo size
    logoContainer.appendChild(renderer.domElement);
    
    // Create logo elements
    const logoGroup = new THREE.Group();
    
    // Base circle
    const baseGeometry = new THREE.CircleGeometry(45, 32);
    const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x1a2a35 });
    const baseCircle = new THREE.Mesh(baseGeometry, baseMaterial);
    logoGroup.add(baseCircle);
    
    // Blue circle
    const blueCircleGeometry = new THREE.TorusGeometry(17.5, 2.5, 16, 100);
    const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x3498db });
    const blueCircle = new THREE.Mesh(blueCircleGeometry, blueMaterial);
    blueCircle.position.x = -20;
    logoGroup.add(blueCircle);
    
    // Red circle
    const redCircleGeometry = new THREE.TorusGeometry(17.5, 2.5, 16, 100);
    const redMaterial = new THREE.MeshBasicMaterial({ color: 0xe74c3c });
    const redCircle = new THREE.Mesh(redCircleGeometry, redMaterial);
    redCircle.position.x = 20;
    logoGroup.add(redCircle);
    
    // Create curve
    const curvePoints = new THREE.CurvePath();
    // Add curve points similar to SVG path
    // This is simplified - you'll need to add more points to match your design
    
    scene.add(logoGroup);
    camera.position.z = 100;
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      logoGroup.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    
    // Interaction
    logoContainer.addEventListener('mouseenter', function() {
      gsap.to(logoGroup.scale, {
        x: 1.1, y: 1.1, z: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    logoContainer.addEventListener('mouseleave', function() {
      gsap.to(logoGroup.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.3,
        ease: "power2.out" 
      });
    });
    
    logoContainer.addEventListener('click', function() {
      gsap.to(logoGroup.rotation, {
        y: logoGroup.rotation.y + Math.PI * 2,
        duration: 1,
        ease: "elastic.out(1, 0.3)"
      });
    });
    
    animate();
  });