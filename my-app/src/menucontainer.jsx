import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';

class HamburgerButton extends React.Component{
    render(){
        return(

            <i class="icon-menu" onMouseDown={this.props.handleMouseDown} ></i>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <div id="flyoutMenu"
                 onMouseDown={this.props.toggleMenu}
                 className={this.props.menuVisibility}>
                <ul className="navbarContent">
                    <li>Portfolio
                        <ul className="subMenu">
                            <li>
                                <Link to="/people">People</Link>
                            </li>
                            <li>
                                <Link to="/things">Things</Link>
                            </li>
                            <li>
                                <Link to="/places">Places</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

class MenuContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }

    render() {
        var visibility = "hide";

        if (this.state.visible) {
            visibility = "show";
        }

        return (
            <div className="menuContainer">
                <HamburgerButton handleMouseDown={this.handleMouseDown}/>
                <NavBar toggleMenu={this.toggleMenu} menuVisibility={visibility}/>

            </div>
        );
    }
}


export default MenuContainer;