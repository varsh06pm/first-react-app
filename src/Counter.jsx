import {useState} from "react";  //useState should be called inside a component
export default function Counter() {
    const [num, setNum] = useState(1);  //num is the peice of state and setNum is the function to change the value of peice of state
    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}