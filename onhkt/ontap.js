// ==========================================
// HỆ THỐNG THU NGÂN PHÒNG KHÁM MEDLATEC
// Bản cơ bản - tập trung khoảng 70 điểm
// ==========================================


// Lưu mã phiếu khám hiện tại
let maPhieuHienTai = "";

// Kiểm tra mã phiếu hiện tại có hợp lệ không
let maPhieuHopLe = false;

// Lưu tổng doanh thu trong ca
let tongDoanhThu = 0;

// Lưu tổng số lượt khám đã thanh toán
let tongLuotKham = 0;

// Biến dùng để điều khiển vòng lặp menu
let dangChay = true;


// ==========================================
// MENU CHÍNH
// ==========================================

// Menu sẽ chạy liên tục cho đến khi chọn 0
do {

    console.log("==============================================");
    console.log("   HỆ THỐNG THU NGÂN PHÒNG KHÁM MEDLATEC");
    console.log("==============================================");
    console.log("1. Nhập và kiểm chuẩn mã phiếu khám bệnh");
    console.log("2. Tính viện phí xét nghiệm");
    console.log("3. Thẩm định mã hồ sơ may mắn");
    console.log("0. Thoát chương trình");
    console.log("==============================================");

    // Nhập lựa chọn của người dùng
    let luaChon = prompt("Vui lòng nhập lựa chọn của bạn (0 - 3):");

    // Nếu người dùng bấm Cancel
    if (luaChon === null) {
        console.log("Lựa chọn không hợp lệ!");
        continue;
    }

    // Xóa khoảng trắng thừa ở đầu và cuối
    luaChon = luaChon.trim();


    // Dùng switch để xử lý lựa chọn
    switch (luaChon) {

        // ==========================================
        // CASE 1: NHẬP VÀ KIỂM TRA MÃ PHIẾU
        // ==========================================
        case "1":

            // Mỗi lần nhập mã mới phải xóa mã cũ
            maPhieuHienTai = "";
            maPhieuHopLe = false;

            // Nhập mã phiếu từ người dùng
            let maPhieu = prompt("Nhập mã phiếu khám:");

            // Nếu bấm Cancel thì xem như chưa nhập mã
            if (maPhieu === null) {
                console.log("Chưa nhập mã phiếu.");
                break;
            }

            // Xóa khoảng trắng đầu cuối và chuyển thành chữ hoa
            maPhieu = maPhieu.trim().toUpperCase();

            // Kiểm tra người dùng có nhập gì hay không
            if (maPhieu === "") {
                console.log("Chưa nhập mã phiếu.");
                break;
            }

            // Kiểm tra mã phải có ít nhất 6 ký tự
            if (maPhieu.length < 6) {
                console.log("Lỗi: Độ dài mã phiếu phải từ 6 ký tự.");
                break;
            }

            // Kiểm tra mã phải bắt đầu bằng MED-
            if (!maPhieu.startsWith("MED-")) {
                console.log('Lỗi: Mã phiếu phải bắt đầu bằng "MED-".');
                break;
            }

            // Kiểm tra mã không được có khoảng trắng bên trong
            if (maPhieu.includes(" ")) {
                console.log("Lỗi: Mã phiếu không được chứa khoảng trắng ở giữa.");
                break;
            }

            // Nếu vượt qua tất cả kiểm tra thì mã hợp lệ
            maPhieuHienTai = maPhieu;
            maPhieuHopLe = true;

            console.log("Nhập mã phiếu thành công!");
            console.log("Mã phiếu:", maPhieuHienTai);
            console.log("Trạng thái: Hợp lệ");

            break;


        // ==========================================
        // CASE 2: TÍNH VIỆN PHÍ
        // ==========================================
        case "2":

            // Phải có mã phiếu hợp lệ mới được tính tiền
            if (maPhieuHopLe === false) {
                console.log("Chưa có mã phiếu hợp lệ.");
                console.log("Vui lòng chọn Case 1 trước.");
                break;
            }


            // ------------------------------------------
            // NHẬP SỐ LƯỢNG DỊCH VỤ
            // ------------------------------------------

            // Biến lưu số lượng dịch vụ
            let soLuongDichVu;

            // Lặp lại nếu người dùng nhập sai
            while (true) {

                // Nhập số lượng dịch vụ
                let nhapSoLuong = prompt(
                    "Nhập số lượng chỉ định xét nghiệm:"
                );

                // Nếu bấm Cancel thì hủy giao dịch
                if (nhapSoLuong === null) {
                    console.log("Đã hủy giao dịch.");
                    break;
                }

                // Xóa khoảng trắng đầu cuối
                nhapSoLuong = nhapSoLuong.trim();

                // Không cho phép bỏ trống
                if (nhapSoLuong === "") {
                    console.log("Số lượng không được để trống.");
                    continue;
                }

                // Chuyển dữ liệu từ chuỗi sang số
                soLuongDichVu = Number(nhapSoLuong);

                // Kiểm tra phải là số nguyên lớn hơn 0
                if (
                    !Number.isInteger(soLuongDichVu) ||
                    soLuongDichVu <= 0
                ) {
                    console.log(
                        "Lỗi: Số lượng phải là số nguyên lớn hơn 0."
                    );
                    continue;
                }

                // Nhập đúng thì thoát vòng lặp
                break;
            }

            // Nếu người dùng bấm Cancel thì quay lại menu
            if (soLuongDichVu === undefined) {
                break;
            }


            // ------------------------------------------
            // NHẬP ĐƠN GIÁ
            // ------------------------------------------

            // Biến lưu đơn giá của một dịch vụ
            let donGiaDichVu;

            // Lặp lại cho đến khi nhập đúng
            while (true) {

                // Nhập đơn giá
                let nhapDonGia = prompt(
                    "Nhập đơn giá mỗi chỉ định (VNĐ):"
                );

                // Nếu bấm Cancel thì hủy giao dịch
                if (nhapDonGia === null) {
                    console.log("Đã hủy giao dịch.");
                    break;
                }

                // Xóa khoảng trắng đầu cuối
                nhapDonGia = nhapDonGia.trim();

                // Không cho phép bỏ trống
                if (nhapDonGia === "") {
                    console.log("Đơn giá không được để trống.");
                    continue;
                }

                // Chuyển đơn giá từ chuỗi sang số
                donGiaDichVu = Number(nhapDonGia);

                // Kiểm tra đơn giá phải là số nguyên > 0
                if (
                    !Number.isInteger(donGiaDichVu) ||
                    donGiaDichVu <= 0
                ) {
                    console.log(
                        "Lỗi: Đơn giá phải là số nguyên lớn hơn 0."
                    );
                    continue;
                }

                // Nhập đúng thì thoát vòng lặp
                break;
            }

            // Nếu người dùng bấm Cancel thì quay lại menu
            if (donGiaDichVu === undefined) {
                break;
            }


            // ------------------------------------------
            // TÍNH TIỀN
            // ------------------------------------------

            // Tính chi phí ban đầu
            let chiPhiCoSo =
                soLuongDichVu * donGiaDichVu;

            // Ban đầu chưa có giảm giá
            let tienGiamGia = 0;

            // Nếu có từ 4 dịch vụ trở lên thì giảm 10%
            if (soLuongDichVu >= 4) {
                tienGiamGia =
                    Math.round(chiPhiCoSo * 0.1);
            }

            // Tính phụ phí vật tư 8% sau khi giảm
            let phuPhiVatTu =
                Math.round(
                    (chiPhiCoSo - tienGiamGia) * 0.08
                );

            // Tính số tiền cuối cùng phải thanh toán
            let tongThanhToan =
                (chiPhiCoSo - tienGiamGia) + phuPhiVatTu;


            // ------------------------------------------
            // CẬP NHẬT DOANH THU
            // ------------------------------------------

            // Cộng tiền thanh toán vào tổng doanh thu
            tongDoanhThu =
                tongDoanhThu + tongThanhToan;

            // Tăng số lượt khám lên 1
            tongLuotKham =
                tongLuotKham + 1;


            // Lưu lại mã phiếu trước khi xóa
            // để có thể in mã trên hóa đơn
            let maPhieuDaThanhToan =
                maPhieuHienTai;


            // Thanh toán xong thì mã phiếu không còn hiệu lực
            maPhieuHienTai = "";
            maPhieuHopLe = false;


            // ------------------------------------------
            // IN HÓA ĐƠN
            // ------------------------------------------

            console.log("==============================================");
            console.log("              HÓA ĐƠN VIỆN PHÍ");
            console.log("==============================================");

            // In mã phiếu
            console.log(
                "Mã phiếu khám:",
                maPhieuDaThanhToan
            );

            // In số lượng dịch vụ
            console.log(
                "Số chỉ định:",
                soLuongDichVu
            );

            // In đơn giá
            console.log(
                "Đơn giá:",
                donGiaDichVu,
                "VNĐ"
            );

            // In chi phí ban đầu
            console.log(
                "Chi phí cơ sở:",
                chiPhiCoSo,
                "VNĐ"
            );

            // In tiền giảm giá
            console.log(
                "Tiền giảm giá:",
                tienGiamGia,
                "VNĐ"
            );

            // In phụ phí vật tư
            console.log(
                "Phụ phí vật tư:",
                phuPhiVatTu,
                "VNĐ"
            );

            // In tổng tiền cần thanh toán
            console.log(
                "Tổng thanh toán:",
                tongThanhToan,
                "VNĐ"
            );

            console.log("==============================================");

            break;


        // ==========================================
        // CASE 3
        // ==========================================
        // Tạm bỏ phần này để tập trung vào 70 điểm
        case "3":

            console.log(
                "Case 3 chưa được triển khai trong phiên bản cơ bản."
            );

            console.log(
                "Tập trung vào Menu + Case 1 + Case 2."
            );

            break;


        // ==========================================
        // CASE 0: THOÁT CHƯƠNG TRÌNH
        // ==========================================
        case "0":

            console.log("==============================================");
            console.log("       CẢM ƠN BẠN ĐÃ SỬ DỤNG CHƯƠNG TRÌNH");
            console.log("==============================================");

            // In tổng số lượt khám
            console.log(
                "Tổng lượt khám:",
                tongLuotKham
            );

            // In tổng doanh thu
            console.log(
                "Tổng doanh thu:",
                tongDoanhThu,
                "VNĐ"
            );

            // Đổi thành false để thoát vòng lặp
            dangChay = false;

            break;


        // ==========================================
        // TRƯỜNG HỢP NHẬP SAI MENU
        // ==========================================
        default:

            // Thông báo khi người dùng nhập sai
            console.log("Lựa chọn không hợp lệ!");

            console.log(
                "Vui lòng nhập 0, 1, 2 hoặc 3."
            );

            break;
    }

} while (dangChay);


// ==========================================
// KẾT THÚC
// ==========================================

// Thông báo chương trình đã dừng
console.log("Chương trình đã kết thúc.");