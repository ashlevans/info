import React from 'react';
import Layout from '../layouts/layout';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { I18n } from "react-i18next";
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class IndexPage extends React.Component {
  render() {
    return(
      <Layout>
        <div>
        <I18n ns={["translation"]}>
        {
          (t) => (
            <main id="main-content" role="main">
              <div className="hero-holder">
                <Container>
                  <Row style={{textAlign: "center"}}>
                    <Col md="12">
                      <h1>Work together. Better.</h1>
                    </Col>
                    <Col md="12">
                      <h4>Work with anyone, anywhere, in realtime</h4>
                    </Col>
                  </Row>       
                </Container>
              </div>
              <Container className="home-body" style={{marginTop: '50px'}}>
                <h2 className="mt-5 mb-5" style={{textAlign: 'center'}}></h2>
                <Row className="mb-5">
                  <Col xs="12" sm="6" md="4">
                    <h3 className="mb-3" style={{color: '#467B8D'}}>For Everyone</h3>
                    <p>Organizations, educational institutions, the public, and all types of Government.</p>
                  </Col>
                  <Col xs="12" sm="6" md="4">
                    <h3 className="mb-3" style={{color: '#467B8D'}}>For getting work done</h3>
                    <p>Hold a public consultation. Get input on a new project. Build and share documents with partners and clients in real-time. Keep staff and clients informed.</p>
                  </Col>
                  <Col xs="12" sm="6" md="4">
                    <h3 className="mb-3" style={{color: '#467B8D'}}>For free</h3>
                    <p>Use our tools to work with anyone. Or download them and customize for your own organization. For free. Forever.</p>
                  </Col>
                </Row>
                </Container>
                <div className="footer-holder">
                  <Container>
                    <div>
                      <p className="lead" style={{ display: 'inline-block', paddingBottom: '10px', textAlign: 'left' }}>
                        Check out the features (test button)
                        <div>
                          <Link to="/features/example" className="btn btn-primary mt-3">{t("LearnMore")}</Link>
                        </div>
                      </p>
                    </div>
                  </Container>
                </div>
            </main>

          )
        }
        </I18n>
        <Footer/>
      </div>
      </Layout>
    );
  }
}



export default IndexPage;
