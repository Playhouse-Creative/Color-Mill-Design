import React from 'react'
import { makeStyles, Grid, Modal, Backdrop, Fade } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import LogosStill from '../images/Animated-Logos-Poster.jpg'
import LogosVideo from '../images/video/Animated-Logos.mp4'
import ArtImage from './hooks/artImage.js'

const useStyles = makeStyles(theme => ({
    indexRoot: {
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 60,
        margin: '-1rem 0 0 -1rem ',
        nested: {
        paddingLeft: theme.spacing(4),
        },
    },
    indexCaption: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '0% 0% 60px 60px',
        margin: 0,
    },
    indexModal: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
    },
    indexPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '600px',
        outline: 0,
    },
    }))

    const LogosCard = props => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
        <Grid item xs={12} md={6}>
            <button
            onClick={handleOpen}
            react-transition-group
            aria-label={'Logos'}
            style={{
                cursor: 'pointer',
                border: 'none',
                background: 'white',
                padding: 0,
                maxHeight: 1,
                outline: 0
            }}
            >
            <video
                width="100%"
                loop
                muted
                poster={LogosStill}
                onMouseOver={e => e.target.play()}
                onTouchMove={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                // onTouchEnd={e => e.target.pause()}
                onBlur={e => e.target.load()}
            >
                <source src={LogosVideo} />
            </video>
            </button>
            <Modal
            aria-labelledby="transition-indexModal-title"
            aria-describedby="transition-indexModal-description"
            className={classes.indexModal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={open}>
                <div className={classes.indexPaper}>
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    dynamicHeight
                >
                    <div>
                    <ArtImage
                        src="Mendo-High-Logo.jpg"
                        alt="Mendocino High Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="InnAtNewportRanch-Logo-031416.jpg"
                        alt="Inn At Newport Ranch Logo"
                    />
                    </div>
                    <div>
                    <ArtImage src="ScullysLogoFinal.jpg" alt="Scully's Logo" />
                    </div>
                    <div>
                    <ArtImage src="RoseBudsBasicLogo.jpg" alt="Rose Buds Logo" />
                    </div>
                    <div>
                    <ArtImage
                        src="Noyo-logo-Vector-Blue-vertical.jpg"
                        alt="Noyo Harbor Inn Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="TregoningLogoCleanFINAL_INC.jpg"
                        alt="Tregoning Construction Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="UMSP_Logo_Coloro.jpg"
                        alt="Ukiah Main Street Project Logo"
                    />
                    </div>
                    <div>
                    <ArtImage src="Barrera-Logo.jpg" alt="Barrera Logo" />
                    </div>
                    <div>
                    <ArtImage
                        src="Beckman-Logo.jpg"
                        alt="Beckman Printing Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="Coast_Accupuncture_logo.jpg"
                        alt="Coast Accupuncture Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="DjangosLogob&wforPrint.jpg"
                        alt="Django's Logo"
                    />
                    </div>
                    <div>
                    <ArtImage src="Ebb-FlowRowing.jpg" alt="Ebb & Flow Logo" />
                    </div>
                    <div>
                    <ArtImage
                        src="Good-Things-Farm.jpg"
                        alt="Good Things Farm Logo"
                    />
                    </div>
                    <div>
                    <ArtImage src="CY-Painting.jpg" alt="CY Painting Logo" />
                    </div>
                    <div>
                    <ArtImage
                        src="Montessori-Del-Mar-Logo.jpg"
                        alt="Montessori Del Mar Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="NCSegway_Logo_Final.jpg"
                        alt="North Coast Segway Logo"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="Noyo_HR_Logo-091317.jpg"
                        alt="Noyo Headlands Race Logo"
                    />
                    </div>
                </Carousel>
                </div>
            </Fade>
            </Modal>
    </Grid>
    </>
    )
}

export default LogosCard
