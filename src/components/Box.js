import React from 'react'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
// import { RoundedBox } from '@react-three/drei'

const Box = (props) => {
    const mesh = React.useRef(null)
    useFrame(() => (
        mesh.current.rotation.y += 0.005
    ))

    const [hovered, setHovered] = React.useState(false)
    const [image] = useLoader(TextureLoader, [props.image])

    const boxClick = () =>{
        window.open(props.link, "_blank")
    }

    React.useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh 
            ref={mesh} 
            onClick={boxClick} 
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
            <meshStandardMaterial attachArray="material" color="white" map={image} />
        </mesh>
        // <mesh ref={mesh}>
        //     <RoundedBox radius={0.1}>
        //         <meshStandardMaterial attach="material" color="white" map={image}/>
        //     </RoundedBox>
        // </mesh>
    )
}

export default Box;
