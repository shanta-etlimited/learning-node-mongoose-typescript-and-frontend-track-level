import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({name: "", age: "", hobbies: [] as string[]})
  console.log(user);
   
  return (
    <form>
        <input
        onChange = {(e)=> setUser({...user, name:e.target.value })}
        className="border border-black m-2 p-3"
        type="text"
        name="name"
        id= "name"
        placeholder="name"
        />
        <input
         onChange = {(e)=> setUser({...user, age:e.target.value })}
        className="border border-black m-2 p-3"
        type="number"
        name="age"
        id= "age"
        placeholder="age"
        />
        <input
         onBlur = {(e)=> setUser({...user, hobbies: [...user.hobbies, e.target.value] })}
        className="border border-black m-2 p-3" 
        type="text"
        name="hobbies"
        id= "hobbies"
        placeholder="hobby"
        />
        <button className="btn p-5 bg-green-400 " type="submit">Submit</button>
    </form>
  )
}

export default UserInfoWithUseState
