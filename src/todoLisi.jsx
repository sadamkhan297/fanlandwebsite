import React from 'react'

export const todoLisi = (props) => {
    return (
        <>
        <div>
          <li><i class="far fa-trash-alt" onClick={()=>{
            props.dltData(props.id)
          }}></i>{props.text}</li>
        </div>
        </>
    )
}
export default todoLisi
