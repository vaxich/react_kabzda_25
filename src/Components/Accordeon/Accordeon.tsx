

type AccordeonPropsType = {
  title: string
  collapsed: boolean
}

type AccordeonTitlePropsType = {
  title: string
}

export const Accordeon = (props: AccordeonPropsType) => {

  let { title, collapsed } = props

  if (collapsed) {// если collapsed false тогда НЕ отрисовываем AccordionBody
    return (
      <div>
        <AccordionTitle title={title} />
        { !collapsed  && <AccordionBody /> } 
        <AccordionBody />
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={title} />
      </div>
    )
  }


}


const AccordionTitle = (props: AccordeonTitlePropsType) => {
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