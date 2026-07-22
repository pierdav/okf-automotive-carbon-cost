---
type: Scenario
title: Usage annuel en France
description: Scénario de référence pour 15000 km par an en France.
tags: [scenario, france, annual]
timestamp: 2026-07-21
---

# Scénario France — 15 000 km/an

## Paramètres

```yaml
distance_km: 15000
country: FR
electricity_price_profile: home_fr
charging_efficiency: 0.90
carbon_price_EUR_tCO2e: 100
```

## Résultats illustratifs

| Profil | Coût énergie/an | Émissions énergie/an |
|---|---:|---:|
| Citadine essence, 5,5 L/100 | 1 620,30 € | 2 268,75 kgCO2e |
| Compacte diesel, 4,8 L/100 | 1 402,56 € | 2 232,00 kgCO2e |
| Compacte BEV, 16 kWh/100 batterie | 517,33 € | 110,93 kgCO2e |
| SUV essence, 7,5 L/100 | 2 209,50 € | 3 093,75 kgCO2e |
| SUV BEV, 21 kWh/100 batterie | 679,00 € | 145,60 kgCO2e |
| Berline hydrogène, 1 kg/100, scénario bas carbone | 2 100,00 € | 750,00 kgCO2e |

## Limites

- Les consommations sont génériques.
- Le prix de recharge électrique correspond au scénario domicile.
- L'hydrogène utilise ici un facteur de 5 kgCO2e/kgH2.
- La fabrication des véhicules n'est pas incluse.
