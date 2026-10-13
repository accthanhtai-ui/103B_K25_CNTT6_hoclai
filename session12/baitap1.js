const subscriptions = [
  { subscriptionId: 'SUB-001', customerName: 'Nguyen Van An', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 3, status: 'ACTIVE' },
  { subscriptionId: 'SUB-002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 4, status: 'ACTIVE' }
];
function auditSubscriptions(list){
  for(let i = 0; i < list.length; i++){
    const sub = list[i];

    if(sub.daysOverdue > 0){
      if(sub.daysOverdue > 3){
        sub.planTier = 'FREE';
        sub.deviceLimit = 1;
        sub.status = 'EXPIRED';
      }else{
        sub.status = 'GRACE_PERIOD';
      }
    }
  }
}
auditSubscriptions(subscriptions);
console.log(subscriptions);
/*Lỗi nằm ở điều kiện `sub.daysOverdue >= 3`.
Điều kiện này khiến thuê bao bị hạ cấp ngay ngày thứ 3. 
Sửa thành `sub.daysOverdue > 3` để chỉ hạ cấp từ ngày thứ 4 trở đi.*/