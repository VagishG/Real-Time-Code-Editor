import React from 'react'
import search from "../Assets/Search@3x.png"
export default function Search() {
  return (
    <div className='flex center Search'>
        <img src={search} alt=""  height={"25px"} width={"25px"}/>
        <p>Search Files ...</p>
    </div>
  )
}
