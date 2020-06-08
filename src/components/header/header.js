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
          <Typography variant="h4" className={classes.title}>
          ГКУ СО «Чапаевский СРЦН»
          </Typography>
        </Toolbar>
          <Toolbar className={classes.tool}>
          <Typography variant="h6" className={classes.title}>
              <Link to="/arrival" className="header__link">Прибытие в центр</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/minors" className="header__link">Дети</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/workers" className="header__link">Работники</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/pupils-schedule" className="header__link">Режим дня</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/employee-schedule" className="header__link">График работы</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/achievments" className="header__link">Достижения</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/cards" className="header__link">Амбулаторные карты</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }