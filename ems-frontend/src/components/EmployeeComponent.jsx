import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName ,setFirstName] = useState('')
     const [lastName ,setLastName] = useState('')
     const [email ,setEmail] = useState('')

     const navigator =useNavigate();

     const saveEmployee = (e) =>{
        e.preventDefault();
     }

     // फॉर्ममधील डेटा एका JavaScript Object मध्ये गोळा करणे
        const employee = { firstName, lastName, email }
        console.log("New Employee Data:", employee)

        // 👈 ३. डॅशबोर्ड/लिस्टवर परत जाण्यासाठी फंक्शन
    function goBackToDashboard() {
        navigator('/employees') // किंवा navigator('/')
    }

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 shadow'>
                <h2 className='text-center mt-3'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-3'>
                            <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                        </div>

                        {/* Last Name Input */}
                            <div className='form-group mb-3'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            {/* Email Input */}
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='email'
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Submit Button */}
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                            <button className='btn btn-danger ms-3 w-25' onClick={goBackToDashboard} type='button'>
                                Back
                            </button>

                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default EmployeeComponent