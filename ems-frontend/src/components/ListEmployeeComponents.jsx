import React, { useState } from 'react'

const ListEmployeeComponents = () => {

    //Create array for storing the Employee data 
    // const [employees , setEmployees]=useState([])

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

  return (
    <>
    <div className='container mt-5 d-flex flex-column align-items-center'>
        <h2 className='text-center mb-4'>List of Employee</h2>
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