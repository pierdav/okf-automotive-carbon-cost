# OKF Automotive Carbon & Energy Cost

Bundle conforme aux principes OKF v0.1 :

- concepts en Markdown UTF-8 ;
- frontmatter YAML pour chaque concept ;
- champ `type` non vide ;
- `index.md` et `log.md` réservés ;
- liens Markdown standards.

## Contenu

- méthodologie carbone ;
- facteurs d'énergie configurables ;
- catalogue automobile fictif de démonstration ;
- métriques de coût et d'émissions ;
- scénarios France ;
- guide LangGraph ;
- guide MCP ;
- fonction TypeScript déterministe.

## Validation rapide

```bash
for f in $(find . -name "*.md" ! -name "index.md" ! -name "log.md" ! -name "README.md"); do
  head -50 "$f" | grep -q "^type:" || echo "FAIL: $f missing type"
done
```

## Important

Les profils automobiles sont fictifs et les facteurs marqués `demo` doivent être
remplacés par des valeurs officielles adaptées au territoire, à la période et au
périmètre de calcul.
