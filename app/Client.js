"use client"

import { useRouter, usePathname } from "next/navigation"
import { Router } from "next/router"
import { useEffect } from "react"

export default function client() {


    async function fetchdata() {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json()
        console.log(data.message)
        return data.message

        
    
    }

    

    
    
}