const Input = ({artist, song, changeHandler1, changeHandler2, getter, loading, lyrics, enter}) => {
    return(
        <div>
            <input type="text" className="UserReq" placeholder="artist" value={artist} onChange={changeHandler1}/>
            <input type="text" className="UserReq" placeholder="song" value={song} onChange={changeHandler2} onKeyDown={enter}/>
            <button onClick={getter}>get lyrics</button>
            <br/>
            <br/>
            {loading ? <p>loading...</p>
            :
            <pre>{lyrics}</pre>
            }
        </div>
    )
}

export default Input