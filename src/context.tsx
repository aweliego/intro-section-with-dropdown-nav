import React, { useState, useContext } from 'react'

// Data
import { pages } from './navItems'

// Types
import PagesModel from './types/PagesModel'

// MUI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

type AppContextType = {
    navItems: PagesModel[]
    subItems: PagesModel['subPages']
    anchorEl: Element | ((element: Element) => Element) | null | undefined
    setAnchorEl: React.Dispatch<React.SetStateAction<Element | ((element: Element) => Element) | null | undefined>>
    mobileOpen: boolean
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
    openSubmenu: (text: string) => void
    closeSubmenu: () => void
    updateArrowIcon: (item: string) => React.ReactNode | undefined
} | null

type Props = {
    children: React.ReactNode
}

const features: PagesModel['subPages'] = pages[0].subPages
const company: PagesModel['subPages'] = pages[1].subPages

export const AppContext = React.createContext<AppContextType>(null)

export const AppProvider = ({ children }: Props) => {
    const [navItems, setNavItems] = useState<PagesModel[]>(pages)
    const [subItems, setSubItems] = useState<PagesModel['subPages']>([])
    const [anchorEl, setAnchorEl] = useState<Element | ((element: Element) => Element) | null | undefined>(null)
    const [featuresMenuIsOpen, setFeaturesMenuIsOpen] = useState<boolean>(false)
    const [companyMenuIsOpen, setCompanyMenuIsOpen] = useState<boolean>(false)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)

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

    const updateArrowIcon = (item: string) => {
        if (item === 'Features' && featuresMenuIsOpen) {
            return <KeyboardArrowUpIcon />
        } else if (item === 'Company' && companyMenuIsOpen) {
            return <KeyboardArrowUpIcon />
        } else if (item === 'Features' || item === 'Company') {
            return <KeyboardArrowDownIcon />
        } else if (item === 'Careers' || item === 'About') {
            return undefined
        }
    }

    return (
        <AppContext.Provider
            value={{
                navItems,
                openSubmenu,
                anchorEl,
                setAnchorEl,
                closeSubmenu,
                subItems,
                updateArrowIcon,
                mobileOpen,
                setMobileOpen
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