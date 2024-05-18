'use client'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UsersTable from "./UsersTable";
import axios from "axios";





export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    const getAllUsers = async () => {
      const {data} = await axios.get('http://localhost:3000/todos')
      console.log(data);
      setUsers(data);
    }
    getAllUsers();
  }, [users, setUsers])


  return (
    <main className="min-h-screen min-w-full p-11 transition-all">
      <Navbar />
      <UsersTable users={users}/>

    </main>
  );
}
