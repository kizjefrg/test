'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ReactNebula, smallSolarSystem } from '@flodlc/nebula'
//import Client from '@/app/Client'





export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.simcompanies.com/api/v2/auth/email/auth", {
        method: "POST",
        body: '{email: "a@gmail.com", password: "pasword123", timezone_offset: -120}',
        followRedirect: true
      });
      const data = response.status
      setData(data);
    };

    fetchData();
  }, []);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello</p>
      <p>{data}</p>

    </main>
  )
}
