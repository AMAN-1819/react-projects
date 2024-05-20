import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const{userid}=useParams()
  return (
    <div className='bg-red-600 text-yellow-200 text-2xl p-15' >
      User: {userid}
    </div>
  )
}

export default User
