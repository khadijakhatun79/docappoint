import { Button, Chip } from "@heroui/react";
import { Clock, LocationEdit, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ appointment = {} }) => {

   const {
        _id,
        name,
        specialty,
        image,
        hospital,
        rating,
        experience,
        location,
        fee,
    } = appointment;

    return (
        <div className="group relative flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">

            {/* Image Section */}
            <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                    alt={name || "Doctor"}
                    src={
                        image ||
                        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600"
                    }
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Hospital Badge */}
                <div className="absolute top-4 right-4">
                    <Chip
                        className="bg-white/90 backdrop-blur-md font-semibold text-slate-800 shadow-md"
                        variant="flat"
                    >
                        {hospital}
                    </Chip>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-sm font-semibold">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">

                {/* Title */}
                <div>
                    <Link href={`/appointment/${_id}`}>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#F96363] transition-colors line-clamp-2">
                            {name}
                        </h3>
                    </Link>

                    <p className="text-sm text-slate-500 mt-1">
                        {specialty || "Medical Specialist"}
                    </p>
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-slate-400" />
                        {experience} Experience
                    </span>
                </div>
                 <div className="flex items-center justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                        <LocationEdit className="w-4 h-4 text-slate-400" />
                        {location}
                    </span>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-slate-400">Consultation Fee</p>
                        <p className="text-2xl font-black text-[#F96363]">
                            ${fee}
                        </p>
                    </div>

                    <Button
                        className="rounded-full font-semibold px-6 bg-[#F96363] text-white hover:bg-[#F96363] transition-all"
                    >
                       View Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;