import React from 'react';
import "./AboutUs.css"
import{jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
export default class AboutUs extends React.Component {
    constructor()
    {
        super();
    }
downLoadCV()
{
    const doc = new jsPDF();
    const source = window.document.getElementsByTagName("body")[0];

    html2canvas(source).then((canvas) => {

        const imgData = canvas.toDataURL('/public/images/jpg');
        doc.addImage(imgData, 'jpg', 0, 0);
        // doc.text(10, 10, 'About Us');

        doc.save('CV.pdf');
      });
}
    render(){
        return(<>
            <div className='container-fluid'>
            <div className='row mt-5'>
            <h1 className='col-12 col-md-4 ps-5'>About Me</h1>
            <div className='col-12 col-md-8 about'>
            <p>I'm a web developer several years ago I started learning computer programming. i want to work in this field because I'm interested in what I do and I love doing it. My objective is to get a good chance to prove myself and be an asset for the company I will be working for, so that I can have my own successful career. Also I hope I can help people with my knowledge and skills in my field to create better products</p>
            <button className='btn btn-dark' onClick={this.downLoadCV}>Download CV</button>
            </div>
            </div>
            </div>
            </>);
    }
}
