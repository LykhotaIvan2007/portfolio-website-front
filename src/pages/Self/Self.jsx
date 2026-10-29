import Header from "../../components/MainComponents/Header/Header.jsx";
import Home from "../../components/MainComponents/Home/Home.jsx";
import Technologies from "../../components/Technologies/Technologies.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Footer from "../../components/MainComponents/Footer/Footer.jsx";

const Self = () =>{
    return(
        <div>
            <div className="guides" aria-hidden="true"></div>
            <Header/>
            <Home/>
            <Technologies/>
            <Projects/>
            <Footer/>
        </div>
    )
}
export default Self