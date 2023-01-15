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


const Hero = () => {

    const imgStyles = {
        maxWidth: '100%',
        height: '20px',
        mr: 6
    }
    return (
        <>
            <Toolbar />
            <Container>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mt: 4 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        width: '50%',
                        height: '500px'
                    }}>
                        <Typography variant='h1' component='h1'
                            sx={{
                                fontWeight: 'fontWeightBold',
                                width: '11ch',
                                lineHeight: '0.9',
                                fontSize: '90px'
                            }}>
                            Make remote work
                        </Typography>
                        <Typography variant='subtitle1' component='p'
                            sx={{
                                color: 'primary.main',
                                width: '45ch',
                                textAlign: 'justify',
                                fontSize: '18px',
                                my: 4
                            }}>
                            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</Typography>
                        <Button variant='contained'
                            sx={{
                                alignSelf: 'flex-start',
                                backgroundColor: 'secondary.main',
                                fontWeight: 'fontWeightBold',
                                border: 1,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'secondary.main',
                                }
                            }}>
                            Learn more
                        </Button>
                        <Box sx={{ mt: 5 }}>
                            <Box component="img" src={databizClient} alt="" sx={imgStyles} />
                            <Box component="img" src={audiophileClient} alt="" sx={imgStyles} />
                            <Box component="img" src={meetClient} alt="" sx={imgStyles} />
                            <Box component="img" src={makerClient} alt="" sx={imgStyles} />
                        </Box>

                    </Box>
                    <Box >
                        <Box component="img" src={heroDesktop} alt="" sx={{
                            display: 'block',
                            maxWidth: '100%',
                            height: '500px',
                            ml: 20
                        }} />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Hero