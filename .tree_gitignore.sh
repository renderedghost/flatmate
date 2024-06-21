#!/bin/bash

# Check if the tree command is available
if ! command -v tree &> /dev/null
then
    echo "tree command could not be found. Please install it first."
    exit 1
fi

# Check if .gitignore exists
if [[ ! -f .gitignore ]]; then
    echo ".gitignore file not found."
    exit 1
fi

# Read the .gitignore file and convert patterns into a single exclude pattern for tree
exclude_pattern=$(grep -v '^#' .gitignore | grep -v '^$' | sed 's/$/|/; s/\./\\./g; s/\*/\.\*/g' | tr -d '\n' | sed 's/|$//')

# If no exclude patterns found, exit
if [[ -z "$exclude_pattern" ]]; then
    echo "No valid patterns found in .gitignore."
    exit 1
fi

# List all files and folders, excluding those ignored by git
tree -a -I "$exclude_pattern"