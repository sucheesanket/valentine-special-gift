import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenEnvelope = () => {
  const navigate=useNavigate()

  return (
    <div>
      <div className='min-h-screen flex items-center justify-center'>
        <div className="h-[70%] w-1/2 bg-[url('/heart-bg.jpg')] bg-cover bg-center rounded-xl shadow-xl p-10 text-center  flex flex-col items-center justify-between gap-10">
        <img src="./envelope2.png" alt="" className='object-cover object-center h-[50%] w-[50%] cursor-pointer' />
        <button
        onClick={()=>navigate("/letter/content")}
        className="px-6 py-2 rounded-full text-white bg-pink-500 hover:bg-pink-600 active:scale-95 cursor-pointer delius-regular transition">OpenEnvelope</button>
        </div>
      </div>
    </div>
  )
}

export default OpenEnvelope
