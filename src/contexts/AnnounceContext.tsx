import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";

export interface IAnnounceAuth {
    // editCard: string | null;
    // createFriendCard: boolean;
    // friendIdState: string | undefined;
    // setEditCard: Dispatch<SetStateAction<string | null>>;
    // setCreateFriendCard: Dispatch<SetStateAction<boolean>>;
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
    return (
        <AnnounceContext.Provider value={{}}>
            {children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceProvider