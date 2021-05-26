import SlideBar from '../components/SliderBar'
import PlayButton from '../components/PlayButton'
import StopButton from '../components/StopButton'

const MetronomeBox = () => {

    return(
        <>
        <h1>Metronome</h1>
        <PlayButton />
        <StopButton />
        <SlideBar />
        </>
    );
}
export default MetronomeBox;