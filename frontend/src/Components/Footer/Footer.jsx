import React from 'react'
import twitterIcon from '../Assets/icons/twitter.svg'
import linkedIcon from '../Assets/icons/linkedin.svg'
import gitIcon from '../Assets/icons/github.svg'

const Footer = () => {
  return (
    <div className='footer-div'>
      <footer className="py-5">
        <div className="row">
        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
            <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" fdprocessedid="giwg8"/>
                <button className="btn btn-primary" type="button" fdprocessedid="8s9ap">Subscribe</button>
            </div>
            </form>
        </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
            <li className="ms-3"><a class="link-dark" href="https://github.com/Ayush8418"><img src={gitIcon} alt="" /></a></li>
            <li className="ms-3"><a class="link-dark" href="https://www.linkedin.com/in/ayush-kumar271220048418/"><img src={linkedIcon} alt="" /></a></li>
            <li className="ms-3"><a class="link-dark" href="https://x.com/AyushSingh9141"><img src={twitterIcon} alt="" /></a></li>
        </ul>
        </div>
    </footer>
        </div>
  )
}

export default Footer
