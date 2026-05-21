"use client";

import { Button } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingButton({ doctor }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleBooking = async () => {
    const { data: jwtData } = await authClient.token();

    const token = jwtData?.token;

    if (!token) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    const bookingData = {
      userEmail: session?.user?.email,
      patientName: session?.user?.name,
      doctorName: doctor?.name,
      doctorImage: doctor?.image,
      specialty: doctor?.specialty,
      appointmentDate: new Date(),
      appointmentTime: doctor?.availability?.[0],
      fee: doctor?.fee,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      }
    );

    const data = await res.json();

    if (data.insertedId) {
      toast.success("Appointment booked successfully!");
      router.push("/dashboard");
    } else {
      toast.error("Booking failed");
    }
  };

  return (
    <Button
      size="lg"
      className="w-full font-bold bg-[#F96363]"
      onPress={handleBooking}
    >
      Book Appointment  
    </Button>
  ); 
}