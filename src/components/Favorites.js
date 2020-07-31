import React, {useState, useEffect} from 'react'
import FavoritesDisplay from './FavoritesDisplay'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Favorites(props) {
    
    const [favorites,setFavorites] = useState([{1:""},{2:""}])

    //calls database on page render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/v1/users/`, {
            headers: {"accept":"application/json",
            'content-type':'application/json'
            }
        })
        .then(favoritesList => {
            console.log(favoritesList.data)
            setFavorites(favoritesList.data)
            console.log(favorites)
        })
    },[])
    
    
    // backup axios call in case things get hosed
    let backupUrl = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&location=90210`

    //calls API on page render
    // useEffect(() => {
    //     console.log(user)
    //     setEvents([{"title": "Fetching Events, please wait..."}])
    //     axios.get(backupUrl)
    //     .then(response => {
    //         console.log(user.favorite)
    //         setEvents(response.data.events.event)
    //     })
    //     .catch(err => console.log('ERROR IN frontend'+JSON.stringify(err)))
    // }, [])
    
    return (
        <div className="Calendar">
            <div class="row my-5">
                <div class="col-4 offset-1">
                    <h3 id="calendar-title">Upcoming Events</h3>
                    <div id="events-display-container">
                        <FavoritesDisplay favorites={favorites} />
                        {JSON.stringify(props.user)}
                    </div>
                </div>
                <div class="col-6">
                    <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    />
                </div>
            </div>
        </div>
    )
}

