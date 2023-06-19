import { useState } from "react";

function UserForm({onUserAdd}){

    const [name,setname] = useState("");
    const [email,setemail] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        onUserAdd({name,email})
        // setname('');
        // setemail('')
    }
    return <form>
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} id="name" onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input value={email} id="email" onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <button onClick={handleSubmit}>Add user</button>
    </form>

}

export default UserForm;