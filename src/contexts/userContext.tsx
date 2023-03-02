import { createContext, ReactNode, useEffect, useState } from "react";




export interface IUserAuth {

}
export interface IUserProps{
    children: ReactNode;
}
export const userContext = createContext<IUserAuth>({} as IUserAuth)

export const AnnounceProvider = ({ children }: IUserProps) => {
    
    return (
        <userContext.Provider value={{}}>

            {children}

        </userContext.Provider>
    )
    
}