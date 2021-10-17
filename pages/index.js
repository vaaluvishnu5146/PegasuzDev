import DetailedServices from "../Components/DetailedServices/DetailedServices";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Head from "next/head";

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
      <DetailedServices
        sectionBackground="bg-gray-100"
        logo={"/Assets/Youtubefull.png"}
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
        sectionBackground="bg-gray-700"
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
    </div>
  );
}
