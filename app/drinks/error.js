'use client'
import React from 'react'

const error = (error) => {
  return (
    <div>
     {error.error.message}
    </div>
  )
}

export default error
