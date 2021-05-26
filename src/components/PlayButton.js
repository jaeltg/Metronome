import {useRef} from 'react';

const PlayButton = () => {

    const audioClip = useRef(null);
    const handleClick = () => {
        audioClip.current.play()
    }

    return (
        <>
        <audio>
        <source ref={audioClip} src="./chicken.mp3" type="audio/mp3"></source>
        </audio>
            <button onClick={handleClick}>Play</button>
        </>
    )
}

export default PlayButton;