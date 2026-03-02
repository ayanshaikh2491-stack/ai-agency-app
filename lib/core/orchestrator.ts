export async function runorchestrator(message: string) {
  return {
    status: "Engine Running",
    received: message
  }
}
