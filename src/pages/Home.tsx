import {useAuth0} from "@auth0/auth0-react";

export const Home = () => {
  const {isAuthenticated, user} = useAuth0()

  return (
    <div>
      <h1>Welcome to the Auth Demo App</h1>
      {isAuthenticated && (
        <div>
          <p>Welcome, {user?.name}</p>
        </div>
      )}
    </div>
  )
}