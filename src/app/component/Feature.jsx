import React from 'react';
import AppointmentCard from './AppointmentCard';
import { fetchFeaturedappointments } from '../lib/appointments/data';

const Feature = async () => {

    const appointments = await fetchFeaturedappointments();

    return (
        <div className="max-w-7xl mx-auto px-5 py-16">  

            {/* Section Header */}
            <div className="flex flex-col md:flex-row items-center justify-center text-center gap-5">

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Top Rated Doctors
                    </h1>

                    <p className="text-gray-500 mt-2 max-w-xl">
                        Find highly experienced doctors trusted by thousands
                        of patients for quality healthcare and expert consultation.
                    </p>
                </div>

            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                {
                    appointments?.map((appointment) => (
                        <AppointmentCard
                            key={appointment._id}
                            appointment={appointment}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default Feature;