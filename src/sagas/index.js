import { takeLatest, takeEvery } from 'redux-saga'
import api from 'services/api'

/* Types */
import { authTypes } from 'modules/authRedux'
import { commentTypes } from 'modules/commentRedux'
import { projectTypes } from 'modules/projectRedux'
import { teamTypes } from 'modules/teamRedux'
import { ticketTypes } from 'modules/ticketRedux'
import { userTypes } from 'modules/userRedux'

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
