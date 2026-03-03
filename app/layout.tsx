import "./globals.css"

export const metadata = {
  title: "Organic Growth Agency",
  description: "We grow brands organically through content and strategy.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
