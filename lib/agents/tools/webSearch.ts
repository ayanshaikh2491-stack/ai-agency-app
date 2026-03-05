export async function webSearch(query:string){

  const res = await fetch(
    `https://api.duckduckgo.com/?q=${query}&format=json`
  )

  const data = await res.json()

  return JSON.stringify(data)
}
