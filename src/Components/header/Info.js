import React from 'react';
import "./Info.css";

export default class Info extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>

            <div className='backImage '>
              
                    <div className='info text-center '>
                        <h3 >I am Safaa Abdel Naser</h3>
                        <h5>And I'm a Front End Developer</h5>
                        <a href='https://www.linkedin.com/in/safaa-abdel-naser/' className='btn btn-primary px-3'>Hire me</a>
                    </div>
            </div>
            

        </>);
    }
}
