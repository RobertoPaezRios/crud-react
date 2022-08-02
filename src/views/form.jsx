import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      <div className='col-md-4'>
        <div className='card card-body'>
          <h3 className='text text-center'>Create Task</h3><br></br>
          <form>
            <div className='form-group'>
              <input type="text" id="title" class="form-control" placeholder="Title"></input>
            </div><br></br>
            <div className='form-group'>
              <input type="text" id="description" class="form-control" placeholder="Description"></input>
            </div><br></br>
            <input type="button" id="save_course" className="btn btn-success col-md-12 btn-block" value="Save Course"></input>
          </form>
        </div>    
      </div>
    );
  }
}
 
export default Form;