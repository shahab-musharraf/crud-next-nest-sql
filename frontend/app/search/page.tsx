'use client'

import Navbar from "@/app/Navbar";
import axios from "axios";
import { useState } from "react";

export default function SearchUser() {
 

interface UserData {
    title: string;
    id: number;
    found: boolean;
}

const [id, setId] = useState("");
const [user, setUser] = useState<UserData>({title: '', id:0, found:false});

const handleSearch = async () => {
    const {data} = await axios.get(`http://localhost:3000/todos/${+id}`);
    setUser(data);
    console.log(data);
    setId("")
}

  return (
    <main className="min-h-screen min-w-full p-11 transition-all">
      <Navbar />
        <div className="w-fit m-auto border-2 border-blue-700 mt-10 flex flex-col gap-7 p-10">
            <div>
                <input value={id} onChange={(e)=> setId(e.target.value)} type="text" className="p-2 outline-slate-500" placeholder="Enter User's ID" />
            </div>
            <div>
                <button onClick={handleSearch} className="bg-slate-500 w-full text-white py-2">Search User</button>
            </div>
        </div>
        
        <div>
            {
                user && user.found === true && <div className="w-1/2 text-center m-auto my-5 p-3">
                    <h2 className="text-xl   font-bold">User Found 🎉</h2>
                    <table className="m-auto my-10">
                        <thead className="border-b-4">
                            <tr>
                                <th className="w-28">ID</th>
                                <th className="w-28">Name</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="w-24 text-lg font-semibold text-teal-600">{user && user.id}</td>
                                <td className="w-28 text-lg font-semibold text-teal-600">{user && user.title}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            {
                user && user.found === false && user.title!=='' && <h3 className="text-red-700 mt-8 text-center font-bold">User Not Found!</h3>
            }
        </div>
    </main>
  );
}
