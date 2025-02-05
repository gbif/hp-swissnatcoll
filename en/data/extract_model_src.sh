#!/bin/bash

# Output file for dropdown menu options
OUTPUT_FILE="dropdown_options.html"

# Check if URLs are provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 URL1 [URL2 ...]"
    exit 1
fi

# Start writing the options into the output file
echo '<optgroup label="🦟 Insects in 3D">' > $OUTPUT_FILE

# Loop through each URL provided
for url in "$@"; do
    echo "Fetching model from: $url"
    model_src=$(curl -s "$url" | grep -oP '(?<=<model-viewer.*src=")[^"]*')

    if [ -n "$model_src" ]; then
        insect_name=$(echo "$url" | awk -F'/' '{print $(NF-1)}' | tr '-' ' ')  # Extract the insect name from the URL
        echo "Adding option for: $insect_name"
        echo "<option value=\"$model_src\">🦟 $insect_name</option>" >> $OUTPUT_FILE
    else
        echo "No model found on $url"
    fi
done

echo '</optgroup>' >> $OUTPUT_FILE
echo "Dropdown options saved in $OUTPUT_FILE"
