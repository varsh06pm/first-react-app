export default function Slots({val1, val2, val3}){
    const isWinner = val1 === val2 && val1 === val3;
    return (
       <duv>
          <h1>
            {val1} {val2} {val3}
          </h1>
          <h2 style= {{color: isWinner ? "green" : "red"}}>{isWinner ? "You Win!" : "You Loose"}</h2>
          {isWinner && <h3>Congrats</h3>}
       </duv>
    );
}