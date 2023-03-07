import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import VehiclesList from "../../components/ProductCard"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { userContext } from "../../contexts/userContext"
import { Content, HeaderStyle, Main } from "./styles"


function SellerDash() {
  const {idSeller} = useParams()
    const {uniqueVehicle, vehicles, getAnnouncesSeller} = useContext(AnnounceContext)
    const {objUser, sellerData, retrieveUserSeller, loadRetrieveSeller} = useContext(userContext)
    useEffect(()  =>{
      retrieveUserSeller(idSeller)
      getAnnouncesSeller(idSeller)
    },[idSeller])
    console.log("On seller page 20 line");
    console.log(vehicles);
    

    
    if (loadRetrieveSeller){
        return <div>Carregando Página</div>
      }
    // if (objUser.email === sellerData.email){
    //   return (
    //     <Main>
    //       <NavBar/>
    //       <HeaderStyle>
    //           <div className="userDiv">
    //           <figure className="userPhoto">
    //               <img src={sellerData.image} alt=""/>
    //           </figure>
    //           <div className="name">
    //               <p className="nameComplete">{sellerData.completeName}</p>
    //               <p>Anunciante</p>
    //               <button onClick={() => console.log("Abrir editar perfil")}>Editar Perfil</button>
    //           </div>
    //           <p className="bio">{sellerData.bio}</p>
    //           </div>
              
    //       </HeaderStyle>
    //       <VehiclesList vehicles={vehicles}/>
    //       <Footer />
    //   </Main>
    // )
    // }
    return (
      <Main>
      <NavBar/>
      <HeaderStyle>
          <div className="userDiv">
          <figure className="userPhoto">
              <img src={sellerData.image} alt=""/>
          </figure>
          <div className="name">
              <p className="nameComplete">{sellerData.completeName}</p>
              <p>Anunciante</p>
          </div>
          <p className="bio">{sellerData.bio}</p>
          </div>
      </HeaderStyle>
      <VehiclesList vehicles={Object.values(vehicles)}/>
      <Footer />
  </Main>
)
}

export default SellerDash