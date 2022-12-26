import React, { useState, FC } from 'react'

import { pages } from '../navItems'

import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const Sidebar: FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (<Box sx={{ textAlign: 'center' }}>
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
}

export default Sidebar