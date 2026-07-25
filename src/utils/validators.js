// دوال تحقق بسيطة، معمولة عشان تتستخدم في أي فورم تاني بكرة (Login مثلاً)

export function isValidFullName(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return parts.length >= 4;
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidEgyptianPhone(phone) {
  return /^01[0125][0-9]{8}$/.test(phone);
}

export function isValidNationalId(id) {
  return /^[0-9]{14}$/.test(id);
}

// روابط فيسبوك/لينكدإن اختيارية — لو المستخدم مكتبهاش نعتبرها صح،
// لو كتبها لازم تبقى رابط فعلي
export function isValidOptionalUrl(url) {
  if (!url || !url.trim()) return true;
  return /^https?:\/\/.+\..+/i.test(url.trim());
}

export function isValidFileSize(file, maxMB = 5) {
  if (!file) return true;
  return file.size <= maxMB * 1024 * 1024;
}

export function isValidImageFile(file) {
  if (!file) return false;
  return ["image/jpeg", "image/jpg", "image/png"].includes(file.type);
}

export function isValidCvFile(file) {
  if (!file) return false;
  return [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ].includes(file.type);
}
