import {useAuth0} from "@auth0/auth0-react";

export const Profile = () => {
  const {user, logout} = useAuth0()

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>Log Out</button>
    </div>
  )
}