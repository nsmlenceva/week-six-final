
function Buttons({filterFunc }) {
    return (
        <div className="container">
            <button className="chooseButton one" onClick={() => filterFunc('light')}>Light</button>
            <button className="chooseButton two" onClick={() => filterFunc('dark')}>Dark</button>
            <button className="chooseButton three" onClick={() => filterFunc('green')}>Green</button>
        </div>
    )

}
export default Buttons;