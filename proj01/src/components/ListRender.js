import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Michel", "Graziela", "Catu", "Onísia"]);
    const [users] = useState([
                            {id:1, name: "Michel"},
                            {id:2, name : "Graziela"},
                            {id:3, name : "Catu"},
                            {id:4, name : "Onísia"},
                        ]);
  return (
    <div>   
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user)=> (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender