import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState
} from "react";
import { API } from "../api";
import { Vehicle } from "../interface";


export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;

    vehicles:  Vehicle[]
    handleVehiclesMotorcycles: (arr: Vehicle[]) => Vehicle[]
    handleVehiclesCars: (arr: Vehicle[]) => Vehicle[]
    
    // editCard: string | null;
    // friendIdState: string | undefined;
    // setEditCard: Dispatch<SetStateAction<string | null>>;
    // setfriendIdState: Dispatch<SetStateAction<string | undefined>>;
    // addFriend: (email: string, name: string, phone: string) => void;
    // createFriend: (data: IAddFriendData) => void;
    // removeFriend: (data: string) => void;
    // editPhone: (data: any) => void;
}

export interface IAnnounceProps {
    children: ReactNode;
}



export const AnnounceContext = createContext<IAnnounceAuth>({} as IAnnounceAuth)

function AnnounceProvider({ children }: IAnnounceProps) {
    const [announceModal, setAnnounceModal] = useState<boolean>(false)
    const [vehicles, setVehicles] = useState<Vehicle[]>([]); // Para o get
    const [uniqueVechicle, setUniqueVechicle] = useState<Vehicle>({} as Vehicle) //Para o retrive

    const handleVehiclesCars = (arr: Vehicle[]) => {
        // Tratativa para receber só carros e ativos
        const result = arr.filter(function isActive(vehicle){
            
            return vehicle.isActive === true && vehicle.vehicleType === "Carro" && vehicle.announceType !== "Leilão"
        })
        console.log("Oraganizando carros");
        console.log(result);
        return result
      }
    const handleVehiclesMotorcycles = (arr: Vehicle[]) => {
        // Tratativa para receber só motos e ativas
        const result = arr.filter(function isActive(vehicle){
            return vehicle.isActive === true && vehicle.vehicleType === "Moto" && vehicle.announceType !== "Leilão"
        })
        return result
    }

// =========================CRUD==========ANNOUNCES=======================================
    useEffect(()=>{
        // Get all Announces
    async function getAnnounces() {
        await API
            .get("/announce")
            .then((response) => {
                setVehicles(response.data)
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })        
    }
    },[])    

        // Retrive um announce específico por ID
    async function retrieveAnnounce(id:string) {
        await API
            .get("/annouce"+id)
            .then((response) => {
                setUniqueVechicle(response.data)
            })
    }

// =========================CRUD==========COMMENTS=======================================


    return (
        <AnnounceContext.Provider value={{ announceModal, setAnnounceModal, vehicles, handleVehiclesMotorcycles, handleVehiclesCars }}>
            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider