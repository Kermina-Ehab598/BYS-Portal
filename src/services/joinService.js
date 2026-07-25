// نفس فكرة applicationService.js — mock دلوقتي، هيتحول لاتصال حقيقي بكرة
export async function submitJoinRequest(data) {
  console.log("Join request submitted (mock):", data);
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { success: true };
}
