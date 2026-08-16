import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponents = () => {

    const navigator = useNavigate();

    const dummyData=[
        {
            "id":1,
            "firstName":"Harsh",
            "lastName": "Bagayatkar",
            "email": "harsh@gmail.com"
        },
        {
            "id":2,
            "firstName":"Shridhar",
            "lastName": "Bagayatkar",
            "email": "shridhar@gmail.com"
        }

    ]

    // 3. बटणावर क्लिक केल्यावर फॉर्मवर जाण्यासाठी फंक्शन
    function addNewEmployee(){
        navigator('/add-employee')
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
            </tr>
        </thead>
        <tbody className='text-center'>
            {
                dummyData.map(
                    employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
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