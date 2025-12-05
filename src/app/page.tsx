import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Structure from "@/components/Structure";
import Location from "@/components/Location";
import BookingProcess from "@/components/BookingProcess";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Accommodations />
      <Structure />
      <Location />
      <BookingProcess />
      <BookingForm />
      <Testimonials />
      <Footer />
    </main>
  );
}
