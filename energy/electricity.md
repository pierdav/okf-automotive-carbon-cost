---
type: Energy Profile
title: Électricité
description: Profil de recharge d'un véhicule électrique.
tags: [energy, electricity, bev]
timestamp: 2026-07-21
---

# Électricité

## Unité

`kWh`

## Scénarios de prix

```yaml
prices:
  home_fr:
    value: 0.194
    unit: EUR/kWh
    region: FR
  public_standard_demo:
    value: 0.39
    unit: EUR/kWh
    region: FR
  public_fast_eu_demo:
    value: 0.54
    unit: EUR/kWh
    region: EU
```

## Intensité carbone

```yaml
carbon_factor:
  value: 0.0416
  unit: kgCO2e/kWh
  region: FR
  source_dataset: ADEME Base Carbone v23.9
  factor_year: 2022
  release_year: 2025
  boundary: electricity-generation-use
```

## Pertes de recharge

Le calcul par défaut applique un rendement de recharge de `90 %`.

```text
grid_kWh_100km = battery_kWh_100km / 0.90
```

## Formules

```text
cost_EUR_100km = grid_kWh_100km × price_EUR_kWh
carbon_g_km = grid_kWh_100km × factor_kgCO2e_kWh × 10
```

L'intensité électrique peut être remplacée par une valeur annuelle, mensuelle,
horaire, contractuelle ou marginale. Le choix doit être explicite.
