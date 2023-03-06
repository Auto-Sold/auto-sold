import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { API } from "../api";
import { IAdressUser, IUser } from "../interface";

import {  useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


export interface IUserAuth {
    objUser: object,
    setObjUser: React.Dispatch<React.SetStateAction<IUser>>
    sellerData: IUser
    retrieveUserSeller: (id: string) => void
    registerUser:(data: object) => Promise<number>
    login:(data: object) => void
    

}
export interface IUserProps{
    children: ReactNode;
}
export const userContext = createContext<IUserAuth>({} as IUserAuth)

export const UserProvider = ({ children }: IUserProps) => {
    const [sellerData, setSellerData] = useState<IUser>({} as IUser)
    const [objUser, setObjUser] = useState<IUser>({} as IUser)
    const token = window.localStorage.getItem("@TOKEN" as string)
    const userId = window.localStorage.getItem("@ID" as string)
    const navigate = useNavigate()

    const retrieveUserSeller = async (userId: string) =>{
        await API
        .get(`users/seller/${userId}`)
        .then((response) => {
            setSellerData(response.data[0])
        })
        .catch((error) => {
            alert("Ocorreu um erro, tente novamente")
        })

    }

    const login = async (data: object) => { 
        
        await API.post("/login", data)
        .then((res) => {
            
            
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", res.data.token)

            const token = window.localStorage.getItem("@TOKEN")

            const decoded = jwtDecode(token!)
            const { id }: any = decoded
            window.localStorage.setItem("@ID", id)


            if (res.status == 200) {
                navigate("/")
           }

            
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        const loadUser = async () => {

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


    async function registerUser(data: object) {
        let statusCode = 0 
        
        await API.post("/users", data).then((res) => statusCode = res.status).catch((err) => console.log(err))
        
        return statusCode
    } 
    
    return (
        <userContext.Provider value={{objUser, setObjUser, retrieveUserSeller, sellerData,login ,registerUser}}>

            {children}

        </userContext.Provider>
    )
    
}