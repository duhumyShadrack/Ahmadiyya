import { checkServiceNeeded } from '../serviceLogic';

describe('Fleet Preventive Scheduling', () => {
  it('should flag vehicle for service when mileage exceeds threshold', () => {
    const vehicle = { id: '123', mileage: 10500, last_service: 10000 };
    const result = checkServiceNeeded(vehicle);
    expect(result).toBe(true);
  });

  it('should not flag vehicle if mileage is below threshold', () => {
    const vehicle = { id: '456', mileage: 10200, last_service: 10000 };
    const result = checkServiceNeeded(vehicle);
    expect(result).toBe(false);
  });

  it('should handle missing last_service gracefully', () => {
    const vehicle = { id: '789', mileage: 5000 };
    const result = checkServiceNeeded(vehicle);
    expect(result).toBe(false);
  });
});
