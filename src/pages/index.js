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
                    {/*<Col md="12">
                      <h1>Work together. Better.</h1>
                    </Col> */}
                    
                    <Col md="12">
                      <h4>Work with anyone, anywhere, in realtime</h4>
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
                <p className="lead col-md-12 text-center">
                  <span className="badge badge-primary">ACCESS</span></p>
                  <table className="table table-sm table-striped table-responsive mb-5 ">
                      <caption className="invisible">Access</caption>
                      <thead>
                          <tr>
                              <th scope="col" style={{width: "20%"}}>Features</th>
                              <th scope="col">Collab</th>
                              <th scope="col">Sharepoint <br/>Online Plan 2</th>
                              <th scope="col">Facebook</th>
                              <th scope="col">Twitter</th>
                              <th scope="col">LinkedIn</th>
                          </tr>
                      </thead>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span>Web based</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >Mobile app</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          (beta)</span><p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "17pt"}}>
                          <td>
                          <p><span >External organization access</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >All-of-government access</span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span className="fas fa-check-circle text-success lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >Pricing (Annual enterprise pricing, 
                          based on 1000 users)</span></p>
                          </td>
                          <td>
                          <p><span >Free</span></p>
                          </td>
                          <td>
                          <p>$125,000<br/>(enterprise)</p>
                          </td>
                          <td>
                          <p>$36,000</p>
                          </td>
                          <td>
                          <p><span>Free (with ads)</span></p>
                          </td>
                          <td>
                          <p>$599,880<br/>(business plan)</p>
                          </td>
                      </tr>
                  </table>
                  <div>
                      <p className="lead"><span className="badge badge-primary">PRODUCTIVITY</span></p>
                  </div>
                  <table className="table  table-sm table-striped table-responsive mb-5">
                      <caption className="invisible">Productivity</caption>
                      <thead>
                          <tr>
                              <th scope="col" style={{width: "20%"}}>Features</th>
                              <th scope="col">Collab</th>
                              <th scope="col">Sharepoint <br/>Online Plan 2</th>
                              <th scope="col">Facebook</th>
                              <th scope="col">Twitter</th>
                              <th scope="col">LinkedIn</th>
                          </tr>
                      </thead>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >Open Workspaces</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >Private Workspaces</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "25pt"}}>
                          <td>
                          <p><span >Share and edit files</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr style={{height: "15pt"}}>
                          <td>
                          <p><span >Real-time document editing</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          (beta)</span><p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                  </table>
                  <div>
                      <p className="lead"><span className="badge badge-primary">COMMUNICATION</span></p>
                  </div>
                  <table className="table table-sm  table-striped table-responsive mb-5">
                      <caption className="invisible">Communication</caption>
                      <thead>
                          <tr>
                              <th scope="col" style={{width: "20%"}}>Features</th>
                              <th scope="col">Collab</th>
                              <th scope="col">Sharepoint <br/>Online Plan 2</th>
                              <th scope="col">Facebook</th>
                              <th scope="col">Twitter</th>
                              <th scope="col">LinkedIn</th>
                          </tr>
                      </thead>
                      <tr>
                          <td>
                          <p><span>Discussions</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span >Instant messaging</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          (beta)</span><p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span >Post and find jobs</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span>Blog feature</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span>Filter news and site activity by topic</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span >Find members by field (ie,Government, 
                          business, academic, media, etc.)</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                  </table>
                  <div>
                      <p className="lead"><span className="badge badge-primary">FINE PRINT</span></p>
                  </div>
                  <table className="table table-sm  table-striped table-responsive">
                      <caption className="invisible">Fine Print</caption>
                      <thead>
                          <tr>
                              <th scope="col" style={{width: "5%"}}>Features</th>
                              <th scope="col" style={{width: "5%"}}>Collab</th>
                              <th scope="col" style={{width: "5%"}}>Sharepoint <br />
                              Online Plan 2</th>
                              <th scope="col" style={{width: "5%"}}>Facebook</th>
                              <th scope="col" style={{width: "5%"}}>Twitter</th>
                              <th scope="col" style={{width: "5%"}}>LinkedIn</th>
                          </tr>
                      </thead>
                      <tr>
                          <td>
                          <p><span >Dedicated user community that continuously 
                          works to improve the software</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p><span>Open Source</span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-check-circle text-success lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-danger lead">
                          </span></p>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <p>Ad-free</p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-check-circle text-success lead">
                          </span></p>
                          </td>
                          <td>
                          <p>
                          <span alt="No" className="fas fa-times-circle text-success lead">
                          </span></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-times-circle text-danger lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-times-circle text-danger lead">
                          </span>
                          <p></p>
                          </td>
                          <td>
                          <span alt="Yes" className="fas fa-times-circle text-danger lead">
                          </span>
                          <p></p>
                          </td>
                      </tr>
                      <tr>
                          <td>Easy to learn and use?</td>
                          <td>
                          <span className="bg-danger rounded col-sm-11 lead" style={{color: "#ffffff"}}>
                          Medium</span></td>
                          <td><span className="bg-success rounded col-sm-11 lead">Easy</span></td>
                          <td><span className="bg-success rounded col-sm-11 lead">Easy</span></td>
                          <td><span className="bg-success rounded col-sm-12 lead">Easy</span></td>
                          <td><span className="bg-success rounded col-sm-12 lead">Easy</span></td>
                      </tr>
                  </table>
                </Container>
                <div className="footer-holder">
                  <Container>
                    <div>
                      <p className="lead" style={{ display: 'inline-block', paddingBottom: '10px', textAlign: 'left' }}>
                        <div>
                          <Link to="https://gccollab.ca/splash/" className="btn btn-primary mt-3">Join Collab Today</Link>
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
