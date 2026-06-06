#!/bin/bash

# Block git push to main/master branches
# Prevents accidental pushes to protected branches

# Check if the command contains "git push" and targets main or master
if echo "$CLAUDE_COMMAND" | grep -qE "git push.*\s(origin\s+)?(main|master)"; then
  echo "🚫 Blocked: Direct push to main/master is not allowed"
  echo "   Please create a feature branch and open a pull request"
  echo "   Current command: $CLAUDE_COMMAND"
  exit 1
fi

# Allow all other commands
exit 0
