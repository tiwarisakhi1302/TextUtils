import React from 'react'

export default function Alert(props) {
  const capitaliseFirstChar = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
        props.alert && <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitaliseFirstChar(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}

