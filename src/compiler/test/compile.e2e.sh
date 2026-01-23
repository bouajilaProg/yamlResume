#!/usr/bin/env bash

PDF_FILE="output/resume.pdf"
TEST_COMMAND="pnpm run test:compile"

OPEN_OKULAR=true
OKULAR_PID_FILE="/tmp/okular_resume.pid"

open_okular() {
  if [ "$OPEN_OKULAR" = true ]; then
    # Wait until PDF exists
    while [ ! -f "$PDF_FILE" ]; do
      sleep 0.1
    done

    # Check if PID file exists and process is alive
    if [ -f "$OKULAR_PID_FILE" ]; then
      OKULAR_PID=$(cat "$OKULAR_PID_FILE")
      if kill -0 "$OKULAR_PID" 2>/dev/null; then
        echo "Okular already running with PID $OKULAR_PID"
        return
      fi
    fi

    # Open Okular and save PID
    okular "$PDF_FILE" &
    OKULAR_PID=$!
    echo $OKULAR_PID >"$OKULAR_PID_FILE"
    echo "Okular opened with PID $OKULAR_PID"
  fi
}

# Run your test/compile
$TEST_COMMAND

# Open Okular (once)
open_okular
