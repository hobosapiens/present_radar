// Get user's current location
navigator.geolocation.getCurrentPosition((position) => {
    const userLatitude = position.coords.latitude;
    const userLongitude = position.coords.longitude;

    // Calculate the bearing between user's location and destination location
    const destinationLatitude = 37.123; // Destination latitude
    const destinationLongitude = -122.456; // Destination longitude
    const bearing = calculateBearing(userLatitude, userLongitude, destinationLatitude, destinationLongitude);

    // Rotate the compass indicator
    const compassIndicator = document.getElementById('compass-indicator');
    compassIndicator.style.transform = `rotate(${bearing}deg)`;
});

function calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const y = Math.sin(dLon) * Math.cos(lat2 * Math.PI / 180);
    const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) - Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLon);
    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = (bearing + 360) % 360; // Normalize to 0-360 degrees
    return bearing;
}
