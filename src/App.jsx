import './App.css'
//import Slots from "./Slots";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from './ToggleCounter';
import ColorBoxGrid from './ColorBoxGrid';

const colors = [
  "#F08080",
  '#CD5C5C',
  '#FA8072',
  '#E9967A',
  '#FFA07A',
];


function App() {
  return (
    <div>       
       <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App
