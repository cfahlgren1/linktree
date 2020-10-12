export const data = {
    // array holding social links
    links: [
        { "name": "LinkedIn", "url": "https://www.linkedin.com/in/caleb-fahlgren-8a8ba0170/" },
        { "name": "GitHub", "url": "https://github.com/cfahlgren1" },
        { "name": "Bulma", "url": "https://bulma.io/" },
        { "name": "Cloudflare", "url": "https://www.cloudflare.com/" }
    ]
}

/**
 * API endpoint that returns JSON response of social links
 */
export default async() => {
    // serialize links to json
    const json = JSON.stringify(data, null, 2)
        // return json response
    return new Response(json, {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}