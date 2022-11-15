import React, { useState, FC, ReactNode } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import logo from '../images/logo.svg'
import iconMenu from '../images/icon-menu.svg'
import iconTodo from '../images/icon-todo.svg'
import iconCalendar from '../images/icon-calendar.svg'
import iconReminders from '../images/icon-reminders.svg'
import iconPlanning from '../images/icon-planning.svg'

import PagesModel from '../types/PagesModel'

// Menu items arrays
const pages: Array<PagesModel> = [
    {
        id: 'Features',
        name: 'Features'
    },
    {
        id: 'Company',
        name: 'Company'
    },
    {
        id: 'Careers',
        name: 'Careers'
    },
    {
        id: 'About',
        name: 'About'
    }
]

const subPagesFeatures: Array<PagesModel> = [
    {
        id: 'Todo List',
        name: 'Todo List',
        icon: iconTodo
    },
    {
        id: 'Calendar',
        name: 'Calendar',
        icon: iconCalendar
    },
    {
        id: 'Reminders',
        name: 'Reminders',
        icon: iconReminders
    },
    {
        id: 'Planning',
        name: 'Planning',
        icon: iconPlanning
    }
]

const subPagesCompany: Array<PagesModel> = [
    {
        id: 'History',
        name: 'History'
    },
    {
        id: 'Our Team',
        name: 'Our Team'
    },
    {
        id: 'Blog',
        name: 'Blog'
    }
]

const NavBar: FC = () => {
    const [menuItems, setMenuItems] = useState(pages)
    const [subItems, setSubItems] = useState<Array<PagesModel>>()

    const [anchorEl, setAnchorEl] = useState(null)
    const [featuresMenuIsOpen, setFeaturesMenuIsOpen] = useState(false)
    const [companyMenuIsOpen, setCompanyMenuIsOpen] = useState(false)

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleOpenMenu = (e: any) => {
        setAnchorEl(e.currentTarget)
        if (e.currentTarget.id === 'Features') {
            setSubItems(subPagesFeatures)
            setCompanyMenuIsOpen(false)
            setFeaturesMenuIsOpen(true)
        }
        if (e.currentTarget.id === 'Company') {
            setSubItems(subPagesCompany)
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
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            disableRipple
                            sx={{
                                mx: 2,
                                '&:hover': {
                                    color: 'secondary.main',
                                    backgroundColor: 'transparent'
                                }
                            }}>
                            <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
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
                        {menuItems.map((item) => {
                            return (
                                <>
                                    <Button disableRipple
                                        key={item.id}
                                        id={item.id}
                                        size='small'
                                        endIcon={handleArrowIcon(item.name)}
                                        onClick={(e) => (item.name === 'Features' || item.name === 'Company') ? handleOpenMenu(e) : null}
                                        sx={buttonStyles}>
                                        {item.name}
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
                                        {subItems?.map((subItem) => (
                                            <MenuItem key={subItem.id}
                                                onClick={handleCloseMenu}
                                                sx={{ px: '20px' }}
                                            >
                                                {subItem.icon && <img src={subItem.icon} alt='icon' />}
                                                <Typography sx={{ pl: '10px' }} textAlign="left">{subItem.name}</Typography>
                                            </MenuItem>
                                        ))}
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
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '600' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
}

export default NavBar
