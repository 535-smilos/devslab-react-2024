import { useAuthContext } from "../../contexts/auth";

export const Profile = () =>{

    const {user, handleLogout}=useAuthContext();

    if(!user){
        return <>No user!
            <button onClick={()=>window.location.href="/login"}>LOGIN</button>
        </>;
    }

    return (
        <>
            <h1>Profile</h1>
            <h2>{user.email}</h2>
            <button onClick={handleLogout}>LOGOUT</button>
        </>
    );
};