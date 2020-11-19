import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import '../App.css';

const font =  "'Quicksand', sans-serif";

const useStyles = makeStyles({
    appBar: {
        width: '100%',
        background: '#24705b',
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },

    name: {
        display: 'flex',
        justifyContent: `space-between`,
        color: '#ffffcc',
        fontSize: '30px',
        // fontFamily: font
    },
   
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        
        color:'#ffffcc',
        },
    
     
        

    
    
})


const NavBar = () => {

const classes = useStyles();

    return(
    
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.navDisplayFlex}>
                
                    <Typography className={classes.name}>Imogen Drews</Typography>
                
                
                    <Button className={classes.button}>CV</Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar; 