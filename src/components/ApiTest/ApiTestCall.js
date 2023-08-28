import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { LoadingOverlay } from '@mantine/core';
import { isVisible } from '@testing-library/user-event/dist/utils';
function ApiTestCall() {
    const [data,setData] = useState();
    useEffect(
        ()=>
        {
            const ApiCall = async()=>
        {
            const getData = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(getData);
            setData(getData?.data);
        }
        ApiCall();
    },
    []);
    if (data?.length === 0) 
    {
        return <LoadingOverlay visible/>
    }
    const person = data?.map((value,index)=>{
        return (
            <Fragment>
                <h4>{value.title}</h4>
                <h4>{value.id}</h4>
            </Fragment>
        )
    })
  return (
    <div>
      <span>
        <p>{person}</p>
      </span>
    </div>
  )
}

export default ApiTestCall
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"
git commit --allow-empty -m "New changes"