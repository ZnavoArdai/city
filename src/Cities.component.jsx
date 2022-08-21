
import CitiesTable from "./citiesTable.component";
import CityDetails from "./CityDetails.component";

const Cities = () => {
  const citiysArray = [
    {
      name: "rehovot",
      pepole: 45645,
      streets: 132,
      isBeach: "no",
      simbol:
        "https://zips.co.il/assets/img/cities/city-wikipedia-image_8400.png",
    },
    {
      name: "rishon",
      pepole: 454,
      streets: 132,
      isBeach:"yes",
      simbol:
        "https://thumbs.dreamstime.com/b/flag-rishon-lezion-israel-fourth-largest-city-131899181.jpg",
    },
  ];


  return (
    <>
    {citiysArray.map(()=>{

      return<CityDetails pname="rishon" ppepole={32554} pstreets={456} pisBeach={true} psimbol="https://thumbs.dreamstime.com/b/flag-rishon-lezion-israel-fourth-largest-city-131899181.jpg"/>

    })}
<CitiesTable arr={citiysArray}/>
    </>
  );
};

export default Cities;
