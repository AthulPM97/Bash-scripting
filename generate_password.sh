#!/bin/bash

# Generate a random password
password=$(date +%s | sha256sum | base64 | head -c 12 ; echo)

# Print the generated password
echo "Generated Password: $password"