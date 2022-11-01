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

// Menu items arrays
const pages = [
    'Features', 'Company', 'Careers', 'About'
]

const subPagesFeatures = [
    'Todo List', 'Calendar', 'Reminders', 'Planning'
]

const subPagesCompany = [
    'History', 'Our Team', 'Blog'
]

const NavBar: FC = () => {
    const [menuItems, setMenuItems] = useState(pages)
    const [subItemsFeatures, setSubItemsFeatures] = useState(subPagesFeatures)
    const [subItemsCompany, setsubItemsCompany] = useState(subPagesCompany)

    const [anchorEl, setAnchorEl] = useState(null)

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleOpenMenu = (e: any) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
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
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button disableRipple size='small' sx={buttonStyles} >Login</Button>
            <Button disableRipple size='small' sx={{
                border: 1, px: 2,
                '&:hover': {
                    backgroundColor: 'transparent',
                    border: 2
                }
            }} variant="outlined">Register</Button>
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
                                        key={item}
                                        size='small'
                                        endIcon={(item === 'Features' || item === 'Company') && <KeyboardArrowDownIcon />}
                                        onClick={(e) => (item === 'Features' || item === 'Company') ? handleOpenMenu(e) : null}
                                        sx={buttonStyles}>
                                        {item}
                                    </Button>
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
                                        {subItemsFeatures.map((subItem) => (
                                            <MenuItem key={subItem}
                                                onClick={handleCloseMenu}
                                            >
                                                <Typography textAlign="center">{subItem}</Typography>
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
