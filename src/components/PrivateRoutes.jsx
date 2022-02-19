import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({children}) => {

  const auth = useSelector((state)=>state.authState.auth);

  if(!auth){
      return <Navigate to={'/login'} />
  }

  return children;

}