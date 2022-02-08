import { DataTrendy } from "../Models/Gif";

interface Props {
    gif:DataTrendy
}


export function Result({gif}: Props){




    return(

        <div>
            Title:{gif.title}
            GIF:<img src ={gif.images.original.url} />
        </div>


    )
}