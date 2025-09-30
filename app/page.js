import Image from "next/image";
import TopHeader from "@/components/TopHeader";
import NavHeader from "@/components/NavHeader";
import Slider from "@/components./Slider";
import Features from "@/components/Features";
import CollectionsSection from "@/components/CollectionsSection";
import FastMarquee from "@/components/FastMarquee";
import Deals from "@/components/Deals";
import Categorys from "@/components/Categorys";
import Products from "@/components/Products";
import CustomerReviews from "@/components/CustomerReviews";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopHeader />
      <NavHeader />
      <Slider />
      <Features />
      <CollectionsSection />
      <FastMarquee />
      <Deals />
      <Categorys />
      <Products />
      <CustomerReviews />
      <Features />
      <Footer />
    </>
  );
}
