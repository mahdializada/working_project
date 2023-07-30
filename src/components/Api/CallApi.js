// import React, { Fragment, useEffect, useState } from 'react'
import React from 'react'

// import axios from 'axios';
// import { LoadingOverlay } from '@mantine/core';
import TodoPage from './pages/Todo.Page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function CallApi() {
   
  
  // First Method of Fetching Api Data
  // ------------------- this is using Hook of useState and useEffect to fetch the Api-----------------------

//     const [data,setData] = useState([]);
//     useEffect(()=>
//     {
//         const ApiCall = async ()=>{
//           const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//         //   console.log(response);
//           setData(response?.data);
//         }
//         ApiCall();
//     },[])
//     if (data?.length === 0) {
//         return <LoadingOverlay  visible/>
//     }
//         console.log("data",data);
//         const person = data?.filter((value)=>value.completed === false).map(
//             (value,index)=>{
        
//         return (
//         <Fragment key={index}> 
//             <h1>{value.title}</h1>
//             <h2>{value.completed}</h2>
//             <h2>{value.id}</h2>
//         </Fragment>
// )}
//   )
  return(
    <>
      <QueryClientProvider client={queryClient}>
      <span>
          {/* {person} */}
          <TodoPage></TodoPage>
        </span>
        </QueryClientProvider>
    </>
  )
}

export default CallApi
