"use client";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import React, { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      // Clear the message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <label htmlFor="subscribe" className="max-w-sm w-full">
          <input
            type="email"
            name="subscribe"
            id="subscribe"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-full text-black w-full"
            required
          />
        </label>
        <PrimaryBtn
          type="submit"
          className="bg-navy-900 hover:bg-navy-800 focus:ring-navy-300 border-navy-800 font-[500]"
        >
          Subscribe
        </PrimaryBtn>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default SubscribeForm;
