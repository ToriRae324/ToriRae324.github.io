import React from "react";
import "./Footer.css";
import { Grid, Image } from 'semantic-ui-react'


const Footer = () => (

        <Grid.Column id="footer">

            <Image className="brands" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" style={{ width: "4.2em" }} />
            <Image className="brands" src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" style={{ width: "3em" }} />
            <Image className="brands" src="https://raw.githubusercontent.com/Mikescops/bootstrapbolttheme/master/icon-bootstrap.png" style={{ width: "3.5em" }} />
            <Image className="brands" src="http://cdn.shopify.com/s/files/1/1659/9267/products/reactjs_grande.png?v=1493774770" style={{ width: "4em" }} />
            <Image className="brands" src="http://logo-logos.com/wp-content/uploads/2016/10/jQuery_logo.png" style={{ width: "7em" }} />
            <Image className="brands" src="https://seeklogo.com/images/A/ajax-logo-A71F50DE08-seeklogo.com.png" style={{width: "5em"}} />
            <Image className="brands" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Git-logo-black.svg/500px-Git-logo-black.svg.png" style={{width: "5em"}} />
            <Image className="brands" src="https://firebase.google.com/_static/images/firebase/touchicon-180.png" style={{width: "4em"}} />
            <Image className="brands" src="https://www.netgains.org/wp-content/uploads/2014/01/node_js.png" style={{width: "3em"}} />
            <Image className="brands" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" style={{width: "6em"}} />
            <Image className="brands" src="http://handlebarsjs.com/images/handlebars_logo.png" style={{width: "5em"}} />
            <Image className="brands" src="https://seanjs.org/img/sequelize.png" style={{width: "7em"}} />
            <Image className="brands" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png" style={{width: "7em"}} />


        </Grid.Column>

);

export default Footer;