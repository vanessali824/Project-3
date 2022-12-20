import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Employees = (props) => {
    return (
      <div className="p-3">
        <h1 className="fw-bold fst-italic font-monospace text-success">Final Stop</h1>
        <h2>Employee List:</h2>
        {props.data.map((employee) => {
          return (
            <ListGroup
              key={employee.id}
              onClick={() => {
                props.setSelectedEmployee(employee.id);
              }}
              style={{ cursor: "pointer" }}
              role="button"
            >
              <ListGroupItem variant="success">{employee.id} - {employee.name} - {employee.department} </ListGroupItem>
            </ListGroup>
          );
        })}
      </div>
    );
  };
  
  export default Employees;
  