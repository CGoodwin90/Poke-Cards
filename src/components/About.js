import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
    return (
        <div className="tc bg-navy dib br3 pa3 ma2 bw2 shadow-5 white w-two-thirds">
            <h2>Hi, I'm Chris!</h2>
            <p>I'm a Full-stack Developer born in Australia, and currently living in Melbourne. A secret coder and developer at heart, I studied Criminology and worked in IT for 5 years. I'm now a Front-end web developer looking to expand my technical skills, network and industry experience.</p>
            <h2 className="mt4">About This App</h2>
            <p>My first React project - search Pokémon leveraging the <a href="https://pokeapi.co/" rel="noreferrer" target='_blank'>PokéAPI</a></p>
            <p>Version 1.0.1</p>
            <div className="mt4">
                <h2>Want to get in touch?</h2>
                <a className="pa3 white f2" href="https://github.com/CGoodwin90"><FontAwesomeIcon className="grow" icon={faGithub} /></a>
                <a className="pa3 white f2" href="https://www.linkedin.com/in/chris-goodwin-bb85a416a/"><FontAwesomeIcon className="grow" icon={faLinkedin} /></a>
                <a className="pa3 white f2" href="mailto:christopher.goodwin2190@gmail.com" rel="noreferrer" target="_blank"><FontAwesomeIcon className="grow" icon={faEnvelope} /></a>
            </div>
        </div>
    );
};

export default About;
