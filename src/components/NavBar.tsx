
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

    const dropdownFeatures = (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            //anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={true}
        //onClose={handleCloseUserMenu}
        >
            {subItemsFeatures.map((subItem) => (
                <MenuItem key={subItem}
                //onClick={handleCloseUserMenu}
                >
                    <Typography textAlign="center">{subItem}</Typography>
                </MenuItem>
            ))}
        </Menu>
    )

    const dropdownCompany = (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            //anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={true}
        //onClose={handleCloseUserMenu}
        >
            {subItemsCompany.map((subItem) => (
                <MenuItem key={subItem}
                //onClick={handleCloseUserMenu}
                >
                    <Typography textAlign="center">{subItem}</Typography>
                </MenuItem>
            ))}
        </Menu>
    )


    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" elevation={0} color='transparent'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src={logo} alt="logo" />

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {menuItems.map((item) => (
                            <Button key={item} sx={{ color: '#000' }}>
                                {item}
                            </Button>
                            // if item === Features or Company, also return respective dropdown below the Button?
                        ))}
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
                </Drawer>s
            </Box>
        </Box>
    )
}

export default NavBar