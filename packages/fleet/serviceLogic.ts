export function checkServiceNeeded(vehicle: any): boolean {
  if (!vehicle.last_service) return false;
  const threshold = 500; // miles after last service
  return vehicle.mileage - vehicle.last_service >= threshold;
}
