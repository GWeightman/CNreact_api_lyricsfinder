const Heading = ({advice, loading}) =>{

    return(
        <div>
            <h1>Lyric Finder</h1>
            {loading ? <p>loading...</p>
            :
            <h2>{advice}</h2>
            }
        </div>
    )
}        

export default Heading