"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { Phone, Play } from "lucide-react";
import toast from "react-hot-toast";

const AppointmentBooking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    doctor: "",
    department: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.doctor) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!form.agree) {
      toast.error("You must agree to Terms & Privacy Policy");
      return;
    }

    toast.success("Appointment booked successfully!");

    setForm({
      name: "",
      email: "",
      location: "",
      doctor: "",
      department: "",
      message: "",
      agree: false,
    });
  };

  return (
    <section className="relative py-28 bg-[url('/assets/video_bg_1.jpg')] bg-cover bg-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(25, 35, 97, 0.65), rgba(25, 35, 97, 0.65))",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT FORM */}
        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20">

          {/* TITLE */}
          <div className="mb-8">
            <p className="text-[#F96363] font-bold uppercase text-xs tracking-widest">
              Book Appointment
            </p>

            <h2 className="text-3xl font-black text-slate-900 mt-2 leading-snug">
              Book an Appointment for{" "}
              <span className="text-[#F96363]">Expert Consultation</span>
            </h2>

            <p className="text-slate-500 mt-2 text-sm">
              Fill out the form and get connected with top doctors instantly.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                name="name"
                value={form.name}
                placeholder="Patient Name"
                className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#F96363] outline-none transition"
                onChange={handleChange}
              />

              <input
                name="email"
                value={form.email}
                placeholder="Email Address"
                className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#F96363] outline-none transition"
                onChange={handleChange}
              />
            </div>

            {/* DOCTOR */}
            <select
              name="doctor"
              value={form.doctor}
              className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#F96363] outline-none"
              onChange={handleChange}
            >
              <option value="">Choose Doctor</option>
              <option>Dr. Rahman</option>
              <option>Dr. Sultana</option>
              <option>Dr. Karim</option>
            </select>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              placeholder="Write appointment note..."
              rows={4}
              className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#F96363] outline-none"
              onChange={handleChange}
            />

            {/* CHECKBOX */}
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="accent-[#F96363]"
              />
              I agree to Terms & Privacy Policy
            </label>

            {/* BUTTON */}
            <Button
              type="submit"
              className="w-full bg-[#F96363] hover:bg-[#e05252] text-white font-bold py-3 rounded-xl transition-all shadow-lg"
            >
              Make Appointment
            </Button>
          </form>

          {/* CALL INFO */}
          <div className="mt-8 flex items-center gap-3 p-4 rounded-xl border bg-slate-50">
            <Phone className="text-[#F96363]" />
            <div>
              <p className="text-xs text-slate-500">Emergency Contact</p>
              <p className="font-bold text-slate-800">+880 1712-345678</p>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/watch?v=i2pMEhEzbEs"
            target="_blank"
            className="group"
          >
            <div className="w-24 h-24 rounded-full bg-[#F96363] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Play className="text-white w-10 h-10" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AppointmentBooking;