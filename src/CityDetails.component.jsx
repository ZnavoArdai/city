

import { useState } from "react";

const CityDetails=({pname,ppepole,pstreets,pisBeach,psimbol})=>{
        let[name,setName]=useState(pname);
        let[pepole,setPepole]=useState(ppepole);
        let[streets,setStreets]=useState(pstreets);
        let[isBeach,setIsBeach]=useState(pisBeach);
        let[simbol,setSimbol]=useState(psimbol);
        
        return(
            <>
            <h3>{name}</h3>
            <h3>{pepole}</h3>
            <h3>{streets}</h3>
            <h3>{isBeach}</h3>
            <img src={simbol} alt="" />
            </>
        )
        
}

export default CityDetails;