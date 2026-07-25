export const TASKS = [
  { id: "t1", title: "تسجيل بيانات المتطوع في النظام", status: "done", due: "٢ يوليو" },
  { id: "t2", title: "حضور جلسة تعريفية عن سياسات المبادرة", status: "progress", due: "١٤ يوليو" },
  { id: "t3", title: "تسليم أول تقرير ميداني أسبوعي", status: "progress", due: "٢٠ يوليو" },
  { id: "t4", title: "مراجعة دليل التواصل مع المستفيدين", status: "pending", due: "٢٥ يوليو" },
];

export const STATUS_MAP = {
  done: { label: "منتهي", className: "statusDone" },
  progress: { label: "قيد التنفيذ", className: "statusProgress" },
  pending: { label: "لم يبدأ", className: "statusPending" },
};
