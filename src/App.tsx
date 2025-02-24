
import { useState } from 'react';
import './App.css';
import { Accordeon } from './Components/Accordeon/Accordeon';
import { OnOff } from './Components/OnOff/OnOff';
import { Rating } from './Components/Raiting/Raiting';
import { UncontroledAccordeon } from './Components/UncontroledAccordeon/UncontroledAccordeon';
import { UncontroledRating } from './Components/UncontroledRaiting/UncontroledRaiting';

function App() {

const [switchOn , setSwitchOn] = useState<boolean>(false)

  return (
    <div className='App'>
     
     {/* <UncontroledAccordeon title='menu' />
    < UncontroledRating /> */}

      <OnOff on={switchOn} onChange={ (on) => {setSwitchOn(on)}}/>
      {/* <Rating value = {1}/>
      <Accordeon title = {'menu'} collapsed = {true}/>
      <Accordeon title = {'users'} collapsed = {true}/> */}
    </div>
  );
}



export default App;
