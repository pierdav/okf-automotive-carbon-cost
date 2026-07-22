---
type: Scenario
title: Comparaison multi-énergies
description: Grille de comparaison de plusieurs énergies pour un même besoin de mobilité.
tags: [scenario, comparison, energy]
timestamp: 2026-07-21
---

# Comparaison multi-énergies

## Entrées obligatoires

- distance ;
- consommation du modèle ;
- prix énergétique ;
- facteur carbone ;
- territoire ;
- date ;
- périmètre du facteur.

## Sortie recommandée

```json
{
  "vehicle_id": "compact-bev",
  "distance_km": 15000,
  "energy_quantity": 2666.67,
  "energy_unit": "kWh",
  "energy_cost_eur": 517.33,
  "operational_emissions_kgco2e": 110.93,
  "cost_eur_per_100km": 3.45,
  "emissions_gco2e_per_km": 7.40,
  "assumptions": [
    "charging efficiency 90%",
    "home electricity price",
    "France electricity factor"
  ]
}
```

## Classement

Ne produire un classement qu'après avoir vérifié que les véhicules :

- répondent au même besoin d'usage ;
- utilisent le même kilométrage ;
- utilisent le même périmètre carbone ;
- utilisent des prix et facteurs datés.
