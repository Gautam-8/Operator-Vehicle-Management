import axios from "axios";
import { useState } from "react"
import { useDispatch} from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/actions";

export const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [form , setForm ] = useState({email:"" , password:""});

    const [login , setLogin] = useState(false);

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

        axios.post('http://localhost:2345/login',form)
        .then((res) => {
         setLogin(false);
         dispatch(loginUser(true))
          navigate('/');
        })
        .catch((err) => {
            setLogin(true);
            dispatch(loginUser(false));
        });
            
 }

    return(
        <>
       <h2  >Login</h2>
        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} name="email" placeholder="email" type="text" />
        <br />
        <input onChange={handleChange} name="password" placeholder="password" type="password" />
        <br />
        <input type="submit" />
        <br />
     

        {login? <h1>Invalid email or password</h1> : null}

        </form>

        </>
    )
}