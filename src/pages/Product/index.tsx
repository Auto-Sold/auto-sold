
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CommentList from "../../components/Comments"
import Footer from "../../components/Footer"
import { ModalDeleteAd } from "../../components/Modals/ModalDeleteAd"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { userContext } from "../../contexts/userContext"
import { IVehicleImages } from "../../interface"
import  {Main, HeaderStyle, Content } from "./styles"
import  { EditModal }  from "../../components/editModal"
import { ModalDeleteUser } from "../../components/Modals/ModalDeleteUser"

function ProductDash() {


    

const {  retrieveUserSeller, modalDeleteUserOpen, setModalDeleteUserOpen, objUser } = useContext(userContext)


  const token = window.localStorage.getItem("@TOKEN" as string)
  const userId = window.localStorage.getItem("@ID" as string)
  const {idAnnounce} = useParams()
  const [showModal, setShowModal] = useState(false);
  const { uniqueVehicle, retrieveAnnounce, load, loadRetrieve,  modalDeleteAdOpen, setModalDeleteAdOpen, close, open, announceModal, setAnnounceModal, vehicles} = useContext(AnnounceContext)

    const nav = useNavigate()
    const vehicleID = idAnnounce;

    useEffect(()  =>{
      retrieveAnnounce(idAnnounce)
    },[idAnnounce])
    
    
  
    const user = true;
    

    if (loadRetrieve){
        return <div>Carregando Página</div>
      }
    if (objUser.email === uniqueVehicle.user.email){

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
            {uniqueVehicle.vehiclesImages? (uniqueVehicle.vehiclesImages.map((vehicle) => <img src={vehicle.image} alt="Imagem do veículo"/>)): "Não há fotos cadastradas"}
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
              onClick= {()=> 
                
                nav(`/seller/${uniqueVehicle.user.id}`)}
            >
              Ver todos anúncios
                </button>
                    
            {modalDeleteAdOpen && <ModalDeleteAd titleHeader="Excluir Anúncio" paragraphBold="Tem certeza que deseja remover este Anúncio?" paragraphNormal="Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores." id={vehicleID} />}
            <button className="userPerfil" onClick={() => (modalDeleteAdOpen ? close() : open())}> Excluir anúncio</button>
           
            {<EditModal id={vehicleID} />}
            
            
           
            
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
      <button className="userPerfil" id={uniqueVehicle.user.id} onClick= {()=> nav(`/seller/${uniqueVehicle.user.id}`)}>
        Ver todos anúncios
      </button>
    </Content>
    <CommentList/>
  </section>
  <Footer />
</Main>
);
}

export default ProductDash;

// className="userPerfil"
