import React from 'react'
import './CSS/footer.css'

function Footer() {
  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              Mohalla Sheikh-an-wala <br/>
              New York, NY 535022 - US<br/>
            </p>
          </div>

        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +92 3007857154<br/>
              <strong>Email:</strong> Feeshanm@gmail.com<br/>
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Follow Me</h4>
          <div className="social-links d-flex">
            <a href="https://twitter.com/No13mi23" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/nomi.malik.3998" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/n_o_m_i_3/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="www.linkedin.com/in/malik-noman343" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>ETERNA</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="">Feeshan Sheikh</a>
      </div>
    </div>

  </footer>
  )
}

export default Footer