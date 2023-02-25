import React from 'react';
import PortofolioCard from "../PortofolioCard/PortofolioCard";
export default class Portfolio extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>
            <div className='container-fluid mt-5 p-5 '>
                <h1>Portfolio</h1>
                <div className='row mt-5'>
                    <div className='col-12 col-md-4 ' >
                        <PortofolioCard value="Web Design" style={{ backgroundColor: '#E4D4D7',color:'black' }}/>
                    </div>
                    <div className='col-12 col-md-4 my-2'>
                        <PortofolioCard value="Resposive Design " style={{ backgroundColor: '#3F3F3F' ,color:'white'}}/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <PortofolioCard value="Front End Devolpment" style={{ backgroundColor: '#E4D4D7',color:'black' }}/>
                    </div>
                </div>
                <div className='row  mt-3'>
                    <div className='col-12 col-md-4' >
                        <PortofolioCard value="UX/UI Design" style={{ backgroundColor: '#E4D4D7',color:'black' }}/>
                    </div>
                    <div className='col-12 col-md-4 my-2'>
                        <PortofolioCard value="Mobile Development" style={{ backgroundColor: '#3F3F3F' ,color:'white'}}/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <PortofolioCard value="Creative Design" style={{ backgroundColor: '#E4D4D7',color:'black' }}/>
                    </div>
                </div>

            </div>
        </>);
    }
}
