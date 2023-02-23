import React, { useState } from "react";
import styled from "styled-components";

interface Car {
  id: number;
  model: string;
  brand: string;
  km: number;
  year: number;
  price: number;
  description: string;
}

const CarListContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  overflow-x: auto;
`;

const CarCard = styled.li`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const ContainerCarData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([
    {
      id: 1,
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      price: 95000,
      km: 20000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 2,
      brand: "Honda",
      model: "Civic",
      year: 2022,
      price: 105000,
      km: 30000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 3,
      brand: "Ford",
      model: "Mustang",
      year: 2019,
      price: 200000,
      km: 50000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 4,
      brand: "BMW",
      model: "M5",
      year: 2020,
      price: 350000,
      km: 10000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 5,
      brand: "Chevrolet",
      model: "Camaro",
      year: 2018,
      price: 150000,
      km: 60000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 6,
      brand: "Audi",
      model: "RS7",
      year: 2021,
      price: 450000,
      km: 5000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    {
      id: 7,
      brand: "Porsche",
      model: "911",
      year: 2022,
      price: 750000,
      km: 2000,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
  ]);

  return (
    <div>
      <h2>Carros</h2>
      <CarListContainer>
        {cars.map((car: Car) => (
          <CarCard key={car.id}>
            <h3>
              {car.model}-{car.brand}
            </h3>
            <p>{car.description}</p>
            <ContainerCarData>
              <p>KM:{car.km}</p>
              <p>{car.year}</p>
              <p>Price: R${car.price}</p>
            </ContainerCarData>
            {/* <button>Comprar</button> */}
          </CarCard>
        ))}
      </CarListContainer>
    </div>
  );
};

export default CarList;
