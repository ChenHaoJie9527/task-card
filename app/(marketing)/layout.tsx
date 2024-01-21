import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="bg-[#f0f8ff] h-[100vh] w-[100vw]">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      <Footer />
    </div>
  );
}
