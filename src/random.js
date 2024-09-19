import { useState } from "react";

function RandomNumber(){

    var [num,randomnum] = useState(0)

    function random(){

        num = Math.floor( Math.random()*50 )+1
        randomnum(num)
    }

    return(
        <div className="container">
            <h1>RANDOM NUMBER GENERATOR USING REACT</h1>
            <h1 className="text">{num}</h1>
            <button onClick={random} className="btn">Random Number</button>
        </div>
    )

}

export default RandomNumber