import React from 'react'

const AdminPage = () => {
    const valid = sessionStorage.getItem("valid")
  return (
    <div>
        {valid?<h1>hello world</h1>:<h1>Login first</h1>}
      
    </div>
  )
}

export default AdminPage
