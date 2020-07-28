import React from "react"
const EventsDisplay = (props) => {
    // iterates over array of object (Calendar.js)
    let eventsList = props.events.map((event, i) => {
        let desc = ""
        if (event.description) {
            desc = event.description.replace( /(<([^>]+)>)/ig, '');
            desc = desc.replace(/&#39;/g, "'")
            desc = desc.replace(/&quot;/g, '')

        }

        return (

            //console.log('eventsList return: ' + i + event.id)
                <div>
                    {event.title}
                    <br />
                    {event.start_time}
                    <br />
                    {event.address}
                    <br />
                    {desc}
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