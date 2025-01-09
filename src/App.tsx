import './App.css'
import {useAuth0} from "@auth0/auth0-react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";
import {Profile} from "./pages/Profile.tsx";
import {Navbar} from "./components/Navbar.tsx";

const App = () => {
  const {isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>}>
        </Route>
      </Routes>
    </>
  )
}

export default App
