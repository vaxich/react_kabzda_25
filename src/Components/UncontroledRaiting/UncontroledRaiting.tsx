import { useState } from "react";

type UncontroledRaitingPropsType = {
    //{    selected: boolean
}

export const UncontroledRating = (props: UncontroledRaitingPropsType) => {

    const [value, setValue] = useState(1);

    return (
        <div>
            <Star selected={value >= 1} value = {1} setValue = {setValue}/>
            <Star selected={value >= 2} value = {2} setValue = {setValue}/>
            <Star selected={value >= 3} value = {3} setValue = {setValue}/>
            <Star selected={value >= 4} value = {4} setValue = {setValue}/>
            <Star selected={value >= 5} value = {5} setValue = {setValue}/>
        </div>
    )


}


type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue : (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {


    return <span
    onClick={ () => {props.setValue(5)}}
    >{props.selected ? <b>star </b> : "star"}</span>



}
