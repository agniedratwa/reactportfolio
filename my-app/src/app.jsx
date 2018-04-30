import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import './sass/main.css';
import "./images/fontello-7d8987d0/css/fontello.css";
import "./images/fontello-9adf077d/css/fontello.css";
import Section from"./home";
import MenuContainer from "./menucontainer";
import WelcomePage from "./WelcomePage";
import People from "./people";
import Things from "./things";
import Places from "./places";
import About from "./about";
import Contact from "./Contact";





class App extends React.Component{

    render(){
        return (

            <HashRouter>
                <div>
                    <WelcomePage/>
                    <MenuContainer/>
                    <Switch>
                        <Route exact path="/" component={Section}/>

                        <Route path="/people" component={People}/>
                        <Route path="/things" component={Things}/>
                        <Route path="/places" component={Places}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>

                    </Switch>
                </div>
            </HashRouter>
        )

    }
}


export default App