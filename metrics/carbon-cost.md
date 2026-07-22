---
type: Metric
title: Coût carbone monétisé
description: Conversion des émissions en coût à partir d'un prix de la tonne de CO2e.
tags: [metric, carbon-price, economics]
timestamp: 2026-07-21
---

# Coût carbone monétisé

## Calcul

```text
carbon_cost_EUR =
  emissions_kgCO2e / 1000 × carbon_price_EUR_tCO2e
```

## Cas d'usage

- prix interne du carbone ;
- comparaison d'investissements ;
- scénario réglementaire ;
- analyse de sensibilité.

## Précaution

Le prix interne du carbone n'est pas nécessairement le prix d'un quota de marché
ni la valeur tutélaire publique. Le type de prix doit être documenté.
