import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    trandingMovies: [], 
    trandingTVShows: [], 
    videoDetail: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TRENDINGMOVIES:
            return ({
                ...state,
                trandingMovies: action.payload
            })
        case ActionTypes.TRENDINGTVSHOWS:
            return ({
                ...state,
                trandingTVShows: action.payload
            })
        case ActionTypes.VIDEODETAIL:
            return ({
                ...state,
                videoDetail: action.payload
            })
        default:
            return state;
    }

}