import React from 'react'
import { makeStyles, Grid, } from '@material-ui/core'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import LogosStill from '../images/Animated-Logos-Poster.jpg'
import LogosVideo from '../images/Animated-Logos.mp4'
// import ArtImage from './hooks/artImage.js'

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

const LogosCard = (props) => {

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
    <>
        <button
        onClick={handleOpen}
        react-transition-group
        style={{ cursor: 'auto', border:'none', background:'white', padding: 0 }}
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
        
    </>
    </Grid>

)
}

export default LogosCard

