import React from 'react';
import { getImageUrl } from '../img/utils.js';

function Gallery() {
  return (
    <div>
      <h2>Notable Scientists</h2>
      <Profile 
        name="testing 1"
         src='https://picsum.photos/200'
         profession="aaa and bbbb"
         awards="hhhhhhhh asdfasdf asdfasdf"
         discoveries="polonium (element)"
      />
    </div>
  )
}

const Profile = ({name,imageUrl,profession,awards,discoveries})=>{
    return (
        <div>
            <section className="profile">
                <h2>{name}</h2>
                <img className="avatar" src='https://picsum.photos/200' alt={name} width={70} height={70}/>
                <ul>
                    <li>
                        <b>Profession:</b> 
                        {profession}
                    </li>
                    <li>
                        <b>Awards:</b> 
                        {awards}
                    </li>
                    <li>
                        <b>discoveries:</b> 
                        {discoveries}
                    </li>
                </ul>
            </section>
        </div>
    )
};


export default Gallery
