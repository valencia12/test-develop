import React from 'react'
import logo from '../assets/logo.png'
export default function Nav(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NEXTIA</a>
                    <img src={logo} width="140" alt="nextia" />
                    <div type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        {props.children}
                    </div>
                </div>
            </nav>
        </div>
        
    )
}
