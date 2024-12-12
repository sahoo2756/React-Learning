import { Link } from "react-router-dom"

function Accept_Terms_and_Privacy() {
  return (
    <div className="font-montserrat tracking-tight flex justify-between w-full">

      <div className="w-[50%]">
        <h1 className="text-4xl  tracking-tight font-[450]">Privacy and Terms</h1>
      </div>

      <div className="flex flex-col justify-end items-center gap-y-2 w-[50%] font-[450]">


        <p>To Create a Mytube Account , you'll need to agree to the <span className="text-blue-700 font-semibold">Terms of Services</span> below.</p>

        <p>In addition , when you create an account , we process your information as described in our <span>Privacy Policy, </span> including these key points: </p>

        <div>
          <ul className="list-disc ml-10 text-sm space-y-3 font-[400]">
            <li className="list-none text-xl -ml-10 font-[500]">Data we process when you use MyTube</li>
            <li>When you set up a Google Account, we store information you give us like your name, email address, and telephone number.</li>
            <li>When you use Google services to do things like write a message in Gmail or comment on a YouTube video, we store the information you create.</li>
            <li>When you search for a restaurant on Google Maps or watch a video on YouTube, for example, we process information about that activity – including information like the video you watched, device IDs, IP addresses, cookie data, and location.</li>
            <li>We also process the kinds of information described above when you use apps or sites that use Google services like ads, Analytics, and the YouTube video player.</li>
          </ul>
        </div>

        <div>
          <ul className="list-disc ml-10 text-sm space-y-3 font-[400]">
            <li className="list-none text-xl -ml-10 font-[500]">Why we process it</li>
            <li className="list-none text-sm -ml-10">We process this data for the purposes described in our policy, including to:</li>
            <li>Help our services deliver more useful, customized content such as more relevant search results;</li>
            <li>Improve the quality of our services and develop new ones;</li>
            <li>Deliver personalized ads, depending on your account settings, both on Google services and on sites and apps that partner with Google;</li>
            <li>Improve security by protecting against fraud and abuse; and</li>
            <li>Conduct analytics and measurement to understand how our services are used. We also have partners that measure how our services are used. Learn more about these specific advertising and measurement partners.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h1 className="text-xl font-[500] mt-2">Combining data</h1>
          <p>We also combine this data among our services and across your devices for these purposes. For example, depending on your account settings, we show you ads based on information about your interests, which we can derive from your use of Search and YouTube, and we use data from trillions of search queries to build spell-correction models that we use across all of our services.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-xl font-[500] mt-2">You’re in control</h1>
          <p>Depending on your account settings, some of this data may be associated with your Google Account and we treat this data as personal information. You can control how we collect and use this data now by clicking “More Options” below. You can always adjust your controls later or withdraw your consent for the future by visiting My Account (myaccount.google.com).</p>
        </div>


        
        <div className='w-full text-right mt-10 space-x-5'>
          <Link to={-1}><button className="text-black  font-bold text-sm px-6 pt-2 pb-2.5 rounded-full hover:bg-gray-200 hover:font-bold">Cancel</button></Link>

          <Link to="/"><button className="bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">I agree</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Accept_Terms_and_Privacy