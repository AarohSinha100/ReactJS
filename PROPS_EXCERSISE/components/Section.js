import React from 'react';
import img1 from "C:\\Users\\PROGRAMMING\\Desktop\\Mini Desktop\\REACTPROPSPROJECT\\propsapp\\src\\images\\mountfuji.jpg";

export default function Section(props) {
  return (
   <div className='Container'>
    <div className='image'><img src={props.image}  alt='Mount Fuji'/></div>
    <div className='container-content'>
      <div className='top-country'>{props.country}</div>
      <div className='place'>{props.place}</div>
      <div className='date'>{props.date}</div>
      <div className='about'>{props.about}</div>
      </div>
   </div>
  )
}


