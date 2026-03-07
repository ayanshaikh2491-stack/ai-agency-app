import Link from "next/link"

const managers = [
"seo",
"website",
"automation",
"marketing",
"ads",
"social"
]

export default function ManagersPage(){

return(

<div className="max-w-5xl mx-auto p-10 text-white">

<h1 className="text-3xl font-bold mb-8">
AI Managers
</h1>

<div className="grid grid-cols-3 gap-6">

{managers.map((m)=>(
<Link
key={m}
href={`/manager/${m}`}
className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-600"
>

<h2 className="text-xl capitalize">
{m} Manager
</h2>

<p className="text-gray-400 text-sm mt-2">
Click to start chat
</p>

</Link>
))}

</div>

</div>

)

}
