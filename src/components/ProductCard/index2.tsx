import React, { useState } from 'react';
import styled from 'styled-components';

interface Car {
  id: number
  model: string
  brand: string
  km: number
  year: number
  price: number
  description:string
}

const CarList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([
    {id: 1, brand: "Toyota", model: "Corolla", year: 2021, price: 95000, km:20000, description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
    {id: 2, brand: "Honda", model: "Civic", year: 2022, price: 105000, km:30000, description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."},
    {id: 3, brand: "Ford", model: "Mustang", year: 2019, price: 200000, km:50000, description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."}
  ]);

  return (
    <CarListContainer>
      <h2>Car List</h2>
      <CarListUL>
        {cars.map((car: Car) => (
          <CarListItem key={car.id}>
            <CarModel>{car.model}</CarModel>
            <CarBrand>{car.brand}</CarBrand>
            <CarDescription>{car.description}</CarDescription>
            <CarDetailsContainer>
              <CarDetail>{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</CarDetail>
              <CarDetail>{car.year}</CarDetail>
            </CarDetailsContainer>
            <CarButton>Comprar</CarButton>
          </CarListItem>
        ))}
      </CarListUL>
    </CarListContainer>
  );
};

const CarListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CarListUL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const CarListItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const CarModel = styled.h3`
  margin: 0;
`;

const CarBrand = styled.p`
  margin: 0;
`;

const CarDescription = styled.p`
  margin: 1rem 0;
`;

const CarDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CarDetail = styled.p`
  margin: 0;
`;

const CarButton = styled.button`
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0055b3;
  }
`;

export default CarList;
