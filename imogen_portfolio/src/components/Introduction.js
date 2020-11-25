import React from "react";
import theme from "./theme";
import '../App.css';


import { Typography, Box, CardMedia, Avatar, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from '../images/copyprofile.jpg';
import '../App.css';


const useStyles = makeStyles(theme => ({

introBox: {
    display: 'flex',
    alignContent: 'flex-start'

},

    introduction: {
        color: 'white',
        fontSize: '30px',
        textAlign: 'center',
        fontFamily: "'Oswald', sans-serif",
        width: "500px",
        marginBottom: "20px"
        
    },

    mediaBox: {
        display: 'flex',
        justifyContent: 'center',
        

    },

    media: {
        
        alignContent: 'center',
        width: '200px',
        height: '200px',
        marginBottom: "250px"
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
            bottomPadding: "20px"
            
        },
        name: {
       
            fontFamily:  "'Yeseva One', cursive",
            textWeight: "bold",
            fontSize: '40px',
            color: "primary",
            letterSpacing: "2px",
            // width: "150px",
            textAlign: "center",    
            bottomPadding: "20px"

        },
        position: {
            
        }



    }));


const Introduction = () => {



const classes = useStyles();
  
return(
    
 <Box className={classes.position}>      
    <Box className={classes.hero}>
        <Box>
        <Typography className={classes.name}>Imogen Drews</Typography>
        </Box>
        <Box>
        <Typography className={classes.introduction} color="primary"> Aspiring Junior Web Developer with a love for design </Typography>
        </Box>
<Grid container justify="center">
<Avatar
src={profilePic}
alt="Imogen's profile"
className={classes.media}>
</Avatar>
</Grid>
</Box>
</Box>



)
}

export default Introduction;