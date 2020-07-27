import React from "react"
const EventsDisplay = (props) => {
    // iterates over array of object (Calendar.js)
    let eventsList = props.events.map((event, i) => {
        return (

            //console.log('eventsList return: ' + i + event.id)
                <div>
                    {event.title}
                    <br />
                    {event.start_time}
                    <br />
                    {event.address}
                    <br />
                    {event.description}
                </div> 
            )
        })   

    return (
        <div className="eventDisplay">
            <h1>List of eventful events:</h1>
            {eventsList}
            {/* {eventsList} */}
        </div>
    );
}

export default EventsDisplay