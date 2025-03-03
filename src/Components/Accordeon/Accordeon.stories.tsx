import { useState } from "react"
import { Accordeon } from "./Accordeon"



export default {
    title: 'Accordion',
    component: Accordeon
}


export const CollapsedMode = () => <Accordeon title="menu"  collapsed ={true} />
export const UnCollapsedMode = () => <Accordeon title="menu"  collapsed ={false} />


export const ModeChanging = () => {

const [value, setValue] = useState<boolean>(true);

return <Accordeon title="menu" collapsed ={value}  onChange = { () => setValue(!value)}/>
}