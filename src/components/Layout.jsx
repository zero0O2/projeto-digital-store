import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Layout({children,underline}) {
  return(
    <div className="flex flex-col ">
      <Header underline={underline}/>
        {children}
      <Footer/>
    </div>
  )
}