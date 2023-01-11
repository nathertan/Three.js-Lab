import * as THREE from "./three.js/build/three.module.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { Raycaster } from "./three.js/src/core/Raycaster.js";
import { TextGeometry } from "three/geometries/TextGeometry.js";

var scene, renderer, camera, pointer, raycaster;
var snows = [];

function AmbientLight() {
  let ambient = new THREE.AmbientLight("#FFFFFF", 1);

  scene.add(ambient);
}

function PointLight() {
  let point = new THREE.PointLight("#FFFFFF", 1);
  point.position.set(0, 0, 10);
  point.castShadow = true;

  scene.add(point);
}

function CreateGround() {
  let geo = new THREE.CircleGeometry(14.5, 40);
  let loader = new THREE.TextureLoader();
  let texture = loader.load("./assets/texture/snowtexture.png");
  let mat = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  let ground = new THREE.Mesh(geo, mat);
  ground.position.set(0, 0, 0);
  ground.receiveShadow = true;

  scene.add(ground);
}

function CreateBase() {
  let geo = new THREE.CylinderGeometry(15, 20, 4, 8);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let base = new THREE.Mesh(geo, mat);
  base.position.set(0, 0, -2.1);
  base.rotateX(1.57);

  scene.add(base);
}

function CreateHouse() {
  const loader = new GLTFLoader();
  loader.load("assets/model/scene.gltf", function (gltf) {
    const haus = gltf.scene;
    haus.scale.set(20, 20, 20);
    haus.position.set(-69, 50, -1);
    haus.rotateX(1.57);
    haus.receiveShadow = true;
    haus.castShadow = true;

    scene.add(haus);
  });
}

function CreateText() {
  const loader = new FontLoader();

  loader.load(
    "./three.js/examples/fonts/droid/droid_sans_bold.typeface.json",
    function (font) {
      const geometry = new TextGeometry("Snowball", {
        font: font,
        size: 2,
        height: 0.1,
      });
      var mat = new THREE.MeshBasicMaterial({
        color: "#FFFFFF",
      });
      var kata = new THREE.Mesh(geometry, mat);

      kata.position.set(2, -19, -2.5);
      kata.rotateX(1);
      kata.rotateY(0.37);
      kata.rotateZ(0.2);

      scene.add(kata);
    }
  );
}

function CreateGlobe() {
  let geo = new THREE.SphereGeometry(14.5, 32, 16, 0, 6.3, 1.1, 3);
  let mat = new THREE.MeshLambertMaterial({
    color: "#FFFFFF",
    transparent: true,
    opacity: 0.4,
  });
  let globe = new THREE.Mesh(geo, mat);
  globe.position.set(0, 0, 2.7);
  globe.rotateX(-1.6);
  globe.name = "kaca";

  scene.add(globe);
}

function CreateBody1() {
  let geo = new THREE.SphereGeometry(1.5, 32, 6);
  let mat = new THREE.MeshStandardMaterial({
    color: "#FFFFFF",
  });
  let body = new THREE.Mesh(geo, mat);
  body.position.set(10, 0, 1);
  body.castShadow = true;

  scene.add(body);
}

function CreateBody2() {
  let geo = new THREE.SphereGeometry(1, 32, 6);
  let mat = new THREE.MeshStandardMaterial({
    color: "#FFFFFF",
  });
  let body = new THREE.Mesh(geo, mat);
  body.position.set(10, 0, 2.8);
  body.castShadow = true;

  scene.add(body);
}

function CreateBody3() {
  let geo = new THREE.SphereGeometry(0.8, 32, 6);
  let mat = new THREE.MeshStandardMaterial({
    color: "#FFFFFF",
  });
  let body = new THREE.Mesh(geo, mat);
  body.position.set(10, 0, 4);
  body.castShadow = true;

  scene.add(body);
}

function CreateEye1() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let eye = new THREE.Mesh(geo, mat);
  eye.position.set(10.2, -0.7, 4);
  eye.castShadow = true;

  scene.add(eye);
}

function CreateEye2() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let eye = new THREE.Mesh(geo, mat);
  eye.position.set(9.8, -0.7, 4);
  eye.castShadow = true;

  scene.add(eye);
}

function CreateNose() {
  let geo = new THREE.ConeGeometry(0.15, 0.5, 32);
  let mat = new THREE.MeshBasicMaterial({
    color: "#FFA500",
  });
  let nose = new THREE.Mesh(geo, mat);
  nose.castShadow = true;
  nose.position.set(10, -0.95, 3.9);
  nose.rotateX(15.7);

  scene.add(nose);
}

function CreateButton1() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let button = new THREE.Mesh(geo, mat);
  button.position.set(10, -1, 3.3);
  button.castShadow = true;

  scene.add(button);
}

function CreateButton2() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let button = new THREE.Mesh(geo, mat);
  button.position.set(10, -1, 3);
  button.castShadow = true;

  scene.add(button);
}

function CreateButton3() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#000000",
  });
  let button = new THREE.Mesh(geo, mat);
  button.position.set(10, -1, 2.7);
  button.castShadow = true;

  scene.add(button);
}

function CreateTrunk1() {
  let geo = new THREE.BoxGeometry(0.5, 7, 0.5);
  let mat = new THREE.MeshPhongMaterial({
    color: "#3F301D",
    shininess: 100,
  });
  let trunk = new THREE.Mesh(geo, mat);
  trunk.position.set(-10, 0, 2.5);
  trunk.rotateX(4.66);
  trunk.castShadow = true;

  scene.add(trunk);
}

function CreateLeaf1() {
  let geo = new THREE.ConeGeometry(1.5, 5, 32);
  let mat = new THREE.MeshBasicMaterial({
    color: "#32612D",
  });
  let leaf = new THREE.Mesh(geo, mat);
  leaf.position.set(-10, 0, 5);
  leaf.rotateX(-4.66);
  leaf.castShadow = true;

  scene.add(leaf);
}

function CreateTrunk2() {
  let geo = new THREE.BoxGeometry(0.5, 7, 0.5);
  let mat = new THREE.MeshPhongMaterial({
    color: "#3F301D",
    shininess: 100,
  });
  let trunk = new THREE.Mesh(geo, mat);
  trunk.position.set(-6.5, 5, 2.5);
  trunk.rotateX(4.66);
  trunk.castShadow = true;

  scene.add(trunk);
}

function CreateLeaf2() {
  let geo = new THREE.ConeGeometry(1.5, 5, 32);
  let mat = new THREE.MeshBasicMaterial({
    color: "#32612D",
  });
  let leaf = new THREE.Mesh(geo, mat);
  leaf.position.set(-6.5, 5, 5);
  leaf.rotateX(-4.66);
  leaf.castShadow = true;

  scene.add(leaf);
}

function CreateSnow() {
  let geo = new THREE.SphereGeometry(0.1, 32, 6);
  let mat = new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
  });

  for (let i = 0; i < 10; i++) {
    let snow = new THREE.Mesh(geo, mat);
    snow.castShadow = true;
    snow.position.x = Math.random() * 18 - 9;
    snow.position.y = Math.random() * 18 - 9;
    snow.position.z = Math.random() * 3.8 + 8.5;

    scene.add(snow);
    snows.push(snow);
  }
}

function Snowfall() {
  snows.forEach(function (object) {
    object.position.z -= 0.05;
    if (object.position.z < 0) {
      object.position.z = 13;
    }
  });
  requestAnimationFrame(Snowfall);
  renderer.render(scene, camera);
}

function OrbCon() {
  let controls = new OrbitControls(camera, renderer.domElement);

  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
}

function Skybox() {
  let materialArray = [];
  let texture_px = new THREE.TextureLoader().load("./assets/skybox/px.jpg");
  let texture_nx = new THREE.TextureLoader().load("./assets/skybox/nx.jpg");
  let texture_py = new THREE.TextureLoader().load("./assets/skybox/py.jpg");
  let texture_ny = new THREE.TextureLoader().load("./assets/skybox/ny.jpg");
  let texture_pz = new THREE.TextureLoader().load("./assets/skybox/pz.jpg");
  let texture_nz = new THREE.TextureLoader().load("./assets/skybox/nz.jpg");

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_px }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_nx }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_py }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ny }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_pz }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_nz }));

  for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

  let skyboxGeo = new THREE.BoxGeometry(300, 300, 300);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
}

function onPMove(event) {
  pointer = new THREE.Vector2();
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onClick() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    if (intersects[0].object.name == "kaca") {
      Snowfall();
    }
  }
}

function animate() {
  let animation = requestAnimationFrame(animate);

  camera.position.z -= 1;
  camera.lookAt(0, 0, 0);

  if (camera.position.z <= 10) {
    cancelAnimationFrame(animation);
  }

  renderer.render(scene, camera);
}

function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const fov = 45;
  camera = new THREE.PerspectiveCamera(fov);
  camera.position.set(0, -50, 70);
  camera.lookAt(0, 0, 0);
  document.body.appendChild(renderer.domElement);

  raycaster = new THREE.Raycaster();

  CreateGround();
  CreateBase();
  CreateHouse();
  CreateText();
  CreateGlobe();
  CreateBody1();
  CreateBody2();
  CreateBody3();
  CreateEye1();
  CreateEye2();
  CreateNose();
  CreateButton1();
  CreateButton2();
  CreateButton3();
  CreateTrunk1();
  CreateTrunk2();
  CreateLeaf1();
  CreateLeaf2();
  CreateSnow();
  AmbientLight();
  PointLight();
  Skybox();
  OrbCon();
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

function addEvenListener() {
  document.addEventListener("click", onClick);
}

window.onload = function () {
  init();
  render();
  addEvenListener();
};
window.addEventListener("mousemove", onPMove);

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    animate();
  }
});
