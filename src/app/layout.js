import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { MainNavbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: "DocAppoint — Book Trusted Doctors Online",
    template: "%s | DocAppoint",
  },
  description: "A Doctor Appointment Booking System where users can browse available doctors from the home page, view details, and book appointments. Users can manage their bookings, reviews, and profile using secure authentication (Better Auth with JWT/session).",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col  text-slate-900 font-sans">
        <MainNavbar />
        <main className="grow">{children}</main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
