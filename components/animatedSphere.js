import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";



export default function AnimatedSphere({ scale = 2, ...props }){
    return <Sphere {...props} visible args={[1, 100, 200]} scale={scale}>
        <MeshDistortMaterial 
        color="#c8f169"
        attach="material" 
        distort={0.3}
        speed={1.5}
        roughness={0}/>
    </Sphere>
}