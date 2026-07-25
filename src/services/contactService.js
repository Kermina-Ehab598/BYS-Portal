// نفس فكرة applicationService.js — mock دلوقتي، هيتحول لاتصال حقيقي بكرة
export async function submitContactMessage(data) {
  console.log("Contact message submitted (mock):", data);
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { success: true };
}
