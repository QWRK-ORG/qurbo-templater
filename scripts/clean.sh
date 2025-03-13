#!/bin/bash

# Set colors for better visibility
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Print header
echo -e "${GREEN}=== Qwrk Laconic Core - Cleanup Script ===${NC}"
echo -e "${YELLOW}This script will remove all node_modules, .next, and dist folders${NC}"
echo

# Ask for confirmation
read -p "Are you sure you want to continue? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${RED}Cleanup aborted.${NC}"
    exit 1
fi

echo -e "${YELLOW}Starting cleanup...${NC}"

# Find and display total size before cleanup
echo -e "${GREEN}Calculating size of directories to be removed...${NC}"
TOTAL_SIZE=$(du -sh $(find . -type d \( -name "node_modules" -o -name ".next" -o -name "dist" \) -not -path "*/\.*/*" 2>/dev/null) 2>/dev/null | awk '{sum+=$1} END {print sum}')
echo -e "${YELLOW}Total space to be freed: ${TOTAL_SIZE}${NC}"

# Count directories of each type
NODE_MODULES_COUNT=$(find . -type d -name "node_modules" -not -path "*/\.*/*" | wc -l)
NEXT_COUNT=$(find . -type d -name ".next" -not -path "*/\.*/*" | wc -l)
DIST_COUNT=$(find . -type d -name "dist" -not -path "*/\.*/*" | wc -l)

echo "Found:"
echo -e "- ${NODE_MODULES_COUNT} ${YELLOW}node_modules${NC} directories"
echo -e "- ${NEXT_COUNT} ${YELLOW}.next${NC} directories"
echo -e "- ${DIST_COUNT} ${YELLOW}dist${NC} directories"
echo

# Final confirmation
read -p "Proceed with deletion? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${RED}Cleanup aborted.${NC}"
    exit 1
fi

# Perform the cleanup
echo -e "${GREEN}Removing node_modules directories...${NC}"
find . -type d -name "node_modules" -not -path "*/\.*/*" -exec rm -rf {} +

echo -e "${GREEN}Removing .next directories...${NC}"
find . -type d -name ".next" -not -path "*/\.*/*" -exec rm -rf {} +

echo -e "${GREEN}Removing dist directories...${NC}"
find . -type d -name "dist" -not -path "*/\.*/*" -exec rm -rf {} +

echo -e "${GREEN}Cleanup completed!${NC}"
echo -e "${YELLOW}You may want to run 'yarn install' or 'npm install' to reinstall dependencies.${NC}"

exit 0
