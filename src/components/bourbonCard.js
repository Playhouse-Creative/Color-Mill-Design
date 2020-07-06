import React from 'react'
import { makeStyles, Grid, Modal, Backdrop, Fade } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import BourbonStill from '../images/Animated-Whiskey-Poster.jpg'
import BourbonVideo from '../images/video/Animated-Whiskey.mp4'
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
        maxHeight: '1000px',
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
        width: '800px',
        outline: 0,
    },
    }))

    const BourbonCard = props => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid item xs={12} md={6}>
        <>
            <button
            onClick={handleOpen}
            react-transition-group
            aria-label={'Mendocino Spirits Bourbon'}
            style={{
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                maxHeight: 1,
                outline: 0
            }}
            >
            <video
                width="100%"
                loop
                muted
                poster={BourbonStill}
                onMouseOver={e => e.target.play()}
                onTouchMove={e => e.target.play()}
                onFocus={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
                //onTouchEnd={e => e.target.pause()}
                onBlur={e => e.target.load()}
            >
                <source src={BourbonVideo} />
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
                        src="Animated-Whiskey-Poster.jpg"
                        alt="Mendocino Spirits Bourbon"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="Bourbon-Label.jpg"
                        alt="Mendocino Spirits Bourbon Label"
                    />
                    </div>
                    <div>
                    <ArtImage
                        src="Bourbon-Bottle.jpg"
                        alt="Mendocino Spirits Bourbon Bottle"
                    />
                    </div>
                </Carousel>
                </div>
            </Fade>
            </Modal>
        </>
        </Grid>
    )
}

export default BourbonCard
