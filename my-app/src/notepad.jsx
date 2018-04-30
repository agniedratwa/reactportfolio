import React from "react";

.menu{
    list-style:none;
    text-transform:uppercase;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    position:relative;
    li{
        padding:10px;
        cursor:pointer;

    }
}
class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.state={
            isHidden:true
        }
    }

    toggleMenu=()=>{
        this.setState({
            isHidden:!this.state.isHidden
        });


    }
    render(){

        const dropdownStyle={
            position: "absolute",
            listStyle: "none",
            backgroundColor: "#fafafa",
            paddingTop: "15px",
            fontFamily: "'Sacramento', cursive",
            fontSize: "1rem",
            textTransform: "none",
            display: this.state.isHidden?"none":"flex"
        }
        return(
            <div className="headerContainer">
                <ul className="menu">
                    <li className="left" onClick={this.toggleMenu}>Portfolio
                        <ol style={dropdownStyle}>
                            <li>People</li>
                            <li>Things</li>
                            <li>Places</li>
                        </ol>
                    </li>
                    <li className="right">About</li>
                    <li className="right">Contact</li>
                </ul>
            </div>
        )
    }

}