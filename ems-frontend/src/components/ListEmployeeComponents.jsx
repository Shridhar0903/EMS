import React, { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { listEmployees,deleteEmployee } from '../services/EmployeeService';


const ListEmployeeComponents = () => {

    const navigator = useNavigate();

    const [employee ,setEmployees]=useState([]) //emplty array at Starting

    //to get data from backend when page load
    useEffect(()=>{
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response)=>{
            setEmployees(response.data);  //बॅकएंडवरून आलेला डेटा State मध्ये सेव्ह केला
        }).catch(error=>{
            console.error("Error in Api call: ", error);
        })

    }

    //Delete Function 
    function removeEmployee(id){

        console.log("Deleting Employee Id:", id);

        //Delete api call
        deleteEmployee(id).then((response) =>{
            console.log("Employee Deleted Successfully");
            getAllEmployees();
        }).catch(error =>{
            console.error("Error deleteing employee:" , error)
        });
    }

   
    // 3. बटणावर क्लिक केल्यावर फॉर्मवर जाण्यासाठी फंक्शन
    function addNewEmployee(){
        navigator('/add-employee')
    }

    // 1. Function to navigate to Edit Page
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    

  return (
    <>
    <div className='container mt-5 d-flex flex-column align-items-center'>
        <h2 className='text-center mb-4'>List of Employee</h2>

        {/* 4. Add Employee Button */}
        <div className='w-75 mb-2'>
            <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
        </div>

        
    <table className='table table-striped table-bordered shadow w-75 '>
        <thead className='table-dark text-center'>
            <tr>
                <th>
                    Employee Id 
                </th>
                <th>
                    Employee First Name 
                </th>
                <th>
                    Employee Last Name 
                </th>
                <th>
                    Employee Email 
                </th>
                 <th>
                    Actions 
                </th>
            </tr>
        </thead>
        <tbody className='text-center'>
            {
                employee.map(
                    employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button 
                                    className='btn btn-info btn-sm me-2' 
                                    onClick={() => updateEmployee(employee.id)}
                                >
                                    Update
                                </button>

                                <button 
                                    className='btn btn-danger btn-sm' 
                                    onClick={() => removeEmployee(employee.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                )

            }
       
        </tbody>

    </table>
    </div>
    

    </>
  )
}

export default ListEmployeeComponents