import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import EventName from './EventComponents/EventName'
import EventLocation from './EventComponents/EventLocation'
import axios from 'axios';
import EventsDisplay from './EventsDisplay'

export default function EventsTemplate() {

    // test array of objects to mimic API response
    const testEvents = [{
        "url": "http://sandiego.eventful.com/events/lgbt-book-club-/E0-001-134699507-9?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "id": "E0-001-134699507-9",
        "city_name": "San Diego"
    }]

    //calls API on page render
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`)
        .then(response => {
            console.log(`${process.env.EVENTFUL_KEY}`)
            setEvents(response.data.events.event)
            console.log(response.data.events.event)
        })

        .catch(err => console.log('ERROR IN frontend /components/EventsTemplate.js: '+JSON.stringify(err)))

    }, [])

    //array of objects, iterated on in EventsDisplay.js
    const [events,setEvents] = useState(testEvents)

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
                <EventName events={events} />

                {/* <p>{JSON.stringify(events)}</p> */}
            </div>
        </div>
    )

}
