import { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users,setusers] = useState([])

  const onUserAdd = (user)=>{
    setusers([...users,user])
  }
  return (
    <div className="App">
     <UserForm onUserAdd={onUserAdd}/>
     <hr/>
     <UserList users={users}/>
    </div>
  );
}

export default App;
