import { FC } from 'react'

// MUI
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'

// Assets
import databizClient from '../images/client-databiz.svg'
import audiophileClient from '../images/client-audiophile.svg'
import meetClient from '../images/client-meet.svg'
import makerClient from '../images/client-maker.svg'
import heroDesktop from '../images/image-hero-desktop.png'
import heroMobile from '../images/image-hero-mobile.png'

const Hero: FC = () => {

    let boxHeight = '510px'

    const imgStyles = {
        maxWidth: '100%',
        height: { xs: '15px', sm: '20px' },
        mr: { xs: 4, md: 6 },
    }

    return (
        <>
            <Toolbar />
            <Container disableGutters>
                {/*  Hero container */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: { xs: 'center', md: 'space-around' },
                    mt: 4,
                }}>
                    {/* Text section */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        order: { xs: 2, md: 1 },
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        alignItems: { xs: 'center', md: 'start' },
                        width: { md: '50%' },
                        height: { md: boxHeight },
                        mt: { xs: 8, md: 0 },
                        mr: { md: 15 }
                    }}>
                        <Typography variant='h1' component='h1'
                            sx={{
                                fontWeight: 'fontWeightBold',
                                width: { xs: '20ch', md: '11ch' },
                                lineHeight: '0.9',
                                fontSize: { xs: '36px', sm: '55px', md: '90px' },
                                textAlign: { xs: 'center', md: 'left' },
                            }}>
                            Make remote work
                        </Typography>
                        <Typography variant='subtitle1' component='p'
                            sx={{
                                color: 'primary.main',
                                width: { xs: '36ch', sm: '45ch' },
                                textAlign: { xs: 'center', md: 'justify' },
                                fontSize: { xs: '16px', sm: '18px' },
                                my: 4
                            }}>
                            Get your team in sync, no matter your location. Streamline
                            processes, create team rituals, and watch productivity soar.
                        </Typography>
                        <Button variant='contained'
                            sx={{
                                alignSelf: { xs: 'center', md: 'flex-start' },
                                backgroundColor: 'secondary.main',
                                fontWeight: 'fontWeightBold',
                                border: 1,
                                boxShadow: 0,
                                borderRadius: 2,
                                px: { xs: 3, md: 'null' },
                                py: { xs: 1, md: 'null' },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'secondary.main',
                                    boxShadow: 0,
                                }
                            }}>
                            Learn more
                        </Button>
                        {/* Client images */}
                        <Box sx={{
                            display: 'flex',
                            mt: { xs: 6, md: 5 },
                            mb: { xs: 4, md: 0 },
                            px: { xs: 2, md: 0 },
                        }}>
                            <Box component="img" src={databizClient} alt="" sx={imgStyles} />
                            <Box component="img" src={audiophileClient} alt="" sx={imgStyles} />
                            <Box component="img" src={meetClient} alt="" sx={imgStyles} />
                            <Box component="img" src={makerClient} alt="" sx={imgStyles} style={{ marginRight: 0 }} />
                        </Box>
                    </Box>
                    {/* Hero image section */}
                    <Box sx={{ order: { xs: 1, md: 2 }, }}>
                        <Box component="img" alt="hero" sx={{
                            content: {
                                xs: `url(${heroMobile})`,
                                md: `url(${heroDesktop})`,
                            },
                            display: 'block',
                            maxWidth: '100%',
                            width: { xs: '100vw', md: '400px' },
                            height: { md: boxHeight },
                        }} />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Hero