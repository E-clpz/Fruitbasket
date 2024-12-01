import './App.css'
import {useState} from "react";

function App() {
    const [Aardbeiencounter, setAardbeienCounter] = useState(0);
    const [Bananencounter, setBananenCounter] = useState(0);
    const [Appelscounter, setAppelsCounter] = useState(0);
    const [Kiwiscounter, setKiwisCounter] = useState(0);

    function resetAll() {
        return setAardbeienCounter(0)
            +
            setBananenCounter(0)
            +
            setAppelsCounter(0)
            +
            setKiwisCounter(0)
    }

    const [firstNameValue, setFirstNameValue] = useState("");

    const [lastNameValue, setLastNameValue] = useState("");

    const [age, setAge] = useState(0);

    const [zipCode, setZipCode] = useState("");

    const [delivery, setDelivery] = useState("");

    const [radioButton, setRadioButton] = useState("");

    const [termsAndConditions, setTermsAndConditions] = useState(false);


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <article className="outer-container">
                    <h3>🍓 Aardbeien</h3>
                    <button
                        type="button"
                        onClick={() =>
                            setAardbeienCounter(Aardbeiencounter ? Aardbeiencounter - 1 : 0)}>
                        -

                    </button>
                    <p>{Aardbeiencounter}</p>
                    <button
                        type="button"
                        onClick={() =>
                            setAardbeienCounter(Aardbeiencounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🍌 Bananen</h3>
                    <button
                        type="button"
                        onClick={() =>
                            setBananenCounter(Bananencounter ? Bananencounter - 1 : 0)}>
                        -

                    </button>
                    <p>{Bananencounter}</p>
                    <button
                        type="button"
                        onClick={() =>
                            setBananenCounter(Bananencounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🍏 Appels</h3>
                    <button
                        type="button"
                        onClick={() =>
                            setAppelsCounter(Appelscounter ? Appelscounter - 1 : 0)}>
                        -

                    </button>
                    <p>{Appelscounter}</p>
                    <button
                        type="button"
                        onClick={() =>
                            setAppelsCounter(Appelscounter + 1)}>
                        +
                    </button>
                </article>
                <article className="outer-container">
                    <h3>🥝 Kiwis</h3>0
                    <button
                        type="button"
                        onClick={() =>
                            setKiwisCounter(Kiwiscounter ? Kiwiscounter - 1 : 0)}>
                        -
                    </button>
                    <p>{Kiwiscounter}</p>
                    <button
                        type="button"
                        onClick={() =>
                            setKiwisCounter(Kiwiscounter + 1)}>
                        +
                    </button>
                </article>
                <button
                    type="button" onClick={resetAll}>
                    Reset
                </button>
            </section>
            <section>
                <form className="form-container">
                    <label htmlFor="firstName">
                        Voornaam
                        <input id="firstName"
                               type="text"
                               name="firstName"
                               value={firstNameValue}
                               onChange={(e) =>
                                   setFirstNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="lastName">
                        Achternaam
                        <input id="lastName"
                               type="text"
                               name="lastName"
                               value={lastNameValue}
                               onChange={(e) =>
                                   setLastNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age">
                        Leeftijd
                        <input id="age"
                               type="number"
                               name="age"
                               value={age}
                               min="0"
                               onChange={(e) => {
                                   const value = Math.max(0, e.target.value);
                                   setAge(value);
                               }}
                        />
                    </label>
                    <label htmlFor="zipCode">
                        Postcode
                        <input id="zipCode"
                               type="text"
                               name="zipCode"
                               value={zipCode}
                               onChange={(e) =>
                                   setZipCode(e.target.value)}
                        />
                    </label>
                    <label htmlFor="delivery">
                        Bezorgfrequentie
                    </label>
                    <select id="delivery"
                            name="delivery"
                            value={delivery}
                            onChange={(e) =>
                                setDelivery(e.target.value)}
                    >
                        <option value="Weekly"
                        >Iedere week
                        </option>
                        <option value="Every other week"
                        >Om de week
                        </option>
                        <option value="Monthly"
                        >Iedere maand
                        </option>
                    </select>
                    <label htmlFor="radio">
                        <input type="radio"
                               id="radio"
                               name="radio"
                               value={radioButton}
                               onChange={() =>
                                   setRadioButton("Overdag")}
                        >
                        </input>
                        Overdag
                        <input type="radio"
                               id="radio"
                               name="radio"
                               value={radioButton}
                               onChange={() =>
                                   setRadioButton("'s Avonds")}
                        >
                        </input>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        's Avonds
                    </label>
                    <label>
                        Opmerking
                    </label>
                    <textarea rows="5" cols="33">
                    </textarea>
                    <label>
                        <input type="checkbox"
                               id="checkbox"
                               name="checkbox"
                               onChange={() =>
                                   setTermsAndConditions(!termsAndConditions)}
                        >
                        </input>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button type="submit"
                    >
                        Verzend
                    </button>
                </form>
            </section>
        </>
    )
}

export default App
