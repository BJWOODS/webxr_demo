        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);

        const createScene = function() {
            const scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3.Black;

            const alpha =  Math.PI/4;
            const beta = Math.PI/3;
            const radius = 8;
            const target = new BABYLON.Vector3(0, 0, 0);
            

            BABYLON.SceneLoader.ImportMesh("","tongyu/","tongyu_avatar.glb",scene, function (meshes) {
            meshes.forEach(function(mesh) 
            {
                console.log("Mesh loaded: ", mesh.name);
                console.log("Model loaded", meshes);
            // Example to adjust the first mesh
            if (meshes.length > 0) {
                const mesh = meshes[0];
                mesh.position = new BABYLON.Vector3(-0.6, 0, 0);
                mesh.scaling = new BABYLON.Vector3(0.33, 0.33, 0.33);
                
                 }
                 mesh.actionManager = new BABYLON.ActionManager(scene);
                 mesh.actionManager.registerAction(
                     new BABYLON.ExecuteCodeAction(
                         BABYLON.ActionManager.OnPickTrigger,
                         function () {
                             // Replace 'http://example.com' with the URL you want to navigate to
                             window.location.href = 'https://tongyuzhou.com/#/';
                         }
                     )
                 );
            });
        });
        

        BABYLON.SceneLoader.ImportMesh("","ji_won_avatar/","ji_money.glb",scene, function (meshes) {
            meshes.forEach(function(mesh) 
            {
                console.log("Mesh loaded: ", mesh.name);
                console.log("Model loaded", meshes);
            // Example to adjust the first mesh
            if (meshes.length > 0) {
                const mesh = meshes[0];
                mesh.position = new BABYLON.Vector3(-0.2, 0, 0);
                mesh.scaling = new BABYLON.Vector3(0.35, 0.35, 0.35);
      
                 }
                 mesh.actionManager = new BABYLON.ActionManager(scene);
                 mesh.actionManager.registerAction(
                     new BABYLON.ExecuteCodeAction(
                         BABYLON.ActionManager.OnPickTrigger,
                         function () {
                             // Replace 'http://example.com' with the URL you want to navigate to
                             window.location.href = 'https://g1isgone.github.io/';
                         }
                     )
                 );


            });
        });
        BABYLON.SceneLoader.ImportMesh("", "brandon/", "brandon_avatar.glb", scene, function (meshes) {
                meshes.forEach(function(mesh) {
                    mesh.position = new BABYLON.Vector3(0.5, 0, 0); // Example position
                    mesh.scaling = new BABYLON.Vector3(0.6, 0.6, 0.6); // Example scaling
                    console.log("Mesh loaded: ", mesh.name);
                    // Make the mesh clickable
                    mesh.actionManager = new BABYLON.ActionManager(scene);
                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(
                            BABYLON.ActionManager.OnPickTrigger,
                            function () {
                                // Replace 'http://example.com' with the URL you want to navigate to
                                window.location.href = 'https://sites.google.com/brown.edu/brandonwoodard/home';
                            }
                        )
                    );
                });
            });

            const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
            camera.attachControl(canvas, true);

            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

            const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 4, height: 4});

            const xrPromise = scene.createDefaultXRExperienceAsync({
                floorMeshes: [ground]
            });

            return xrPromise.then((xrExperience) => {
                console.log("Done, WebXR is enabled.");
                return scene;
            });
        };

        createScene().then(sceneToRender => {
            engine.runRenderLoop(() => sceneToRender.render());
        });