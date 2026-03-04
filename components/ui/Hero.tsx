"use client";

import { useRouter } from "next/navigation";

export default function Hero() {

const router = useRouter();

return(

<section className="max-w-6xl mx-auto px-6 py-28 text-center">

<h1 className="text-6xl font-bold mb-6">
AI Digital Execution Team
</h1>

<p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
Strategy. Execution. Automation. Growth.
AI specialists working together to build and scale your business.
</p>

<div className="flex justify-center gap-4">

<button
onClick={()=>router.push("/services")}
className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
>
Explore Services
</button>

<button
onClick={()=>router.push("/pricing")}
className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-zinc-900 transition"
>
View Pricing
</button>

</div>

</section>

)

}
