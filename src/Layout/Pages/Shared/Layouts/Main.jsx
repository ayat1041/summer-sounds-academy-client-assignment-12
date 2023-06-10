import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { DarkModeContext } from "../../../../Providers/DarkModeProvider";
import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { MdDarkMode } from 'react-icons/md';

const Main = () => {
  const { darkModeState } = useContext(DarkModeContext);
  const [firstLoad,setFirstLoad] = useState(true)
  useEffect(() => {
    if (firstLoad) {
        setFirstLoad(false);
    return;
    }

    if (darkModeState) {
      Swal.fire({
        position: "top",
        title: "Lights on",
        icon: 'success',
        iconColor: 'orange',
        showConfirmButton: false,
        timer: 1000,
        background: '#b3f7a3',
        width: 'max-content',
      });
    } else {
      Swal.fire({
        position: "top",
        title: "Lights Out",
        icon: 'success',
        iconColor: '#ffffff',
        showConfirmButton: false,
        timer: 1000,
        color: '#ffffff',
        background: 'darkGreen',
        width: 'max-content',
      });
    }
  }, [darkModeState]);
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
