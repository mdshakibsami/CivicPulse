

import React from 'react';
import { FaRegCalendarPlus, FaSearchLocation, FaHandsHelping } from 'react-icons/fa';
import pic2 from '../../assets/home/pic-2.jpg';

const About = () => {
    return (
        <div className="min-h-screen w-full flex flex-col  max-h-11/12 items-center bg-gradient-to-br from-green-100 via-blue-50 to-green-200 px-4 py-8">
            <div className="bg-white bg-opacity-95 rounded-3xl  shadow-2xl p-10  text-center border border-green-200 relative overflow-hidden">
                {/* Decorative background image */}
                <img src={pic2} alt="Community" className="absolute opacity-10 w-full right-0 top-0 h-full object-cover rounded-3xl pointer-events-none select-none" style={{zIndex:0}} />
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-lg">About CivicPulse</h1>
                    <p className="text-xl text-gray-700 mb-8 font-medium">
                        CivicPulse is a community event management platform dedicated to empowering individuals and groups to create, explore, and join local social service events. Whether it’s road cleaning, tree plantation drives, or other impactful activities, CivicPulse connects people who want to make a difference in their neighborhoods.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
                        {/* Step 1 */}
                        <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 shadow-md w-full md:w-1/3">
                            <span className="h-12 w-12 flex items-center justify-center text-3xl text-green-600 bg-white rounded-full shadow"><FaRegCalendarPlus /></span>
                            <div className="text-left">
                                <div className="font-bold text-green-700 text-lg">Create Events</div>
                                <div className="text-gray-600 text-sm">Organize your own social service events and invite others to join your cause.</div>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 shadow-md w-full md:w-1/3">
                            <span className="h-12 w-12 flex items-center justify-center text-3xl text-blue-600 bg-white rounded-full shadow"><FaSearchLocation /></span>
                            <div className="text-left">
                                <div className="font-bold text-blue-700 text-lg">Explore Opportunities</div>
                                <div className="text-gray-600 text-sm">Discover a variety of local events focused on making your community cleaner, greener, and better.</div>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="flex items-center gap-4 bg-green-100 rounded-xl p-4 shadow-md w-full md:w-1/3">
                            <span className="h-12 w-12 flex items-center justify-center text-3xl text-green-800 bg-white rounded-full shadow"><FaHandsHelping /></span>
                            <div className="text-left">
                                <div className="font-bold text-green-800 text-lg">Join & Collaborate</div>
                                <div className="text-gray-600 text-sm">Sign up for events, connect with like-minded individuals, and contribute to meaningful change.</div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-500 text-base italic">
                        Together, we can build stronger, more vibrant communities—one event at a time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;