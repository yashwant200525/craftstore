// src/pages/Contact.js

import { Fragment } from 'react';
import './Contact.css'; // Assuming you'll create a separate CSS file for styling

export default function Contact() {
    return (
        <Fragment>
            <div className="contact-container">
                <h1>LOGIN</h1>
                <p>Login for better experience</p>
                <form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </Fragment>
    );
}
