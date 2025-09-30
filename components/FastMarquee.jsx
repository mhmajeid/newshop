"use client";
import Marquee from "react-fast-marquee";

export default function FastMarqueeBar() {
  return (
    <Marquee
      direction="left"    // للعربية: يحرك من اليمين لليسار. جرّب "left" لو رغبت
      speed={40}           // السرعة
      pauseOnHover         // توقف عند الهوفر
      gradient={false}     // عطّل التدرّج الجانبي
      className="bg-[#F7F5F0] py-[32px] hidden lg:block"
    >
      <span className="mx-6">New Women collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Luxury watches</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Well made shoes</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">30% OFF Winter Collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Free Delivery</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">New Women collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Luxury watches</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Well made shoes</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">30% OFF Winter Collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Free Delivery</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">New Women collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Luxury watches</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Well made shoes</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">30% OFF Winter Collection</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
      <span className="mx-6">Free Delivery</span>
      <span className="mx-4 w-2 h-2 rounded-full bg-black inline-block"></span>
    </Marquee>
  );
}
