import React,{useState,useEffect} from "react";
import axios from "axios"

const UserList=()=>{
    const [user,setUser]=useState([]);

    const getlist= ()=>{
        axios.get("https://reqres.in/api/users")
        .then((response)=>setUser(response.data.data))
        .catch((err)=>console.log(err))
    }
    
    // async function getlist(){
    //     try{
    //         const response=await axios.get("https://reqres.in/api/users")
    //         setUser(response.data.data)
    //         console.log(response.data.data);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }

    return(
        <div>
            <span>Blue Whales</span>
            <button className="btn" onClick={getlist}>Get User List</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length>0? (
                            user.map((user)=>{
                                <tr>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email_name}</td>
                                    <td><img src={user.avatar} alt={user.first_name+" "+user.last_name}/></td>
                                </tr>
                            })
                        ):(<p>No data found to display.</p>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList;