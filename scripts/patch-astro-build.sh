#!/bin/bash
# Patches Astro v7.0.4 build bug with @astrojs/cloudflare custom prerenderer.
# Can be removed when upgrading to a fixed Astro version.

FILE="node_modules/astro/dist/core/build/static-build.js"

if [ ! -f "$FILE" ]; then
  echo "⚠️  astro build file not found, skipping patch"
  exit 0
fi

# Check if already patched
grep -q "settings.prerenderer" "$FILE" 2>/dev/null && P1=1 || P1=0
grep -q "rollupOptions.input" "$FILE" 2>/dev/null && P2=1 || P2=0

if [ "$P1" = "1" ] && [ "$P2" = "1" ]; then
  echo "✅ Astro build patches already applied"
  exit 0
fi

# Fix 1: Skip prerender entry extraction when custom prerenderer is used
if [ "$P1" = "0" ]; then
  node -e "
    const fs = require('fs');
    let code = fs.readFileSync('$FILE', 'utf8');
    code = code.replace(
      'extractPrerenderEntryFileName(internals, prerenderOutput);',
      'if (!settings.prerenderer) {\n          extractPrerenderEntryFileName(internals, prerenderOutput);\n        }'
    );
    fs.writeFileSync('$FILE', code);
  "
  echo "✅ Fix 1 applied: skip prerender entry when custom prerenderer exists"
fi

# Fix 2: Set Vite rollupOptions.input for client build
if [ "$P2" = "0" ]; then
  node -e "
    const fs = require('fs');
    let code = fs.readFileSync('$FILE', 'utf8');
    code = code.replace(
      'buildConfig.rolldownOptions.input = sortedClientInput;',
      'buildConfig.rolldownOptions.input = sortedClientInput;\n          if (!buildConfig.rollupOptions) {\n            buildConfig.rollupOptions = {};\n          }\n          buildConfig.rollupOptions.input = sortedClientInput;'
    );
    fs.writeFileSync('$FILE', code);
  "
  echo "✅ Fix 2 applied: set rollupOptions.input for client build"
fi
