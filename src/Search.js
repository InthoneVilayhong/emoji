const Search = ({ word, setWord }) => {
    return (
        <div className="bloc">
            <h1>Emoji Search</h1>
            <input
                className="search"
                placeholder="What emoji are you looking for ?"
                type="text"
                name="word"
                value={word}
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
        </div>
    );
};
export default Search;
