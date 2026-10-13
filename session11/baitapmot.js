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