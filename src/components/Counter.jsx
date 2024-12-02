function Counter({ label, count, minus, plus }) {
    return (
        <article className="outer-container">
            <h3>{label}</h3>
            <button onClick={minus}>-</button>
            <p>{count}</p>
            <button onClick={plus}>+</button>
        </article>
    );
}

export default Counter;