import api from "./src/handlers/api"
import home from "./src/handlers/home"
import Router from "./router"

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond with API or static html home page
 * @param {Request} request
 */
async function handleRequest(request) {
    const r = new Router()
    r.get("/links", api) // add route for api endpoint

    let response = await r.route(request)

    // if url is not /links , return static html response
    if (response.status == 404) {
        return home() // call html response from home
    }
    return response
}