import { useContext, useState } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import  {Main, HeaderStyle, Content } from "./styles"

function ProductDash() {
    const { uniqueVechicle} = useContext(AnnounceContext)

    const testVehicle ={
        id: "sasasasasasasD",
        announceType: "Venda",
        title: "Corolla",
        year: 2021,
        km: 20000,
        price: 95000,
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        vehicleType: "Carro",
        image: "https://www.agoramotor.com.br/wp-content/uploads/2020/09/toyota-corolla-2021.jpg",
        isActive: true,
        vehiclesImages: [],
        user: {
          id: "ashuashusah",
          completeName: "Celso Ramos",
          email: "celsinhoDaMassa@gmail.com",
          telephone: "41 998741477",
          cpf: "0688878922",
          image: "https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp?w=1920&ssl=1",
          vehicles: [], 
          bio: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,"
        }
        }
    const user = true;
    if (user){
        return (
            <Main>
                <NavBar/>
                <HeaderStyle>
                    <figure>
                        <img src={testVehicle.image} alt="Imagem do veículo" />
                    </figure>
                </HeaderStyle>
                <section className="section">
                <Content justify="space-between" align="flex-start" alignDescription="flex-start">
                     <p className="title">{testVehicle.title}</p>
                     <div className="footerCard">
                        <p>{testVehicle.year}</p>
                        <p>{testVehicle.km} KM</p>
                        <p className="price">R$ {testVehicle.price}</p>
                     </div>
                     <button>Comprar</button>
                </Content>
                <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
                    <p className="title">Descrição</p>
                    <p className="description">{testVehicle.description}</p>
                </Content>
                <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
                <p className="title">Fotos</p>
                {testVehicle.vehiclesImages.map((image) => 
                <img src={image} alt="Imagem do veículo"/>)}
                </Content>
                <Content justify="flex-start" align="center" alignDescription="center">
                    <figure className="userPhoto">
                        <img className="userPhoto" src={testVehicle.user.image} alt=""/>
                    </figure>
                    <p className="description">{testVehicle.user.bio}</p>
                    <button className="userPerfil" id={testVehicle.user.id}>Ver todos anúncios</button>
                    <button className="userPerfil"> Excluir anúncio</button>
                    <button className="userPerfil"> Editar anúncio</button>
                </Content>
                </section> 
                <Footer />
            </Main>
        )
    }
    return (
        <Main>
            <NavBar/>
            <HeaderStyle>
                <figure>
                    <img src={testVehicle.image} alt="Imagem do veículo" />
                </figure>
            </HeaderStyle>
            <section className="section">
            <Content justify="space-between" align="flex-start" alignDescription="flex-start">
                 <p className="title">{testVehicle.title}</p>
                 <div className="footerCard">
                    <p>{testVehicle.year}</p>
                    <p>{testVehicle.km} KM</p>
                    <p className="price">R$ {testVehicle.price}</p>
                 </div>
                 <button>Comprar</button>
            </Content>
            <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
                <p className="title">Descrição</p>
                <p className="description">{testVehicle.description}</p>
            </Content>
            <Content justify="flex-start" align="flex-start" alignDescription="flex-start">
            <p className="title">Fotos</p>
            {testVehicle.vehiclesImages.map((image) => 
            <img src={image} alt="Imagem do veículo"/>)}
            </Content>
            <Content justify="flex-start" align="center" alignDescription="center">
                <figure className="userPhoto">
                    <img className="userPhoto" src={testVehicle.user.image} alt=""/>
                </figure>
                <p className="description">{testVehicle.user.bio}</p>
                <button className="userPerfil" id={testVehicle.user.id}>Ver todos anúncios</button>
            </Content>
            </section> 
            <Footer />
        </Main>
    )
}

export default ProductDash
