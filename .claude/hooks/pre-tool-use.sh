#!/bin/bash

# PreToolUse Hook - Block reading .env files
# Prevents Claude from reading sensitive environment variable files

# Check if this is a Read tool operation
if [[ "${TOOL}" == "Read" ]]; then
  # Check if the file path contains .env (at any directory level)
  if [[ "${FILE_PATH}" == *".env"* ]]; then
    echo "🚫 Blocked: Reading .env files is not allowed for security reasons"
    echo "   File: ${FILE_PATH}"
    exit 1
  fi
fi

# Allow all other operations
exit 0
