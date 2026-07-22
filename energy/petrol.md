---
type: Energy Profile
title: Essence E10
description: Profil de calcul d'un véhicule essence.
tags: [energy, petrol, liquid-fuel]
timestamp: 2026-07-21
---

# Essence E10

## Unité

`litre`

## Hypothèses de démonstration

```yaml
price:
  value: 1.964
  unit: EUR/L
  region: FR
  observed_date: 2026-07-13
carbon_factor:
  value: 2.75
  unit: kgCO2e/L
  boundary: well-to-wheel-demo
```

Le facteur carbone est une valeur de démonstration arrondie. Pour un calcul
officiel, charger un facteur de la Base Carbone ou d'un référentiel équivalent.

## Formules

```text
cost_EUR_100km = consumption_L_100km × price_EUR_L
carbon_g_km = consumption_L_100km × factor_kgCO2e_L × 10
```
