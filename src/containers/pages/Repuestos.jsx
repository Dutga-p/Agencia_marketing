import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"

function Repuestos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Repuestos
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Repuestos