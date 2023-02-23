import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";

export interface IAnnounceAuth {
    announceModal: boolean;
    setAnnounceModal: Dispatch<SetStateAction<boolean>>;
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

    return (
        <AnnounceContext.Provider value={{ announceModal, setAnnounceModal }}>
            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider