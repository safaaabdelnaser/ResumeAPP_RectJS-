import React from 'react';
import ProgressSkills from "../ProgressSkills/ProgressSkills";


export default class Skills extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>
        <div className='container-fluid mt-5 p-5 skills'>
            
            <div className='row'>
            <div className='col-12 col-md-2'></div>
                <div className='text-center col-12 col-md-8'>
                    <h1>Skills</h1>
                    <p >A web designer is a professional who creates a website’s appearance and design. And the front end developer makes sure that the design works online by using coding languages such,Be proficient in coding languages such as HTML, CSS, JavaScript, and jQuery
                        Understand server-side CSS.</p>
                </div>
            </div>
            <div className='row mt-4 '>
                <div className='col-12 col-md-5  mt-5  '>
                    <h2 >My Focus</h2>
                    <hr  style={{width:'34%'}}/>
                    <h5>UI/UX Design</h5>
                    <h5>Responsive Design</h5>
                    <h5>Creative Design</h5>
                    <h5>Front End Development</h5>
                    
                </div>
                <div className='col-12 col-md-7'>

                    <ProgressSkills value="90" name="Html" />
                    <ProgressSkills value="80" name="CSS" />
                    <ProgressSkills value="80" name="Bootstrap" />
                    <ProgressSkills value="70" name="Angular" />
                    <ProgressSkills value="65" name="Javascript" />
                    <ProgressSkills value="75" name="RectJS" />
                    <ProgressSkills value="85" name="SQL" />
                </div>
            </div>

        </div>
        </>);
    }
}
