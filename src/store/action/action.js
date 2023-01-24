// import ActionTypes from '../constant/constant';

import axios from "axios";
import ActionTypes from "../constant/constant";
// import moment from "moment/moment";
// import store from '..';

const TMDB_API_KEY = '54ed8b21fd2d7a380faaa388189b382f';

export const getTVtime = (date) => {
    return async (dispatch) => {
        try {
            let response = await getResponse(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false`)
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
            let response = await getResponse(`https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false`)
            dispatch({ type: ActionTypes.TRENDINGTVSHOWS, payload: response?.data?.results });
        }
        catch (err) {
            console.log(err, 'error')
        }
    }
}

//   static async getTrendingTvShows(page) {
//     let url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US&page=${page}&include_adult=false`;
//     let data = await fetch(url);
//     return data.json();
//   }

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