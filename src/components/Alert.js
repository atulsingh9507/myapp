import React from 'react'

function Alert(props) {
    const capitalize =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    
     props.Alert && <div className={"alert alert-$(props.alert.type) alert-dismissible fade show"} role="alert">
         <strong>{capitalize(props.Alert.type)}</strong>:{props.Alert.message}
         
      </div>
    
  )
}

export default Alert