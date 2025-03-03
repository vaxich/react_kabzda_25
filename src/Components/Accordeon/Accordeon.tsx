

type AccordeonPropsType = {
  title: string
  collapsed: boolean
  onChange? : () => void
}

type AccordeonTitlePropsType = {
  title: string
  onChange? : () => void
}

export const Accordeon = (props: AccordeonPropsType) => {

  let { title, collapsed } = props

  if (collapsed) {// если collapsed false тогда НЕ отрисовываем AccordionBody
    return (
      <div>
        <AccordionTitle title={title} onChange={props.onChange}/>
        { !collapsed  && <AccordionBody /> } 
        <AccordionBody />
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={title} onChange={props.onChange}/>
      </div>
    )
  }


}


const AccordionTitle = (props: AccordeonTitlePropsType) => {
  return (
    <div>
      <h3 onClick={ (e) => props.onChange}>---{props.title}</h3>
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