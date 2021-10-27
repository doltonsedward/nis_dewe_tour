import './Home.scss'
import { LogoGuarante, LogoHeart, LogoAgent, LogoSupport } from '../../assets/'
import { IconPalm, IconHibicus, DataTour } from '../../assets/'
import { Gap, Input } from '../../components'
import { Box } from '../../components'
import { useHistory } from 'react-router'

const Home = () => {
    const history = useHistory()
    
    return (
        <div className="home-page">
            <div className="hero text-white">
                <div className="section-heading__hero">
                    <h1 className="text-heading">Explore</h1>
                    <h2 className="text-subheading">your amazing city together</h2>
                </div>
                <div className="section-input__hero">
                    <Gap height={64} />
                    <Input label="Find great place to holiday" variant="search-btn" onClick={()=> history.push('/search')} type="text" />
                </div>
            </div>
            <div className="main">
                <div className="wrapper-card d-flex-center-x">
                    <Box 
                        variant="card" 
                        logo={LogoGuarante}
                        heading="Best Price Guarantee" 
                        text="A small river named Duren flows by their place and supplies" 
                    />
                    <Gap width={70} />
                    <Box 
                        variant="card" 
                        logo={LogoHeart}
                        heading="Best Price Guarantee" 
                        text="A small river named Duren flows by their place and supplies" 
                    />
                    <Gap width={70} />
                    <Box 
                        variant="card"
                        logo={LogoAgent} 
                        heading="Best Price Guarantee" 
                        text="A small river named Duren flows by their place and supplies" 
                    />
                    <Gap width={70} />
                    <Box 
                        variant="card" 
                        logo={LogoSupport}
                        heading="Best Price Guarantee" 
                        text="A small river named Duren flows by their place and supplies" 
                    />
                    <img className="p-absolute hibicus-icon" src={IconHibicus} alt="" />
                </div>
                <Gap height={72} />
                <div className="group-tour">
                    <img className="p-absolute" src={IconPalm} alt="" />
                    <h2 className="text-center">Group Tour</h2>
                    <Gap height={77} />
                    <div className="row">
                    {DataTour.map((item) => (
                        <Box key={item.id} className="col-4 col-s-6"
                            variant="content" 
                            item={item}
                            subtext="Australia"
                            onClick={()=> history.push('/detail-trip/' + item.id)}
                        />
                    ))}
                    </div>
                </div>
                <Gap height={121} />
            </div>
        </div>
    )
}

export default Home