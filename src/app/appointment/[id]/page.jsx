import EnrollmentButton from "@/components/EnrollmentButton";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import { MapPin, Star } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";

const fetchSingleAppointment = async (id, token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/appointment/${id}`,
      {
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function AppointmentDetails({ params }) {

  const { id } = await params;

  const session = await auth.api.getToken({
    headers: await headers(),
  });

  

  const token = session?.token;

  const appointment = await fetchSingleAppointment(id, token);

  if (!appointment) {
    return <NotFound />;
  }

  const {
    _id,
    name,
    image,
    description,
    specialty,
    fee,
    rating,
    location,
  } = appointment;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* Image */}
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">

            <Image
              src={
                image ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
              }
              alt={name}
              fill
              className="object-cover transform transition duration-700 group-hover:scale-105"
            />

            <div className="absolute top-6 left-6">
              <Chip
                color="primary"
                variant="solid"
                className="font-bold shadow-xl"
              >
                {specialty}
              </Chip>
            </div>

          </div>

          {/* Content */}
          <div className="space-y-4">

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {name}
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed">
              {description}
            </p>

          </div>

          {/* Info */}
          <div className="flex flex-wrap gap-6 pt-8 border-t border-slate-200">

            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Star className="w-5 h-5 text-yellow-500" />
              {rating || "4.8"} Rating
            </div>

            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <MapPin className="w-5 h-5 text-red-500" />
              {location || "Dhaka, Bangladesh"}
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-1">

          <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">

            {/* Price */}
            <div className="space-y-2">

              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Appointment Fee
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-blue-600">
                  ${fee}
                </span>
              </div>

            </div>

            {/* Details */}
            <div className="space-y-4">

              <p className="text-slate-700 font-medium">
                <strong>Specialty:</strong> {specialty}
              </p>

              <div className="w-full h-px bg-slate-100"></div>

              <ul className="space-y-3">

                {[
                  "Trusted Doctors",
                  "Secure Appointment",
                  "24/7 Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold text-slate-500"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Button */}
            <EnrollmentButton appointment={appointment} />

            <p className="text-center text-xs text-slate-500 font-bold">
              Secure Booking • Trusted Healthcare
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 text-center">

      <h2 className="text-2xl font-bold text-red-500">
        Appointment not found
      </h2>

      <p className="text-slate-500 mt-2">
        Please log in to view protected appointment details.
      </p>

    </div>
  );
};