---
type: Playbook
title: Calculer l'empreinte et le coût d'un véhicule
description: Procédure déterministe de calcul et de restitution.
tags: [playbook, calculation, vehicle]
timestamp: 2026-07-21
---

# Playbook

## Étape 1 — Identifier le véhicule

Récupérer le modèle, la version, l'année-modèle, la motorisation et la
consommation pertinente.

## Étape 2 — Définir le scénario

Récupérer :

- distance ;
- territoire ;
- période ;
- type de recharge ;
- profil PHEV éventuel ;
- périmètre carbone.

## Étape 3 — Résoudre l'énergie

Charger la fiche correspondante dans `energy/`.

## Étape 4 — Valider les unités

Refuser un calcul lorsque la consommation et le facteur n'utilisent pas des
unités compatibles.

## Étape 5 — Calculer

Appliquer les [formules](../methodology/formulas.md).

## Étape 6 — Restituer les hypothèses

Toute réponse doit afficher :

- consommation ;
- prix ;
- facteur carbone ;
- date et territoire ;
- pertes de recharge ;
- périmètre retenu ;
- exclusions.

## Étape 7 — Avertir

Signaler que les résultats sont estimatifs lorsque les données ne proviennent
pas d'une mesure réelle ou d'une source homologuée.
