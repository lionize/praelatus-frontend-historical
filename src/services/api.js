import parseResponse from 'utils/parse-response';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

const fetchTickets = () => {
  return api.get('/api/tickets').then(res => parseResponse(res.data, 'key'));
};

const createTicket = (payload = {}) => {
  return api
    .post('/api/tickets', payload)
    .then(res => parseResponse(res.data, 'key'));
};

const updateTicket = (payload = {}) => {
  return api
    .put(`/api/tickets/${payload.key}`)
    .then(res => parseResponse(res.data, 'key'));
};

const deleteTicket = payload => {
  return api.delete(`/api/tickets/${payload.key}`).then(res => res.data);
};

const fetchTeams = () => {
  return api.get('/api/teams').then(res => parseResponse(res.data, 'name'));
};

const createTeam = payload => {
  return api
    .post('/api/teams', payload)
    .then(res => parseResponse(res.data, 'name'));
};

const updateTeam = payload => {
  return api
    .put(`/api/tickets/${payload.id}`, payload)
    .then(res => parseResponse(res.data, 'name'));
};

const deleteTeam = payload => {
  return api
    .delete(`/api/tickets/${payload.id}`)
    .then(res => parseResponse(res.data, 'name'));
};

const fetchProjects = () => {
  return api.get('/api/projects').then(res => parseResponse(res.data, 'key'));
};

const createProject = payload => {
  return api
    .post('/api/projects', payload)
    .then(res => parseResponse(res.data, 'key'));
};

const updateProject = (payload = {}) => {
  return api
    .put(`/api/projects/${payload.key}`, payload)
    .then(res => parseResponse(res.data, 'key'));
};

const deleteProject = payload => {
  return api
    .post(`/api/projects/${payload.key}`)
    .then(res => parseResponse(res.data, 'key'));
};

const fetchComments = payload => {
  return api.get(`/api/tickets/${payload.key}/comments`).then(res => res.data);
};

const createComment = payload => {
  return api
    .post(`/api/tickets/${payload.key}/comments`, payload)
    .then(res => res.data);
};

const updateComment = payload => {
  return api
    .put(`/api/tickets/comments/${payload.id}`, payload)
    .then(res => res.data);
};

const deleteComment = payload => {
  return api
    .delete(`/api/tickets/comments/${payload.id}`)
    .then(res => res.data);
};

const fetchUsers = () => {
  return api.get('/api/users').then(res => parseResponse(res.data, 'username'));
};
const updateUser = () => {};
const deleteUser = () => {};

const login = payload => {
  return api.post('/api/users/sessions', payload).then(res => {
    api.defaults.headers.common.Authorization = res.headers.token;
    return res.data;
  });
};

const register = payload => {
  return api.post('/api/users', payload).then(res => res.data);
};

export default {
  fetchTickets,
  createTicket,
  updateTicket,
  deleteTicket,
  fetchTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  fetchUsers,
  updateUser,
  deleteUser,
  login,
  register,
};
