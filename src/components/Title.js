import React from 'react'

export default function Title({title}) {
    return (
       <div className="row">
           <div className="col-12 mx-auto text-center ">
               <h1 className='text-title text-blue'>{title}</h1>
           </div>
       </div>
    )
}
