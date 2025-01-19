"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { CountryPhoneCode } from "@/ts/interfaces";
import { MdDateRange } from "react-icons/md";
import { contact } from "@/data/contact";
import countryCodes from "../../data/countryCodes.json";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";

// `formData` structure
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

// Cast the imported JSON data to the correct type
const countryPhoneCodes: CountryPhoneCode[] =
  countryCodes as CountryPhoneCode[];

function ContactForm() {
  const [CPC, setCPC] = useState(
    countryPhoneCodes.find((item) => item.dial_code === "+91")
  );
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const browserInfo = {
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoords(position.coords);
        });
      }

      if (!coords) alert("Allow Location Access");

      if (coords) {
        // Proceed with sending form data
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            phone: CPC?.dial_code + " " + formData.phone,
            browserInfo,
            coords,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setResponseMessage(data.success);
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            message: "",
          });
        } else {
          setResponseMessage(data.error || "Failed to send message.");
        }
      }
    } catch (error: any) {
      console.error(error);
      setResponseMessage("Something went wrong.");
    } finally {
      setLoading(false);

      // Clear the message after 3 seconds
      setTimeout(() => setResponseMessage(""), 3000);
    }
  };

  useEffect(() => {
    // Fetch user's location when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
      });
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-2 text-black">
        <div className="flex gap-2">
          <label htmlFor="first" className="w-1/2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg"
              required
            />
          </label>

          <label htmlFor="last" className="w-1/2">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border-2 rounded-lg"
              required
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
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg"
              required
            />
          </label>
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border-2 rounded-lg"
          rows={5}
          required
        />
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
              <p className="text-2xl font-[500]">{contact.meetingTime.start}</p>
            </div>
            <span className="h-10 border rounded-full border-white"></span>
            <div>
              <p className="text-xs flex items-center justify-center gap-2 ">
                <MdDateRange />
                End Meting
              </p>
              <p className="text-2xl font-[500]">{contact.meetingTime.end}</p>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-center justify-between pb-2 text-xs text-center">
              {Array.from({ length: 7 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
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
              {contact.meetingDays.map((item) => (
                <span key={item}>{item.slice(0, 3)}</span>
              ))}
            </div>
          </div>
        </div>

        <PrimaryBtn
          type="submit"
          disabled={loading}
          className="w-full bg-navy-900 hover:bg-navy-800 border-navy-800 focus:ring-navy-300 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </PrimaryBtn>
        <p className="text-center max-w-sm mx-auto text-gray-300 text-sm p-2">
          By contacting us, you agree to our{" "}
          <Link href="/terms_of_service" className="underline hover:text-black">
            Terms of service
          </Link>{" "}
          and{" "}
          <Link href={"/privacy_policy"} className="underline hover:text-black">
            Privacy Policy
          </Link>
        </p>
      </form>
      {responseMessage && (
        <p
          className={`text-sm p-4 px-6 rounded-lg text-center fixed right-4 bottom-4 z-[999] bg-navy-800 text-white transition-all scale-0 origin-bottom-right duration-500 transform ${
            responseMessage.includes("success")
              ? "bg-green-500 scale-100"
              : "bg-red-500 scale-100"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </>
  );
}

export default ContactForm;
