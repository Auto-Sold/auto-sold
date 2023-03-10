import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { API } from "../api";
import { IAdressUser, ISendResetPass, IUser } from "../interface";
import { IResetPassword } from "../pages/Reset Password";
import {  useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { IOnSubmitFunction } from "../pages/Register";


export interface IUserAuth {
    objUser: IOnSubmitFunction,
    setObjUser: React.Dispatch<React.SetStateAction<IOnSubmitFunction>>
    sellerData: IUser
    retrieveUserSeller: (id: string) => void
    registerUser: (data: IOnSubmitFunction) => void
    login: (data: object) => void
    modalDeleteUserOpen: boolean
    setModalDeleteUserOpen: Dispatch<SetStateAction<boolean>>
    modalUpdateUser: boolean
    setModalUpdateUser: Dispatch<SetStateAction<boolean>>
    deleteUserId: (id: string) => void
    updateUser: (data: IOnSubmitFunction, id: string) => void
    open: () => void
    close: () => void
    
    sendResetPassword: (data: ISendResetPass) => void;
    resetPassword: (data: IResetPassword, tokenReset: string | undefined) => void;
    loadRetrieveSeller: boolean;
    
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
    const [loadRetrieveSeller, setLoadRetrieveSeller] = useState<boolean>(true)
    const token = window.localStorage.getItem("@TOKEN" as string)
    const userId = window.localStorage.getItem("@ID" as string)
    const navigate = useNavigate()
    const close = () => {
        setModalDeleteUserOpen(false)
       
    }
    const open = () => {
        setModalDeleteUserOpen(true)
        
    }


    const retrieveUserSeller = async (userId: string | undefined) =>{

        await API
        .get(`users/seller/${userId}`)
        .then((response) => {
            console.log(response.data);
            
            setSellerData(response.data)
            
        }).then(()=>{
            setLoadRetrieveSeller(false)
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
        
        await API.post("/users", data).then((res) => statusCode = res.status).catch((err) => console.log(err))
        
        if (statusCode === 201) {
            navigate("/login")
        }
    } 
    
    const deleteUserId = async (id: string) => {
        let statusCode = 0 
        await API.delete(`/users/${id}`).then((res)=> statusCode = res.status  )
        
        if (statusCode === 204) {
            window.localStorage.clear()
            setModalUpdateUser(false)
            navigate("/register")
        }
    }

    async function updateUser(data: IOnSubmitFunction , id: string) {
        let statusCode = 0

        await API.patch(`/users/${id}`, data).then((res) => statusCode = res.status)
        
        if (statusCode === 200) {
          setModalUpdateUser(false)
        }
        
    }

    

    // ================RESET PASSWORD =============================

    async function sendResetPassword(data: ISendResetPass){
        await API.post("/users/resetPassword")
        .then((response) => {
            alert(response.data.message);
            console.log(response)
            navigate("/login")
        })
        .catch((err) => console.log(err))
    }

    async function resetPassword(data: IResetPassword, tokenReset: string | undefined){
        
        await API.patch(`/users/password/${tokenReset}`, data)
        .then((response) => {
            alert(response.data.message);
            console.log(response)
            navigate("/login");
        })
        .catch((err) => console.log(err))
    }

    return (
        <userContext.Provider value={{objUser, setObjUser,loadRetrieveSeller ,retrieveUserSeller, sellerData,login ,registerUser, sendResetPassword, resetPassword, setModalDeleteUserOpen,modalDeleteUserOpen, setModalUpdateUser, modalUpdateUser, deleteUserId, updateUser, open, close  }}>


            {children}

        </userContext.Provider>
    )
    
}