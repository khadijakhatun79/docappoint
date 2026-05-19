import Image from "next/image";
import { Star, MapPin, Clock, Calendar, Award } from "lucide-react";
import Breadcrumb from "@/app/component/Breadcrumb";


    
const fetchSingleAppoinment = async (id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/${id}`)
    const data = res.json();
    return data || {}; 

}

export default async function AppointmentDetails({params}) {
    const { id } = await params; 

     
  

    return (
    
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <Breadcrumb></Breadcrumb>

      {/* Doctor Profile Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="p-8">

          <div className="flex flex-col lg:flex-row gap-10 justify-between">

            {/* Left */}
            <div className="flex flex-col md:flex-row gap-6">

              {/* Image */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/Xz6Q0VG/doctor.jpg"
                  alt="doctor"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                    Available
                  </span>

                  <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-sm rounded-full">
                    Cardiologist
                  </span>
                </div>

                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    Dr. Ayesha Rahman
                  </h1>

                  <p className="text-gray-500 mt-2">
                    MBBS, FCPS - Heart Specialist
                  </p>
                </div>

                <div className="space-y-3 text-gray-600">

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <p>Dhanmondi, Dhaka</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <p>10 Years Experience</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award size={18} />
                    <p>Labaid Cardiac Hospital</p>
                  </div>

                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">

                  <div className="flex text-yellow-500">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                  </div>

                  <span className="text-gray-700 font-medium">
                    5.0 (120 Reviews)
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}
            <div className="bg-slate-100 rounded-3xl p-6 w-full lg:w-[320px] h-fit">

              <div className="space-y-5">

                <div>
                  <p className="text-gray-500 text-sm">
                    Consultation Fee
                  </p>

                  <h2 className="text-4xl font-bold text-cyan-600 mt-1">
                    ৳800
                  </h2>
                </div>

                <div className="space-y-2">

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Monday - Friday
                    </span>

                    <span className="font-medium">
                      9 AM - 7 PM
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Saturday
                    </span>

                    <span className="font-medium">
                      10 AM - 4 PM
                    </span>
                  </div>

                </div>

                <button
                  className="w-full bg-cyan-500 hover:bg-cyan-600 
                  transition-all duration-300 text-white py-4 rounded-2xl 
                  font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">

          {/* Bio */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-5">
              Doctor Bio
            </h2>

            <p className="text-gray-600 leading-8">
              Highly experienced cardiologist specializing in heart diseases,
              preventive care, and patient-centered treatment. Dedicated to
              providing compassionate healthcare solutions using modern medical
              technologies and advanced diagnostics.
            </p>

          </div>

          {/* Experience */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-5">
              Experience
            </h2>

            <div className="space-y-6">

              <div className="border-l-4 border-cyan-500 pl-5">
                <h3 className="font-semibold text-lg">
                  Senior Cardiologist
                </h3>

                <p className="text-gray-500">
                  Labaid Cardiac Hospital
                </p>

                <span className="text-sm text-gray-400">
                  2018 - Present
                </span>
              </div>

              <div className="border-l-4 border-cyan-500 pl-5">
                <h3 className="font-semibold text-lg">
                  Heart Specialist
                </h3>

                <p className="text-gray-500">
                  Square Hospital
                </p>

                <span className="text-sm text-gray-400">
                  2014 - 2018
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">

          {/* Availability */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-5">
              Availability
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <span>Sunday</span>
                <span className="font-medium">
                  09:00 AM
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <span>Monday</span>
                <span className="font-medium">
                  11:00 AM
                </span>
              </div>

              <div className="flex justify-between items-center bg-slate-50 rounded-xl p-4">
                <span>Tuesday</span>
                <span className="font-medium">
                  02:00 PM
                </span>
              </div>

            </div>

          </div>

          {/* Awards */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-bold mb-5">
              Awards
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Best Cardiologist 2024
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Bangladesh Medical Association
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold">
                  Healthcare Excellence Award
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Dhaka Medical Summit
                </p>
              </div>

            </div>

          </div>

        </div>

      </div> 

    </div>
  );


}
  


