import { stringify } from "postcss"

export async function GET(req, res) {
    console.log('GET REQUEST EFFECTUED')
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()

    return new Response(data.message)

}