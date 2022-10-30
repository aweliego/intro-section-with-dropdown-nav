
import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import logo from '../images/logo.svg'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

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
                            <Button key={item} sx={{ color: '#000', pl: 4 }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Far right buttons */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
                        <Button>Login</Button>
                        <Button>Register</Button>
                    </Box>

                    {/* Burger Menu */}
                    <Box sx={{
                        display: { xs: "flex", md: "none" }, flexGrow: 0
                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
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
                        display: { xs: 'block', sm: 'none' },
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
