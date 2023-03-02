import React, { useContext, useEffect, useRef, useState } from "react";
import { AnnounceContext } from "../../contexts/AnnounceContext";
import { Vehicle } from "../../interface";
import { CardVehicle, VehiclesListStyle } from "./styles";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import { useNavigate } from "react-router-dom";



const VehiclesList = (vehicles: any) => {
  const user = true


  const  { handleVehiclesCars, handleVehiclesMotorcycles, getAnnounces, retrieveAnnounce, load} = useContext(AnnounceContext)
  const carrouselCarros = useRef(null)
  const carrouselMotos = useRef(null)
  
  const handleLeftClick = (e:any, carrousel: any) =>{
    e.preventDefault();
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth
  }
  const handleRightClick = (e:any, carrousel: any) =>{
    e.preventDefault();
    carrousel.current.scrollLeft += carrousel.current.offsetWidth

  }
  const nav = useNavigate()
  const handleCar = handleVehiclesCars(vehicles)
  
  const handleMoto = handleVehiclesMotorcycles(vehicles)
  
  if (load){
    return <div>Carregando Página</div>
  }
  if (user){
    return (
      <VehiclesListStyle>
        <h3>Carros</h3>
        
        <ul ref={carrouselCarros}>
          {handleCar.map((vehicle:Vehicle) =>  (
            <CardVehicle id={vehicle.id} key={vehicle.id} onClick={async()=>{
              await retrieveAnnounce(vehicle.id)
              nav("/announce")
              }}>
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
                <p className="price">R${vehicle.price}</p>
              </div>
              </div>
            </CardVehicle>
          ))}
        </ul>
        <div className="buttonsCarrousel" >
        <button onClick={(event) => handleLeftClick(event, carrouselCarros)}><img src={arrowLeft} alt="LeftArrow"/></button>
        <button onClick={(event) =>handleRightClick(event, carrouselCarros)}><img src={arrowRight} alt="RightArrow"/></button>
        </div>
        <h3>Motos</h3>
        <ul ref={carrouselMotos}>
          {handleMoto.map((vehicle:Vehicle) =>  (
            <CardVehicle id={vehicle.id} key={vehicle.id} onClick={()=>{
              nav("/announce")
              retrieveAnnounce(vehicle.id)}}>
              <figure onClick={() =>{

              }}>
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
                <p className="price">R${vehicle.price}</p>
              </div>
              </div>
            </CardVehicle>
          ))}
        </ul>
        <div className="buttonsCarrousel" >
        <button onClick={(event) => handleLeftClick(event, carrouselMotos)}><img src={arrowLeft} alt="LeftArrow"/></button>
        <button onClick={(event) =>handleRightClick(event, carrouselMotos)}><img src={arrowRight} alt="RightArrow"/></button>
        </div>
  
    </VehiclesListStyle>
    )
  }
  return (
    <VehiclesListStyle>
      <h3>Carros</h3>
      
      <ul ref={carrouselCarros}>
        {handleVehiclesCars(vehicles).map((vehicle:Vehicle) =>  (
          <CardVehicle id={vehicle.id} key={vehicle.id} onClick={()=>{
            nav("/announce")
            retrieveAnnounce(vehicle.id)}}>
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
              <p className="price">R${vehicle.price}</p>
            </div>
            </div>
          </CardVehicle>
        ))}
      </ul>
      <div className="buttonsCarrousel" >
      <button onClick={(event) => handleLeftClick(event, carrouselCarros)}><img src={arrowLeft} alt="LeftArrow"/></button>
      <button onClick={(event) =>handleRightClick(event, carrouselCarros)}><img src={arrowRight} alt="RightArrow"/></button>
      </div>
      <h3>Motos</h3>
      <ul ref={carrouselMotos}>
        {handleVehiclesMotorcycles(vehicles).map((vehicle:Vehicle) =>  (
          <CardVehicle id={vehicle.id} key={vehicle.id} onClick={()=>{
            nav("/announce")
            retrieveAnnounce(vehicle.id)}}>
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
              <p className="price">R${vehicle.price}</p>
            </div>
            </div>
          </CardVehicle>
        ))}
      </ul>
      <div className="buttonsCarrousel" >
      <button onClick={(event) => handleLeftClick(event, carrouselMotos)}><img src={arrowLeft} alt="LeftArrow"/></button>
      <button onClick={(event) =>handleRightClick(event, carrouselMotos)}><img src={arrowRight} alt="RightArrow"/></button>
      </div>

  </VehiclesListStyle>
  )
};

export default VehiclesList;

