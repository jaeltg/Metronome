import { useRef } from 'react'
import './SliderBar.css'

const PlayButton = ({value}) => {

    const audioClip = useRef(null)
    let intervalId;

    const playAudio = () => {
        audioClip.current.play()
    }

    const playAudioLoop = () => {intervalId = window.setInterval(playAudio, ((60/value)*1000))}
    const stopAudioLoop = () => { window.clearInterval(intervalId)}

    
    

    return (
        <>
        <audio ref={audioClip} src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg">
        </audio>
        <button className="play-stop" onClick={playAudioLoop}><img src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png" width="200" height="200"/></button>
        <button className="play-stop" onClick={stopAudioLoop}><img src="http://iconsetc.com/icons-watermarks/flat-square-white-on-ios-neon-green-gradient/classica/classica_stop-button/classica_stop-button_flat-square-white-on-ios-neon-green-gradient_512x512.png" /></button>
        </>
        
    )
}

export default PlayButton;