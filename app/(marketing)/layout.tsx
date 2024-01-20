interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="bg-[#fff] h-[100vh] w-[100vw]">
      {/* Navbar */}
      <main className="pt-40 pb-20">{children}</main>
    </div>
  );
}
