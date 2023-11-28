import Header from "components/Home/Header"
import Incentives from "components/Home/Incentives"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                {/* <Servicios2/> */}
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Home