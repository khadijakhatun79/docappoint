
export const fetchappointments = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointment`)
    const data = await res.json();
    return data || [];
}

export const fetchFeaturedappointments = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const data = await res.json();
    return data || [];
}

