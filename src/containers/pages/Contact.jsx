import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"

import MyLineChart from "graficos/lineChart"



function Contact(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Contact
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Contact