import React from 'react'
const marginZ ={
    marginLeft:-10,
    padding:0
}

const person =[
    {name:"aaaaa",
    theme:{
        backgroundColor: 'black',
        color: 'pink'
    },
    }
]
function ResetButtton() {
  return (
    <div style={person.theme}>
        <h1>{person.name}</h1>

        <img className="avatar" src="https://i.imgur.com/QIrZWGIs.jpg" alt="Person" />
        <ul>
            <li style={marginZ}>Improve the videophone</li>
            <li style={marginZ}>Prepare aeronautics lectures</li>
            <li style={marginZ}>Work on the alcohol-fuelled engine</li>
        </ul>
    </div>
  )

}

export default ResetButtton
