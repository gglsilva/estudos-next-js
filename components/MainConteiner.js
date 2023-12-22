import Navbar from "./Navbar";
import Footer from "./Footer";

import Style from '../styles/MainContainer.module.css'

export default function MainContainer({children}){

  return(
    <>
      <Navbar />
      <div className={Style.container}>
        {children}
      </div>
      <Footer />
    </>
  )
}