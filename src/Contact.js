import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div>
            <section>

<div className="c-me">
    <h1>Contact Us</h1>
    <div className="inl">

        <div className="form-c">
            <form>
                <div>
                    <label for="name"><b>Name</b></label>
                    <div className="gap">
                        <input type="name" placeholder="Your name" required/></div>
                    <label for="email">E-mail</label>
                    <div className="gap">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <label for="message">Message</label>
                    <div className="gap">
                        <input type="text" placeholder="Message" required/>
                    </div>
                    <div className="sun-but">
                        <button>  Send Message </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="touch">
            <h3>
                Get in touch
            </h3>
            <p>
                Feel free to ask something form us
            </p>
            <h3>
                Address
            </h3>
            <p>
                You can contact us here <br></br> Delhi ,India <br></br>+91 0000000000 <br></br>abcdefgh@gmail.com
            </p>
        </div>
    </div>
</div>

</section>
        </div>
    )
}

export default Contact
