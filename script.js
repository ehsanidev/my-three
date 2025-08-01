import * as THREE from 'three'

console.log('threejs >>', THREE)

const canvas1=document.querySelector("canvas.threeD")
const sizes={
    width:800,
    height:600
}

const scene=new THREE.Scene()

const Box1=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:0x00ff00})
const mesh1=new THREE.Mesh(Box1,material);

scene.add(mesh1)

const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height,0.1,1000)
camera.position.set(2,0,3)
scene.add(camera)

const renderer=new THREE.WebGLRenderer({
    canvas:canvas1
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)