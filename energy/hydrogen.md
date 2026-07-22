---
type: Energy Profile
title: Hydrogène
description: Profil de calcul pour véhicule à pile à combustible.
tags: [energy, hydrogen, fcev]
timestamp: 2026-07-21
---

# Hydrogène

## Unité

`kg`

## Hypothèses de démonstration

```yaml
price:
  value: 14.00
  unit: EUR/kg
carbon_factors:
  renewable_demo:
    value: 2.0
    unit: kgCO2e/kgH2
  low_carbon_demo:
    value: 5.0
    unit: kgCO2e/kgH2
  fossil_demo:
    value: 11.0
    unit: kgCO2e/kgH2
```

La méthode de production de l'hydrogène domine le résultat carbone. Le scénario
doit donc toujours être fourni explicitement.

```text
cost_EUR_100km = consumption_kg_100km × price_EUR_kg
carbon_g_km = consumption_kg_100km × factor_kgCO2e_kg × 10
```
