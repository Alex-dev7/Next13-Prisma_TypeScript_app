"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  // const router = useRouter()

  // Create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`${process.env.BASE_URL}/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const response = await data.json();
    // this will refresh the page
    // router.refresh()
    if (!response.ok) console.log(response.message);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button type="submit">Make a post</button>
    </form>
  );
}
