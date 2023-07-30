import React, { useState } from 'react'

// import { useState } from 'react'

export default function MyApp(){
    const [count,setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counters that update togather</h1>
            <MyButton count={count} onClick={handleClick}></MyButton>
            <MyButton count={count} onClick={handleClick}></MyButton>
            
            {/* <ResetButton >reset Button</ResetButton> */}     
            <h2>this is reset button</h2>
            
        </div>
    )
}
function MyButton({count,onClick}) {
    return(
        <button onClick={onClick}>Clicked {count} times</button>
    )
}
// function ResetButton(){
//    this.MyButton = null;
// }
