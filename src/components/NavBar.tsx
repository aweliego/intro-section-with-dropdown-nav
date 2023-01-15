import React, { FC, ReactNode } from 'react'

// Context
import { useGlobalContext } from '../context'

// Components
import Sidebar from './Sidebar'

// MUI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// Assets
import logo from '../images/logo.svg'
import iconMenu from '../images/icon-menu.svg'

const NavBar: FC = () => {
    const { navItems, openSubmenu, anchorEl, setAnchorEl, sidebarOpen, setSidebarOpen, subItems, closeSubmenu, updateArrowIcon } = useGlobalContext()

    const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const label = e.currentTarget
        setAnchorEl(label)
        openSubmenu(label.id)
    }

    const handleCloseMenu = (): void => {
        closeSubmenu()
    }

    const handleArrowIcon = (item: string): ReactNode | undefined => {
        return updateArrowIcon(item)
    }

    const handleDrawerToggle = (): void => {
        setSidebarOpen(!sidebarOpen)
    }

    const buttonStyles = {
        mx: 2,
        '&:hover': {
            color: 'secondary.main',
            backgroundColor: 'transparent'
        }
    }

    return (
        <>
            <AppBar component="nav" elevation={0} color='transparent'>
                <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between' } }}>

                    {/*  Logo */}
                    <Box sx={{ display: 'block', mr: 8 }}
                    >  <img src={logo} alt="logo" /></Box>

                    {/* Main nav items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', flexGrow: 1 }}>
                        {navItems.map((item, idx) => {
                            const { page } = item
                            return (
                                <>
                                    <Button
                                        key={idx}
                                        id={page}
                                        size='small'
                                        endIcon={handleArrowIcon(page)}
                                        onClick={(e) => (page === 'Features' || page === 'Company') ? handleOpenMenu(e) : null}
                                        sx={buttonStyles}>
                                        {page}
                                    </Button>
                                    {/* Drop-down menu */}
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        elevation={3}
                                        transitionDuration={0}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                    >
                                        {subItems?.map((subPage, idx) => {
                                            const { label, icon } = subPage
                                            return (
                                                <MenuItem key={idx}
                                                    onClick={handleCloseMenu}
                                                    sx={{ px: '20px' }}
                                                >
                                                    {icon && <img src={icon} alt='icon' />}
                                                    <Typography sx={{ pl: '10px' }} textAlign="left">{label}</Typography>
                                                </MenuItem>
                                            )
                                        })}
                                    </Menu>
                                </>)
                        })}
                    </Box>

                    {/* Far right buttons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
                        <Button size='small' sx={buttonStyles} >Login</Button>
                        <Button size='small' sx={{
                            border: 1, px: 2,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                border: 2
                            }
                        }} variant="outlined">Register</Button>
                    </Box>

                    {/* Burger Menu */}
                    <Box sx={{
                        display: { xs: "flex", md: "none" }, flexGrow: 0
                    }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <img src={iconMenu} alt="menu" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Sidebar />
        </>
    )
}

export default NavBar
