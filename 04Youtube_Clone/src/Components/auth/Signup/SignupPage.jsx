import { FaYoutube } from "react-icons/fa";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

function SignupPage() {
    

    return (
        <div className="bg-[#F0F4F8] text-black w-full min-h-screen max-h-full flex flex-col justify-center items-center gap-y-5">
            <section className="bg-white w-[72%] px-10 py-10 rounded-2xl shadow-sm space-y-5">
                {/* fixed */}
                <FaYoutube className="text-red-600 text-6xl" />
                <Outlet />
            </section>

            <section className="w-[72%] flex justify-between px-2">
                <div>
                    <span className="text-sm">English (United States)</span>
                </div>
                <div className="space-x-2 text-sm">
                    <button className="hover:bg-gray-200 px-3 py-2 rounded-lg font-normal">Help</button>
                    <button className="hover:bg-gray-200 px-3 py-2 rounded-lg font-normal">Privacy</button>
                    <button className="hover:bg-gray-200 px-3 py-2 rounded-lg font-normal">Terms</button>
                </div>
            </section>
        </div>
    )
}

export default SignupPage;
