import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    trandingMovies: [], 
    trandingTVShows: [], 
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
        default:
            return state;
    }

}