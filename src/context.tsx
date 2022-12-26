import React, { useState, useContext } from 'react'
import { pages } from './navItems'
import PagesModel from './types/PagesModel'

type AppContextType = null | {
    submenu: PagesModel | undefined
    setSubmenu: React.Dispatch<React.SetStateAction<PagesModel | undefined>>
    openSubmenu: (text: string) => void
}

type Props = {
    children: React.ReactNode
}

export const AppContext = React.createContext<AppContextType>(null)

export const AppProvider = ({ children }: Props) => {
    const [submenu, setSubmenu] = useState<PagesModel | undefined>({ page: '', subPages: [] })

    const openSubmenu = (text: string) => {
        // if text coming from the button matching the page value of the sublink, then return that
        const submenu = pages.find((link) => link.page === text)
        setSubmenu(submenu)
    }

    return (
        <AppContext.Provider
            value={{ submenu, setSubmenu, openSubmenu }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const appContext = useContext(AppContext)
    if (appContext === null) throw new Error("You need to use this context inside the provider")
    return appContext
}