// هذا هو المكان الوحيد اللي هيتغيّر لما نضيف Firebase / Backend حقيقي.
// حاليًا: mock بيعمل simulate للإرسال عشان تقدروا تجربوا الفورم من غير سيرفر.
// بكرة: هنستبدل جوه الدالة دي استدعاء حقيقي لـ Firebase Function أو API
// اللي هياخد البيانات + الملفات ويبعتها بريد لمسؤولة المبادرة.

export async function submitApplication(formData) {
  // اللي جوه الـ console.log ده هيتشال لما نوصل الـ backend الحقيقي
  const plainData = {};
  formData.forEach((value, key) => {
    plainData[key] = value instanceof File ? `[ملف: ${value.name}]` : value;
  });
  console.log("Application submitted (mock):", plainData);

  await new Promise((resolve) => setTimeout(resolve, 1200));

  // TODO: استبدال الجزء ده بـ:
  // const response = await fetch("https://YOUR_BACKEND_URL/apply", {
  //   method: "POST",
  //   body: formData,
  // });
  // if (!response.ok) return { success: false };

  return { success: true };
}
