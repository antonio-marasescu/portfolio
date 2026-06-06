#!/bin/bash

# PostToolUse Hook - Run Prettier after Edit/Write operations
# Auto-formats files after Claude modifies them

# Only run on Edit or Write operations
if [[ "${TOOL}" == "Edit" || "${TOOL}" == "Write" ]]; then
  echo "🎨 Running Prettier on ${FILE_PATH}..."
  pnpm run prettier:write "${FILE_PATH}" 2>/dev/null || pnpm run prettier:write
  
  if [ $? -eq 0 ]; then
    echo "✅ Formatting completed"
  else
    echo "⚠️  Formatting skipped (non-critical)"
  fi
fi

exit 0
