import PrimaryBtn from "../Buttons/PrimaryBtn";
import React from "react";

function SubscribeForm() {
  return (
    <form className="flex gap-4">
      <label htmlFor="subscribe" className="max-w-sm w-full">
        <input
          type="text"
          name="subscribe"
          id="subscribe"
          placeholder="Your email address"
          className="p-3 rounded-full text-black w-full"
        />
      </label>
      <PrimaryBtn
        type="submit"
        className="bg-navy-900 hover:bg-navy-800 focus:ring-navy-300 border-navy-800 font-[500]"
      >
        Subscribe
      </PrimaryBtn>
    </form>
  );
}

export default SubscribeForm;
