---
layout: base
description: Web Viewer
composition:
  - type: pageMarkdown
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Insect Models Project</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <!-- Header -->
    <header>
        <h1>3D Insect Models Project</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Section -->
    <main>
        <!-- Dynamic Model Viewer -->
        <section id="model-viewer">
            <h2>Explore Our Insect Models</h2>
            <div id="viewer"></div>
        </section>

        <!-- Project Description -->
        <section id="project-description">
            <h2>About the 3D Insect Models Project</h2>
            <p>This project, developed in Zürich, Switzerland, aims to create high-quality 3D models of insects...</p>
        </section>

        <!-- Links to Original Authors -->
        <section id="authors">
            <h2>Meet the Authors</h2>
            <ul>
                <li><a href="https://author1website.com">Author 1</a> - Brief bio</li>
                <li><a href="https://author2website.com">Author 2</a> - Brief bio</li>
            </ul>
        </section>
        
        <!-- Optional: Gallery, Downloads, Publications, Contact Form -->
    </main>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 3D Insect Models Project</p>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
        </ul>
        <p>Follow us on:
            <a href="#">Twitter</a> | 
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a>
        </p>
    </footer>

    <script>
        // JavaScript to load a random 3D model on page refresh
        const models = [
            'model1.glb',
            'model2.glb',
            'model3.glb'
        ];

        const randomModel = models[Math.floor(Math.random() * models.length)];

        const viewer = new THREE.WebGLRenderer({ antialias: true });
        viewer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('viewer').appendChild(viewer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const loader = new THREE.GLTFLoader();
        loader.load(randomModel, function (gltf) {
            scene.add(gltf.scene);
            camera.position.z = 5;
            animate();
        });

        function animate() {
            requestAnimationFrame(animate);
            viewer.render(scene, camera);
        }
    </script>
</body>
</html>
