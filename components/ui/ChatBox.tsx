{team.map((m,i)=>(

<div key={i} className="bg-zinc-900 p-6 rounded-xl mb-6">

<h3 className="text-xl font-bold">{m.name}</h3>

<p className="text-purple-400">{m.role}</p>

<p className="text-gray-400 text-sm">
Department: {m.department}
</p>

<p className="mt-3">{m.intro}</p>

<div className="mt-4">

<p className="font-semibold mb-2">
Agents
</p>

<ul className="text-gray-400">

{m.agents.map((a,j)=>(
<li key={j}>• {a}</li>
))}

</ul>

</div>

</div>

))}
