
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Programs from "@/components/sections/Programs";
import Articles from "@/components/sections/Articles";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Programs />
      <Articles />
      <Gallery />

      {/* Contact Section Placeholder - Simplest implementation for now */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Mari Bergabung Bersama Kami</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto opacity-90">
            Jadilah bagian dari keluarga besar PPTQ Muhammadiyah Darul Hikmah Sragen.
          </p>
          {/* Map Placeholder */}
          <div className="bg-white/10 rounded-xl p-4 max-w-4xl mx-auto h-64 flex items-center justify-center">
            Peta Lokasi - Jl. Grompol - Jambangan No.7
          </div>
        </div>
      </section>
    </>
  );
}
