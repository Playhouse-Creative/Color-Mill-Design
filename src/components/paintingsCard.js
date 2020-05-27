import React from 'react'
import { makeStyles, Grid, Modal, Backdrop, Fade, } from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PaintingsStill from '../images/Animated-Paintings-Poster.jpg'
import PaintingsVideo from '../images/Animated-Paintings.mp4'
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
        margin: 0 ,
    },
    indexModal: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0
    },
    indexPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: '600px',
        outline: 0
    },
    }))

const PaintingsCard = (props) => {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

return(
<Grid item xs={12} md={6}>
    <div>
        <button
        type="button"
        onClick={handleOpen}
        react-transition-group
        style={{ cursor: 'pointer', border:'none', background:'white', padding: 0 }}
        >
        <video
            width="100%"
            loop
            muted
            poster={PaintingsStill}
            onMouseOver={e => e.target.play()}
            onTouchMove={e => e.target.play()}
            onFocus={e => e.target.play()}
            onMouseOut={e => e.target.pause()}
            //onTouchEnd={e => e.target.pause()}
            onBlur={e => e.target.load()}
        >
            <source src={PaintingsVideo} />
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
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay dynamicHeight>
                <div>
                    <ArtImage src="neilDegrassTyson.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="LizardRider.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="TheHunt.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="Erica.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="HunterAnimate.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="OakBay.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="FortBragg.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="NoCountryForOldMen.jpg"/>
                    </div>
                    <div>
                    <ArtImage src="RowansPainting.jpg"/>
                    </div>
                    
            </Carousel>
            </div>
        </Fade>
        </Modal>
        <Grid className={classes.indexCaption} item xs={12}>
        <div style={{ padding: '1.5rem' }}>
            <h3>Paintings</h3>
            <h6>ILLUSTRATION, CHARACTER DESIGN, FINE ART</h6>
            <p>
            Here you'll find a smattering of some of the paintings and character
            designs I've done over the years.
            </p>
        </div>
        </Grid>
    </div>
    </Grid>

)
}

export default PaintingsCard

