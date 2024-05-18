import { useState } from "react";

function App() {
 const [color,setColor]=useState("green");

  return (
   <div class="w-full h-screen"
    style={{backgroundColor:color}}>
      <h1 className="fixed flex flex-wrap justify-center inset-x-0 mt-12 text-6xl font-bold"> WELCOME EVERYONE</h1>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
 <div className="fixed flex flex-wrap justify-center gap-3 bg-white rounded-3xl shadow-lg px-3 py-2">
  <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"red"}}>Red</button>
  <button onClick={()=>setColor("blue")}  className=" outline-none px-4 py-1 rounded-full text-black white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
  <button onClick={()=>setColor("brown")} className=" outline-none px-4 py-1 rounded-full text-black white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>
  <button onClick={()=>setColor("magenta")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"magenta"}}>Magenta</button>
  <button onClick={()=>setColor("orange")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
  <button onClick={()=>setColor("yellow")} className=" outline-none px-4 py-1 rounded-full text-black white shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
  <button onClick={()=>setColor("maroon")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"maroon"}}>Maroon</button>
  <button onClick={()=>setColor("green")} className=" outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"green"}}>Green</button>
  <button onClick={()=>setColor("violet")} className=" outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"violet"}}>Violet</button>
 </div>
</div>
   </div>
  )
}

export default App
