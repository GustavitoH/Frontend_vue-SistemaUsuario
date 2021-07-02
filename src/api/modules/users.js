import axios from 'axios';
import API_URL from '@/api';

const listUsers = () => axios.get(`${API_URL}/users`);
const createUser = (newUser) => axios.post(`${API_URL}/users`, newUser);
const updateUser = (user) => {
  return axios.put(`${API_URL}/users/${user.id}`, user);
};

export default {
  listUsers,
  createUser,
  updateUser,
};
