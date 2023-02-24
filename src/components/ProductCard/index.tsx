import React, { useContext, useState } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { Vehicle } from "../../interface";
import { CardVehicle } from "./styles";




const VehiclesList: React.FC = () => {
  const  {vehicles, handleVehiclesCars, handleVehiclesMotorcycles} = useContext(AnnounceContext)
  const teste = [
    {
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
        vehicles: []
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
        vehicles: []
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
        vehicles: []
      }
    
      }
  ]
  return (
    <div>
      <h3>Carros</h3>
      <ul>
        {handleVehiclesCars(teste).map((vehicle:Vehicle) =>  (
          <CardVehicle id={vehicle.id} key={vehicle.id}>
            <figure>
            <img src={vehicle.image}/>
            </figure>
            <div className="textInformation">

            <h3 className="title">
              {vehicle.title}
            </h3>
            <p className="description">{vehicle.description}</p>
            <div className="userData">
              <figure className="userPhoto">
                <img src={vehicle.user.image}/>
              </figure>
              <p className="userName">{vehicle.user.completeName}</p>
            </div>
            <div className="footerCard">
              <p>KM:{vehicle.km}</p>
              <p>{vehicle.year}</p>
              <p>Price: R${vehicle.price}</p>
            </div>
            </div>
          </CardVehicle>
        ))}
      </ul>
      <h3>Motos</h3>
      <ul>
        {handleVehiclesMotorcycles(teste).map((vehicle:Vehicle) =>  (
          <CardVehicle id={vehicle.id} key={vehicle.id}>
            <figure>
            <img src={vehicle.image}/>
            </figure>
            <div className="textInformation">

            <h3 className="title">
              {vehicle.title}
            </h3>
            <p className="description">{vehicle.description}</p>
            <div className="userData">
              <figure className="userPhoto">
                <img src={vehicle.user.image}/>
              </figure>
              <p className="userName">{vehicle.user.completeName}</p>
            </div>
            <div className="footerCard">
              <p>KM:{vehicle.km}</p>
              <p>{vehicle.year}</p>
              <p>Price: R${vehicle.price}</p>
            </div>
            </div>
          </CardVehicle>
        ))}
      </ul>
    </div>
  );
};

export default VehiclesList;


// {vehicles.map((vehicle: Vehicle) => (
//   <VehicleCard key={vehicle.id}>
//     <h3>
//       {vehicle.model}-{vehicle.brand}
//     </h3>
//     <p>{vehicle.description}</p>
//     <ContainerVehicleData>
//       <p>KM:{vehicle.km}</p>
//       <p>{vehicle.year}</p>
//       <p>Price: R${vehicle.price}</p>
//     </ContainerVehicleData>
//     <button>Comprar</button>
//   </VehicleCard>
// ))}