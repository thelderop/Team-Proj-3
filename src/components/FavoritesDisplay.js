import React, { useState } from "react"
import axios from 'axios'


const FavoritesDisplay = (props) => {
    // let user = props.user
    // let eventful = props.events

    // let [email, setEmail] = useState('')
    // let handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // iterates over array of object (Calendar.js)
    // let eventsList = props.events.map((eventful, i) => {
    //     let desc = ""
    //     if (eventful.description) {
    //         desc = eventful.description.replace( /(<([^>]+)>)/ig, '');
    //         desc = desc.replace(/&#39;/g, "'")
    //         desc = desc.replace(/&quot;/g, '')
    
    // }

    // let handleAdd = (e) => {
    //     let newFavorite = {
    //         email: user.email,
    //         value: eventful.id
    //     }
    //     axios.post(`${process.env.REACT_APP_API}/v1/users/add`, newFavorite)
    //     .then (res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    //     return (

    //         //console.log('eventfulsList return: ' + i + eventful.id)
    //         <div class="card border mb-3" styles="max-width: 20rem;">
    //         <div class="card-header">{eventful.start_time}</div>
    //         <div class="card-body">
    //             <h4 class="card-title">{eventful.title}</h4>
    //             <p class="card-text">{eventful.venue_address}</p>
    //             <p class="card-text">{desc}</p>
    //             <form method="PUT" encType="application/x-www-form-urlencoded" onSubmit={handleAdd} >
    //                 <button type="submit" class="btn btn-info">Add to Favorites</button>
    //             </form>
    //         </div>
    //     </div>
    //         )
    //     })   

    return (
        <div className="eventDisplay">
            
        </div>
    );
}

export default FavoritesDisplay