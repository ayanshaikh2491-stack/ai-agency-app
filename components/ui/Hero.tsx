"use client";

import { useState } from "react";

export default function HeroChat(){

const [text,setText] = useState("");

return(

<section className="max-w-6xl mx-auto px-6 py-28">

<h1 className="text-6xl font-bold text-center mb-6">
AI Digital Execution Team
</h1>

<p className="text-center text-gray-400 mb-12">
Describe your business problem and our AI manager will assemble the perfect team.
</p>

<div className="grid md:grid-cols-2 gap-10">

{/* CHAT */}

<div className="bg-zinc-900 p-6 rounded-xl">

<textarea
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Explain what you want to build..."
className="w-full bg-black p-4 rounded-lg outline-none mb-4"
/>

<div className="flex gap-4">

<button className="bg-purple-600 px-4 py-2 rounded-lg">
Send
</button>

<input type="file" />

</div>

</div>


{/* TEAM BOX */}

<div className="bg-zinc-900 p-6 rounded-xl">

<h3 className="text-xl font-semibold mb-4">
AI Team
</h3>

<p className="text-gray-400">
No team created yet
</p>

</div>

</div>

</section>

)

}
