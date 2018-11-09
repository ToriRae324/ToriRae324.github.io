import React from "react";
import "./About.css";
import { Grid, Image } from 'semantic-ui-react'


const About = () => (

    <Grid.Row>
        <Grid.Column>
            <Image src="./images/personalimage.png" id="myImage" />
            <p>Naturally enthusiastic about technology, my passion, my learning, and my skills are broad: graphic design,
                    website development, computer programming, IT support, and auto mechanics.</p>

            <p>I’m trained as a full-stack developer and I’m currently enrolled as a part-time, online student at North
                Carolina Agricultural and Technical State University (NC A&T), pursuing my Bachelor of Science degree
                    in Information Technology. I also hold an Associate’s in Applied Science (A.A.S), a Digital Design Certificate.</p>

            <p>Combined with my experience in HTML5, CSS3, JavaScript, jQuery, Bootstrap, React.js, Node.js, MongoDB, MySQL, Command Line, and Git and my keen ability to quickly identify, troubleshoot,
                    and resolve code errors and bugs, I have provided invaluable quality assurance support on many projects.</p>

            <p>The daughter of a Marine Corps military veteran, I rise to the occasion and exceed personal and professionalexpectations.
                I’m a dependable, respectful, natural leader and great team player: I rally the troops,provide encouragement,
                    and never give-up. Ooh-rah!</p>
        </Grid.Column>
    </Grid.Row>

);

export default About;