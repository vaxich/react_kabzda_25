import { useState } from "react"


type UncontroledAccordeonPropsType = {
  title: string
  
}

type UncontroledAccordeonTitlePropsType = {
  title: string
}

export const UncontroledAccordeon = (props: UncontroledAccordeonPropsType) => {

  let { title } = props

  const [collapsed, setCollapsed] = useState(true)

 
    return (
      <div>
        <AccordionTitle title={title} />
        <button onClick={ () => { setCollapsed(!collapsed)}}>toggle</button>
        { !collapsed  && <AccordionBody /> } 
        
      </div>
    )
  } 





const AccordionTitle = (props: UncontroledAccordeonTitlePropsType) => {
  return (
    <div>
      <h3>---{props.title}</h3>
    </div>
  )
}

const AccordionBody = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}   