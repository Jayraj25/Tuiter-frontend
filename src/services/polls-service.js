/**
 * @file Gets the polls APIs for rendering in frontend
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);
const POLLS_API = `${BASE_URL}/api/polls`;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

export const findAllPolls = () =>
    api.get(POLLS_API)
        .then(response => response.data);

export const findPollById = (pid) =>
    api.get(`${POLLS_API}/${pid}`)
        .then(response => response.data);

export const createPoll = (uid, poll) =>
    api.post(`${USERS_API}/${uid}/creates/polls`, poll)
        .then(response => response.data);

export const deletePoll = (uid, pid) =>
    api.delete(`${USERS_API}/${uid}/deletepoll/polls/${pid}`)
        .then(response => response.data);

export const createResponse = (uid, pid, pollResponse) =>
    api.post(`${BASE_URL}/api/user/${uid}/response/polls/${pid}`, pollResponse)
        .then(response => response.data);

export const deleteResponse = (uid, pid) =>
    api.delete(`${USERS_API}/${uid}/deleteresponse/polls/${pid}`)
        .then(response => response.data);

export const closePoll = (uid, pid, poll) =>
    api.put(`${USERS_API}/${uid}/close/polls/${pid}`, poll)
        .then(response => response.data);
