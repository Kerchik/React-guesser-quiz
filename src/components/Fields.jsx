import React from "react"
import "./Fields.css"

const Fields = (props) => {
    function test() {
        for (let i=0;i<props.receivedColor.length;i++) {
            if (props.color === props.receivedColor[i]) {
                return <p>{props.color}</p>
            }
        }
        return <p>{""}</p>
    }
    return (
        <div className="f">
            {test()}
        </div>
    )
}

export default Fields