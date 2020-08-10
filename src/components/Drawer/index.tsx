import React from "react";
import { Theme, makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NavBar from "../NavBar";


const drawerWidth = 300;
//240 antes

const styles = makeStyles ( (theme: Theme) => ({
    drawer: {
        // [theme.breakpoints.up('sm')]: {
        //   width: drawerWidth,
        //   flexShrink: 0,
        // },
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex: 100,
    },
    toolbar: theme.mixins.toolbar,
    
}) )

const Navigator = (props) => {
    const classes = styles();
    return(
        <Drawer 
            className={classes.drawer}
            classes={{paper: classes.drawerPaper,}} 
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose = {props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}/>
            <NavBar/>
        </Drawer>
    )
}

export default Navigator;