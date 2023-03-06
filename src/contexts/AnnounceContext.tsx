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
import { IAnnounceData, IComments, IFormComment } from "../interface";
import { Vehicle } from "../interface";
import { object } from "yup";
import {FieldValues} from "react-hook-form";


export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;
    postAnnouncement: (data: IAnnounceData) => void;
    patchAnnounce: (data: FieldValues, id: string) => void;
    getAnnounces: () => void;
    retrieveAnnounce: (id: string) => void;
    getComments: (id: string) => void;
    postComments: (id: string, data: IFormComment) => void;
    vehicles:  Vehicle[]
    comments: IComments[]
    uniqueVehicle: Vehicle
    modalDeleteAdOpen: boolean;
    setModalDeleteAdOpen: Dispatch<SetStateAction<boolean>>;
    

    open: () => void;
    close: () => void;
    load: boolean
    loadRetrieve: boolean
    handleVehiclesMotorcycles: (arr: IArrPayLoad) => Vehicle []
    handleVehiclesCars: (arr: IArrPayLoad) => Vehicle[]


    // editCard: string | null;
    // friendIdState: string | undefined;
    // setEditCard: Dispatch<SetStateAction<string | null>>;
    // setfriendIdState: Dispatch<SetStateAction<string | undefined>>;
    // addFriend: (email: string, name: string, phone: string) => void;
    // removeFriend: (data: string) => void;
    // editPhone: (data: any) => void;
}

export interface IAnnounceProps {
    children: ReactNode;

}

interface IArrPayLoad{
    vehicles: Vehicle[]
}
export const AnnounceContext = createContext<IAnnounceAuth>({} as IAnnounceAuth)

function AnnounceProvider({ children }: IAnnounceProps) {
    const token = window.localStorage.getItem("@TOKEN" as string)
    const userId = window.localStorage.getItem("@ID" as string)
    const [modalDeleteAdOpen, setModalDeleteAdOpen] = useState<boolean>(false)
    const [announceModal, setAnnounceModal] = useState<boolean>(false)
    const [vehicles, setVehicles] = useState<Vehicle[]>([]); // Para o get
    const [uniqueVehicle, setUniqueVechicle] = useState<Vehicle>({} as Vehicle)
    const [comments, setComments] = useState<IComments[]>([])
    const [load, setLoad] = useState<boolean>(true)
    const [loadRetrieve, setLoadRetrieve] = useState<boolean>(true)
    const close = () => setModalDeleteAdOpen(false)
    const open = () => setModalDeleteAdOpen(true)

    
    //Para o retrive
    
    const handleVehiclesCars = (arr: IArrPayLoad) => {
        // Tratativa para receber só carros e ativos
        const result = arr.vehicles.filter(vehicle => vehicle.isActive === true && vehicle.vehicleType === "Carro" && vehicle.announceType !== "Leilão")
        return result
    }
    const handleVehiclesMotorcycles = (arr: IArrPayLoad) => {
        // Tratativa para receber só motos e ativas
        const result = arr.vehicles.filter(vehicle => vehicle.isActive === true && vehicle.vehicleType === "Moto" && vehicle.announceType !== "Leilão")
        return result
    }
    
    // =========================CRUD==========ANNOUNCES=======================================
    
    async function getAnnounces() {
        await API
        .get(`/announce`)
        .then((response) => {
                setVehicles(response.data)
                
                
            }).then(()=>{
                setLoad(false)
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
        }
        
        useEffect(() => {
            getAnnounces()
        }, [])
        
        // Retrive um announce específico por ID
        
        async function retrieveAnnounce(id: string) {
            await API
            .get("/announce/"+id)
            .then((response) => {
                setUniqueVechicle(response.data[0])
                
                
            })
            .then(()=>{
                setLoadRetrieve(false)
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente")
            })
            
        }

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
            API.defaults.headers.common.Authorization = `Bearer ${token}`;
            API.post(`/announce`, announce)
                .then(res => { console.log(res) })
                .catch(err => { console.log(err.response.data.message) })
        }
        async function patchAnnounce (data:FieldValues, id: string){
            const editData = {
                announceType: data.announceType,
                title: data.title,
                year: data.year,
                km: data.km,
                price: data.price,
                description: data.description,
                vehicleType: data.vehicleType,
                image: data.image,
    
            };
            API.defaults.headers.common.Authorization = `Bearer ${token}`;
             await API
             .patch(`/announce/${id}`, editData)
             .then(res=>{
                console.log(res.data);
                
             })
             .catch(err => console.log(err)); 
          };
        
        // =========================CRUD==========COMMENTS=======================================
        
        
        
        async function getComments(id:string) {
            await API
                .get(`/comments/${id}`)
                .then((response) => {
                    setComments(response.data)
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente")
                })
        }
        
        async function postComments(id:string, data: IFormComment) {
            API.defaults.headers.common.Authorization = `Bearer ${token}`;
            await API
                .post(`/comments/${id}`, data)
                .then((response) => {
                    getComments(id)
                    setComments(response.data)
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente")
                })
        }
        useEffect(() => {
    }, [])

    

        


    return (

        <AnnounceContext.Provider value={{ 
            postAnnouncement, patchAnnounce,getAnnounces, 
            load, loadRetrieve,retrieveAnnounce, getComments, postComments,announceModal, setAnnounceModal, 
            vehicles, uniqueVehicle, comments, handleVehiclesMotorcycles, 
            handleVehiclesCars, setModalDeleteAdOpen, modalDeleteAdOpen, open, close }}>


            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider