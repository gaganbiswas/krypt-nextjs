import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Krypt | Send Crypto all over the world</title>
        <meta name="description" content="Web 3.0 website using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="gradient-bg-welcome">
        <Header />
        <Hero />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
