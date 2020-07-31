import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import FavoritesDisplay from './FavoritesDisplay'
import EventLocation from './EventComponents/EventLocation'
import axios from 'axios';

export default function EventsTemplate(props) {

    //const defaultEventsState = [{"title": "Fetching Events, please wait..."}]
    const defaultFavsState = [{"title": "Fetching Events, please wait..."}]

    // test array of objects to mimic API response
    const testFavs = [{
        "eventId": "E0-01"
    }]
    //backup url in case things get hosed
    let backupUrl = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/get?app_key=${process.env.EVENTFUL_API}&id=${props.user.favorite}`
    
    // declare a variable with an empty array
    let singleEvent = []

    //calls API on page render
    useEffect(() => {
        console.log(props)
        setFavs(defaultFavsState)
        axios.get(`${process.env.REACT_APP_API}/v1/favorites`)
        .then(response => {
            console.log(response.data)
            console.log(response.data[0].eventId)
            setFavs(response.data[0].eventId)
            console.log(favs)
        })
        .catch(err => console.log('ERROR IN frontend /components/Calendar.js: '+JSON.stringify(err)))
    }, [])

    //array of objects, iterated on in EventsDisplay.js
    const [favs,setFavs] = useState(testFavs)

    // let eventNames = {
    //     events.map(event => {
    //         <div>
    //             <p>{event.name}</p>
    //             <br/>
    //         </div>
    //     })
    // }

    return (
        <div className="row margin">
            <div className="col-lg-6 offset-lg-3">
                <h1>Event Details:</h1>
                <FavoritesDisplay events={favs} />

                {/* <p>{JSON.stringify(events)}</p> */}
            </div>
        </div>
    )

}
