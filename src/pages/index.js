import React from 'react';
import Layout from '../layouts/layout';
import Link from 'gatsby-link';
import ProductTable from '../InfoCollabComponents/ProductTable';
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
                    {/*<Col md="12">
                      <h1>Work together. Better.</h1>
                    </Col> */}
                    
                    <Col md="12" >
                      <h4 style={{paddingBottom: "30px"}}>Work with anyone, anywhere, in realtime</h4>
                    </Col>
                  </Row>       
                </Container>
              </div>
              <Container className="home-body" style={{marginTop: '50px'}}>
                <h2 className="mt-5 mb-5" style={{textAlign: 'center'}}></h2>
                <Row className="mb-5">
                  <Col xs="12" sm="12" md="12" style={{textAlign: 'center', marginBottom: "50px"}}>
                    <h2 className="mb-3" style={{color: '#467B8D'}}>For Everyone</h2>
                    <p style={{fontSize: "1.25em"}}>
                      Now available to all levels of government, post-secondary institutions, not-for-profit organizations, 
                      partners, and clients. Want to join? <a href="ashley.evans@tbs-sct.gc.ca">Send us a message</a>.
                    </p>
                  </Col>
                  <Col xs="12" sm="12" md="12" style={{textAlign: 'center', marginBottom: "50px"}}>
                    <h2 className="mb-3" style={{color: '#467B8D'}}>For getting work done together</h2>
                    <p style={{fontSize: "1.25em"}}>
                      Keep your team on the same page, find your next professional opportunity, edit documents in real-time, 
                      share best practices, and network with members across Canada and beyond.
                    </p>
                  </Col>
                  <Col xs="12" sm="12" md="12" style={{textAlign: 'center', marginBottom: "50px"}}>
                    <h2 className="mb-3" style={{color: '#467B8D'}}>For free</h2>
                    <p style={{fontSize: "1.25em"}}>
                      Think of GCcollab as a digital public library. A space to work with no ads, no distractions.
                    </p>
                  </Col>
                  <Col xs="12" sm="12" md="12" style={{textAlign: 'center', marginBottom: "50px"}}>
                    <h2 className="mb-3" style={{color: '#467B8D'}}>How does GCcollab compare to other tools?</h2>
                    <p style={{fontSize: "1.25em"}}>
                      Think of GCcollab as a digital public library. A space to work with no ads, no distractions.
                    </p>
                  </Col>
                </Row>
                <ProductTable />
                </Container>
                <div className="footer-holder">
                  <Container>
                    <div>
                      <p className="lead" style={{ display: 'inline-block', paddingBottom: '10px', textAlign: 'left' }}>
                        <div>
                          <Link to="https://gccollab.ca/splash/" className="btn btn-primary mt-3">Join Collab Today!</Link>
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
