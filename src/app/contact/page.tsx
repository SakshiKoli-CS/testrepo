'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Page = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response=fetch('/api/contact',{
            method:'POST',
            body:JSON.stringify({
                name,
                email,
                message
            })
        })
        console.log(response);
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Contact us Page
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea onChange={(e)=>setMessage(e.target.value)} placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Page;
