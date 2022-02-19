import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const navigate = useNavigate();

    const [form , setForm ] = useState({email:"" , password:"" , username:""});

    const [reg , setReg] = useState(false);

    const handleChange = (e) => {

        const {value , name } = e.target;

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
          e.preventDefault()
        //console.log(form);

        axios.post('http://localhost:2345/register',form)
        .then((res) => {
         setReg(false);   
          navigate('/');
        })
        .catch((err) => {
            setReg(true);
        });
            
 }

 
    return(
        <>
       <h2  >Register</h2>
        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} name="email" placeholder="email" type="text" />
        <br />
        <input onChange={handleChange} name="password" placeholder="password" type="password" />
        <br />
        <input onChange={handleChange} name="username" placeholder="username" type="text" />
        <br />
        <input type="submit" />
        <br />
     

        {reg? <h1>please provide correct credentials</h1> : null}

        </form>

        </>
    )
}