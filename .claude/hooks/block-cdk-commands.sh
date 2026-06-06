#!/usr/bin/env bash
# Block CDK commands - infrastructure deployment must be done manually

# Extract the command from stdin JSON
CMD=$(jq -r '.tool_input.command' 2>/dev/null || echo '')

# Check if command contains CDK operations
if echo "$CMD" | grep -qE '(^|[[:space:]])(cdk|npx[[:space:]]+cdk|pnpm[[:space:]]+cdk|npm[[:space:]]+run[[:space:]]+cdk)'; then
  echo '🚫 CDK commands are restricted. Infrastructure deployment must be done manually. See /infra/CLAUDE.md for instructions.'
  exit 1
fi

exit 0
