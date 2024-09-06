import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&
    <div>
      <div className="alert alert-warning" role="alert">
       <strong>{props.alert.type}</strong> :{props.alert.msg}
       </div>
    </div>
  )
}
