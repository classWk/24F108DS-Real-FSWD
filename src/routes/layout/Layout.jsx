import { useContext } from "react";
import './layout.css'
import { Navigate,  Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { AuthContext } from "../../context/AuthContext";
 function Layout() {
    return (
        <div className="layout">
          <div className="navbar">
          <Navbar/>
          </div>
          <div className="content">
            <Outlet/>
          </div>
        </div>
      );
    }
 function RequireAuth() {
      const { currentUser } = useContext(AuthContext);
    
      if (!currentUser) return <Navigate to="/login" />;
      else {
        return (
          <div className="layout">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="content">
              <Outlet />
            </div>
          </div>
        );
      }
    }
    export { Layout, RequireAuth };

