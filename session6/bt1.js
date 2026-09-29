let maDonHang = "";
let tongTien = 0;
let hopLe = false;
let chon;
do {
    console.log("\n===== GYM FITNESS =====");
    console.log("1. Nhập và chuẩn hóa mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");
    chon = prompt("Nhập lựa chọn:");
    switch (chon) {
        case "1":
            maDonHang = prompt("Nhập mã đơn hàng:").trim().toUpperCase();
            if (maDonHang.length >= 8 && maDonHang.startsWith("GYM")) {
                hopLe = true;
                console.log("Mã đơn hàng hợp lệ:", maDonHang);
            } else {
                hopLe = false;
                console.log("Mã đơn hàng không hợp lệ");
            }
            break;
        case "2":
            if (!hopLe) {
                console.log("Mã đơn hàng không hợp lệ, không thể in hóa đơn");
                break;
            }
            let donHang = maDonHang.slice(3);
            let tong = 0;
            let sanPham = [];
            for (let i = 0; i < donHang.length; i += 6) {
                let maSP = donHang.slice(i, i + 6);

                if (maSP === "SHAKER") {
                    sanPham.push(["Bình lắc", 120000]);
                    tong += 120000;
                } else if (maSP === "GLOVES") {
                    sanPham.push(["Găng tay", 180000]);
                    tong += 180000;
                } else if (maSP === "STRAP") {
                    sanPham.push(["Dây kéo lưng", 150000]);
                    tong += 150000;
                }
            }
            let vip = prompt("Khách có thẻ VIP? (Y/N)").trim().toUpperCase();
            let giamGia = 0;
            if (vip === "Y") {
                giamGia = tong * 0.1;
            }
            tongTien = tong - giamGia;
            console.log("-".repeat(40));
            console.log("              HÓA ĐƠN GYM");
            console.log("-".repeat(40));
            console.log("Sản phẩm".padEnd(25) + "Thành tiền");
            console.log("-".repeat(40));
            for (let i = 0; i < sanPham.length; i++) {
                console.log(
                    sanPham[i][0].padEnd(25) +
                    sanPham[i][1].toLocaleString("vi-VN") + " VNĐ"
                );
            }
            console.log("-".repeat(40));
            console.log("Tổng tiền:".padEnd(25) + tong.toLocaleString("vi-VN") + " VNĐ");
            console.log("Giảm giá:".padEnd(25) + giamGia.toLocaleString("vi-VN") + " VNĐ");
            console.log("Thanh toán:".padEnd(25) + tongTien.toLocaleString("vi-VN") + " VNĐ");
            console.log("-".repeat(40));
            break;
        case "3":
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (chon !== "3");


