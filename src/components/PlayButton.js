import { useRef } from 'react'

const PlayButton = () => {

    const audioClip = useRef(null)
    let intervalId;

    const playAudio = () => {
        audioClip.current.play()
    }

    const playAudioLoop = () => {intervalId = window.setInterval(playAudio(), 50)}
    const stopAudioLoop = () => { window.clearInterval(intervalId)}

    
    

    return (
        <>
        <audio ref={audioClip} autoPlay volume="0.5" src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg">
        </audio>
        <button onClick={playAudioLoop}>Play</button>
        <button onClick={stopAudioLoop}>Stop</button>
        </>
        
    )
}

export default PlayButton;