import React, { FC } from 'react'
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

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import logo from '../images/logo.svg'
import iconMenu from '../images/icon-menu.svg'

const NavBar: FC = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    // Menu items arrays
    const menuItems = [
        'Features', 'Company', 'Careers', 'About'
    ]

    const subItemsFeatures = [
        'Todo List', 'Calendar', 'Reminders', 'Planning'
    ]

    const subItemsCompany = [
        'History', 'Our Team', 'Blog'
    ]

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
        </Box>
    )

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
                        {menuItems.map((item) => (
                            <Button disableRipple
                                key={item}
                                size='small'
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={buttonStyles}>
                                {item}
                            </Button>
                        ))}
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
