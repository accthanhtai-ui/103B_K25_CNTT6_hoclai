const gia_sac = 4500;
const hang_doi = ['29a-112.33', '30e-889.12', '51k-678.99'];

const xe_tiep_theo = hang_doi.shift();
console.log('xe được điều phối vào sạc:', xe_tiep_theo);

const san_luong_cac_phien = [45.2, 30.5, 62.8, 28.0];
let tong_san_luong = 0;

for (let i = 0; i < san_luong_cac_phien.length; i++) {
    tong_san_luong += san_luong_cac_phien[i];
}

const tong_doanh_thu = tong_san_luong * gia_sac;
console.log('tổng sản lượng:', tong_san_luong, 'kwh');
console.log('tổng doanh thu:', tong_doanh_thu, 'vnđ');
