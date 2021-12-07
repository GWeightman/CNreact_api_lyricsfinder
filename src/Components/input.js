const Input = ({artist, song, changeHandler1, changeHandler2, getter, loading, lyrics}) => {
    return(
        <div>
            <input type="text" className="UserReq" placeholder="artist" value={artist} onChange={changeHandler1}/>
            <input type="text" className="UserReq" placeholder="song" value={song} onChange={changeHandler2}/>
            <button onClick={getter}>get lyrics</button>
            <br/>
            {loading ? <p>loading...</p>
            :
            <p>{lyrics}</p>
            }
        </div>
    )
}

export default Input