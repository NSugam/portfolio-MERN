import React, { useContext } from 'react'
import { Context } from '../context/SharedState';

export default function Alerts() {
  const states = useContext(Context);
  return (
    <>
    <div className="container col-sm-3 mt-5 text-center fixed-top" style={{zIndex: 100}}>
        {/* {states.alert && <div className={`alert alert-${states.alert.type} fade show`} role="alert"> */}
        {states.alert && <div className={`alert fade show`} style={{background: states.alert.type}} role="alert">
        <strong>{states.alert.msg}</strong> </div>}
    </div>
    </>
  )
}