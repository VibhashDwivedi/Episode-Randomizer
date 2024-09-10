import React from 'react'

const Button = () => {
   
    
    const refreshPage = () => {
        window.location.reload(false);
      }

  return (
    <div>
        <button className=' btn btn-light fs-6' onClick={refreshPage} >Generate Next Episode</button>
    </div>
  )
}

export default Button