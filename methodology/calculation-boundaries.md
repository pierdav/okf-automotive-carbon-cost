---
type: Methodology
title: Périmètre du calcul carbone automobile
description: Définit les périmètres opérationnel, amont énergétique et cycle de vie.
tags:
  - automotive
  - carbon
  - methodology
  - lifecycle
timestamp: 2026-07-21
---

# Périmètre du calcul

Le calcul distingue trois niveaux.

## 1. Émissions directes d'usage

Émissions produites physiquement par le véhicule pendant le trajet.

- Essence, diesel, E85 et GPL : combustion dans le moteur.
- Véhicule électrique : zéro émission directe à l'échappement.
- Hydrogène à pile à combustible : zéro CO2 à l'échappement.

Cet indicateur correspond approximativement au périmètre **tank-to-wheel**.

## 2. Émissions de l'énergie utilisée

Émissions associées à la production, au raffinage, au transport et à la
distribution de l'énergie, auxquelles s'ajoute la combustion lorsqu'elle existe.

Cet indicateur correspond au périmètre **well-to-wheel**.

## 3. Empreinte cycle de vie

Ajoute notamment :

- fabrication du véhicule ;
- fabrication de la batterie ;
- maintenance et remplacement des composants ;
- infrastructures ;
- fin de vie.

Les données de fabrication ne doivent pas être déduites uniquement du type de
motorisation. Elles dépendent du modèle, de sa masse, de sa batterie, des sites
de production et de la méthodologie ACV employée.

## Périmètre par défaut du bundle

Les calculs automatiques utilisent le **well-to-wheel énergétique**. L'empreinte
de fabrication est ajoutée uniquement lorsqu'une donnée ACV explicite est
fournie dans la fiche du véhicule.

## Unités normalisées

- consommation liquide : `L/100 km`
- consommation électrique : `kWh/100 km`
- consommation hydrogène : `kg/100 km`
- intensité carbone : `kgCO2e/unité d'énergie`
- coût : `EUR/unité d'énergie`
- résultat carbone : `gCO2e/km` ou `kgCO2e/période`
- résultat économique : `EUR/100 km` ou `EUR/période`

Voir [Formules](formulas.md).
