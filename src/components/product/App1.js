import React from 'react'
// import { useState } from 'react'; 
// import Product from './Product';
// import MyApp from './MyApp';
// import ResetButtton from './ResetButtton';
// import Button from '../Button/Button';
// import Computer from '../showProduct/Computer';
// import Profile from '../img/Profile';
// import Gallery from '../datalist/Gallery';
// import ApiTestCall from '../ApiTest/ApiTestCall';
// import { Card } from '@mantine/core';
// import ParentComponent from '../Clock/ParentComponent';
import CallApi from '../Api/CallApi';

// const user = {
//   name : "Some picture",
//   imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 100
// }
// const product = [
//   {title : "Cabbage" , id : 1 , isFruit:false},
//   {title : "Garlic"  , id:2, isFruit : false},
//   {title : "Apple" ,  id:3 , isFruit:true}
// ]

// const listItems = product.map(product =>
//   <li key={product.id} style={{color : product.isFruit ? "magenta" : "darkgreen"}}>{product.title}</li>
// )

// const addbutton={
//   backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
// }
// const discountButton={
//   backgroundColor: 'red',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     cursor: 'pointer',
// }
// function Item({name,isPacked}){
//   console.log({isPacked});
//   return(
//     <li className='item'>
//     {name} {isPacked && '✔'}
//   </li>
//   )
// }

function App1() {
  // const [count,setCount] = useState(0);
  
  // function handleAdd() {
  //   setCount(count + 1);
  // }
  // function handleDicrise(){
  //   setCount(count-1);
  // }
  // const openApp=(name)=>{
  //   console.log("hello .. ",name)
  // }
  // const  computerData1 ={
  //   name: "dell",
  //   amount: 200,
  //   cost: 400,
  //   src : "https://picsum.photos/200"
  // } 
  // const  computerData2 ={
  //   name: "hp",
  //   amount: 300,
  //   cost: 500,
  //   src: "https://picsum.photos/200"
  // } 
  return (
    <>
    <CallApi></CallApi>
    {/* <ParentComponent></ParentComponent>
    <Card></Card>
    <ApiTestCall></ApiTestCall>
    <Gallery></Gallery>
     <Profile></Profile>
    <Computer {...computerData1}></Computer>
    <Computer {...computerData2}></Computer>
    <Button title='close' onClick={()=>openApp("habib")}></Button>
    <ul>
      <Item name="Computer" isPacked/>
      <Item name="Phone" isPacked={false}/>
      <Item name="Key"/>
      <Item name="AirPads"/>
    </ul>
    <MyApp ></MyApp> 
    <ResetButtton ></ResetButtton>
    <button name={resetbtn.name}>{resetbtn.name}</button>
      <h1>{user.name}</h1>
      <img 
      className="avatar"
      src={user.imageUrl}
      alt={"photo of" + user.name}
      style={{
        width: user.imageSize,
        hight:user.imageSize
      }}
      >
      </img>
      <ul>{listItems}</ul>
      <div>
        <h2>this is showing the number of click:</h2>
        <button onClick={handleClick}>alert</button>
        this is showing setstate count
        <p>
        <span>Count: {count}</span> &nbsp;
        <button style={addbutton} onClick={handleAdd}>counter</button> &nbsp;
        <button style={discountButton} onClick={handleDicrise}>Minus</button>
        </p>
        <Product ></Product>

       
      </div> */}
    </>
  )
   
  }
  // function handleClick(){
  //   alert("you clicked me");
  // }
  


export default App1
