---
type: Calculation Method
title: Formules de calcul
description: Formules génériques de coût énergétique et d'émissions par véhicule.
tags:
  - formulas
  - carbon
  - cost
  - vehicle
timestamp: 2026-07-21
---

# Formules

## Variables

| Variable | Signification |
|---|---|
| `D` | distance parcourue en km |
| `C` | consommation pour 100 km |
| `P` | prix de l'énergie par unité |
| `EF` | facteur d'émission par unité |
| `S` | part du kilométrage couverte par une énergie |
| `M` | émissions de fabrication amorties en kgCO2e |

## Quantité d'énergie

```text
energy_quantity = D × C / 100
```

## Coût énergétique

```text
energy_cost = energy_quantity × P
cost_per_100km = C × P
```

## Émissions énergétiques

```text
energy_emissions_kg = energy_quantity × EF
emissions_g_per_km = energy_emissions_kg × 1000 / D
```

## Véhicule hybride rechargeable

Pour une énergie électrique et une énergie thermique :

```text
electric_distance = D × electric_share
thermal_distance = D × (1 - electric_share)

electric_emissions =
  electric_distance × electric_consumption / 100 × electricity_EF

thermal_emissions =
  thermal_distance × fuel_consumption / 100 × fuel_EF

total_emissions = electric_emissions + thermal_emissions
```

La part électrique réelle doit être issue du profil d'usage. Utiliser une valeur
homologuée sans hypothèse de recharge peut fortement sous-estimer le résultat.

## Pertes de recharge

Pour une consommation mesurée à la batterie :

```text
grid_consumption = battery_consumption / charging_efficiency
```

Exemple : avec un rendement de recharge de `0,90`, une consommation batterie de
`16 kWh/100 km` devient `17,78 kWh/100 km` au compteur.

## Fabrication amortie

```text
manufacturing_g_per_km =
  manufacturing_kgCO2e × 1000 / lifetime_distance_km
```

## Empreinte totale

```text
total_g_per_km =
  operational_g_per_km + manufacturing_g_per_km
```

## Coût carbone monétisé

```text
carbon_cost =
  emissions_kgCO2e / 1000 × carbon_price_EUR_per_tCO2e
```

## Comparaison

Pour comparer deux modèles A et B :

```text
delta_cost = cost_A - cost_B
delta_emissions = emissions_A - emissions_B
```

Voir [Seuil de bascule](../metrics/break-even.md).
