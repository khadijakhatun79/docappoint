
import FeaturedCard from "./FeaturedCard";
import { fetchFeaturedAppointment } from "@/lib/appointment/data";



const FeaturedAppointments = async () => {
    const appointments = await fetchFeaturedAppointment();   
    // console.log(courses);

    return (
        <section className="py-24 bg-[#f4f6f8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center text-center gap-5 mb-3">

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        appointments?.map(appointment => <FeaturedCard key={appointment?._id} appointment={appointment} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedAppointments;