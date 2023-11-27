import React, { Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

// export default function ThreeDee() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );

//     const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//     const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//     const cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );

//     camera.position.z = 5;

//     function animate() {
//         requestAnimationFrame( animate );

//         cube.rotation.x += 0.01;
// 	    cube.rotation.y += 0.01;
        
//         renderer.render( scene, camera );
//     }
//     animate();
// }

// export default function ThreeDee() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );

//     const loader = new GLTFLoader();
//     loader.load( '../3d-models\vintage_sofa\scene.gltf', function ( gltf ) {

//         scene.add( gltf.scene );
    
//     } );

//     function animate() {
//         requestAnimationFrame( animate );
//         renderer.render( scene, camera );
//     }
//     animate();
// }


function Model(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
      <group {...props} dispose={null}>
        <group  >
          <group >
            <mesh geometry={nodes.Object_4.geometry} material={materials.MergedBake_Baked} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.MergedBake_Baked} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.MergedBake_Baked} />
          </group>
        </group>
      </group>
    )
  }

export default function ThreeDee() {
    return (
    <Canvas>
        <Suspense fallback={null}>
            <ambientLight />
             {/* <spotLight intensity={0.9} angle={0.1} penumbra={1}
                    position={[10, 15, 10]}
                    castShadow /> */}
            <Model />
            {/* <OrbitControls enablePan={true}
                            enableZoom={true}
                            enableRotate={true} /> */}
        </Suspense>
    </Canvas>
    )
}