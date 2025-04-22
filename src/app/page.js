import AboutComponent from "@/components/AboutComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Map from "@/components/Map";
import Partners from "@/components/Partners";
import StaticCommentsComponent from "@/components/StaticCommentsComponent";
import TopProducts from "@/components/TopProducts";

export default function page() {
  return (
    <div className="home">
      <Header />
      <Partners />
      <AboutComponent />
      <TopProducts />
      <StaticCommentsComponent />
      <Map />
      <Footer />
    </div>
  );
};