const phieu_dat_phong = {
    ma_dat_phong: "BK-2024-8891",
    ten_khach: "Trần Minh Quang",
    loai_phong: "Deluxe Ocean View",
    gia_phong: 1500000,
    gio_nhan_phong: 9
};

const khoa_gia = "gia_phong";
const gia_co_ban = phieu_dat_phong[khoa_gia];

let phu_thu = 0;
if (phieu_dat_phong.gio_nhan_phong < 12) {
    phu_thu = gia_co_ban * 0.3;
}

phieu_dat_phong.phu_thu = phu_thu;

const tong_tien = gia_co_ban + phu_thu;
phieu_dat_phong.tong_tien = tong_tien;

console.log("mã đặt phòng:", phieu_dat_phong.ma_dat_phong);
console.log("khách hàng:", phieu_dat_phong.ten_khach);
console.log("phụ thu nhận phòng sớm:", phieu_dat_phong.phu_thu);
console.log("tổng số tiền thanh toán:", phieu_dat_phong.tong_tien);

// dùng dấu ngoặc vuông vì tên thuộc tính nằm trong biến khoa_gia.
// dấu chấm sẽ tìm thuộc tính có tên cố định là "khoa_gia".
