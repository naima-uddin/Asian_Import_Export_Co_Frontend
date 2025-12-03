import Banner from "@/components/Home/Banner";
import ProductCatalog from "@/components/DynamicProductCatalog/ProductCatalog";
import ServicesSection from "@/components/Home/ServicesSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export const metadata = {
  title: "Home - Your Global Trade Partner",
  description:
    "Asian Import Export Co offers comprehensive international trade services including agriculture, seafood, metals, trucks, vehicles, and wood products. Contact us for your import-export needs.",
  openGraph: {
    title: "Asian Import Export Co - Your Global Trade Partner",
    description:
      "Comprehensive international trade services for agriculture, seafood, metals, trucks, vehicles, and wood products.",
    url: "https://asianimpex.com",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCatalog />
      <ServicesSection />
      <WhyChooseUs />
    </>
  );
}
