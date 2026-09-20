
// Dữ liệu tiếp nhận từ biểu mẫu đơn hàng dạng chuỗi ký tự thô
const customerName = "Nguyen Thi Mai";
const foodItemName = "Com Tam Suon Bi Cha";
const rawFoodPrice = "55000";
const rawToppingPrice = "15000";
const rawDeliveryFee = "20000";
const voucherDiscount = 10000;

// Ép kiểu chuỗi sang số
const foodPrice = Number(rawFoodPrice);
const toppingPrice = Number(rawToppingPrice);
const deliveryFee = Number(rawDeliveryFee);

// 1. Tính tổng giá trị món ăn
const foodTotal = foodPrice + toppingPrice;

// 2. Tính tổng số tiền thanh toán cuối cùng
const finalPayment = foodTotal + deliveryFee - voucherDiscount;

// 3. Xuất kết quả ra Console
console.log(`Khách hàng: ${customerName}`);
console.log(`Món ăn: ${foodItemName}`);
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
console.log(`Số tiền thanh toán thực tế: ${finalPayment} VND`);