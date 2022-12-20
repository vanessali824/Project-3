import Button  from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
const Error = (props) => {

    return (
      <div>
        <Alert variant='warning' className="m-3">Error: {props.message}</Alert>
        <Button variant='primary' className='rounded mx-3' onClick={props.resetState}>Back to List</Button>
      </div>
    );
  };
  
  export default Error;
  