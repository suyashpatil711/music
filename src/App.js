//import logo from './logo.svg';
//import './App.css';
import { useState, useRef } from 'react'
import song from './Suncrown - Legend of the Forgotten Centuries.mp3'
import Slider from './components/slider/Slider.js'
import ControlPanel from './components/controls/ControlPanel.js'
import AudioPlayer from 'react-h5-audio-player';

function App() {

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const url='http://localhost:8080/DagduShethMahaArti'
  const audioRef = useRef()

  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className='app-container'>
      <AudioPlayer  src={url} ></AudioPlayer>
      <h1>Audio Player</h1>
      <Slider percentage={percentage} onChange={onChange} />
      
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
      <audio 
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={url}
       ></audio>
       
    </div>
  )
}

export default App
