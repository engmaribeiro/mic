import {useState} from 'react'
const ManageData = () => {
let x= 10;
const [number, setNumber] = useState(10);
  return (<div>    
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number+100)}>variável</button>
    </div>

    </div>)}

export default ManageData;