import React,{useState} from 'react'
const client_search = () => {
  const [input,setInput]=useState("");
  const search=data

  return (
    <div className=' pt-[200px] h-[100vh] bg-[#d2cdcd] '>
      <div className='w-[50vw]  m-auto flex flex-col rounded-lg justify-center items-center h-[40px]  overflow-hidden bg-[white]'>
      <input type="text" placeholder='Search Lawyers...' value={input} onChange={(e)=>setInput(e.target.value)} className='search h-[100%] w-[100%] ml-3 border-none ' />
      </div>
    </div>
  )
}

export default client_search
