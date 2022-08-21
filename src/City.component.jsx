import { useState } from "react";
import Cities from "./Cities.component";
import CityDetails from "./CityDetails.component";

const City = () => {
const[page,setPage]=useState(false);

  const Display = () => {

    switch(page){

        case false:
            return<CityDetails
            pname="rishon"
            ppepole={32554}
            pstreets={456}
            pisBeach={true}
            psimbol="https://thumbs.dreamstime.com/b/flag-rishon-lezion-israel-fourth-largest-city-131899181.jpg"
          />

          case true:
            return <Cities />

            default:
                break;
    }
}

  return (
    <>
    
      <Display />

      <button onClick={() => setPage(!page)}>change</button>
    </>
  );
};

export default City;
