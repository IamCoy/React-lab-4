import axios from 'axios'
import { TrendyResponse } from '../Models/Gif'


export function getTrendyGifs(){

    return axios.get<TrendyResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=g`)
        .then(response => response.data)
}

export function getSearchedGif(searchTerm:string){

    return axios.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
        .then(response => response.data)
}