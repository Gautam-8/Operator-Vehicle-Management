import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate} from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate()

    const [list , setList] = useState([]);
    const [arr , setArr] = useState([]);

    const [change , setChange] = useState('all');
    const [find , setFind] = useState('');

    const [toggle , setToggle] = useState(false);

   
 const getData = (e , type) => {

        axios.get(`http://localhost:2345/vehicles/${type}/?page=${e}`)
        .then((data) => {

            //console.log(data)
            setList(data.data.vehicles);
            makeArr(data.data.totalPages);

        })
        .catch((err) => console.log(err))
    }

    const makeArr = (e) => {

         let dummy = [];
         let n = +e;

        for(let i=0 ; i<n ; i++){
             dummy.push(i);
        }

        setArr(dummy);   
    }

  
  const hanldeSort = () => {

    let listSort = [...list];
    listSort.sort((a,b) => {return a.capacity-b.capacity});

    console.log(listSort);

    setList(listSort);
  }


  const handleFind = () => {

    if(find){

        axios.get(`http://localhost:2345/vehicles/particular/${find}`)
        .then((data) => {
     
            console.log(data)
            setList([data.data]);
            makeArr(1);
            setToggle(false)
     
        })
        .catch((err) => {
            console.log(err);
            setToggle(true);
    
        })
        
    }else{
        setToggle(true)
    }

  }

    useEffect(()=>{
        getData(1 , change);
    } , [change])

return (

<div>
    <h1>Home</h1>

    <input placeholder="Search by register number" onChange={(e) => setFind(e.target.value)}/>
    <button id='find' onClick={handleFind}>find</button>
    {toggle? <h3>vehicle not available try different</h3> : null}

    <div id='filter'>
          <h2>filter by </h2>

          <select onChange={(e) => setChange(e.target.value)}>
              <option value={'all'}> select </option>
              <option value={'Bus'}> Bus </option>
              <option value={'Car'}> Car </option>
              <option value={'Van'}> Van </option>
          </select>

          <button onClick={()=> hanldeSort()}>Sort by Capacity</button>

      </div>
     
     {list? <div id='list'>
   
     {list.map((e,i) => (

         <div key={e._id} onClick={() => navigate(`/details/${e.reg_NO}`)}>
           <h3>{e.type}</h3>
          <h3>Register No : {e.reg_NO}</h3>
          <h3>Capacity : {e.capacity}</h3>
          <h3>Trips : {e.totalTrips}</h3>
         </div>
         
     ))}  </div> : null}

      {arr? <div>

        {arr.map((e ,i) => (
             <button id='pag' onClick={() => getData(e+1 , change)} key={e}>{e+1}</button>
        ) )}

      </div> : null}

    </div>
        
    )
}