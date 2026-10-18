
function calculateBaggageSurcharge(ve, danhSachHanhLy) {
let tongCan = 0;
let tienQuaCan = 0;
let tienDichVu = 0;
let hanMuc = ve.hanMuc;
if (ve.hoiVien === "titan") {
hanMuc += 10;
}
for (let i = 0; i < danhSachHanhLy.length; i++) {
let hanhLy = danhSachHanhLy[i];
tongCan += hanhLy.can;
if (hanhLy.loai === "cong kenh") {
tienDichVu += 200000;
}
if (hanhLy.loai === "thu cung") {
tienDichVu += 500000;
}
}
let vuotCan = tongCan - hanMuc;
if (vuotCan > 0) {
if (vuotCan <= 5) {
tienQuaCan = vuotCan * 60000;
} else {
tienQuaCan = 300000 + (vuotCan - 5) * 80000;
}
} else {
vuotCan = 0;
}
let tongTien = tienQuaCan + tienDichVu;
return "tong can: " + tongCan + " kg\n" +
"han muc: " + hanMuc + " kg\n" +
"vuot can: " + vuotCan + " kg\n" +
"tien qua can: " + tienQuaCan + " vnd\n" +
"tien dich vu: " + tienDichVu + " vnd\n" +
"tong tien: " + tongTien + " vnd";
}
let ve = {
hanMuc: 20,
hoiVien: "titan"
};
let danhSachHanhLy = [
{ can: 15, loai: "thuong" },
{ can: 12, loai: "cong kenh" },
{ can: 3, loai: "thu cung" }
];
console.log(calculateBaggageSurcharge(ve, danhSachHanhLy));
