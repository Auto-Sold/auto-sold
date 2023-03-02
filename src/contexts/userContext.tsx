import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { API } from "../api";
import { IUser } from "../interface";




export interface IUserAuth {
    objUser: object,
    setObjUser: React.Dispatch<React.SetStateAction<IUser>>

}
export interface IUserProps{
    children: ReactNode;
}
export const userContext = createContext<IUserAuth>({} as IUserAuth)

export const AnnounceProvider = ({ children }: IUserProps) => {
    const [objUser, setObjUser] = useState<IUser>({} as IUser)
    
    
    useEffect(() => {
        const loadUser = async () => {
            const token = window.localStorage.getItem("@TOKEN" as string)
            const userId = window.localStorage.getItem("@ID" as string)

            if (token) {
                try {
                    API.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const { data } = await API.get(`/users/${userId}`)
                    setObjUser(data)
                    
                  
                } catch (err) {
                    console.log(err);
                }

            
    
            }
        }
        loadUser()
    }, [])

    
    return (
        <userContext.Provider value={{objUser, setObjUser}}>

            {children}

        </userContext.Provider>
    )
    
}