import React from "react";


import { Typography, Box, CardMedia, Avatar, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from '../images/copyprofile.jpg';


const useStyles = makeStyles({

    introduction: {
        color: 'white',
        fontSize: '30px',
        textAlign: 'center'
    },

    media: {
        display: 'flex',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        bottomMargin: '20px'
    },

        hero: {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1316&q=80')`,
            height: "700px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "2rem",
        }



    }
);


const Introduction = () => {



const classes = useStyles();
  
return(
    <Box className={classes.hero}>
        <Typography className={classes.introduction}> Aspiring Junior Web Developer with a love for design </Typography>
<Grid container justify="center">
<Avatar
src={profilePic}
alt="Imogen's profile"
className={classes.media}>
</Avatar>
</Grid>
</Box>



)
}

export default Introduction;