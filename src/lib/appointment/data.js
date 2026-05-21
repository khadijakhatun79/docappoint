export const fetchAppointments = async (searchTerm = '') => {
  console.log();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointment?search=${searchTerm}`);
  const data = await res.json();
  return data || [];
};

export const fetchFeaturedAppointment = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};



