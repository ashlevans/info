import React from 'react';
import { I18n } from "react-i18next";
import { Container, Row, Col } from 'reactstrap';
import Watermark from '../img/wmms-spl.svg';

const Footer = () => {

  return(
    <I18n ns={["translation"]}>
      {
        (t, { i18n }) => (
          <footer className="footer">
            <Container className="foot-container">
              <Row>
                <Col md="10">
                  What's Next for GCcollab? The Open and Accessible Digital Workspace
                  <ul>
                    <li style={{width: "100%"}}>GCcollab</li>
                    <li style={{width: "100%"}}>Collab Message</li>
                    <li style={{width: "100%"}}>Collab Wiki</li>
                  </ul>
                </Col>
                <Col md="2">
                  <a href="https://gccollab.ca/help/knowledgebase/">GCcollab Support</a>
                </Col>
              </Row>
              
              <img style={{"width":"160px"}} className="float-right pb-3" src={Watermark} alt="" />
            </Container>
          </footer>
        )
      }
    </I18n>
  );
}

export default Footer;
