import React from "react";

import { Theme, makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';

import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";

const drawerWidth = 300

const styles = makeStyles ( (theme: Theme) => ({
    root: {
        display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
        backgroundColor: "#FFF5E3",
        padding: 35,
        // ":hover": {color: "#CCC"}
    },
    layout: {
        [theme.breakpoints.up('sm')]: {width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth,}
    }
}))

const NewMenu = () => {
    const classes = styles();

    const [stateOpen, setOpen ] = React.useState(false)
    const [sizeContent, setSizeContent ] = React.useState(null)

    function MenuToogle (){
        setOpen(!stateOpen)
        if(stateOpen===false){
            setSizeContent(classes.layout)
        }else{
            setSizeContent(classes.content)
        }
    }
    
    return(
        <div className={classes.root}>
            <AppBar 
                toogleClick={MenuToogle}
            />
            <Drawer 
                variant="persistent"//permanent default
                open= {stateOpen}
                onClose={MenuToogle}
            />
            <div className={[classes.content+ " " + sizeContent].join(" ")}>
                <div className={classes.toolbar} />
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ratione nulla earum ullam magni quaerat expedita officiis, aperiam ut at quas doloribus delectus id perferendis iure non inventore consequuntur quia saepe blanditiis soluta? Vero facilis cumque modi voluptate consectetur omnis quod dolore laborum iure ipsam. Tempora, eos! Veritatis eos cum molestias reprehenderit, iure saepe repellat odio pariatur commodi numquam nisi molestiae doloribus, modi velit eum delectus est aliquam? Eveniet repellendus soluta minima temporibus quo libero quis quod, necessitatibus natus omnis eligendi adipisci voluptate aspernatur dolor nam aut consequatur quas recusandae maiores, vero dolorem provident qui aliquam. Quae quisquam possimus nostrum? Cum aspernatur eos eveniet eligendi perspiciatis temporibus alias expedita explicabo. Quasi sunt eveniet consequuntur unde quisquam odit voluptatem, fugiat tenetur saepe ipsa ab sed sint laudantium veritatis vero quo eaque possimus perspiciatis, reprehenderit doloribus voluptatibus animi laboriosam harum. Tempora consequatur ullam aliquid eum, omnis unde molestiae culpa pariatur voluptatum dolores soluta, molestias, architecto ipsam. Possimus, nisi nam! Culpa non voluptatibus facere ratione delectus facilis. Vero asperiores rem odit nemo alias? Tenetur quae nam minus quis consectetur esse assumenda vero, earum eveniet consequatur cumque sint aperiam, aspernatur, ipsa harum perspiciatis explicabo eum at placeat officiis. Animi quod nostrum quas molestias? Quod, ex ea. Explicabo pariatur optio nostrum, libero doloremque repellendus recusandae sunt veritatis adipisci nemo dolorem vitae doloribus, non quasi autem iste necessitatibus distinctio laborum quis ipsam officia cum. Sunt perspiciatis repudiandae numquam deserunt, animi eveniet veritatis, vero nemo voluptates, quibusdam cupiditate est? Doloremque perspiciatis error explicabo similique eum assumenda corrupti alias autem magnam fugiat sint laborum temporibus saepe voluptates aut adipisci provident, accusantium id. Adipisci explicabo soluta deleniti, fugit doloribus earum optio alias ad! Architecto reiciendis est ex, ut voluptatem totam optio! Eius atque voluptates perferendis odio ex, expedita exercitationem harum sunt cupiditate ullam dolores, repellendus facilis, alias dolorem hic corrupti. Molestiae aliquam exercitationem aperiam minima ipsa sunt enim excepturi saepe? Corrupti dicta, doloremque ut modi omnis qui quisquam exercitationem iste tempore voluptates ab blanditiis libero. A dignissimos quas possimus deleniti saepe, at expedita? Maiores voluptatem repudiandae eius iure ipsam, earum culpa repellat. Debitis deserunt doloremque vero nisi quisquam, inventore dolores error, expedita at nihil consequuntur aut pariatur iusto! Expedita amet natus libero qui sunt quas eligendi molestias explicabo. Obcaecati illum quaerat, eligendi cumque consequatur dolore veniam tempora provident esse quod amet asperiores corporis iusto? Nesciunt ipsa ratione, ipsam impedit accusantium, nihil inventore repellendus expedita, accusamus doloremque consectetur? Deserunt impedit atque dolores illum adipisci dignissimos veniam optio fuga laborum expedita. Alias maxime aut odio nostrum sequi eveniet qui laboriosam fuga. Explicabo autem dolorem vero odit reiciendis, dicta optio laboriosam. Optio natus quas maxime officiis, at sunt dolorem quo rerum! Voluptatem, tempora? Velit similique nostrum deleniti! Autem sed voluptatum iste perspiciatis.
                </h1>
            </div>
        </div> 
    )
}

export default NewMenu;