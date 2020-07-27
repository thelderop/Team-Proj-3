import React from "react"


const EventName = (props) => {
    // iterates over array of object (Calendar.js)
    let eventsNameDetail = props.events.map((event, i) => {
        console.log('eventsList return: ' + i + event.id)
        return (
                <div class="card border-success mb-3" styles="max-width: 20rem;">
                    <div class="card-header">{event.start_time}</div>
                    <div class="card-body">
                        <h4 class="card-title">{event.title}</h4>
                        <p class="card-text">{event.venue_address}</p>
                        <p class="card-text">{event.description}</p>
                    </div>
                </div>
            )
        })   

    return (
        <div>
            {eventsNameDetail}
        </div>
    );
}

export default EventName