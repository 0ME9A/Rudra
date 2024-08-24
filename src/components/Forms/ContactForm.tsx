"use client";
import { MdDateRange } from "react-icons/md";
import { useState } from "react";
import countryCodes from "../../data/countryCodes.json";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";

// Define the type for country phone codes
interface CountryPhoneCode {
  name: string;
  dial_code: string;
  code: string;
}

// Cast the imported JSON data to the correct type
const countryPhoneCodes: CountryPhoneCode[] =
  countryCodes as CountryPhoneCode[];

function ContactForm() {
  const [CPC, setCPC] = useState(
    countryPhoneCodes.find((item) => item.dial_code === "+91")
  );

  return (
    <form action="#" method="post" className="space-y-2 text-black">
      <div className="flex gap-2">
        <label htmlFor="first" className="w-1/2">
          <input
            type="text"
            id="first"
            placeholder="First Name"
            className="w-full p-3 border-2 rounded-lg"
          />
        </label>
        <label htmlFor="last" className="w-1/2">
          <input
            type="text"
            id="last"
            placeholder="Last Name"
            className="w-full p-3 border-2 rounded-lg"
          />
        </label>
      </div>
      <div className="flex border-2 rounded-lg">
        <select
          name="phoneCode"
          id="phoneCode"
          value={CPC?.dial_code}
          className="rounded-lg p-3 pr-0 focus:outline-none"
          onChange={(e) =>
            setCPC(
              countryPhoneCodes.find(
                (item) => item.dial_code === e.target.value
              )
            )
          }
        >
          {countryPhoneCodes.map((item) => (
            <option key={item.code} value={item.dial_code}>
              {item.dial_code}
            </option>
          ))}
        </select>
        <label htmlFor="phone" className="w-full">
          <input
            type="number"
            id="phone"
            placeholder="Phone number"
            className="w-full p-3 rounded-lg"
          />
        </label>
      </div>
      <div
        className="bg-accent-500 p-4 text-white"
        style={{
          clipPath:
            "polygon(1rem 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%, 0 1rem )",
        }}
      >
        <div className="flex items-center justify-evenly text-center">
          <div>
            <p className="text-xs flex items-center justify-center gap-2">
              <MdDateRange />
              Start Meting
            </p>
            <p className="text-2xl font-[500]">9:00 AM</p>
          </div>
          <span className="h-10 border rounded-full border-white"></span>
          <div>
            <p className="text-xs flex items-center justify-center gap-2 ">
              <MdDateRange />
              End Meting
            </p>
            <p className="text-2xl font-[500]">10:00 AM</p>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex items-center justify-between pb-2 text-xs text-center">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
          </div>
          <div className="w-full h-16 flex justify-between items-center">
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
            <span className="h-1/2 w-[1px] bg-white"></span>
            <span className="h-full w-[1px] bg-white"></span>
          </div>
          <div className="flex items-center justify-between pt-2 text-xs text-center">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>
      </div>
      <PrimaryBtn
        type="submit"
        className="w-full bg-navy-900 hover:bg-navy-800 border-navy-800 focus:ring-navy-300"
      >
        Book a Call
      </PrimaryBtn>
      <p className="text-center max-w-sm mx-auto text-gray-300 text-sm p-2">
        By contacting us, you agree to our{" "}
        <Link href="/#">Terms of service</Link> and{" "}
        <Link href={"/#"}>Privacy Policy</Link>
      </p>
    </form>
  );
}

export default ContactForm;
