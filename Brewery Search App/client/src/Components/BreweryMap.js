import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

function BreweryMap() {

    const containerStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <div id="brewerymap-container">
            <LoadScript
                googleMapsApiKey={GOOGLE_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyles}
                    center={{ lat: 37.807739, lng: -122.2698881 }}
                    zoom={8}
                />
            </LoadScript>
        </div>
    )
}

export default BreweryMap
