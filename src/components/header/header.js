import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.css'
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
              <Link to="/minors" className="header__link">Дети</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/workers" className="header__link">Работники</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/pupils-schedule" className="header__link">Режим дня воспитанников</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }