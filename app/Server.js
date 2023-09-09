import { useRouter } from "next/navigation"

export default async function server() {

    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        next: { revalidate: 10 }
    })

    const data = await res.json()


return data

}