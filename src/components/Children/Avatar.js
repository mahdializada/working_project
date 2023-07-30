import React from 'react'
import  { getImageUrl } from '../img/utils'


export default function Avatar({person,size}){
    <img className='avatar' src={getImageUrl(person)} alt={person.name} width={size} height={size} />
}
