import React, { useState, useContext, ReactNode } from 'react'
import { pages } from './navItems'
import PagesModel from './types/PagesModel'

type AppContextType = {
    openSubmenu: (text: string) => void
    subItems: PagesModel['subPages']
    anchorEl: any
    setAnchorEl: any
    featuresMenuIsOpen: Boolean
    // setFeaturesMenuIsOpen: any
    companyMenuIsOpen: Boolean
    // setCompanyMenuIsOpen: any
    closeSubmenu: any
    // updateArrowIcon: any
} | null

type Props = {
    children: React.ReactNode
}

const features = pages[0].subPages
const company = pages[1].subPages

export const AppContext = React.createContext<AppContextType>(null)

export const AppProvider = ({ children }: Props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [subItems, setSubItems] = useState<PagesModel['subPages']>([])
    const [featuresMenuIsOpen, setFeaturesMenuIsOpen] = useState(false)
    const [companyMenuIsOpen, setCompanyMenuIsOpen] = useState(false)

    const openSubmenu = (anchorEl: string) => {
        if (anchorEl === 'Features') {
            setSubItems(features)
            setCompanyMenuIsOpen(false)
            setFeaturesMenuIsOpen(true)
        }
        if (anchorEl === 'Company') {
            setSubItems(company)
            setFeaturesMenuIsOpen(false)
            setCompanyMenuIsOpen(true)
        }
    }

    const closeSubmenu = () => {
        setAnchorEl(null)
        setFeaturesMenuIsOpen(false)
        setCompanyMenuIsOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                openSubmenu, anchorEl, setAnchorEl, closeSubmenu, subItems,
                featuresMenuIsOpen, companyMenuIsOpen
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const appContext = useContext(AppContext)
    if (appContext === null) throw new Error("You need to use this context inside the provider")
    return appContext
}