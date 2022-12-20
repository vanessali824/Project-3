import { useEffect, useState } from "react";
import Employee from "./components/Employee";
import Employees from "./components/Employees";
import Error from "./components/Error";
import Loading from "./components/Loading";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData]=useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);
  
  const resetState = () =>{
    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    getEmployeeData();
    setError(false);
  };

  const getEmployeeData = (id=null) => {
    setLoading(true);
      let actualId='';
      if(!!id && parseInt(id,10)>0){
        actualId = parseInt(id,10);
      }
  
      axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response => {
        setEmployeeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "No error given");
      });
      
  };
  useEffect(() => {
    getEmployeeData();
  }, []);


  useEffect(() => {
    if(!!selectedEmployee){
      getEmployeeData(selectedEmployee);
    }
  }, [selectedEmployee]);
  return (
    <div className="App">
        {!!error && <Error resetState={resetState} message={error}/>}
        {!error && <>
        {!!loading && <Loading />}
        {!loading && (
          <div>
            {/* listing of Employees */}
            {!selectedEmployee && <Employees setSelectedEmployee={setSelectedEmployee} data={employeeData}/>}
            {/* individual Employee listing */}
            {!!selectedEmployee && <Employee resetState={resetState} data={employeeData} />}

            
          </div>
      )}

      </>}
     
    </div>
  );
}


export default App;
