import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className="table-responsive">
        <table class="table table-hover">
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Prueba Title</td>
              <td>Prueba Desc</td>
              <td>
                <button className="btn btn-warning ml-2">
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button className="btn btn-danger ml-2">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Table;