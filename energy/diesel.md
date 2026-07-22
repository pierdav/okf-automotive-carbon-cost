---
type: Energy Profile
title: Gazole B7
description: Profil de calcul d'un véhicule diesel.
tags: [energy, diesel, liquid-fuel]
timestamp: 2026-07-21
---

# Gazole B7

## Unité

`litre`

## Hypothèses de démonstration

```yaml
price:
  value: 1.948
  unit: EUR/L
  region: FR
  observed_date: 2026-07-13
carbon_factor:
  value: 3.10
  unit: kgCO2e/L
  boundary: well-to-wheel-demo
```

## Formules

```text
cost_EUR_100km = consumption_L_100km × price_EUR_L
carbon_g_km = consumption_L_100km × factor_kgCO2e_L × 10
```
