export const contact = {
  mail: "rudracreativehomedecor@gmail.com",
  primaryPhone: "7903021397",
  secondaryPhone: "7903021397",
  emergencyContact: "7987654321",
  address: {
    line1:
      "70 feet Saristabad (near the Celebration Point, just opposite to Bajaj Auto Showroom, Saristabad)",
    city: "Patna",
    state: "Bihar",
    postalCode: "800002",
    country: "India",
  },
  socialMedia: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  meetingTime: {
    start: "09:00 AM",
    end: "07:00 PM",
  },
  meetingDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  website: "https://rudracreativehomedecor.in/",
  getFormattedMeetingTime: function () {
    return `${this.meetingTime.start} - ${this.meetingTime.end}`;
  },
};
