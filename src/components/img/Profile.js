import React from 'react'
import { getImageUrl } from './utils.js';

function Avatar({person,size}) {
  return (
    <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
  )
}

export default function Profile(){
    return (
        <>
            <Avatar 
                person = {{name : "some testing 1" , imageId : 'YfeOqp2'}}
                size = {100}
            />
            <Avatar 
                person = {{name : "some testing 2" , imageId : 'OKS67lh'}}
                size = {100}
            />
            <Avatar 
                person = {{name : "some testing 3" , imageId : '1bX5QH6'}}
                size = {100}
            />
        </>
    )
}
