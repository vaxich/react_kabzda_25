
import './App.css';
import { Accordeon } from './Components/Accordeon';
import { Rating } from './Components/Raiting';

function App() {
  return (
    <div>
      this is App
      <Rating value = {1}/>
      {/* <Accordeon title = {'menu'} collapsed = {true}/>
      <Accordeon title = {'users'} collapsed = {true}/> */}
    </div>
  );
}



export default App;
