export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

import { fetchUsers, fetchUser } from '../util/user_api_util';

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})


export const requestUsers = () => dispatch => {
    return fetchUsers().then((users) => dispatch(receiveUsers(users)))
}

export const requestUser = (id) => dispatch => {
    return fetchUser(id).then((user) => dispatch(receiveUser(user)))
}





