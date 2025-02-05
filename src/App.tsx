
import './App.css';
import { Accordeon } from './Components/Accordeon';
import { Rating } from './Components/Raiting';

function App() {
  return (
    <div>
      this is App
      <Rating value = {2}/>
      <Accordeon title = {'menu'}/>
    </div>
  );
}



export default App;
