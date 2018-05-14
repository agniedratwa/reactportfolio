import React from "react";


class About extends React.Component{
    render(){
        return (
            <div className="aboutContainer">
                <div className="profilePicture"/>
                <div className="about">

                    <p>Agnieszka Dratwa is a Polish born <span className="lobster">photographer</span>.</p>

                    <p>Agnieszka attended the University of Wroclaw, and received a Bachelor's degree in Journalism with a specialization in Audiovisual Communication.
                    In 2011 Agnieszka moved to Toronto (Canada) where she completed Creative Photography diploma program  at Humber College Institute of Technology and Advanced Learning. In 2018 Agnieszka moved to Warsaw, Poland.</p>

                    <p>Agnieszka has worked as a <span className="lobster">model & actress</span> in Poland and Canada.</p>
                    <p className="warsaw">Agent Warsaw: <a href="http://vanillamodels.pl" target="_blank">Vanilla Models</a></p>
                    <p className="toronto">Agent Toronto: <a href="http://sherrida.com">Sherrida Mgmt</a></p>
                </div>
            </div>

        )
    }
}

export default About;

