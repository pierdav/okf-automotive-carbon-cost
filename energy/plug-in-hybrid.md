---
type: Energy Profile
title: Hybride rechargeable
description: Méthode de calcul combinant électricité et carburant.
tags: [energy, phev, hybrid]
timestamp: 2026-07-21
---

# Hybride rechargeable

Un PHEV doit être calculé à partir de deux consommations et d'une part électrique
réelle.

## Paramètres

```yaml
electric_consumption_kWh_100km: required
fuel_consumption_L_100km: required
electric_distance_share: required
charging_efficiency: 0.90
```

## Scénarios recommandés

| Profil | Part électrique |
|---|---:|
| Recharge quotidienne, trajets courts | 0.75 |
| Recharge régulière, usage mixte | 0.50 |
| Recharge occasionnelle | 0.25 |
| Jamais rechargé | 0.00 |

Ces valeurs sont des scénarios, pas des moyennes universelles.

## Risque de calcul

La consommation combinée homologuée n'est pas suffisante pour prévoir les
émissions réelles. La fréquence de recharge et la longueur des trajets sont des
variables déterminantes.
