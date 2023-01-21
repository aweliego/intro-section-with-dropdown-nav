import React, { FC, ReactNode } from 'react'

// Context
import { useGlobalContext } from '../context'

// MUI
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'

// Assets
import iconCloseMenu from '../images/icon-close-menu.svg'

const Sidebar: FC = () => {
    const { navItems, subItems, featuresMenuIsOpen,
        companyMenuIsOpen, openSubmenu, closeSubmenu, updateArrowIcon, sidebarOpen } = useGlobalContext()

    const showSubItems = (e: React.MouseEvent<HTMLDivElement>): void => {
        const label = e.currentTarget.id
        openSubmenu(label)
    }

    const handleDrawerToggle = (): void => {
        closeSubmenu()
    }

    const handleArrowIcon = (item: string): ReactNode | undefined => {
        return updateArrowIcon(item)
    }

    const listItemStyles = { fontSize: '14px' }

    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                anchor="right"
                open={sidebarOpen}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    width: 220,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 220,
                    },
                    display: { xs: 'block', md: 'none' },
                }}
            >
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="close drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        display: { sm: 'flex', md: 'none' },
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                >
                    <img src={iconCloseMenu} alt="close" />
                </IconButton>
                <Box>
                    {/* Features and Company categories */}
                    <List>
                        {navItems.map((item, idx) => {
                            const { page } = item
                            return (
                                <ListItem
                                    disablePadding
                                    key={idx}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        pl: 2
                                    }}>
                                    <ListItemButton
                                        id={page}
                                        sx={{
                                            '&:hover': {
                                                color: 'secondary.main',
                                                backgroundColor: 'transparent'
                                            }
                                        }}
                                        onClick={(e) => (page === 'Features' || page === 'Company') ? showSubItems(e) : null}
                                    >
                                        <ListItemText
                                            primaryTypographyProps={listItemStyles}
                                            primary={page} /> <span>{handleArrowIcon(page)}</span>
                                    </ListItemButton>
                                    {/* If item should have a dropdown, create one */}
                                    {page === 'Features' || page === 'Company' ?
                                        subItems?.map((subPage, idx) =>
                                            <Collapse
                                                in={page === 'Features' ? featuresMenuIsOpen : companyMenuIsOpen}
                                                key={idx}
                                                timeout="auto"
                                                unmountOnExit>
                                                <List
                                                    component="div"
                                                    disablePadding
                                                    sx={{ pl: 2 }}>
                                                    <ListItemButton onClick={handleDrawerToggle}>
                                                        {subPage.icon && <img src={subPage.icon} alt='icon' />}
                                                        <ListItemText
                                                            primaryTypographyProps={listItemStyles}
                                                            primary={subPage.label}
                                                            sx={{ pl: '10px' }}
                                                        />
                                                    </ListItemButton>
                                                </List>
                                            </Collapse>) : null}
                                </ListItem>)
                        }
                        )}

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 2
                        }}>
                            {/*  Login button */}
                            <ListItemButton
                                sx={{
                                    mx: 2,
                                    '&:hover': {
                                        color: 'secondary.main',
                                        backgroundColor: 'transparent'
                                    }
                                }}>
                                <ListItemText
                                    primaryTypographyProps={listItemStyles}
                                    primary='Login' />
                            </ListItemButton>
                            {/* Register button */}
                            <ListItemButton
                                sx={{
                                    border: 1,
                                    borderRadius: 1,
                                    width: '85%',
                                    textAlign: 'center',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'secondary.main',
                                    }
                                }}>
                                <ListItemText
                                    primaryTypographyProps={listItemStyles}
                                    primary='Register' />
                            </ListItemButton>
                        </Box>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Sidebar