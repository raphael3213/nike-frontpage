import Image from "next/image";
import Hero from "@/components/Hero";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffers from "@/components/SpecialOffers";
import SuperQuality from "@/components/SuperQuality";
import Subscribe from "@/components/Subscribe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative  min-w-[400px]">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
