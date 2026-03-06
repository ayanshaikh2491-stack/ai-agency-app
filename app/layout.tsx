import "./globals.css"
import Link from "next/link"

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {

return (

<html lang="en">

<body className="bg-black text-white">

<nav className="border-b border-zinc-800">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">

<h1 className="font-bold text-lg">
AI Agency
</h1>

<div className="flex gap-6 text-sm">

<Link href="/">Home</Link>
<Link href="/services">Services</Link>
<Link href="/pricing">Pricing</Link>
<Link href="/login">Login</Link>

</div>

</div>

</nav>

{children}

</body>

</html>

)

}
