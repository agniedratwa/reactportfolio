import React from "react";


class WelcomePage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            isHidden:false
        }
    }

    togglePage=()=>{
        this.setState({
            isHidden: true
        });


    }

    render(){

        const welcomePage={
            width:"100vw",
            height:"100vh",
            position:"fixed",
            zIndex:"2000",
            display: this.state.isHidden?"none":"flex",

        }



        return(
            <div style={welcomePage} className="welcomePage">
                <div className="welcomePageBackground">
                    <a className="welcomeLink" onClick={this.togglePage} href="#">Agnieszka Dratwa Photography</a>
                </div>
            </div>
        )
    }
}

export default WelcomePage;