import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'


console.log('Three.js >>', THREE)

const myCanvas=document.querySelector("canvas.threeD")
const sizes={
    width:800,
    height:500
}

const scene=new THREE.Scene()
scene.background=new THREE.Color(0xf4f2f5)

const gridHelper=new THREE.GridHelper(10,10)
scene.add(gridHelper)

const axesHelper=new THREE.AxesHelper(7,7)
scene.add(axesHelper)

const Box1=new THREE.BoxGeometry(1,1,1);
const material=new THREE.MeshBasicMaterial({color:0x00ff00})
const mesh=new THREE.Mesh(Box1,material);
mesh.position.y=1
scene.add(mesh)

const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height,0.1,1000)
camera.position.z=3
scene.add(camera)

const render=new THREE.WebGLRenderer({
    canvas:myCanvas,
    antialias:true
})

const controls=new OrbitControls(camera,render.domElement)
controls.autoRotate=true


render.setSize(sizes.width,sizes.height)
render.setPixelRatio(window.devicePixelRatio)

function animate(){
    console.log('animate')
    requestAnimationFrame(animate)
    render.render(scene,camera)
    controls.update()
}
animate();
