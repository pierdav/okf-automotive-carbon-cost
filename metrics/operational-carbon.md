---
type: Metric
title: Émissions carbone opérationnelles
description: Émissions de l'énergie consommée pendant l'utilisation du véhicule.
tags: [metric, carbon, operations]
timestamp: 2026-07-21
---

# Émissions carbone opérationnelles

## Identifiant

`vehicle_operational_carbon`

## Sorties

- `gCO2e/km`
- `kgCO2e/100km`
- `kgCO2e/year`

## Calcul annuel

```text
annual_kgCO2e =
  annual_distance_km × operational_gCO2e_km / 1000
```

## Dimensions

- modèle ;
- version ;
- année-modèle ;
- énergie ;
- pays ou zone ;
- date du facteur ;
- profil de recharge ;
- profil d'usage ;
- périmètre carbone.

## Interprétation

L'indicateur n'inclut pas automatiquement la fabrication. Il doit être nommé
« opérationnel » ou « énergie en usage » pour éviter toute confusion avec une ACV.
