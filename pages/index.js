import DetailedServices from "../Components/DetailedServices/DetailedServices";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";

export default function Home() {
  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <Header />
      <Hero />
      <Services />
      <DetailedServices />
    </div>
  );
}
