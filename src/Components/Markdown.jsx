import './Markdown.css'

function Markdown({ MDinput, setMDinput }) {
    return (
        <div className="inputcontainer">
            <textarea value={MDinput} onChange={(ele) => {
                const newValue = ele.currentTarget.value;
                setMDinput(newValue)
            }}></textarea>
        </div>
    )
}

export default Markdown;