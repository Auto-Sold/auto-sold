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
import { IAnnounceData } from "../interface";
import { Vehicle } from "../interface";


export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;
    postAnnouncement: (data: IAnnounceData) => void;
    patchAnnounce: (data: IAnnounceData, id: string) => void;

    vehicles:  Vehicle[]
    uniqueVechicle: Vehicle
    modalDeleteAdOpen: boolean;
    setModalDeleteAdOpen: Dispatch<SetStateAction<boolean>>;

    open: () => void;
    close: () => void;

    handleVehiclesMotorcycles: (arr: Vehicle[]) => Vehicle[]
    handleVehiclesCars: (arr: Vehicle[]) => Vehicle[]


    // editCard: string | null;
    // friendIdState: string | undefined;
    // setEditCard: Dispatch<SetStateAction<string | null>>;
    // setfriendIdState: Dispatch<SetStateAction<string | undefined>>;
    // addFriend: (email: string, name: string, phone: string) => void;
    // removeFriend: (data: string) => void;
    // editPhone: (data: any) => void;
}

export interface ICommentsProps {
    children: ReactNode;

}


export const CommentsContext = createContext<ICommentsAuth>({} as ICommentsAuth)

function CommentsProvider({ children }: ICommentsProps) {
    const [modalDeleteAdOpen, setModalDeleteAdOpen] = useState<boolean>(false)
    const [announceModal, setAnnounceModal] = useState<boolean>(false)
    const [vehicles, setVehicles] = useState<Vehicle[]>([]); // Para o get
    const [uniqueVechicle, setUniqueVechicle] = useState<Vehicle>({} as Vehicle)

    const close = () => setModalDeleteAdOpen(false)
    const open = () => setModalDeleteAdOpen(true)

    const postAnnouncement = (data: IAnnounceData) => {
        if (data.announceType == "Leilão") {
            return alert("Leilão não disponível")
        }

        const announce = {
            announceType: data.announceType,
            title: data.title,
            year: data.year,
            km: data.km,
            price: data.price,
            description: data.description,
            vehicleType: data.vehicleType,
            image: data.image,
        }
        console.log(data)
        console.log(announce)
        API.post(`/announce`, announce)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err.response.data.message) })
    }
    const patchAnnounce = (data:IAnnounceData, id: string) => {
        const editData = {
          title: data.title,
          year: data.year,
          km: data.km,
          price: data.price,
          description: data.description,
          image: data.image,

        };
    
        API.patch(`/announce:${id}`, editData);
    
        console.log(data);
      };

    //Para o retrive

    const handleVehiclesCars = (arr: Vehicle[]) => {
        // Tratativa para receber só carros e ativos
        const result = arr.filter(function isActive(vehicle) {

            return vehicle.isActive === true && vehicle.vehicleType === "Carro" && vehicle.announceType !== "Leilão"
        })
      
        return result
    }
    const handleVehiclesMotorcycles = (arr: Vehicle[]) => {
        // Tratativa para receber só motos e ativas
        const result = arr.filter(function isActive(vehicle) {
            return vehicle.isActive === true && vehicle.vehicleType === "Moto" && vehicle.announceType !== "Leilão"
        })
        return result
    }

    // =========================CRUD==========ANNOUNCES=======================================
    useEffect(() => {
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
    }, [])

    // Retrive um announce específico por ID
    async function retrieveAnnounce(id: string) {
        await API
            .get("/annouce" + id)
            .then((response) => {
                setUniqueVechicle(response.data)
            })
    }

    // =========================CRUD==========COMMENTS=======================================

    
    return (

        <AnnounceContext.Provider value={{ postAnnouncement, patchAnnounce, announceModal, setAnnounceModal, vehicles, uniqueVechicle, handleVehiclesMotorcycles, handleVehiclesCars, setModalDeleteAdOpen, modalDeleteAdOpen, open, close }}>


            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider