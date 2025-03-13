#!/bin/bash

cd /Users/ianlylesblx/IDEA_CORE/laconic/repos/qwrk-laconic-core/services/ui/src/components

for file in $(find . -maxdepth 1 -type f \( -name "*.tsx" -o -name "*.ts" \) -not -name "index.ts"); do
    # Extract just the filename without path
    base_file=$(basename "$file")
    
    # Get filename without extension
    base_name="${base_file%.*}"
    
    # Get file extension
    extension="${base_file##*.}"
    
    # Skip if already a directory
    if [ -d "$base_name" ]; then
        echo "Directory $base_name already exists, skipping"
        continue
    fi
    
    # Create directory
    mkdir -p "$base_name"
    
    # Create index.ts
    echo "export * from './$base_file';" > "$base_name/index.ts"
    
    # Move file
    mv "$base_file" "$base_name/"
    
    echo "Processed $base_file -> $base_name/$base_file"
done

echo "Component restructuring complete!"