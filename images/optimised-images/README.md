# 02_optimized_images

## Overview
This folder contains images optimized specifically for Tableau compatibility and optimal dashboard performance.

## Contents
- **62 optimized content template images** (`.jpg` format)
- **File sizes**: All ≤200KB (Tableau performance requirement)
- **Dimensions**: Maximum 800px width or height
- **Format**: JPEG with optimized compression
- **Quality**: Balanced for size constraints while maintaining visual clarity

## Optimization Process
Images are processed using `optimise_images_for_tableau.py` which:
1. **Resizes**: Maintains aspect ratio, max dimension 800px
2. **Converts**: All formats to JPEG for universal compatibility
3. **Compresses**: Optimizes quality settings to meet 200KB limit
4. **Validates**: Ensures all files meet Tableau requirements

## Technical Specifications
- **Maximum file size**: 200KB (Tableau strict requirement)
- **Recommended size**: ≤50KB for optimal performance
- **Color mode**: RGB for consistent display
- **Compression**: Quality 30-95 depending on size requirements

## Usage
- **Tableau dashboards**: Ideal for Image Role fields
- **Fast loading**: Optimized for web-based visualization tools
- **GitHub Pages**: Ready for upload to permanent hosting
- **Presentations**: Quick loading for live demonstrations

## Script Information
- **Location**: `../04_scripts/optimise_images_for_tableau.py`
- **Function**: Batch processes all images from `01_original_data/`
- **Customizable**: Adjust parameters for different optimization requirements

## Modification Guide
To re-optimize with different settings:
1. Edit parameters in `../04_scripts/optimise_images_for_tableau.py`:
   - `max_size_kb`: Adjust file size limit
   - `max_dimension`: Change maximum pixel dimensions
   - `quality`: Modify JPEG compression range
2. Run the script to process all images
3. Upload new optimized images to GitHub repository
4. Regenerate final datasets with updated URLs

---
*These optimized images are specifically tuned for Tableau performance while maintaining acceptable visual quality.*