// Lỗi 1: appointmentNumber dùng slice(8, 12) nên chỉ lấy đúng khi
// vị trí chuỗi phù hợp. Mã "MED-NHI-1024" có số bắt đầu từ index 8
// và cần lấy đến hết chuỗi.
// Lỗi 2: startsWith("MED-") phân biệt chữ hoa chữ thường.
// Mã gốc là "med-nhi-1024" nên cần đổi sang chữ hoa trước khi kiểm tra.
// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode= "  med-nhi-1024  ";
const cleanPatientName= "  nguyễn văn an  ";
// Dọn dẹp khoảng trắng
const cleanAppointmentCode= rawAppointmentCode.trim();
// Đổi mã sang chữ hoa
const normalizedCode= cleanAppointmentCode.toUpperCase();
// Kiểm tra tiền tố
const isCodeValid= normalizedCode.startsWith("MED-");
// Lấy chuyên khoa
const departmentCode= normalizedCode.slice(4, 7);
// Lấy số thứ tự
const appointmentNumber= normalizedCode.slice(8);
const formattedPatientName= cleanPatientName.trim().toUpperCase();
console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);