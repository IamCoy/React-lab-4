import { DataTrendy } from "../Models/Gif"
import { Result } from "./Result"

export function ResultsList(props: {gifs:DataTrendy[]}) {




    return(
        <div>
            <h2>results</h2>

            <div>
            {props.gifs.map(gif => <Result key={gif.id} gif={gif}></Result>)}
            </div>

        </div>
    )
}