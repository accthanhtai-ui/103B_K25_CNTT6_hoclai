let maPhieuHienTai ="";
let maPhieuHopLe=false;
let tongDoanhThu=0;
let tongLuotKham=0;
let dangChay=true;
do{
    console.log("==============================================");
    console.log("   HỆ THỐNG THU NGÂN PHÒNG KHÁM MEDLATEC");
    console.log("==============================================");
    console.log("1. Nhập và kiểm chuẩn mã phiếu khám bệnh");
    console.log("2. Tính viện phí xét nghiệm");
    console.log("3. Thẩm định mã hồ sơ may mắn");
    console.log("0. Thoát chương trình");
    console.log("==============================================");
    let luaChon=prompt("nhập lựa chọn từ 0-3");
    if(luaChon==null){
        console.log("lựa chọn không hợp lệ")
        continue;
    }

    luaChon = luaChon.trim()

    switch(luaChon){
        case "1":
            maPhieuHienTai = "";
            maPhieuHopLe=false;

            let maPhieu = prompt("nhập mã phiếu khám");
            if(maPhieu==null){
                console.log("bạn chưa nhập mã phiếu");
                break;
            }
            maPhieu =maPhieu.trim().toUpperCase();
            if(maPhieu==""){
                console.log("bạn chưa nhập mã phiếu");
                break;
            }
            if (maPhieu.length<6){
                console.log("độ dài phải đủ 6 kí tự");
                break;
            }
            if(!maPhieu.startsWith("MED-")){
                console.log("mã phiếu phải bắt đầu bằng chữ MED-");
                break;
            }
            if(maPhieu.includes(" ")){
                console.log("mã phiếu không được có khoảng trắng bênh trong");
                break
            }
            maPhieuHienTai=maPhieu;
            maPhieuHopLe=true;
            console.log("nhập mã phiếu thành công");
            console.log("mã phiếu: ",maPhieuHienTai);
            console.log("trạng thái hợp lệ");
        case "2":
            if(maPhieuHopLe===false){
                console.log("chưa có mã hợp lệ");
                console.log("vui lòng chọn chức năng 1 trước");
                break;
            }

    }

}while(dangChay)