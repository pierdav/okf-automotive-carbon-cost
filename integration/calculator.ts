export type SimpleVehicle = {
  id: string;
  consumption: {
    value: number;
    unit: "L/100km" | "kWh/100km" | "kg/100km";
    energy: string;
  };
  chargingEfficiency?: number;
};

export type EnergyFactor = {
  unit: "L" | "kWh" | "kg";
  price_eur: number;
  carbon_kgco2e: number;
};

export function calculateSimpleVehicle(
  vehicle: SimpleVehicle,
  factor: EnergyFactor,
  distanceKm: number,
) {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) {
    throw new Error("distanceKm must be a positive finite number");
  }

  const expectedUnit = vehicle.consumption.unit.split("/")[0];
  if (expectedUnit !== factor.unit) {
    throw new Error(
      `Incompatible units: consumption=${vehicle.consumption.unit}, factor=${factor.unit}`,
    );
  }

  let consumptionPer100Km = vehicle.consumption.value;

  if (factor.unit === "kWh") {
    const efficiency = vehicle.chargingEfficiency ?? 1;
    if (efficiency <= 0 || efficiency > 1) {
      throw new Error("chargingEfficiency must be in ]0, 1]");
    }
    consumptionPer100Km = consumptionPer100Km / efficiency;
  }

  const quantity = (distanceKm * consumptionPer100Km) / 100;
  const costEur = quantity * factor.price_eur;
  const emissionsKgCo2e = quantity * factor.carbon_kgco2e;

  return {
    vehicleId: vehicle.id,
    distanceKm,
    energyQuantity: quantity,
    energyUnit: factor.unit,
    costEur,
    emissionsKgCo2e,
    costEurPer100Km: consumptionPer100Km * factor.price_eur,
    emissionsGCo2ePerKm:
      (consumptionPer100Km * factor.carbon_kgco2e * 1000) / 100,
  };
}
