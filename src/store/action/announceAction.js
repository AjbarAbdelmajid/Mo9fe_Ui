export const GET_ANNOUNCE_BEGIN = 'GET_ANNOUNCE_BEGIN';
export const GET_ANNOUNCE_SUCCESS  = 'GET_ANNOUNCE_SUCCESS';
export const GET_ANNOUNCE_FAILURE = 'GET_ANNOUNCE_FAILURE';

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

