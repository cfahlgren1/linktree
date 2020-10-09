import links from "./src/handlers/links"
import Router from "./router"

addEventListener("fetch", event => {
    console.log('Ready to handle requests!')
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const r = new Router()
    r.get("/links", links)

    let response = await r.route(request)

    if (response.status == 404) {
        response = new Response("Heyyoo.", { status: 200 })
    }
    console.log('Received Response: ', response);
    return response
}