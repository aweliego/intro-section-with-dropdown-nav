import React, { useState, FC } from 'react'

// Context
import { useGlobalContext } from '../context'

// MUI
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const Sidebar: FC = () => {
    const { navItems, subItems, featuresMenuIsOpen,
        companyMenuIsOpen, mobileOpen, setMobileOpen, openSubmenu } = useGlobalContext()

    const showSubItems = (e: React.MouseEvent<HTMLDivElement>): void => {
        const label = e.currentTarget.id
        openSubmenu(label)
    }

    // Close sidebar when clicking on a nested item
    const handleDrawerToggle = (): void => {
        setMobileOpen(!mobileOpen)
    }

    return (<Box sx={{ textAlign: 'center' }}>
        <List>
            {navItems.map((item, idx) => {
                const { page } = item
                return (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton
                            disableRipple
                            id={page}
                            sx={{
                                mx: 2,
                                '&:hover': {
                                    color: 'secondary.main',
                                    backgroundColor: 'transparent'
                                }
                            }}
                            onClick={(e) => (page === 'Features' || page === 'Company') ? showSubItems(e) : null}
                        >
                            <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={page} />
                        </ListItemButton>
                        {/* If item should have a dropdown, create one, otherwise return null */}
                        {page === 'Features' || page === 'Company' ?
                            subItems?.map((subPage, idx) => <Collapse in={page === 'Features' ? featuresMenuIsOpen : companyMenuIsOpen} key={idx} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4 }}>
                                        <ListItemText primary={subPage.label} />
                                    </ListItemButton>
                                </List>
                            </Collapse>) : null}
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
}

export default Sidebar