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
    setSubItems: any
    anchorEl: Element | ((element: Element) => Element) | null | undefined
    setAnchorEl: React.Dispatch<React.SetStateAction<Element | ((element: Element) => Element) | null | undefined>>
    featuresMenuIsOpen: boolean
    companyMenuIsOpen: boolean
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    openSubmenu: (text: string) => void
    closeSubmenu: () => void
    updateArrowIcon: (item: string) => React.ReactNode | undefined
} | null

type Props = {
    children: React.ReactNode
}

export const AppContext = React.createContext<AppContextType>(null)

export const AppProvider = ({ children }: Props) => {
    const [navItems, setNavItems] = useState<PagesModel[]>(pages)
    const [subItems, setSubItems] = useState<PagesModel['subPages']>([])
    const [anchorEl, setAnchorEl] = useState<Element | ((element: Element) => Element) | null | undefined>(null)
    const [featuresMenuIsOpen, setFeaturesMenuIsOpen] = useState<boolean>(false)
    const [companyMenuIsOpen, setCompanyMenuIsOpen] = useState<boolean>(false)
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

    const openSubmenu = (label: string) => {
        const features = navItems[0].subPages
        const company = navItems[1].subPages

        if (label === 'Features') {
            setSubItems(features)
            setCompanyMenuIsOpen(false)
            setFeaturesMenuIsOpen(!featuresMenuIsOpen)
        }
        if (label === 'Company') {
            setSubItems(company)
            setFeaturesMenuIsOpen(false)
            setCompanyMenuIsOpen(!companyMenuIsOpen)
        }
    }

    const closeSubmenu = () => {
        setAnchorEl(null)
        // Close sidebar when clicking on a nested item
        setSidebarOpen(!sidebarOpen)
        // Reset arrow icons down by default
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
                setSubItems,
                updateArrowIcon,
                sidebarOpen,
                setSidebarOpen,
                // nestedItemOpen,
                // setNestedItemOpen,
                featuresMenuIsOpen,
                companyMenuIsOpen,
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