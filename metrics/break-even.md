---
type: Metric
title: Seuil de bascule carbone et économique
description: Distance à partir de laquelle un véhicule devient préférable à un autre.
tags: [metric, break-even, comparison]
timestamp: 2026-07-21
---

# Seuil de bascule

## Bascule carbone

Lorsque le véhicule B a une empreinte de fabrication supérieure mais de plus
faibles émissions d'usage :

```text
break_even_km =
  (manufacturing_B - manufacturing_A) × 1000
  / (operational_A_g_km - operational_B_g_km)
```

La formule n'est valide que si le dénominateur est strictement positif.

## Bascule économique

```text
break_even_km =
  (purchase_price_B - purchase_price_A)
  / ((energy_cost_A_100km - energy_cost_B_100km) / 100)
```

Le bundle de base ne contient pas les prix d'achat. Ce calcul est disponible si
le consommateur fournit ces données.

## Analyse de sensibilité

Toujours calculer plusieurs scénarios de :

- kilométrage ;
- prix de l'énergie ;
- intensité carbone électrique ;
- durée de détention ;
- part électrique d'un PHEV.
