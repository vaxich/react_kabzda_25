

type AccordeonPropsType = {
    title: string
}

type AccordeonTitlePropsType = {
    title: string
}

export const Accordeon = (props: AccordeonPropsType) => {
    return (
      <div>
        <AccordionTitle title = {props.title}/>
        <AccordionBody />
      </div>
    )
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