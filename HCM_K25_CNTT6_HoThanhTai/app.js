let bookings = [
    {
        bookingCode: "CIN-001",
        customerName: "Nguyễn Văn An",
        movieTitle: "Ánh Trăng Cuối Phố",
        ticketCount: 2,
        pricePerTicket: 90000,
        totalAmount: 194400
    },
    {
        bookingCode: "CIN-002",
        customerName: "Trần Thị Bình",
        movieTitle: "Biệt Đội Sao Băng",
        ticketCount: 4,
        pricePerTicket: 90000,
        totalAmount: 349920
    },
    {
        bookingCode: "CIN-003",
        customerName: "Lê Minh Châu",
        movieTitle: "Mùa Hè Rực Lửa",
        ticketCount: 6,
        pricePerTicket: 110000,
        totalAmount: 641520
    }
];

function formatMoney(amount) {
    return amount.toLocaleString("vi-VN") + " VNĐ";
}

function normalizeText(value) {
    return value.trim().replace(/\s+/g, " ").toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase());
}

function validateBookingCode(code) {
    if (code === "") return "Chưa nhập mã đặt vé";
    if (code.length < 6) return "Độ dài nhỏ hơn 6 ký tự";
    if (!code.startsWith("CIN-")) return 'Sai tiền tố "CIN-"';
    if (/\s/.test(code)) return "Chứa khoảng trắng";
    if (findBookingIndex(code) !== -1) return "Mã đặt vé đã tồn tại";
    return "";
}

function findBookingIndex(code) {
    return bookings.findIndex(booking => booking.bookingCode === code);
}

function inputPositiveInteger(message) {
    while (true) {
        const value = prompt(message);
        if (value === null) return null;
        const text = value.trim();
        const number = Number(text);
        if (text !== "" && Number.isInteger(number) && number > 0) return number;
        console.log("Vui lòng nhập số nguyên lớn hơn 0.");
    }
}

function calculateTotal(ticketCount, pricePerTicket) {
    const baseCost = ticketCount * pricePerTicket;
    const discount = Math.round(ticketCount >= 4 ? baseCost * 0.1 : 0);
    const serviceFee = Math.round((baseCost - discount) * 0.08);
    const totalAmount = baseCost - discount + serviceFee;
    return { baseCost, discount, serviceFee, totalAmount };
}

function displayBookings(list) {
    if (list.length === 0) {
        console.log("Danh sách đơn đặt vé trống");
        return;
    }
    let revenue = 0;
    list.forEach((booking, index) => {
        console.log(`${index + 1}. ${booking.bookingCode} - ${booking.customerName} - ${booking.movieTitle} | SL: ${booking.ticketCount} | Giá: ${formatMoney(booking.pricePerTicket)} | Tổng TT: ${formatMoney(booking.totalAmount)}`);
        revenue += booking.totalAmount;
    });
    console.log(`Tổng: ${list.length} đơn đặt vé – Doanh thu: ${formatMoney(revenue)}`);
}

function inputRequiredText(message) {
    while (true) {
        const value = prompt(message);
        if (value === null) return null;
        const text = normalizeText(value);
        if (text !== "") return text;
        console.log("Thông tin không được để trống.");
    }
}

function displayInvoice(booking, amounts) {
    console.log("========== HÓA ĐƠN ĐẶT VÉ ==========");
    console.log(`Mã đặt vé: ${booking.bookingCode}`);
    console.log(`Khách hàng: ${booking.customerName}`);
    console.log(`Tên phim: ${booking.movieTitle}`);
    console.log(`Số vé: ${booking.ticketCount}`);
    console.log(`Giá mỗi vé: ${formatMoney(booking.pricePerTicket)}`);
    console.log(`Chi phí cơ sở: ${formatMoney(amounts.baseCost)}`);
    console.log(`Giảm giá: ${formatMoney(amounts.discount)}`);
    console.log(`Phí dịch vụ: ${formatMoney(amounts.serviceFee)}`);
    console.log(`Tổng thanh toán: ${formatMoney(amounts.totalAmount)}`);
}

function addBooking() {
    const rawCode = prompt("Nhập mã đặt vé:");
    if (rawCode === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }
    const bookingCode = rawCode.trim().toUpperCase();
    const codeError = validateBookingCode(bookingCode);
    if (codeError !== "") {
        console.log(`Lỗi: ${codeError}`);
        return;
    }

    const customerName = inputRequiredText("Nhập tên khách hàng:");
    if (customerName === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }
    const movieTitle = inputRequiredText("Nhập tên phim:");
    if (movieTitle === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }
    const ticketCount = inputPositiveInteger("Nhập số vé:");
    if (ticketCount === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }
    const pricePerTicket = inputPositiveInteger("Nhập giá mỗi vé:");
    if (pricePerTicket === null) {
        console.log("Đã hủy thao tác thêm");
        return;
    }

    const amounts = calculateTotal(ticketCount, pricePerTicket);
    const booking = { bookingCode, customerName, movieTitle, ticketCount, pricePerTicket, totalAmount: amounts.totalAmount };
    bookings.push(booking);
    console.log("Thêm đơn đặt vé thành công");
    displayInvoice(booking, amounts);
}

function updateBooking() {
    const rawCode = prompt("Nhập mã đặt vé cần cập nhật:");
    if (rawCode === null) {
        console.log("Đã hủy cập nhật");
        return;
    }
    const bookingCode = rawCode.trim().toUpperCase();
    const index = findBookingIndex(bookingCode);
    if (index === -1) {
        console.log(`Không tìm thấy đơn đặt vé có mã ${bookingCode}`);
        return;
    }

    const ticketCount = inputPositiveInteger("Nhập số vé mới:");
    if (ticketCount === null) {
        console.log("Đã hủy cập nhật");
        return;
    }
    const pricePerTicket = inputPositiveInteger("Nhập giá mỗi vé mới:");
    if (pricePerTicket === null) {
        console.log("Đã hủy cập nhật");
        return;
    }

    const oldAmount = bookings[index].totalAmount;
    const amounts = calculateTotal(ticketCount, pricePerTicket);
    bookings[index].ticketCount = ticketCount;
    bookings[index].pricePerTicket = pricePerTicket;
    bookings[index].totalAmount = amounts.totalAmount;
    console.log(`Tổng thanh toán cũ: ${formatMoney(oldAmount)}`);
    console.log(`Tổng thanh toán mới: ${formatMoney(amounts.totalAmount)}`);
    console.log("Cập nhật thành công");
}

function deleteBooking() {
    const rawCode = prompt("Nhập mã đặt vé cần xóa:");
    if (rawCode === null) {
        console.log("Đã hủy thao tác xóa");
        return;
    }
    const bookingCode = rawCode.trim().toUpperCase();
    const index = findBookingIndex(bookingCode);
    if (index === -1) {
        console.log(`Không tìm thấy đơn đặt vé có mã ${bookingCode}`);
        return;
    }

    const confirmDelete = prompt("Xác nhận xóa? Nhập Y để đồng ý:");
    if (confirmDelete === null || confirmDelete.trim() !== "Y" && confirmDelete.trim() !== "y") {
        console.log("Đã hủy thao tác xóa");
        return;
    }
    bookings.splice(index, 1);
    console.log(`Xóa thành công, còn ${bookings.length} đơn`);
}

function searchBookings() {
    const rawKeyword = prompt("Nhập từ khóa tìm kiếm tên phim:");
    if (rawKeyword === null || rawKeyword.trim() === "") {
        console.log("Chưa nhập từ khóa tìm kiếm");
        return;
    }
    const keyword = rawKeyword.trim().toLowerCase();
    const results = bookings.filter(booking => booking.movieTitle.toLowerCase().includes(keyword));
    if (results.length === 0) {
        console.log("Không tìm thấy đơn đặt vé phù hợp");
        return;
    }
    displayBookings(results);
}

function displayReport() {
    console.log("==================================================");
    console.log("BÁO CÁO TỔNG KẾT ĐƠN ĐẶT VÉ");
    console.log("==================================================");
    if (bookings.length === 0) {
        console.log("Chưa có đơn đặt vé nào");
        console.log("==================================================");
        return;
    }
    const totalRevenue = bookings.reduce((sum, booking) => sum + booking.totalAmount, 0);
    const averageRevenue = Math.round(totalRevenue / bookings.length);
    const highestBooking = bookings.reduce((highest, booking) => booking.totalAmount > highest.totalAmount ? booking : highest);
    console.log(`Tổng số đơn đặt vé: ${bookings.length}`);
    console.log(`Tổng doanh thu: ${formatMoney(totalRevenue)}`);
    console.log(`Doanh thu trung bình: ${formatMoney(averageRevenue)}`);
    console.log(`Đơn cao nhất: ${highestBooking.bookingCode} - ${formatMoney(highestBooking.totalAmount)}`);
    console.log("==================================================");
}

function showMenu() {
    console.log("=====================================================");
    console.log("HỆ THỐNG QUẢN LÝ ĐẶT VÉ MOONLIGHT CINEMA");
    console.log("=====================================================");
    console.log("1. Hiển thị danh sách đơn đặt vé");
    console.log("2. Thêm đơn đặt vé mới");
    console.log("3. Cập nhật đơn đặt vé");
    console.log("4. Xóa đơn đặt vé");
    console.log("5. Tìm kiếm đơn đặt vé theo tên phim");
    console.log("0. Thoát chương trình");
    console.log("=====================================================");
}

function runProgram() {
    let isRunning = true;
    while (isRunning) {
        showMenu();
        const choice = prompt("Vui lòng nhập lựa chọn của bạn (0 - 5):");
        if (choice === null) {
            console.log("Lựa chọn không hợp lệ");
            continue;
        }
        const text = choice.trim();
        if (!/^[0-5]$/.test(text)) {
            console.log("Lựa chọn không hợp lệ");
            continue;
        }
        switch (Number(text)) {
            case 1:
                displayBookings(bookings);
                break;
            case 2:
                addBooking();
                break;
            case 3:
                updateBooking();
                break;
            case 4:
                deleteBooking();
                break;
            case 5:
                searchBookings();
                break;
            case 0:
                displayReport();
                console.log("Cảm ơn bạn đã sử dụng chương trình Moonlight Cinema!");
                isRunning = false;
                break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
        }
    }
}

runProgram();