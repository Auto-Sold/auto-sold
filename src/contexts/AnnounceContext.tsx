import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";
import { API } from "../api";
import { IAnnounceData } from "../interfaces";

export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;
    postAnnouncement: (data: IAnnounceData) => void;
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

export const AnnounceContext = createContext<IAnnounceAuth>({} as IAnnounceAuth)

function AnnounceProvider({ children }: IAnnounceProps) {
    const [announceModal, setAnnounceModal] = useState<boolean>(false)

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
            galeryImage1: data.galeryImage1,
            galeryImage2: data.galeryImage2,
            galeryImage3: data.galeryImage3,
            galeryImage4: data.galeryImage4,
            galeryImage5: data.galeryImage5,
            galeryImage6: data.galeryImage6,

        }
        console.log(data)
        console.log(announce)
        API.post(`/announce`, announce)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err.response.data.message) })
    }

    return (
        <AnnounceContext.Provider value={{
            announceModal,
            setAnnounceModal,
            postAnnouncement
        }}>
            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider