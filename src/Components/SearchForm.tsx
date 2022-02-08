import { useState } from "react"

export function SearchForm(props: { onSubmit: (searchTerm:string) => void}){


        const[input, setInput] = useState("")

        

        return(

                    <div>

                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/> 
                        <button onClick={() => props.onSubmit(input)}>Search</button>





                    </div>



            
        )
}