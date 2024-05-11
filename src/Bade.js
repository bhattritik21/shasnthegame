import React from 'react'

const Bade = (params) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <div
      className='image'
    />
    <div className="text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#c30f0f', fontWeight:"800", fontSize:"1.5rem" }}>
      {params.question}
    </div>
  </div>
  )
}

export default Bade