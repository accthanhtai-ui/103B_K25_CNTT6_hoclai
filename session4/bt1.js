// Lỗi 1: cupIndex < orderQuantity làm vòng lặp chỉ chạy 2 lần
// vì cupIndex chạy từ 1 đến 2. Cần sửa thành <= để tính đủ 3 ly.
// Lỗi 2: giảm giá 10% được đặt bên trong vòng lặp nên mỗi lần thêm ly
// lại giảm tiếp tổng tiền. Cần tính tổng tiền trước, sau đó mới giảm 10% một lần.
// He thong POS quay thu ngan Highlands Coffee
const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;
let sizeUpcharge = 0;
if (drinkSize === "M") {
  sizeUpcharge = 6000;
} else if (drinkSize === "L") {
  sizeUpcharge = 10000;
}
// Tính tiền 1 ly
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);
let totalBill = 0;
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}
// Giảm giá thành viên một lần
if (isGoldMember) {
  totalBill = totalBill * 0.9;
}
console.log("Tổng thanh toán:", totalBill, "VNĐ");