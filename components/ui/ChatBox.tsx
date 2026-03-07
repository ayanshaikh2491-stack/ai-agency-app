const sendMessage = async () => {

if(!message) return

const res = await fetch("/api/run-manager",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message,
manager:"website"
})
})

const data = await res.json()

setMessages(prev=>[
...prev,
{role:"user",text:message},
{role:"manager",text:data.reply}
])

setMessage("")

}
