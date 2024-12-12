import { Link } from "react-router-dom"

function Review_Account() {
  return (
    <div className="flex justify-between w-full">

      <div className="space-y-5 w-[50%]">
        <h1 className="text-4xl font-montserrat tracking-tight font-[450]">Review your account info</h1>
        <h3>You can use this email address to sign in later</h3>
      </div>

      <div className="flex flex-col justify-end items-center gap-y-28 w-[50%] ">
        
        <div className="font-montserrat flex items-center gap-x-3">
          <span className="font-[500] bg-[#DC143C] px-3 py-2 rounded-full text-white cursor-pointer">M</span>
          <div className="font-[450]">
            {/* user name E.x- Manas Sahoo */}
            <p>Manorama</p>
            {/* email address */}
            <p>sahoo15820004@gmail.com</p>
          </div>
        </div>

        <Link to="terms_&_privacy" className="w-full text-right"><button className="mt-10 bg-[#346fc6] font-semibold text-sm px-6 pt-2 pb-2.5 text-white rounded-full hover:bg-[#1d67d5] hover:shadow-md">Next</button></Link>
      </div>
    </div>
  )
}

export default Review_Account