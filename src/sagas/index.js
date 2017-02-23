import { takeLatest } from 'redux-saga'
import API from 'services/api'

/* Types */
import { authTypes } from 'modules/auth'
import { commentTypes } from 'modules/comment'
import { projectTypes } from 'modules/project'
import { teamTypes } from 'modules/team'
import { ticketTypes } from 'modules/ticket'
import { userTypes } from 'modules/user'

/* Sagas */

import {
  login, register, logout
} from 'sagas/auth'
import {
  fetchComment, fetchComments, createComment, updateComment, deleteComment
} from 'sagas/comments'
import {
  fetchProject, fetchProjects, createProject, updateProject, deleteProject
} from 'sagas/projects'
import {
  fetchTeam, fetchTeams, createTeam, updateTeam, deleteTeam
} from 'sagas/teams'
import {
  fetchTicket, fetchTickets, createTicket, updateTicket, deleteTicket
} from 'sagas/tickets'
import {
  fetchUser, fetchUsers, createUser, updateUser, deleteUser
} from 'sagas/users'

/* API */

// We use a separate variable so that we can switch between different API
// services, e.g. fixture api, if we so choose.
const api = API

export default function * root () {
  yield [
    // ticket
    takeLatest(ticketTypes.FETCH_REQUEST, fetchTicket, api),
    // TODO: Differentiate between singular and multiple, or combine into one saga
    takeLatest(ticketTypes.FETCH_REQUEST, fetchTickets, api),
    takeLatest(ticketTypes.CREATE_REQUEST, createTicket, api),
    takeLatest(ticketTypes.UPDATE_REQUEST, updateTicket, api),
    takeLatest(ticketTypes.DELETE_REQUEST, deleteTicket, api),

    // project
    takeLatest(projectTypes.FETCH_REQUEST, fetchProject, api),
    // TODO: Differentiate between singular and multiple, or combine into one saga
    takeLatest(projectTypes.FETCH_REQUEST, fetchProjects, api),
    takeLatest(projectTypes.CREATE_REQUEST, createProject, api),
    takeLatest(projectTypes.UPDATE_REQUEST, updateProject, api),
    takeLatest(projectTypes.DELETE_REQUEST, deleteProject, api),

    // team
    takeLatest(teamTypes.FETCH_REQUEST, fetchTeam, api),
    // TODO: Differentiate between singular and multiple, or combine into one saga
    takeLatest(teamTypes.FETCH_REQUEST, fetchTeams, api),
    takeLatest(teamTypes.CREATE_REQUEST, createTeam, api),
    takeLatest(teamTypes.UPDATE_REQUEST, updateTeam, api),
    takeLatest(teamTypes.DELETE_REQUEST, deleteTeam, api),

    // user
    takeLatest(userTypes.FETCH_REQUEST, fetchUser, api),
    // TODO: Differentiate between singular and multiple, or combine into one saga
    takeLatest(userTypes.FETCH_REQUEST, fetchUsers, api),
    takeLatest(userTypes.CREATE_REQUEST, createUser, api),
    takeLatest(userTypes.UPDATE_REQUEST, updateUser, api),
    takeLatest(userTypes.DELETE_REQUEST, deleteUser, api),

    // comment
    takeLatest(commentTypes.FETCH_REQUEST, fetchComment, api),
    // TODO: Differentiate between singular and multiple, or combine into one saga
    takeLatest(commentTypes.FETCH_REQUEST, fetchComments, api),
    takeLatest(commentTypes.CREATE_REQUEST, createComment, api),
    takeLatest(commentTypes.UPDATE_REQUEST, updateComment, api),
    takeLatest(commentTypes.DELETE_REQUEST, deleteComment, api),

    // auth
    takeLatest(authTypes.LOGIN_REQUEST, login, api),
    takeLatest(authTypes.REGISTER_REQUEST, register, api),
    takeLatest(authTypes.LOGOUT, logout),
  ]
}
