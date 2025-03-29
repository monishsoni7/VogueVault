import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import Room from "../components/room.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/canvasLoader.jsx";
import Target from "../components/target.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import ReactLogo from "../components/reactLogo.jsx";
import Cube from "../components/cube.jsx";
import Rings from "../components/Rings.jsx";
import Herocamera from "../components/Herocamera.jsx";
import Button from "../components/Button.jsx";
import "../index.css"
const Hero = () => {
//     const x = useControls('Room',{
// positionX :{
//     value:2.5,
//     min:-10,
//     max:10,
// },
// positionY :{
//     value:2.5,
//     min:-10,
//     max:10,
// }, positionZ :{
//     value:2.5,
//     min:-10,
//     max:10,
// },
// rotationX :{
//     value:0,
//     min:-10,
//     max:10,
// },
// rotationY :{
//     value:0,
//     min:-10,
//
//     max:10,
// },
//         rotationZ :{
//     value:0,
//             min:-10,
//             max:10,
//         },
//         scale:{
//     value:1,
//             min:0.1,
//             max:1.5,
//
//         }
//     })
const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const sizes = calculateSizes (isSmall, isMobile, isTablet);
    const gradientStyle = {
        fontSize: "32px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(90deg, #00d9ff, #ff00ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
    };



    return (
        <section className="min-h-screen w-full flex flex-col relative ">
            {/* Text Content */}
            <div className="w-full mx-auto flex flex-col sm:mt-30 mt-24 relative z-10 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hello, I am Monish <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Turning Vision into <span style={gradientStyle} >&lt;Seamless /&gt;</span> Reality.</p>
            </div>

            {/* Canvas Section */}
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                       <Herocamera isMobile={isMobile} >
                        <Room position={sizes.deskPosition}
                              rotation={[0, -Math.PI, 0]}
                              scale={sizes.deskScale} />
                       </Herocamera>
                        <group>
<Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        <div className="absolute bottom-6 left-0 right-0  w-full z-10 c-space" >
            <a href="#project" className="w-fit" >

            <Button name='See my work 👇' isBeam containerClass="sm:w-fit w-full sm:min-w-94"  style={{marginTop:'1rem'}} />
            </a>
        </div>
        </section>


    )
}
export default Hero
