import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom' // Added useParams import
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService' // Add updateEmployee if available

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();
    const { id } = useParams(); // Now properly imported from react-router-dom

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error("Error fetching employee:", error);
            });
        }
    }, [id]);

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required!';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required!';
            valid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim()) {
            if (emailPattern.test(email)) {
                errorsCopy.email = '';
            } else {
                errorsCopy.email = 'Please enter a valid email address (e.g., name@gmail.com)';
                valid = false;
            }
        } else {
            errorsCopy.email = 'Email is required!';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email };

            if (id) {
                // Update existing employee
                updateEmployee(id, employee).then((response) => {
                    console.log("Data Updated Successfully:", response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error("Error updating employee:", error);
                });
            } else {
                // Create new employee
                createEmployee(employee).then((response) => {
                    console.log("Data Saved Successfully:", response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error("Error saving employee:", error);
                });
            }
        }
    }

    function goBackToDashboard() {
        navigator('/employees');
    }

    // Dynamic Title based on whether editing or adding
    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center mt-3'>Update Employee</h2>;
        } else {
            return <h2 className='text-center mt-3'>Add Employee</h2>;
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 shadow'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            {/* First Name Field */}
                            <div className='form-group mb-3'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            {/* Last Name Field */}
                            <div className='form-group mb-3'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            {/* Email Field */}
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Employee Email (e.g. harsh@gmail.com)'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            {/* Submit Button */}
                            <button className='btn btn-success me-2' onClick={saveOrUpdateEmployee}>Submit</button>

                            {/* Cancel Button */}
                            <button className='btn btn-danger' onClick={goBackToDashboard} type='button'>
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