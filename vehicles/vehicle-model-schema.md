---
type: Data Model
title: Schéma d'un modèle automobile
description: Structure recommandée pour représenter un modèle et ses consommations.
tags: [vehicle, schema, data-model]
timestamp: 2026-07-21
---

# Schéma de modèle automobile

```yaml
manufacturer: Example Motors
model: Urban 50
version: Long Range
model_year: 2026
powertrain: bev
vehicle_class: compact
mass_kg: 1650
consumption:
  energy: electricity
  value: 16.0
  unit: kWh/100km
  measurement_basis: WLTP-or-observed
charging_efficiency: 0.90
manufacturing:
  emissions_kgCO2e: null
  source: null
  lifetime_distance_km: 200000
sources:
  - title: Source de consommation
    url: https://...
confidence: medium
```

## Motorisations

- `petrol`
- `diesel`
- `hev`
- `phev`
- `bev`
- `fcev`
- `e85`
- `lpg`

## PHEV

```yaml
consumption:
  electric:
    value: 18.0
    unit: kWh/100km
  thermal:
    energy: petrol
    value: 6.0
    unit: L/100km
default_usage_profile:
  electric_distance_share: 0.50
```

## Principe

Une version, une année-modèle ou une taille de batterie différente doit être
représentée comme une entrée distincte.
