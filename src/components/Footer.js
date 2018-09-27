import React from 'react';
import { I18n } from "react-i18next";
import { Container } from 'reactstrap';
import Watermark from '../img/wmms-spl.svg';

const Footer = () => {

  return(
    <I18n ns={["translation"]}>
      {
        (t, { i18n }) => (
          <footer className="footer">
            <Container className="foot-container">
              <ul>
                <li><a href="https://github.com/ashlevans/ashlevans.github.io">GitHub</a></li>
              </ul>
              <img style={{"width":"160px"}} className="float-right pb-3" src={Watermark} alt="" />
              WICKED FOOTER MY DUDE 
            </Container>
          </footer>
        )
      }
    </I18n>
  );
}

export default Footer;
