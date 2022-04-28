import "./App.css";
import Search from "./Search";
import { useState } from "react";
import datas from "./data.json";
import Line from "./Line";

function App() {
    const [word, setWord] = useState("");
    return (
        <div>
            <div className="container">
                <Search word={word} setWord={setWord} />
            </div>
            {datas.map((emoji, index) => {
                return (
                    <Line
                        key={index}
                        data={emoji}
                        word={word}
                        setWord={setWord}
                    />
                );
            })}
        </div>
    );
}

export default App;
