import { useState, useEffect } from 'react';
import { Button, Locations } from './smallElements.styles';

  const Location = (props) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [place, setPlace] = useState('');
    const mapSrc = `https://map.blah/lat=${latitude}?lon=${longitude}`

    const fetchData = async () => {
        try {
        const url = `https://api.tomtom.com/search/2/search/${place}.json?limit=1&countrySet=GB&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&entityTypeSet=Municipality&key=XRyMUhZGIUGwOHRoNzx9iUi5KSLXoAN4`
        const response = await fetch(url, {
            headers:{"accept" : "*/*",
            }
        })
        if (!response.ok) {
            throw new Error(response.statusText)
            }
        const data = await response.json()
        const lat = data.results[0].position.lat
        const lon = data.results[0].position.lon
        setLatitude(lat)
        setLongitude(lon)
        } catch (err) {
          console.log(err)
        }
    }
 // eslint-disable-next-line
  useEffect(() => { // eslint-disable-next-line
    fetchData()  // eslint-disable-next-line
  }, []);

    return(
        <div>
            <Locations 
                type="text"
                value="Location..."
                onChange={(e) => setPlace(e)}></Locations>
            <Button
                onClick={fetchData}>Search</Button>
            <img className="mapImg" src={mapSrc} alt="Map"></img>
        </div>
    )
};

export default Location;