const findDeviceById = (devices, id) => {
  for(let i = 0; i < devices.length; i++){
    if(devices[i].id === id) return devices[i];
  }
  return null;
};
const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if(targetDevice === null) return false;

  if(updatedData.name !== undefined) targetDevice.name = updatedData.name;
  if(updatedData.isActive !== undefined) targetDevice.isActive = updatedData.isActive;
  if(updatedData.powerWatts !== undefined) targetDevice.powerWatts = updatedData.powerWatts;

  return true;
};
const devices = [
  { id: 1, name: "Dieu hoa phong khach", isActive: true, powerWatts: 1500 },
  { id: 2, name: "Den ngu", isActive: true, powerWatts: 10 }
];
updateDevice(devices, 1, { isActive: false });
updateDevice(devices, 2, { powerWatts: 0 });
console.log(devices);
/*dạ Falsy là các giá trị được JavaScript coi là false khi kiểm tra điều kiện,ví dụ: false, 0,"", null, undefined, NaN.
Trong bài này, if (updatedData.isActive) bỏ qua giá trị false và if(updatedData.powerWatts)bỏ qua giá trị 0.
Cách sửa là dùng !== undefined để vẫn cập nhật được false và 0*/