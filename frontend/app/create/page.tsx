'use client'

import Navbar from "@/app/Navbar";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";




export default function CreateUser() {
const router = useRouter()
 


const [title, setTitle] = useState("");
const handleCreate = async () => {
    if(!title){
        alert("Please fill the input");
        return;
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    await axios.post(`http://localhost:3000/todos`, {title},config );
    router.push('/')

}

  return (
    <main className="min-h-screen min-w-full p-11 transition-all">
      <Navbar />
        <div className="w-fit m-auto border-2 border-blue-700 mt-10 flex flex-col gap-7 p-10">
            <div>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="p-2 outline-slate-500" placeholder="Enter Name" />
            </div>
            <div>
                <button onClick={handleCreate} className="bg-slate-500 w-full text-white py-2">Add User</button>
            </div>
        </div>
    </main>
  );
}
