import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

// नवीन कर्मचारी जोडण्यासाठी POST API Call
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);