import React, { useState, FC, ReactNode } from 'react'

import { pages } from '../navItems'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import logo from '../images/logo.svg'
import iconMenu from '../images/icon-menu.svg'
import iconCloseMenu from '../images/icon-close-menu.svg'

const NavBar: FC = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [featuresMenuIsOpen, setFeaturesMenuIsOpen] = useState(false)
    const [companyMenuIsOpen, setCompanyMenuIsOpen] = useState(false)

    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)

    const handleOpenMenu = (e: any) => {
        setAnchorEl(e.currentTarget)
        if (e.currentTarget.id === 'Features') {
            setCompanyMenuIsOpen(false)
            setFeaturesMenuIsOpen(true)
        }
        if (e.currentTarget.id === 'Company') {
            setFeaturesMenuIsOpen(false)
            setCompanyMenuIsOpen(true)
        }
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
        setFeaturesMenuIsOpen(false)
        setCompanyMenuIsOpen(false)
    }

    const handleArrowIcon = (item: string): ReactNode | undefined => {
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const buttonStyles = {
        mx: 2,
        '&:hover': {
            color: 'secondary.main',
            backgroundColor: 'transparent'
        }
    }

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <List>
                {pages.map((item, idx) => {
                    const { page, subPages } = item
                    return (
                        <ListItem key={idx} disablePadding>
                            <ListItemButton
                                disableRipple
                                sx={{
                                    mx: 2,
                                    '&:hover': {
                                        color: 'secondary.main',
                                        backgroundColor: 'transparent'
                                    }
                                }}
                                onClick={() => (page === 'Features' || page === 'Company') ? setDropDownOpen(!dropDownOpen) : null}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={page} />
                            </ListItemButton>
                            {/* If item should have a dropdown, create one, otherwise return null */}
                            {page === 'Features' || page === 'Company' ? <Collapse in={dropDownOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                                        <ListItemText primary="subItem" />
                                    </ListItemButton>
                                </List>
                            </Collapse> : null}
                        </ListItem>)
                }
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <ListItemButton disableRipple sx={{
                        mx: 2,
                        '&:hover': {
                            color: 'secondary.main',
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary='Login' />
                    </ListItemButton>
                    <ListItemButton disableRipple sx={{
                        border: 1, borderRadius: 1, width: '90%', textAlign: 'center',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            border: 2
                        }
                    }}>
                        <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary='Register' />
                    </ListItemButton>
                </Box>
            </List>

        </Box>
    )

    return (
        <>
            <AppBar component="nav" elevation={0} color='transparent'>
                <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between' } }}>

                    {/*  Logo */}
                    <Box sx={{ display: 'block', mr: 8 }}
                    >  <img src={logo} alt="logo" /></Box>

                    {/* Main nav items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', flexGrow: 1 }}>
                        {pages.map((item, idx) => {
                            const { page, subPages } = item
                            return (
                                <>
                                    <Button disableRipple
                                        key={idx}
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
                                        {subPages?.map((subPage, idx) => {
                                            const { label, icon, url } = subPage
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
                        <Button disableRipple size='small' sx={buttonStyles} >Login</Button>
                        <Button disableRipple size='small' sx={{
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
                            disableRipple
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
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '600' },
                    }}
                >
                    <IconButton
                        disableRipple
                        size="large"
                        color="inherit"
                        aria-label="close drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'flex', md: 'none' }, justifyContent: 'flex-end', p: 2 }}
                    >
                        <img src={iconCloseMenu} alt="close" />
                    </IconButton>
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default NavBar
