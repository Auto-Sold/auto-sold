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
import { useNavigate } from "react-router-dom";
import { userContext } from "./userContext";


export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;
    postAnnouncement: (data: IAnnounceData) => void;
    patchAnnounce: (data: FieldValues, id: string) => void;
    getAnnounces: () => void;
    getAnnouncesSeller:(id: string|undefined) => void;
    retrieveAnnounce: (id: string | undefined) => void;
    getComments: (id: string | undefined) => void;
    postComments: (id: string | undefined, data: IFormComment) => void;
    vehicles:  Vehicle[]
    comments: IComments[]
    uniqueVehicle: Vehicle
    modalDeleteAdOpen: boolean;
    setOpenEditModal: Dispatch<SetStateAction<boolean>>;
    openEditModal: boolean;
    loadComment: boolean;
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
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [loadComment, setLoadComment] = useState<boolean>(true)

    const nav = useNavigate()
    //Para o retrive
    
    const handleVehiclesCars = (arr: IArrPayLoad) => {
        // Tratativa para receber s?? carros e ativos
        
        
        

        
        const result = arr.vehicles.filter(vehicle => vehicle.isActive === true && vehicle.vehicleType === "Carro" && vehicle.announceType !== "Leil??o")
        return result
    }
    const handleVehiclesMotorcycles = (arr: IArrPayLoad) => {
        // Tratativa para receber s?? motos e ativas
        const result = arr.vehicles.filter(vehicle => vehicle.isActive === true && vehicle.vehicleType === "Moto" && vehicle.announceType !== "Leil??o")
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
        

        async function getAnnouncesSeller(id: string|undefined) {
            await API
            .get(`/announce?user=${id}`)
            .then((response) => {
                    console.log(response.data);
                    
                    setVehicles(response.data)
                    
                    
                }).then(()=>{
                    setLoad(false)
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente")
                })
            }
        // Retrive um announce espec??fico por ID
        
        async function retrieveAnnounce(id: string | undefined) {
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
            if (data.announceType == "Leil??o") {
                return alert("Leil??o n??o dispon??vel")
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
                .then(res => { 
                    console.log(res)
                    getAnnounces()
                    setAnnounceModal(false)
                
                })
                .catch(err => { console.log(err.response.data.message) })
        }
        async function patchAnnounce (data:FieldValues, id: string){
            console.log(data);
            
            const handleId = Object.values(id)[0];
            API.defaults.headers.common.Authorization = `Bearer ${token}`;
             await API
             .patch(`/announce/${id}`, data)
             .then(res=>{
                console.log(res.data);
                setOpenEditModal(false)
                retrieveAnnounce(id);
                nav( `/announce/${id}`)
                
             })
             .catch(err => console.log(err)); 
          };
        
        // =========================CRUD==========COMMENTS=======================================
        
        
        
        async function getComments(id:string | undefined) {
            await API
                .get(`/comments/${id}`)
                .then((response) => {
                    setComments(response.data)
                }).then(() => {
                    setLoadComment(false)
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente")
                })
        }
        
        async function postComments(id:string | undefined, data: IFormComment) {
            API.defaults.headers.common.Authorization = `Bearer ${token}`;
            await API
                .post(`/comments/${id}`, data)
                .then((response) => {
                    getComments(id)
                })
                .catch((error) => {
                    alert("Ocorreu um erro, tente novamente")
                })
        }
        useEffect(() => {
    }, [])

    

        


    return (

        <AnnounceContext.Provider value={{ getAnnouncesSeller,
            postAnnouncement, patchAnnounce,getAnnounces, 
            load, loadRetrieve,retrieveAnnounce, getComments, postComments,announceModal, setAnnounceModal, 
            vehicles, uniqueVehicle, comments, handleVehiclesMotorcycles, 
            handleVehiclesCars, setModalDeleteAdOpen, 
            modalDeleteAdOpen, open, close,openEditModal,
            setOpenEditModal, loadComment }}>


            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider