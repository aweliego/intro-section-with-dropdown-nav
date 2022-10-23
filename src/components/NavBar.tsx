
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

const NavBar: FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState()
    const [anchorElUser, setAnchorElUser] = React.useState()

    // event type was React.MouseEvent<HTMLElement> but replaced with any for now to skip error
    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget)
    }

    // Menu items array
    const menuItems = [
        'Features', 'Company', 'Careers', 'About'
    ]

    return (
        <AppBar position='fixed' color='transparent' elevation={0}>
            <Toolbar sx={{ boxShadow: 1 }}>
                <img src={logo} alt="logo" />

                {/* mobile menu */}
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left"
                        }}
                        open={Boolean(anchorElNav)}
                        // onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item}
                            // onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">{item}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* desktop menu */}
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item}
                            //onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: "block" }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>

        </AppBar >


    )
}

export default NavBar