import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import CancelBookingButton from "@/components/CancelBookingButton";

const fetchBookings = async (email, token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) return [];

    return await res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const token = session?.token;
  const user = session?.user;

  if (!user || !token) {
    redirect("/login");
  }

  const bookings = await fetchBookings(user.email, token);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="flex flex-col md:flex-row gap-8">

        {/* PROFILE */}
        <div className="md:w-1/4">
          <div className="p-6 bg-white border rounded-2xl text-center">

            <Image
              src={
                user.image ||
                "https://i.ibb.co/2FsfXqM/user.png"
              }
              alt="profile"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />

            <h2 className="text-xl font-bold mt-4">
              {user.name}
            </h2>

            <p className="text-sm text-slate-500">
              {user.email}
            </p>
          </div>
        </div>

        {/* BOOKINGS */}
        <div className="md:w-3/4">

          <h1 className="text-3xl font-black mb-6">
            My Appointments
          </h1>

          {bookings.length === 0 ? (
            <div className="p-10 text-center border rounded-2xl bg-slate-50">

              <h2 className="text-xl font-bold">
                No Appointments Found
              </h2>

              <p className="text-slate-500 mt-2 mb-4">
                Book your first doctor appointment.
              </p>

              <Link href="/appointments">
                <Button color="primary">
                  Browse Doctors
                </Button>
              </Link>

            </div>
          ) : (
            <div className="space-y-4">

              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="flex gap-4 p-4 bg-white border rounded-2xl"
                >

                  <Image
                    src={
                      booking.doctorImage ||
                      "https://i.ibb.co/doctor.png"
                    }
                    alt="doctor"
                    width={120}
                    height={90}
                    className="rounded-xl object-cover"
                  />

                  <div className="flex flex-col justify-between grow">

                    <div>
                      <h3 className="font-bold text-lg">
                        {booking.doctorName}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {booking.specialty}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        {new Date(
                          booking.createdAt
                        ).toDateString()}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">

                      <Chip color="success" size="sm">
                        Confirmed
                      </Chip>

                      <CancelBookingButton
                        id={booking._id}
                      />

                    </div>
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}