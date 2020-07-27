import React from "react"


const EventsDisplay = (props) => {



    // iterates over array of object (Calendar.js)
    let eventsList = props.events.map((event, i) => {

        return (
            // console.log('eventsList return: ' + i + event.id)
<<<<<<< HEAD
                <div key={i}>
                    <br/>
                    {event.title}
                    <br/>
                </div> 
            )
        })   
=======
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
>>>>>>> 154ab5353ddf1245757401d4bdbb86502bf2c089

    return (
        <div className="eventDisplay">
            <h1>List of eventful events:</h1>
            {eventsList}
            {/* {eventsList} */}

        </div>
    );
}

export default EventsDisplay