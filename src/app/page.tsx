import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTop from "@/components/HeaderTop";

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header
        logoSrc="/logo.png"
        logoAlt="Logo"
        logoWidth={150}
        logoHeight={50}
      />
      <AboutUs />
      <Faq />
      <Footer />
    </>
  );
}
