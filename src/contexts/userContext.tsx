import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { API } from "../api";
import { IAdressUser, IUser } from "../interface";

import {  useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { IOnSubmitFunction } from "../pages/Register";


export interface IUserAuth {
    objUser: IOnSubmitFunction,
    setObjUser: React.Dispatch<React.SetStateAction<IOnSubmitFunction>>
    sellerData: IUser
    retrieveUserSeller: (id: string) => void
    registerUser:(data: IOnSubmitFunction) => Promise<number>
    login: (data: object) => void
    modalDeleteUserOpen: boolean
    setModalDeleteUserOpen: Dispatch<SetStateAction<boolean>>
    modalUpdateUser: boolean
    setModalUpdateUser: Dispatch<SetStateAction<boolean>>
    deleteUserId: (id: string) => Promise<number>
    updateUser:(data: IOnSubmitFunction, id:string) => Promise<number>
    open: () => void
    close: () => void
    

}
export interface IUserProps{
    children: ReactNode;
}
export const userContext = createContext<IUserAuth>({} as IUserAuth)

export const UserProvider = ({ children }: IUserProps) => {
    const [sellerData, setSellerData] = useState<IUser>({} as IUser)
    const [objUser, setObjUser] = useState<IOnSubmitFunction>({} as IOnSubmitFunction)
    const [modalDeleteUserOpen, setModalDeleteUserOpen] = useState<boolean>(false)
    const [modalUpdateUser,setModalUpdateUser ] = useState<boolean>(false)
    const token = window.localStorage.getItem("@TOKEN" as string)
    const userId = window.localStorage.getItem("@ID" as string)
    const navigate = useNavigate()

    const close = () => setModalDeleteUserOpen(false)
    const open = () => setModalDeleteUserOpen(true)

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


    async function registerUser(data: IOnSubmitFunction) {
        let statusCode = 0 
        console.log(data)
         

        await API.post("/users", data).then((res) => statusCode = res.status).catch((err) => console.log(err))
        
        return statusCode
    } 
    

    const deleteUserId = async (id: string) => {
        let statusCode = 0 
        const deleteUser = await API.delete(`/users/:${id}`).then((res)=> statusCode = res.status)
        
        return statusCode
    }

    async function updateUser(data: IOnSubmitFunction , id: string) {
        let statusCode = 0

        await API.patch(`/users/${id}`, data).then((res) => statusCode = res.status)
        
        return statusCode
    }

    
    return (
        <userContext.Provider value={{objUser, setObjUser, retrieveUserSeller, sellerData,login ,registerUser, setModalDeleteUserOpen, modalDeleteUserOpen, close, open, deleteUserId, modalUpdateUser,setModalUpdateUser, updateUser}}>

            {children}

        </userContext.Provider>
    )
    
}