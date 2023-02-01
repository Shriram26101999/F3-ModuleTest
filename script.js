
let input = document.getElementById('inputtext')
let button = document.getElementById('subbtn')
let TimeZone = document.getElementById("TimeZone1")
let Lat = document.getElementById("Lat2")
let offsetSTD = document.getElementById("offsetSTD3")
let offsetSTDseconds = document.getElementById("offsetSTDseconds4")
let offsetDST = document.getElementById("offsetDST5")
let offsetDSTseconds = document.getElementById("offsetDSTseconds6")
let Country = document.getElementById("Country7")
let Postcode = document.getElementById("Postcode8")
let City = document.getElementById("City9")
let Long = document.getElementById("Long10")
function insertData(data) {
    TimeZone.textContent = data.results[0].timezone.name
    Lat.textContent = data.results[0].lat
    offsetSTD.textContent = data.results[0].timezone.offset_STD
    offsetSTDseconds.textContent = data.results[0].timezone.offset_STD_seconds
    offsetDST.textContent = data.results[0].timezone.offset_DST
    offsetDSTseconds.textContent = data.results[0].timezone.offset_DST_seconds
    Country.textContent = data.results[0].country
    Postcode.textContent = data.results[0].postcode
    City.textContent = data.results[0].city
    Long.textContent = data.results[0].lon
}

const urlLocation = "https://api.ipgeolocation.io/ipgeo?apiKey=5fb4f358a5924c22bf0d8751b28aec7c"
async function getLocation() {
    try {
        const getLocationData = await fetch(urlLocation)
        const getLocationJson = await getLocationData.json()
        const locationData = getLocationJson
        getTimeZone(locationData.latitude, locationData.longitude)
    }
    catch (e) {
        console.error("Unable to fetch IP", e)
    }
}
document.addEventListener('DOMContentLoaded', getLocation)

//users latitude and longitude
async function getTimeZone(lat, lon) {
    try {
        const request = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=19.15928&lon=77.310094&format=json&apiKey=1e8fbd7b05184381b559f66c62e368c0`)
        const response = await request.json()
        const timeZoneData = response;
        insertData(timeZoneData)
    }
    catch (e) {
        console.error("Unable to fetch IP Data", e)
    }
}

//pass url
async function getUpdatedTimeZone(input) {
    try {
       
        //const request = await fetch(` https://api.geoapify.com/v1/geocode/search?text=${input}&format=json&apiKey=d10cc5663af8499493057bf98ebd586c`)
        const request = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=19.15928&lon=77.310094&format=json&apiKey=1e8fbd7b05184381b559f66c62e368c0`)
        const response = await request.json()
        const timeZoneData = response;
        insertDataUpdated(timeZoneData)
    }
    catch (e) {
        console.error("Unable to fetch IP Data", e)
        displayError()
    }
}

//submit
function getAddressTimezone() {
    const address = input.value
    if (address == '') {
        document.getElementById('popErr').style.display = 'block'
        document.getElementById('popErr').textContent = 'Enter a valid Address link which will help.'
        document.getElementById('popH').style.display = 'none'
        document.getElementById('popN').style.display = 'none'
    }
    else {
        getUpdatedTimeZone(address)
        document.getElementById('popErr').style.display = 'none'
        document.getElementById('popH').style.display = 'block'
        document.getElementById('popN').style.display = 'block'
    }
}
button.addEventListener('click', getAddressTimezone)

//error
function displayError() {
    document.getElementById('popErr').style.display = 'none'
    document.getElementById('popN').style.display = 'none'
    document.getElementById('popErr').style.display = 'block'
    document.getElementById('popErr').textContent = 'Error:Timezone not found.'
}


//user data
let uTimeZone1 = document.getElementById("uTimeZone1")
let uLat2 = document.getElementById("uLat2")
let uoffsetSTD3 = document.getElementById("uoffsetSTD3")
let uoffsetSTDseconds4 = document.getElementById("uoffsetSTDseconds4")
let uoffsetDST5 = document.getElementById("uoffsetDST5")
let uoffsetDSTseconds6 = document.getElementById("uoffsetDSTseconds6")
let uCountry7 = document.getElementById("uCountry7")
let uPostcode8 = document.getElementById("uPostcode8")
let uCity9 = document.getElementById("uCity9")
let uLong10 = document.getElementById("uLong10")
function insertDataUpdated(data) {
    uTimeZone1.textContent = data.results[0].timezone.name
    uLat2.textContent = data.results[0].lat
    uoffsetSTD3.textContent = data.results[0].timezone.offset_STD
    uoffsetSTDseconds4.textContent = data.results[0].timezone.offset_STD_seconds
    uoffsetDST5.textContent = data.results[0].timezone.offset_DST
    uoffsetDSTseconds6.textContent = data.results[0].timezone.offset_DST_seconds
    uCountry7.textContent = data.results[0].country
    uPostcode8.textContent = data.results[0].postcode
    uCity9.textContent = data.results[0].city
    uLong10.textContent = data.results[0].lon
}
