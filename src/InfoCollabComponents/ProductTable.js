import React from 'react';

class ProductTable extends React.Component {

  render() {
    return(
      <div>
        <p className="lead col-md-12">
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
      </div>
    );
  }
}

export default ProductTable;