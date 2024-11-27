import './App.css'
import {useState} from "react";

function App() {
    let [Aardbeiencounter, setAardbeienCounter] = useState(0);
    console.log(Aardbeiencounter);
    let [Bananencounter, setBananenCounter] = useState(0);
    console.log(Bananencounter);
    let [Appelscounter, setAppelsCounter] = useState(0);
    console.log(Appelscounter);
    let [Kiwiscounter, setKiwisCounter] = useState(0);
    console.log(Kiwiscounter);

    function resetAll() {
        return setAardbeienCounter(Aardbeiencounter = 0)
            +
            setBananenCounter(Bananencounter = 0)
            +
            setAppelsCounter(Appelscounter = 0)
            +
            setKiwisCounter(Kiwiscounter = 0)
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <article className="outer-container">
                    <h3>🍓 Aardbeien</h3>
                    <button
                        type="button"
                        onClick={() => setAardbeienCounter((prevCounter) => Math.max(prevCounter - 1, 0))}>
                        -

                    </button>
                    <p>{Aardbeiencounter}</p>
                    <button
                        type="button"
                        onClick={() => setAardbeienCounter(Aardbeiencounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🍌 Bananen</h3>
                    <button
                        type="button"
                        onClick={() => setBananenCounter((prevCounter) => Math.max(prevCounter - 1, 0))}>
                        -

                    </button>
                    <p>{Bananencounter}</p>
                    <button
                        type="button"
                        onClick={() => setBananenCounter(Bananencounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🍏 Appels</h3>
                    <button
                        type="button"
                        onClick={() => setAppelsCounter((prevCounter) => Math.max(prevCounter - 1, 0))}>
                        -

                    </button>
                    <p>{Appelscounter}</p>
                    <button
                        type="button"
                        onClick={() => setAppelsCounter(Appelscounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🥝 Kiwis</h3>
                    <button
                        type="button"
                        onClick={() => setKiwisCounter((prevCounter) => Math.max(prevCounter - 1, 0))}>
                        -

                    </button>
                    <p>{Kiwiscounter}</p>
                    <button
                        type="button"
                        onClick={() => setKiwisCounter(Kiwiscounter + 1)}>
                        +
                    </button>
                </article>
                <button
                    type="button" onClick={resetAll}>
                    Reset
                </button>
            </section>
        </>
    )
}

export default App
