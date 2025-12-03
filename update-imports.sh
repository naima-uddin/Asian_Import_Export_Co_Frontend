#!/bin/bash
# Script to update React Router imports to Next.js navigation

echo "🔄 Updating React Router imports to Next.js navigation compatibility..."

# Find all .jsx and .js files and update imports
find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i.bak \
  's/import { \(.*\) } from ["\x27]react-router-dom["\x27]/import { \1 } from "@\/lib\/navigation"/g' {} \;

find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i.bak \
  's/import { \(.*\) } from ["\x27]react-router["\x27]/import { \1 } from "@\/lib\/navigation"/g' {} \;

echo "✅ Import updates complete!"
echo "📝 Backup files created with .bak extension"
echo ""
echo "Next steps:"
echo "1. Review the changes"
echo "2. Add 'use client' directive to components that need it"
echo "3. Test your application"
echo "4. Remove .bak files when satisfied: find src -name '*.bak' -delete"
