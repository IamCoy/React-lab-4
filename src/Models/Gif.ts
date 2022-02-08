
export interface TrendyResponse{
    data: DataTrendy[];
}

export interface DataTrendy{
    [x: string]: any;
    type:string;
    id:string;
    url:string;
    title:string;
    images: ImagesInterface
}

export interface ImagesInterface{
    original: OriginalInterface
}

export interface OriginalInterface{
    height: string;
    width: string;
    size: string;
    url:string;
}