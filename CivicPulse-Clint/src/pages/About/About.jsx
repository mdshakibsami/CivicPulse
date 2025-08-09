import React from "react";
import {
  FaRegCalendarPlus,
  FaSearchLocation,
  FaHandsHelping,
} from "react-icons/fa";
import pic2 from "../../assets/home/pic-2.jpg";

const About = () => {
  return (
    <div className="px-8 mx-auto py-12">
      {/* Section 1: Our Mission */}
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <img
          src={pic2}
          alt="CivicPulse community"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-black">Our Mission</h2>
          <p className="text-lg text-gray-700">
            CivicPulse empowers communities by making it easy to create,
            discover, and join local events. Our mission is to foster civic
            engagement and bring people together for positive change.
          </p>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-black text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-emerald-400 hover:to-green-400 transition-all duration-300 group relative overflow-hidden">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-green-400 shadow-lg">
              <FaRegCalendarPlus className="text-4xl text-white" />
            </span>
            <h3 className="font-bold mb-2 text-black text-lg relative z-10">
              Create Events
            </h3>
            <p className="text-gray-600 relative z-10">
              Organize events for your community and manage them easily through
              our platform.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-purple-400 hover:to-blue-400 transition-all duration-300 group relative overflow-hidden">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 shadow-lg">
              <FaSearchLocation className="text-4xl text-white" />
            </span>
            <h3 className="font-bold mb-2 text-black text-lg relative z-10">
              Discover Nearby
            </h3>
            <p className="text-gray-600 relative z-10">
              Find events happening near you and connect with like-minded
              individuals.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-xl border-4 border-transparent hover:border-gradient-to-br hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 group relative overflow-hidden">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0"></span>
            <span className="relative z-10 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg">
              <FaHandsHelping className="text-4xl text-white" />
            </span>
            <h3 className="font-bold mb-2 text-black text-lg relative z-10">
              Join & Contribute
            </h3>
            <p className="text-gray-600 relative z-10">
              Participate in events, volunteer, and make a difference in your
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Get Involved */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to make an impact? Sign up, create your first event, or join an
          existing one. CivicPulse is your gateway to a more connected and
          active community.
        </p>
        <a
          href="/upcoming-events"
          className=" btn  text-sm sm:text-base px-2 sm:px-4 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;
