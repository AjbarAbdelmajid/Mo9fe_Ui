export const USERS_DATA = 'USERS_DATA';
export const GET_USERS_DATA_BEGIN = 'GET_USERS_DATA_BEGIN';


export const UsersData = data =>({
    type: USERS_DATA,
    usersPayload: data
});
export const GetUsersDataBegging =  ()=>({
    type: GET_USERS_DATA_BEGIN
});