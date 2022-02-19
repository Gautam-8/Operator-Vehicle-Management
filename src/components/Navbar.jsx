import { Link } from "react-router-dom"

export const Navbar = () => {

    return(
        <div>

            <div id='linkdiv'>

            <Link id='link' to='/'>Home</Link>
           <Link id='link' to='/login'>Login</Link>
           <Link id='link' to='/register'>Register</Link>

            </div>
            
        </div>
    )

}