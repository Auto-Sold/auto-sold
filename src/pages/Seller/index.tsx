import { useContext } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import VehiclesList from "../../components/ProductCard"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import { userContext } from "../../contexts/userContext"
import { Content, HeaderStyle, Main } from "./styles"


function SellerDash() {
    const {uniqueVehicle} = useContext(AnnounceContext)
    const {objUser, sellerData} = useContext(userContext)
    
    const testUser ={
      
          id: "ashuashusah",
          completeName: "Celso Ramos",
          email: "celsinhoDaMassa@gmail.com",
          telephone: "41 998741477",
          cpf: "0688878922",
          image: "https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp?w=1920&ssl=1",
          vehicles: [    {
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
            },
          {
            id: "asasasasaasasas",
            announceType: "Venda",
            title: "CG 120",
            year: 2022,
            price: 105000,
            km: 30000,
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            vehicleType: "Moto",
            image: "https://motos-motor.com.br/m/wp-content/uploads/16/precos-tabela-honda-cg-150-titan-ks-mix.jpg",
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
            },
          {
            id: "asasassaa",
            announceType: "Venda",
            title: "Mustang",
            year: 2019,
            km: 50000,
            price: 200000,
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
          
            },
            {
              id: "asasassaa",
              announceType: "Venda",
              title: "Mustang",
              year: 2019,
              km: 50000,
              price: 200000,
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
            
              },
              {
                id: "asasassaa",
                announceType: "Venda",
                title: "Mustang",
                year: 2019,
                km: 50000,
                price: 200000,
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
              
                },
                {
                  id: "asasassaa",
                  announceType: "Venda",
                  title: "Mustang",
                  year: 2019,
                  km: 50000,
                  price: 200000,
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
                
                  },
                  {
                    id: "asasassaa",
                    announceType: "Venda",
                    title: "Mustang",
                    year: 2019,
                    km: 50000,
                    price: 200000,
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
                  
                    }], 
          bio: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, estou somente populando para fazer um teste, vamos popular esse texto, com a história de Celso Ramos, conhecido por vender ramos para tias da igreja, hj ele vende carros, e ai vai levar uma máquina do Celso Ramos?"
        }
    const user = true
    if (user){
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
                  <button>Editar Perfil</button>
              </div>
              <p className="bio">{sellerData.bio}</p>
              </div>
              <button onClick={() => console.log("Abrir editar perfil")}>Editar Perfil</button>
          </HeaderStyle>
          <VehiclesList vehicles={sellerData.vehicles}/>
          <Footer />
      </Main>
    )
    }
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
      <VehiclesList vehicles={sellerData.vehicles}/>
      <Footer />
  </Main>
)
}

export default SellerDash