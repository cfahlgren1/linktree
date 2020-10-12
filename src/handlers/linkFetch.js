/**
 * Return links object from API endpoint
 */
export default async() => {
    const results = fetch('https://my-app.calebf.workers.dev/links')
    let links = await results
    links = links.json()
    return links;
}