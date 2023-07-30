import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, Center, CheckIcon, LoadingOverlay, Pagination, Select, Table, Text } from '@mantine/core';
import { getTodo } from './TodoApi';
import { Link } from 'react-router-dom';
import { IconCheck, IconX } from '@tabler/icons-react';


function TodoPage() {
    const [limit,setLimit] = useState(10);
    const [page,setPage] = useState(1)    
    const {data,isLoading,isError} = useQuery({queryKey:["fetch-todo",page,limit],queryFn:()=>getTodo(page,limit)});
    if(isLoading){
        return <LoadingOverlay visible/>
    }
    if(isError){
        return <Card>
            <a href="https://jsonplaceholder.typicode.com/todos">Error Occurd</a>
        </Card>
    }
    console.log("todo page data",data?.data);
  return (
    <div>
      <Link to="/todo">
        <Text>Visit ToDo page</Text>
      </Link>
      <Text>Todos</Text>
     <Select
      mb={'lg'}
      value={limit}
      onChange={setLimit}
      label="Select option"
      placeholder="10"
      data={[
        { value: 10 },
        { value:  20},
        { value:  30},
        { value:  50},
      ]}
    />
        <Table striped withBorder>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          {/* <th>Compelted</th> */}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data?.data.map((value)=>
            {
                return(
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td><Link to={`/post/${value.id}`}>More</Link></td>
                        {/* <td>{value.completed ? <IconCheck/> : <IconX />}</td> */}
                    </tr>
                    )
            })
        }
      </tbody>

      
        </Table>
        <Center mt={'lg'}>
            <Pagination value={page} onChange={setPage} total={200/limit} />
        </Center>
    </div>
  )
}

export default TodoPage
