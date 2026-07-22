---
type: Integration Guide
title: Exposition MCP
description: Tools et resources MCP recommandés pour servir le bundle.
tags: [mcp, integration, tools, resources]
timestamp: 2026-07-21
---

# Exposition MCP

## Resources

```text
okf://automotive/index
okf://automotive/vehicles/{vehicleId}
okf://automotive/energy/{energyId}
okf://automotive/methodology/formulas
```

## Tools

### `calculate_vehicle_energy_impact`

```json
{
  "vehicle_id": "compact-bev",
  "distance_km": 15000,
  "region": "FR",
  "price_profile": "home_fr",
  "include_manufacturing": false
}
```

### `compare_vehicle_energy_impact`

```json
{
  "vehicle_ids": ["city-petrol", "compact-bev"],
  "distance_km": 15000,
  "region": "FR"
}
```

### `list_vehicle_profiles`

Filtre par segment, motorisation ou énergie.

### `resolve_energy_factors`

Retourne les facteurs applicables avec leurs dates, territoires et périmètres.

## Sécurité

Le calcul est en lecture seule. Une mise à jour du catalogue ou des facteurs doit
utiliser un tool séparé, protégé et audité.
