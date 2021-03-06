import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
    return (
        <div className="tc bg-navy dib br3 pa3 bw2 shadow-5 white">
            <h2>Hi, I'm Chris!</h2>
            <p dir="auto">I'm a Front-End Developer, looking to transition to Full-Stack development.</p>
            <ul className="tl about-info">
                <li><g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">š</g-emoji> &nbsp;I'm currently working as a Front-End Developer at Nintendo Australia</li>
                <li>šØš»āš» &nbsp;In the office I use: <code>HTML/CSS</code>, <code>JavaScript</code>, <code>Vue</code>, <code>Nuxt</code>, <code>Vercel</code></li>
                <li><g-emoji class="g-emoji" alias="house_with_garden" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e1.png">š”</g-emoji> &nbsp;At home I use: <code>React</code>, <code>Ruby</code>, <code>Rails</code></li>
                <li><g-emoji class="g-emoji" alias="seedling" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f331.png">š±</g-emoji> &nbsp;Iām currently learning:
                <ul>
                    <li>The more advanced concepts of Ruby/Rails</li>
                    <li>React - intermediate levels</li>
                    <li>JavaScript - the weird &amp; wonderful</li>
                </ul>
                </li>
                <li><g-emoji class="g-emoji" alias="mailbox" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4eb.png">š«</g-emoji> &nbsp;Reach out on LinkedIn - <a href="https://www.linkedin.com/in/chris-goodwin-bb85a416a/" rel="nofollow">https://www.linkedin.com/in/chris-goodwin-bb85a416a/</a></li>
            </ul>
            <hr/>
            <h2 className="mt4">About This App</h2>
            <p>My first React project - search PokĆ©mon leveraging the <a href="https://pokeapi.co/" rel="noreferrer" target='_blank'>PokĆ©API</a></p>
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
