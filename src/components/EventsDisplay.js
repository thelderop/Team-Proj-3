import React from "react"
const EventsDisplay = (props) => {
    // iterates over array of object (Calendar.js)
    let eventsList = props.events.map((event, i) => {
        return (
            // console.log('eventsList return: ' + i + event.id)
            <div>
                <br />
                {event.title} 
                &nbsp;
                <br/>
                <input type='button' className='btn btn-info' value='Favorite' />
                <br />
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