import React from 'react';
import Form from './form';
import Table from './table';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <main className='container p-4'>
        <div className='row'>
          <Form/>
          <div className="col-md-8">
            <Table/>
          </div>
        </div>
      </main>
    );
  }
}
 
export default Main;