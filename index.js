import links from "./src/handlers/links"
import Router from "./router"

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

// Add Links to HTML
class LinksTransformer {
    async element(element) {
        let links = [
            { "name": "LinkedIn", "url": "https://www.linkedin.com/in/caleb-fahlgren-8a8ba0170/" },
            { "name": "GitHub", "url": "https://github.com/cfahlgren1" },
            { "name": "Bulma", "url": "https://bulma.io/" },
            { "name": "CloudFlare", "url": "https://www.cloudflare.com/" }
        ]
        links.forEach(link => {
            element.append(`<a href="${link.url}">${link.name}</a>`, { html: true });
        })
    }
}

// Add Social Icons to Links
class SocialTransformer {
    async element(element) {
        element.removeAttribute('style');
        element.append("<a href=\"https://github.com/cfahlgren1\"><img src=\"https://simpleicons.org/icons/github.svg\"></a>", { html: true })
        element.append("<a href=\"https://google.com\"><img src=\"https://simpleicons.org/icons/google.svg\"></a>", { html: true })
        element.append("<a href=\"https://www.linkedin.com/in/caleb-fahlgren-8a8ba0170/\"><img src=\"https://simpleicons.org/icons/linkedin.svg\"></a>", { html: true })


    }
}

// Remove CSS Style for display:none
class ProfileTransformer {
    async element(element) {
        element.removeAttribute('style');
    }
}

// Change Username to GitHub Username
class UsernameTransformer {
    async element(element) {
        element.setInnerContent("cfahlgren1");
    }
}

// Add Image to Avatar
class AvatarTransformer {
    async element(element) {
        element.setAttribute("src", "https://media-exp1.licdn.com/dms/image/C4D03AQHX9BZrVUwnog/profile-displayphoto-shrink_100_100/0?e=1607558400&v=beta&t=-w2Y0QnU18fgrvRd8MvcT0eNsVrmLxTBRsErCL-bIIo");
    }
}

// Change Title to name
class TitleTransformer {
    async element(element) {
        element.setInnerContent("Caleb Fahlgren");
    }
}

// Change Background
class BackgroundTransformer {
    async element(element) {
        element.setAttribute("class", "bg-gray-700");
    }
}

/**
 * Respond with api or static page
 * @param {Request} request
 */
async function handleRequest(request) {
    const r = new Router()
    r.get("/links", links) // add route for api endpoint

    let response = await r.route(request)

    // if url is not /links , return static html
    if (response.status == 404) {

        const init = {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            }
            // get static html from page with headers
        const results = await fetch('https://static-links-page.signalnerve.workers.dev/static/html', init)

        // Rewrite the HTML with Profile and link information
        return new HTMLRewriter()
            .on("img#avatar", new AvatarTransformer())
            .on("div#social", new SocialTransformer())
            .on("title", new TitleTransformer())
            .on("body", new BackgroundTransformer())
            .on("div#links", new LinksTransformer())
            .on("div#profile", new ProfileTransformer())
            .on("h1#name", new UsernameTransformer())

        .transform(results);
    }

    return response
}