export const GET_ANNOUNCE_BEGIN = 'GET_ANNOUNCE_BEGIN';
export const GET_ANNOUNCE_SUCCESS  = 'GET_ANNOUNCE_SUCCESS';
export const GET_ANNOUNCE_FAILURE = 'GET_ANNOUNCE_FAILURE';
export const CREATE_ANNOUNCE_BEGIN = 'CREATE_ANNOUNCE_BEGIN';
export const CREATE_ANNOUNCE_SUCCESS = 'CREATE_ANNOUNCE_SUCCESS';
export const CREATE_ANNOUNCE_FAILURE = 'CREATE_ANNOUNCE_FAILURE';

// to inform us that the fetching is begging
export const AnnounceDataBegging =  ()=>({
    type: GET_ANNOUNCE_BEGIN
});

// to store the grabbed data from api
export const AnnounceDataSuccess = announces =>({
    type: GET_ANNOUNCE_SUCCESS,
    announcesPayload: announces
});

// in case if an error happened
export const AnnounceDataFail = error =>({
    type: GET_ANNOUNCE_FAILURE,
    payloadError: error
});

// -------------- create announce
// create announce begging
export const CreateAnnounceDataBegging =  ()=>({
    type: CREATE_ANNOUNCE_BEGIN
});

// create announce succeed
export const CreateAnnounceDataSuccess = data =>({
    type: CREATE_ANNOUNCE_SUCCESS,
    announceCreated: data
});

// create announce failed
export const CreateAnnounceDataFail = error =>({
    type: CREATE_ANNOUNCE_FAILURE,
    creationFailed: error
});