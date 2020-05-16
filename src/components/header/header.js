import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 60
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    tool: {
        justifyContent: 'space-around'
    }
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.tool}>
            <Typography variant="h6" className={classes.title}>
              Clients
            </Typography>
            <Typography variant="h6" className={classes.title}>
              loans
            </Typography>
            <Typography variant="h6" className={classes.title}>
              guarantors
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }