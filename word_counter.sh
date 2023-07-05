#!/bin/bash

# Check if a file is provided as an argument
if [ $# -eq 1 ] && [ -f "$1" ]; then
    # Count words in the file
    word_count=$(wc -w < "$1")
    echo "Word count in $1: $word_count"
else
    # Read input from the user
    echo -n "Enter a string: "
    read input_string

    # Count words in the input string
    word_count=$(echo "$input_string" | wc -w)
    echo "Word count: $word_count"
fi