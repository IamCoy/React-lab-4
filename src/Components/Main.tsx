import {useEffect, useState} from 'react'
import { DataTrendy, TrendyResponse } from '../Models/Gif'
import { getSearchedGif, getTrendyGifs } from '../Services/GifApi'
import { ResultsList } from './ResultsList'
import { SearchForm } from './SearchForm'

export function Main(){

    const[searchTerm, setSearchTerm] = useState("")
    const[gifs, setGifs] = useState<DataTrendy[]>([])

    useEffect(() =>{

        if(searchTerm === "") {
        getTrendyGifs().then(data => setGifs(data.data));
        } else{
            getSearchedGif(searchTerm).then(data => setGifs(data))
        }

        
    }, [])

    function setSearch(searchTerm:string){

        setSearchTerm(searchTerm)
    }


            return(

                    <div>

                    <SearchForm onSubmit={() => setSearch(searchTerm)}></SearchForm>

                    <ResultsList gifs={gifs}></ResultsList>


                    </div>




            )
}