'use client'

import Navbar from "@/app/Navbar";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";




export default function UpdateUser(props:any) {
const id:number = props.params.id;
const router = useRouter()
 


const [title, setTitle] = useState("");
const handleUpdate = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const {data} = await axios.patch(`http://localhost:3000/todos/${id}`, {title},config );
    router.push('/')

}

  return (
    <main className="min-h-screen min-w-full p-11 transition-all">
      <Navbar />
        <div className="w-fit m-auto border-2 border-blue-700 mt-10 flex flex-col gap-7 p-10">
            <div>
                <input type="text" readOnly className="p-2 outline-none cursor-not-allowed " placeholder={`Id: ${id} `}/>
            </div>
            <div>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="p-2 outline-slate-500" placeholder="Updated Name" />
            </div>
            <div>
                <button onClick={handleUpdate} className="bg-slate-500 w-full text-white py-2">Update</button>
            </div>
        </div>
    </main>
  );
}
