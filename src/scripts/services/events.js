import {baseUrl, eventQuantity} from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventQuantity}`)
    return await response.json()
}

export {getEvents}