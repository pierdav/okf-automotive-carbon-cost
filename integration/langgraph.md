---
type: Integration Guide
title: Intégration LangGraph
description: Utilisation du bundle comme couche de connaissance et de calcul contrôlé.
tags: [langgraph, integration, agent]
timestamp: 2026-07-21
---

# Intégration LangGraph

## Graphe recommandé

```text
collect_vehicle_input
        ↓
resolve_vehicle_profile
        ↓
resolve_energy_factors
        ↓
validate_units_and_scope
        ↓
calculate_cost_and_carbon
        ↓
explain_result
```

## State minimal

```typescript
interface CarbonVehicleState {
  vehicleId?: string;
  distanceKm?: number;
  region?: string;
  priceProfile?: string;
  carbonBoundary?: "tank-to-wheel" | "well-to-wheel" | "lifecycle";
  vehicle?: VehicleProfile;
  factors?: EnergyFactors;
  result?: CalculationResult;
  warnings?: string[];
}
```

## Principe de contrôle

Le LLM peut :

- interpréter la demande ;
- sélectionner le profil ;
- expliquer le résultat.

Une fonction déterministe doit :

- convertir les unités ;
- appliquer les formules ;
- contrôler les bornes ;
- produire les nombres.

```text
Model proposes → graph validates → calculator executes
```

## Concepts prioritaires

1. `playbooks/calculate-vehicle-footprint`
2. `methodology/formulas`
3. `vehicles/vehicle-model-schema`
4. fiche du véhicule
5. fiche de l'énergie
6. métrique demandée
