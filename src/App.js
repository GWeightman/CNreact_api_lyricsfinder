import { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/input';

function App() {
    const [artist, setArtist] = useState("")
    const [song, setSong] = useState("")
    const [lyrics, setLyrics] = useState("Lyrics to be found")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
      error: false,
      message: ""
    })

    const changeHandler1 = (event) => {
      setArtist(event.target.value)
    }

    const changeHandler2 = (event) => {
      setSong(event.target.value)
    }

    const getter = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        if (response.status !== 200){
          throw new Error("Not Working")
        }
        const data = await response.json()
        setLyrics(data.lyrics)
        setLoading(false)
      } catch (error){
        setError({error: true, message: error.message})
      }
    } 

    const enter = (event) =>{
      if (event.keyCode == 13){
        getter()
      }
    }

    const refresh = () => {
      window.location.reload()
    }

    if (error.error){
      return (
        <div>
        <h1>{error.message}</h1>
        <button onClick={refresh}>Refresh</button>
        </div>
      )
    }
    return (
      <div>
        <h1>Lyric Finder</h1>
        <p>new line for testing</p>
        <p>another test line</p>
        <Input artist={artist} song={song} changeHandler1={changeHandler1} changeHandler2={changeHandler2} getter={getter} loading={loading} lyrics={lyrics} enter={enter}/> 
        <button onClick={refresh}>Refresh</button>
      </div>
    )
  }
  
  export default App;
