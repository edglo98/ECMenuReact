import React from "react";
import "./styles.css";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ecubiimg from '../../images/img.png'

const drawerWidth = 300;

const useStyle = makeStyles((theme: Theme) => 
    createStyles({
        menuButton: {
            marginRight: theme.spacing(0),
        },
        toolbarStyle:{
            color: "#FFF"
        },
        perfileImg: {
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 1,
            borderStyle: "solid",
        },
        tittle: {
            flexGrow: 1,
        },
        appBar: {
            // [theme.breakpoints.up('sm')]: {
            //   width: `calc(100% - ${drawerWidth}px)`,
            //   marginLeft: drawerWidth,
            // },
            zIndex:200,
        },
    }),
);

const NavBar = (props) => {
    const classes = useStyle();

    return(
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar >
                <IconButton color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => props.toogleClick()}>
                    <MenuIcon/>
                </IconButton>
                <img src={ecubiimg}/>
                <Typography variant='h6' className={classes.tittle}>
                    Mi Negocio
                </Typography>
                <img src="https://avatars0.githubusercontent.com/u/52474257?s=400&u=dfe6025e5d35753fa04e2c7f7bd03898a8d34501&v=4" className={classes.perfileImg}/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;