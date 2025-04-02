import React, { useState } from 'react'

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })
    const [sumbit, setSubmit] = useState(false)
    const handleName=(e)=>{
        setFormData({
            ...formData,name:e.target.value
        })
    }
    const handleEmail=(e)=>{
        
        setFormData({
            ...formData,email:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmit(true)
    }
  return (
    <div>
      <input type="text" onChange={handleName} />
      <br />
      <br />
      <input type="email" onChange={handleEmail} />
      <br />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <br />
      {sumbit && <h1>{formData.name}</h1>}
      <br />
      <br />
      {sumbit && <h1>{formData.email}</h1>}
    </div>
  );
}

export default UserForm