import "./globals.css";

export const metadata = {
  title: "AI Agency",
  description: "Automation & AI Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "white",
            padding: "20px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>AI Agency</strong>
            <nav>
              <a href="/" style={{ marginRight: 15 }}>Home</a>
              <a href="/services" style={{ marginRight: 15 }}>Services</a>
              <a href="/pricing" style={{ marginRight: 15 }}>Pricing</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="container" style={{ padding: "40px 20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
