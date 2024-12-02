import './App.css'
import {useState} from "react";
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    const [Aardbeiencounter, setAardbeienCounter] = useState(0);
    const [Bananencounter, setBananenCounter] = useState(0);
    const [Appelscounter, setAppelsCounter] = useState(0);
    const [Kiwiscounter, setKiwisCounter] = useState(0);

    const resetAll = () => {
        setAardbeienCounter(0);
        setBananenCounter(0);
        setAppelsCounter(0);
        setKiwisCounter(0);
    };

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
                    <Counter
                        label="🍓 Aardbeien"
                        count={Aardbeiencounter}
                        plus={() => setAardbeienCounter(Aardbeiencounter + 1)}
                        minus={() => setAardbeienCounter(Aardbeiencounter ? Aardbeiencounter - 1 : 0)}
                    />
                </article>
                <article className="outer-container">
                    <Counter
                        label="🍌 Bananen"
                        count={Bananencounter}
                        plus={() => setBananenCounter(Bananencounter + 1)}
                        minus={() => setBananenCounter(Bananencounter ? Bananencounter - 1 : 0)}
                    />
                </article>
                <article className="outer-container">
                    <Counter
                        label="🍏 Appels"
                        count={Appelscounter}
                        plus={() => setAppelsCounter(Appelscounter + 1)}
                        minus={() => setAppelsCounter(Appelscounter ? Appelscounter - 1 : 0)}
                    />
                </article>
                <article className="outer-container">
                    <Counter
                        label="🥝 Kiwi's"
                        count={Kiwiscounter}
                        plus={() => setKiwisCounter(Kiwiscounter + 1)}
                        minus={() => setKiwisCounter(Kiwiscounter ? Kiwiscounter - 1 : 0)}
                    />
                </article>
                <Button label="Reset" onClick={resetAll} />
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
                    <Button label="Verzend" onClick={() => console.log("Formulier verzonden!")} />
                </form>
            </section>
        </>
    )
}

export default App
