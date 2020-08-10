import React from "react";
import "./styles.css"

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List , ListItem , ListItemIcon , ListItemText , Divider } from "@material-ui/core"

import IconHome from "../../images/casa.svg"
import IconSale from "../../images/sale.svg"
import IconHelp from "../../images/help.svg"
import IconShout from "../../images/shout.svg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SubMenu: {
      color: "#94989C",
      paddingLeft: 10,
    },
    ShopName: {
        fontSize: 23,
    },
    TypeAccount: {
        fontSize: 17,
        color: "#94989C",
    },
    Tittle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 15,
    },
    IconBackground: {
        backgroundColor: "#D3C4F5",
        width: 35,
        height: 35,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    selected: {
        backgroundColor: "#D3C4F5",
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        width: "98%",
    },
  }),
);

export default function NavBar (){
        const classes = useStyles();
        return(
            <div >
                <List component="nav">
                    <div className={classes.Tittle}>
                        <div className={classes.ShopName}>Edgar's Shop</div>
                        <div className={classes.TypeAccount}>Premium</div>
                    </div>
                    {/* cambiar por tipografia */}

                    <Divider/>

                    <ListItem button>
                        <ListItemIcon >
                            <div className={classes.IconBackground}>
                                <img src={IconHome}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Pagina principal"/>
                    </ListItem>

                    <ListItem button className={classes.selected}>
                        <ListItemIcon>
                            <div >
                                <img src={IconSale}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <Divider/>

                    <ListItemText primary="Modulos" className={classes.SubMenu}/>

                    <ListItem button>
                        <ListItemIcon>
                            <div className={classes.IconBackground}>
                                <img src={IconShout}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <div className={classes.IconBackground}>
                                <img src={IconShout}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <div className={classes.IconBackground}>
                                <img src={IconShout}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <div className={classes.IconBackground}>
                                <img src={IconShout}/>
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <Divider/>

                    <ListItemText primary="Más" className={classes.SubMenu}/>

                    <ListItem button>
                        <ListItemIcon>
                            <img src={IconHelp}/>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <img src={IconHelp}/>
                        </ListItemIcon>
                        <ListItemText primary="Punto de venta"/>
                    </ListItem>
                    
                    <Divider/>

                    <ListItem button>
                        <ListItemIcon>
                                <img src={IconHelp}/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
        );
}

