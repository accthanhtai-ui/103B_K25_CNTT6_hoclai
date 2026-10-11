
let kho_sach = [
    {
        bookCode: "B01",
        title: "lap trinh javascript",
        category: "cong nghe",
        price: 120000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A1"
    },
    {
        bookCode: "B02",
        title: "co so du lieu",
        category: "cong nghe",
        price: 150000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A2"
    },
    {
        bookCode: "B03",
        title: "ky nang song",
        category: "ky nang",
        price: 90000,
        totalCopies: 6,
        availableCopies: 0,
        shelfLocation: "B1"
    }
];
kho_sach.push({
    bookCode: "B04",
    title: "lap trinh python",
    category: "cong nghe",
    price: 130000,
    totalCopies: 12,
    availableCopies: 12,
    shelfLocation: "B2"
});
let ma_sach_muon = "B01";
let tim_thay = false;
for (let i = 0; i < kho_sach.length; i++) {
    if (kho_sach[i].bookCode === ma_sach_muon) {
        tim_thay = true;
        if (kho_sach[i].availableCopies > 0) {
            kho_sach[i].availableCopies--;
            console.log("Muon sach thanh cong");
        } else {
            console.log("HET SACH TREN KE");
        }
        break;
    }
}
if (tim_thay === false) {
    console.log("Khong tim thay sach");
}
let ma_sach_thanh_ly = "B03";
for (let i = 0; i < kho_sach.length; i++) {
    if (kho_sach[i].bookCode === ma_sach_thanh_ly) {
        kho_sach.splice(i, 1);
        console.log("Da thanh ly sach " + ma_sach_thanh_ly);
        break;
    }
}
let tong_so_sach = 0;
let tong_tai_san = 0;
console.log("BANG KIEM KE KHO THU VIEN");
console.log("MA SACH | TEN SACH             | TONG | CON LAI | VI TRI");
for (let i = 0; i < kho_sach.length; i++) {
    let sach = kho_sach[i];
    tong_so_sach += sach.totalCopies;
    tong_tai_san += sach.totalCopies * sach.price;
    let trang_thai = sach.availableCopies === 0
        ? "HET SACH TREN KE"
        : sach.availableCopies;
    console.log(
        sach.bookCode.padEnd(8) + "| " +
        sach.title.padEnd(21) + "| " +
        String(sach.totalCopies).padEnd(6) + "| " +
        String(trang_thai).padEnd(8) + "| " +
        sach.shelfLocation
    );
}
console.log("Tong so luong sach trong kho: " + tong_so_sach);
console.log("Tong gia tri tai san: " + tong_tai_san.toLocaleString("vi-VN") +"VND");
