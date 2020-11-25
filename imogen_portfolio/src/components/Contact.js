import React from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import '../App.css';




const useStyles = makeStyles(theme => ({

    textField: {
        color: "#ffffcc'",
        fontFamily: "'Oswald', sans-serif"
    },
    header: {
        fontFamily: "'Oswald', sans-serif"
    },
    position: {
        margin: "100px"
    }
  
}));

const Contact = () => {

    const classes = useStyles();
    
    const sendEmail = (e) =>{
        e.preventDefault();
    
        emailjs.sendForm('service_8qq8he9', 'template_4k7fmhq', e.target, 'user_8zu7dfaNkROqOQALEOJyK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
        return(
            <Box className={classes.position}>

               <Box component="div" style={{background:"#ffffcc", height:"50vh"}}>
                    <Grid container justify="center">
                        <Box component="form" onSubmit={sendEmail} className={classes.form} color="primary">
                            <Typography variant="h3" color="secondary" className={classes.header} >
                                Lets get in touch! 
                            </Typography>
                            <div className={classes.textField}>
                            <TextField
                                label="Your Name"
                                fullWidth={true}
                                margin="dense"
                                size="medium"
                                name="name"
                                color="secondary"
                                className={classes.textField}
                            />
                            <br />
                            <TextField
                                label="Email"
                                fullWidth={true}
                                margin="dense"
                                size="medium"
                                name="email"
                                color="primary"
                            />
                            <br />
                            <TextField
                                fullWidth={true}
                                label="Your Cell Number"
                                margin="dense"
                                size="medium"
                                name="number"
                                color="primary"
                            />
                            <br />
                            <TextField
                                fullWidth={true}
                                label="Short Message"
                                margin="dense"
                                size="medium"
                                name="message"
                                color="primary"
                            />
                            <Button type="submit" variant="filled" fullWidth={true} className={classes.button} endIcon={<SendIcon/>} color="primary">
                                Send
                            </Button>
                            </div>
                        </Box>
                    </Grid>
               </Box>
            </Box>
        )
    };

export default Contact;
    
    