import React, { useState, useEffect } from 'react';
import StyledGlobal from '../../global.conf'
import MapView, { Marker, AnimatedRegion, MapViewAnimated } from 'react-native-maps';

const Maps = ({ region, location, title, description }) => {
    // region = new AnimatedRegion({
    //     latitude: region.latitude,
    //     longitude: region.longitude,
    //     latitudeDelta: region.latitudeDelta,
    //     longitudeDelta: region.longitudeDelta,
    // })
    return (
        <MapView
            style={StyledGlobal.mapview}
            region={{
                latitude: region.latitude - 0.0007,
                longitude: region.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
            }}
        // onRegionChangeComplete={()=>{}}
        >
            <Marker
                coordinate={location}
                title={title}
                description={description}
            />
        </MapView>
    )
}

export default Maps;