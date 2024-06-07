function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function showPosition(position) {
    var latitudeElement = document.getElementById('latitude');
    var longitudeElement = document.getElementById('longitude');
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    latitudeElement.textContent = position.coords.latitude;
    longitudeElement.textContent = position.coords.longitude;

    return { latitude, longitude };
}

// Call getLocation() when the page loads to get the user's location
export default getLocation;
