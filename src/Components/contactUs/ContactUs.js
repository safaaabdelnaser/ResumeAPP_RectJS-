import React from 'react';
import './ContactUs.css'
export default class ContactUs extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<>
            <div className='container-fluid contactus py-2'>
                <div className='row'>
<div className='col-12 col-md-2 pt-2  text-center'>
    <h6>Get Me Now</h6>
    <i class="bi bi-telephone"></i>
    +201150701760
</div>
<div className='col-12 col-md-7 text-center'>
    <a href="https://wa.me/+201150701760" className='btn btn-success m-2'> <i class="bi bi-whatsapp"> Chat on WhatsApp</i> </a>
  
</div>
<div className='col-12 col-md-3 text-center pt-2'>
<div >
<a href='https://www.facebook.com/safaa.abdelnaser.5667/'><i class="bi bi-facebook"></i></a>
<a href='https://twitter.com/SafaAbdelnaser'><i class="bi bi-twitter  px-3"></i></a>
<a href='safaaabdelnaser52@gmail.com'><i class="bi bi-envelope"></i></a>
 </div>
    <p>CopyRight &copy; Safaa Abdel Naser</p>
    
</div>
                </div>
            </div>
        </>);
    }
}
