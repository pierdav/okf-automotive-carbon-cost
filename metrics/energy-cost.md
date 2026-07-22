---
type: Metric
title: Coût énergétique automobile
description: Coût de l'énergie consommée par distance ou période.
tags: [metric, cost, energy]
timestamp: 2026-07-21
---

# Coût énergétique

## Identifiant

`vehicle_energy_cost`

## Sorties

- `EUR/100km`
- `EUR/month`
- `EUR/year`

## Calcul

```text
cost_EUR_100km = consumption_per_100km × energy_unit_price
annual_cost_EUR = annual_distance_km / 100 × cost_EUR_100km
```

## Coûts exclus

- achat ou location ;
- assurance ;
- entretien ;
- pneumatiques ;
- stationnement ;
- péages ;
- fiscalité hors prix de l'énergie ;
- abonnement électrique, sauf choix explicite.

Cet indicateur n'est donc pas un TCO complet.
