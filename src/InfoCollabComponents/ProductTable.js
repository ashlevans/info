import React from 'react';
import PropTypes from 'proptypes';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.createHeader = this.createHeader.bind(this);
  }

  createHeader() {
    /*<th scope="col" style="width: 20%;">Features</th>
              <th scope="col">Collab</th>
              <th scope="col">Sharepoint Online Plan 2</th>
              <th scope="col">Facebook</th>
              <th scope="col">Twitter</th>
              <th scope="col">LinkedIn</th>*/

    for(var i = 0; i < this.header.length; i++) {
      if (i === 0) {

      }
    }
  }

  render() {
    return(
      <div>
        <thead>
          <tr>
            {this.props.header.map(createHeader)}
          </tr>
        </thead>
      </div>
    );
  }
}

Table.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.array
};

export default Table;