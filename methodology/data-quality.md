---
type: Data Governance
title: Qualité et provenance des données
description: Règles de qualité, datation et traçabilité des facteurs utilisés.
tags:
  - governance
  - provenance
  - data-quality
timestamp: 2026-07-21
---

# Qualité et provenance

Chaque facteur doit idéalement contenir :

- une valeur ;
- une unité ;
- un territoire ;
- une date de validité ;
- une source ;
- un périmètre carbone ;
- un niveau de confiance.

## Hiérarchie recommandée

1. Donnée mesurée sur le véhicule et le trajet réel.
2. Donnée constructeur certifiée ou homologuée.
3. Base officielle nationale ou européenne.
4. Moyenne sectorielle documentée.
5. Hypothèse de démonstration.

## Champs conseillés

```yaml
value: 0.194
unit: EUR/kWh
region: FR
valid_from: 2026-02-01
source_name: Tarif réglementé ou fournisseur
source_url: https://...
boundary: consumer-price
confidence: medium
```

## Principes

- Ne pas mélanger CO2 direct et CO2e cycle de vie.
- Ne pas mélanger consommation WLTP et consommation réelle sans l'indiquer.
- Ne pas utiliser une intensité électrique française pour un trajet rechargé
  majoritairement dans un autre pays.
- Conserver les facteurs historiques afin de reproduire un calcul.
- Rendre les prix configurables : domicile, entreprise, recharge publique et
  recharge rapide produisent des coûts très différents.
- Versionner chaque mise à jour du catalogue.

## Statut des données de ce bundle

Les valeurs de démonstration sont destinées à valider une chaîne de calcul et
une intégration agentique. Elles ne constituent pas un référentiel réglementaire.
