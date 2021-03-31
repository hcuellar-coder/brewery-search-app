import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

function BreweryMap() {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    const containerStyles = {
        width: '100%',
        height: '100%',
    };

    const locations = [
        {
            name: 'Location1',
            location: {
                lat: 37.807739,
                lng: -122.2698881
            }
        }
    ]

    return (
        <div id="brewerymap-container">
            <LoadScript
                googleMapsApiKey={GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyles}
                    center={{ lat: 37.807739, lng: -122.2698881 }}
                    zoom={8} >
                    {
                        locations.map(loc => {
                            return (
                                <Marker key={loc.name} position={loc.location} />
                            )
                        })
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default BreweryMap
