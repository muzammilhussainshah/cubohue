// import ActionTypes from '../constant/constant';

import axios from "axios";
import ActionTypes from "../constant/constant";

const TMDB_API_KEY = '54ed8b21fd2d7a380faaa388189b382f';

export const getTVtime = (date) => {
    return async (dispatch) => {
        try {
            let response = await getResponse(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&append_to_response=videos`)
            dispatch({ type: ActionTypes.TRENDINGMOVIES, payload: response?.data?.results });
        }
        catch (err) {
            console.log(err, 'error')
        }
    }
}
export const getTrendingTvShows = (date) => {
    return async (dispatch) => {
        try {
            let response = await getResponse(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&append_to_response=videos`)
            dispatch({ type: ActionTypes.TRENDINGTVSHOWS, payload: response?.data?.results });
        }
        catch (err) {
            console.log(err, 'error')
        }
    }
}
export const getMovieDetails = (movieId) => {
    return async (dispatch) => {
        try {
            let response = await getResponse(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&append_to_response=videos,credits`)
            dispatch({ type: ActionTypes.VIDEODETAIL, payload: response?.data });
        }
        catch (err) {
            console.log(err, 'error')
        }
    }
} 

export const getTvShowsDetails = (tvShowId) => {
    return async (dispatch) => {
        try {
            let response = await getResponse(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&append_to_response=videos,credits`)
            console.log(response, 'getTvShowsDetails')
            dispatch({ type: ActionTypes.VIDEODETAIL, payload: response?.data });
            return response?.data 
        }
        catch (err) {
            console.log(err, 'error')
        }
    }
}
 
const getResponse = async (URL) => {
    try {
        const option = {
            method: 'GET',
            url: URL,
            headers: {
                'X-RapidAPI-Key': '333a6e9d17msh885d0fa8107a10bp149775jsn8302b5c9acf2',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            },
        };
        var resp = await axios(option);
        return resp
    }
    catch (err) {
        console.log(err, 'errerrerrerr')
    }
}