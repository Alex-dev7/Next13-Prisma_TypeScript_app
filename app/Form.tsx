"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function FormPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter()
  // console.log(title)



  // Create a submit post
  async function submitPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget
    const titleInput = form.elements.namedItem("title") as HTMLInputElement
    const contentInput = form.elements.namedItem("content") as HTMLInputElement
    
    const res = await fetch(`/api/hello`, {
      method: "POST",
      body: JSON.stringify({title: titleInput.value, content: contentInput.value})
    });
    const response = await res.json();
    console.log({router}, "router")
    // this will refresh the page
    router.refresh()
    // if (!response.ok) console.log({response: response.message});
  }

  

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
        name="title"
        type="text"
      />
      <input  onChange={(e) => setContent(e.currentTarget.value)}
       type="text" name="content" value={content} />
      <button type="submit">create</button>
    </form>
  );
}
