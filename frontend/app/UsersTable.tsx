'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function UsersTable(props: any){
    const users:Array<Object> = props.users;

    const router = useRouter();

    const handleDelete = async (id:number) => {
        if(confirm("Are your sure to delete user?")){
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            try {
                await axios.delete(`http://localhost:3000/todos/${id}`, config);
            } catch (error:any) {
                alert(error.message);

            }
        }
        

    }
    return (
        <>

        {
            users && users.length === 0 ? <>
                <h3 className="text-center font-bold mt-10">No Record Found</h3>
                <Link href={'/create'} className="cursor-pointer text-center font-bold p-2 border-2 border-teal-500 block m-auto w-fit mt-6 hover:bg-teal-600 transition transition-all hover:text-white hover:font-normal">Add User</Link>
            </> : 
            <>
                <table className="mt-11 m-auto">
                    <thead className="bg-lime-400">
                        <tr>
                            <th className="w-20 p-2">ID</th>
                            <th className="w-20 p-2">Name</th>
                            <th className="w-20 p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-lime-200">
                        {
                            users.length>0 && users.map((user:any) => (
                                <tr key={user.title}>
                                    <td className="w-20 p-2 text-center">{user.id}</td>
                                    <td className="p-2 text-center text-base">{user?.title}</td>
                                    <td className="w-36 p-2 text-center text-base">
                                        <Link className="bg-indigo-500 mr-3 px-2 py-1 text-white text-sm" href={`/update/${user.id}`}>Edit</Link>
                                        <button onClick={()=>handleDelete(user.id)} className="bg-orange-600 mr-3 px-2 py-1 text-white text-sm">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        }
        
        </>
    )
}