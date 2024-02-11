
import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import Products from "../components/Products";
import  {productsSection} from '../constants/constants'


const Home = () => {
    return (
        <div>
            <Header/>
            <Info />
            <Section data={productsSection.iphonePro}/>
            <Section data={productsSection.iphone}/>
            <Section data={productsSection.macbookpro}/>
            <Products />
        </div>
    )

}

export default Home;