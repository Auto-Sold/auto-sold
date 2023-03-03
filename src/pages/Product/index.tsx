
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import CommentList from "../../components/Comments"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { userContext } from "../../contexts/userContext"
import { IVehicleImages } from "../../interface"
import  {Main, HeaderStyle, Content } from "./styles"
import  { EditModal }  from "../../components/editModal"

function ProductDash() {
  const [showModal, setShowModal] = useState(false);
  const { uniqueVehicle, retrieveAnnounce, load, loadRetrieve} = useContext(AnnounceContext)
    const {objUser, retrieveUserSeller} = useContext(userContext)
    const nav = useNavigate()
    const vehicleID = uniqueVehicle.id;

    
    
    
  
    const user = true;
    
    // if (loadRetrieve){
    //     return <div>Carregando Página</div>
    //   }
    if (user){
    //     return (
    //         <Main>
    //             <NavBar/>
    //             <HeaderStyle>
    //                 <figure>
    //                     <img src={uniqueVehicle.image} alt="Imagem do veículo" />
    //                 </figure>
    //             </HeaderStyle>
    //             <section className="section">
    //             <Content justify="space-between" align="flex-start" alignDescription="flex-start">
    //                  <p className="title">{uniqueVehicle.title}</p>
    //                  <div className="footerCard">
    //                     <p>{uniqueVehicle.year}</p>
    //                     <p>{uniqueVehicle.km} KM</p>
    //                     <p className="price">R$ {uniqueVehicle.price}</p>
    //                  </div>
    //                  <button>Comprar</button>
    //             </Content>
    //             <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
    //                 <p className="title">Descrição</p>
    //                 <p className="description">{uniqueVehicle.description}</p>
    //             </Content>
    //             <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
    //             <p className="title">Fotos</p>
    //             {/* {uniqueVehicle.vehiclesImages.map((image) =><img src={image} alt="Imagem do veículo"/>)} */}
    //             </Content>
    //             <Content justify="flex-start" align="center" alignDescription="center">
    //                 <figure className="userPhoto">
    //                     <img className="userPhoto" src={uniqueVehicle.user.image} alt=""/>
    //                 </figure>
    //                 <p className="description">{uniqueVehicle.user.bio}</p>
    //                 <button className="userPerfil" id={uniqueVehicle.user.id} onClick={async()=>{
    //                     await retrieveUserSeller(uniqueVehicle.user.id)
    //                     nav("/seller")
    //                 }
    //                 }>Ver todos anúncios</button>
    //                 <button className="userPerfil"> Excluir anúncio</button>
    //                 <button className="userPerfil"> Editar anúncio</button>
    //             </Content>
                
    //                 <CommentList/>
                
    //             </section> 
           
    //             <Footer />
    //         </Main>
    //     )
    // }
    return (
      <Main>
        <NavBar />
        <HeaderStyle>
          <figure>
            <img src={uniqueVehicle.image} alt="Imagem do veículo" />
          </figure>
        </HeaderStyle>
        <section className="section">
          <Content
            justify="space-between"
            align="flex-start"
            alignDescription="flex-start"
          >
            <p className="title">{uniqueVehicle.title}</p>
            <div className="footerCard">
              <p>{uniqueVehicle.year}</p>
              <p>{uniqueVehicle.km} KM</p>
              <p className="price">R$ {uniqueVehicle.price}</p>
            </div>
            <button>Comprar</button>
          </Content>
          <Content
            justify="flex-start"
            align="flex-start"
            alignDescription="flex-start"
          >
            <p className="title">Descrição</p>
            <p className="description">{uniqueVehicle.description}</p>
          </Content>
          <Content
            justify="flex-start"
            align="flex-start"
            alignDescription="flex-start"
          >
            <p className="title">Fotos</p>
            {/* {uniqueVehicle.vehiclesImages.map((image) =><img src={image} alt="Imagem do veículo"/>)} */}
          </Content>
          <Content
            justify="flex-start"
            align="center"
            alignDescription="center"
          >
            <figure className="userPhoto">
              <img
                className="userPhoto"
                src={uniqueVehicle.user.image}
                alt=""
              />
            </figure>
            <p className="description">{uniqueVehicle.user.bio}</p>
            <button
              className="userPerfil"
              id={uniqueVehicle.user.id}
              onClick={async () => {
                await retrieveUserSeller(uniqueVehicle.user.id);
                nav("/seller");
              }}
            >
              Ver todos anúncios
            </button>
            <button className="userPerfil"> Excluir anúncio</button>
           
            {<EditModal id={vehicleID}/>}
          </Content>
          <CommentList/>
        </section>
        
        <Footer />
      </Main>
    );
  }
  return (
    <Main>
      <NavBar />
      <HeaderStyle>
        <figure>
          <img src={uniqueVehicle.image} alt="Imagem do veículo" />
        </figure>
      </HeaderStyle>
      <section className="section">
        <Content
          justify="space-between"
          align="flex-start"
          alignDescription="flex-start"
        >
          <p className="title">{uniqueVehicle.title}</p>
          <div className="footerCard">
            <p>{uniqueVehicle.year}</p>
            <p>{uniqueVehicle.km} KM</p>
            <p className="price">R$ {uniqueVehicle.price}</p>
          </div>
          <button>Comprar</button>
        </Content>
        <Content
          justify="flex-start"
          align="flex-start"
          alignDescription="flex-start"
        >
          <p className="title">Descrição</p>
          <p className="description">{uniqueVehicle.description}</p>
        </Content>
        <Content
          justify="flex-start"
          align="flex-start"
          alignDescription="flex-start"
        >
          <p className="title">Fotos</p>
          {/* { uniqueVehicle.vehiclesImages.map((image) =><img src={image} alt="Imagem do veículo"/>)} */}
        </Content>
        <Content justify="flex-start" align="center" alignDescription="center">
          <figure className="userPhoto">
            <img className="userPhoto" src={uniqueVehicle.user.image} alt="" />
          </figure>
          <p className="description">{uniqueVehicle.user.bio}</p>
          <button className="userPerfil" id={uniqueVehicle.user.id}>
            Ver todos anúncios
          </button>
        </Content>
      </section>
      <Footer />
    </Main>
  );
}

export default ProductDash;

// className="userPerfil"
