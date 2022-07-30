import React , {useState} from "react";

function Home()
{
    const[col,setCol]=useState('violet');
    const[bgcol,setBgcol]=useState('bisque');



    return <div>
        <h1>
           : manipulating css from hooks
        </h1>
        <h1 style={{color : col , backgroundColor: bgcol}}>
            starboy_03
        </h1>
        <h1>
            vancity_dc19
        </h1>
    </div>
}

export default  Home;