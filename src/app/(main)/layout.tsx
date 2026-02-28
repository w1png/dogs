import { Header } from "./page";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p>
      <Header />
      {children}
    </p>
  );
}

