import { useState } from "react";

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const [on , setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline - block",
        padding: "2px",
        backgroundColor: on ?  "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline - block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ?  "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline - block",
        marginLeft: "5px",
        backgroundColor: on ?  "green" : "red"

    }

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)}}>on</div>
            <div style={offStyle} onClick={ () => {setOn(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}