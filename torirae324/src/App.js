import React from "react";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react'

import "./App.css"
// import Header from "./components/Header"
import About from "./components/About"
// import Projects from "./components/Projects"
import Footer from "./components/Footer"



const App = () => (


    <Router>
        <Grid columns={1}>
            <Grid.Row>
                {/* <Header /> */}
            </Grid.Row>

            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/portfolio" component={Projects} /> */}
            </Switch>

                
            <Grid.Row>
                <Footer />
            </Grid.Row>

        </Grid>
    </Router>
);

export default App;