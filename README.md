# LinkTree  
Built with 👷 `Cloudflare Worker`!

LinkTree is a Serverless JavaScript Web Application and API linktree style protoype built with a Cloudflare Worker.

You can view my LinkTree [here](https://my-app.calebf.workers.dev/)!
## Installation

```bash
npm i @cloudflare/wrangler -g
```
## Run Project
```bash
wrangler dev
```

## API Endpoint
You can view the API endpoint at `/links`
```json
{
  "links": [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/caleb-fahlgren-8a8ba0170/"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/cfahlgren1"
    },
    {
      "name": "Bulma",
      "url": "https://bulma.io/"
    },
    {
      "name": "CloudFlare",
      "url": "https://www.cloudflare.com/"
    }
  ]
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)