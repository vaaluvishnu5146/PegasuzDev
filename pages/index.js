import DetailedServices from "../Components/DetailedServices/DetailedServices";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Head from "next/head";
import EnquiryForm from "../Components/FormEnquiry/EnquiryForm";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pegasuz Digital</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Finally, a better solution for your business"
        />
        <meta
          name="keywords"
          content="Public Relationship, YouTube Services, Video Editing, Digital Assets, Branding, Fashion Assets Designing"
        />
        <meta name="author" content="John Doe"></meta>
      </Head>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <Header />
      <Hero />
      <Services />
      <div>
        <DetailedServices
          theme={{
            sectionBackground: "bg-gray-100",
            textColor: "text-black",
          }}
          logo={"/Assets/YouTubefull.png"}
          dimension={{
            width: "100",
            height: "70",
          }}
          service={"YouTube Video Editing"}
          description="Lorem ipsum dolor set amet, Lorem ipsum dolor set amet Lorem ipsum
          dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet"
          serviceImage={"/Assets/videoEditing.jpeg"}
        />
        <DetailedServices
          theme={{
            sectionBackground: "bg-gray-700",
            textColor: "text-white",
          }}
          logo={"/Assets/spotifyfull.png"}
          dimension={{
            width: "120",
            height: "40",
          }}
          service={"Spotify Album Art"}
          description="Lorem ipsum dolor set amet, Lorem ipsum dolor set amet Lorem ipsum
          dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet"
          serviceImage={"/Assets/spotifyBackdroplatest.png"}
        />
        <DetailedServices
          theme={{
            sectionBackground: "bg-gray-100",
            textColor: "text-black",
          }}
          logo={"/Assets/spotifyfull.png"}
          dimension={{
            width: "120",
            height: "40",
          }}
          service={"Branding & Logo Design"}
          description="Lorem ipsum dolor set amet, Lorem ipsum dolor set amet Lorem ipsum
          dolor set amet Lorem ipsum dolor set amet Lorem ipsum dolor set amet"
          serviceImage={"/Assets/spotifyBackdroplatest.png"}
        />
      </div>
      <EnquiryForm theme={"bg-gray-100"} />
      <Footer />
    </div>
  );
}
