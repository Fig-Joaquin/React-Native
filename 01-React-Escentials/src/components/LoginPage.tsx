import { useEffect } from "react"
import { useAuthStore } from "../store/auth.store"



export const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status)
    const user = useAuthStore(state => state.user) 
    const login = useAuthStore(state => state.login)
    const logout = useAuthStore(state => state.logout)

    useEffect(() => {
      setTimeout(() => {
        logout();
      }, 1500);
    },[])

    if (authStatus === "Chequeando") {
        return <h3>Verificando...</h3>
    }

    
  return (
    <>
      <h3>Login Page</h3>
      {
        (authStatus === "Autenticado") 
        ? <div> Autenticado como: {JSON.stringify(user, null, 2)} </div>
        : <div>No autenticado</div> 
      }

      {
        (authStatus === "Autenticado") ?
        <button className="btn btn-danger" onClick={() => logout()}>Logout</button>
        : (
          <button onClick={ () => login("joaquin@gmail.com", "123")}>Login</button>
        )
      }
    </>
  )
}
