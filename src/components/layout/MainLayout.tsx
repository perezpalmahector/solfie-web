import Navbar from "./Navbar";
import Footer from "./Footer";

import ScrollTop from "../common/ScrollTop";
import WhatsAppButton from "../common/WhatsAppButton";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({
  children,
}: Props) {
  return (
    <>
      <Navbar />

      <main className="pt-2">{children}</main>

      <Footer />

      <ScrollTop />

      <WhatsAppButton />
    </>
  );
}