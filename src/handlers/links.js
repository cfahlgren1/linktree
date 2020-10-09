export default async() => {
    const data = {
            // array to hold social links
            links: [
                { "name": "LinkedIn", "url": "https://www.linkedin.com/in/caleb-fahlgren-8a8ba0170/" },
                { "name": "GitHub", "url": "https://github.com/cfahlgren1" },
                { "name": "Bulma", "url": "https://bulma.io/" },
                { "name": "CloudFlare", "url": "https://www.cloudflare.com/" }
            ]
        }
        // serialize links to json
    const json = JSON.stringify(data, null, 2)
        // return json response
    return new Response(json, {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}