import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Employee = (props) => {

    return (
    <Card className="m-3" style={{padding: '20px 30px', backgroundColor: "aliceblue"}}>
      <Card.Body>
        <Card.Title className='fw-bold fst-italic fs-1 font-monospace text-success'>Final Stop</Card.Title>
        <Card.Subtitle className="fw-bold fs-3"> {props.data.name} </Card.Subtitle>
        <Card.Text> Role: {props.data.role} - Department: {props.data.department} </Card.Text>
        <Card.Text> ID: {props.data.id} - Start Date: {props.data.startDate} </Card.Text>
      </Card.Body>
      <Card.Img varient="bottom" style={{width: 300, padding: '20px'}} src={props.data.photo} alt="Employee Pic" />
      
      <Button variant='primary' className='rounded-pill' onClick={props.resetState}>Back to List</Button>
    </Card>
  )}
  
  export default Employee;
  
  