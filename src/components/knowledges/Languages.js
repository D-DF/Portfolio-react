import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 0.6},
            {id: 1, value: "Css3", xp: 1.4},
            {id: 1, value: "Html5", xp: 1.4}
        ],
        frameworks: [
            {id: 1, value: "React", xp: 0.5},
            {id: 1, value: "NodeJS", xp: 0.5},
            {id: 1, value: "Sass", xp: 1.2},
            {id: 1, value: "Bootstrap", xp: 0.6}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                languages={languages}
                className="languagesDisplay"
                title="languages"
                />
                <ProgressBar 
                languages={frameworks}
                title="frameworks et librairies"
                className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;