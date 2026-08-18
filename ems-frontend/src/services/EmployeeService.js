import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

// नवीन कर्मचारी जोडण्यासाठी POST API Call
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

//Delete Api
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);

// 👈 4. Single Employee चा डेटा आणण्यासाठी (GET by ID)
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

// 👈 5. Employee अपडेट करण्यासाठी (PUT)
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);