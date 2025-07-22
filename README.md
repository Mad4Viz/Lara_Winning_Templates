# Lara_Winning_Templates

A LinkedIn content template system with categorised datasets and GitHub Pages integration for Tableau Public.

## Project Overview

This repository evolved from a Notion content extraction project to a comprehensive LinkedIn content template system designed for Tableau Public integration. The project categorises 62 LinkedIn content templates into 8 strategic categories and provides multiple hosting solutions for maximum Tableau flexibility.

### Key Features
- **62 LinkedIn Content Templates** organised into 8 categories
- **Dual Image Hosting**: Original quality + Tableau-optimised versions
- **GitHub Pages Integration** for text content hosting
- **Tableau Public Compatible** with web objects support
- **UK Spelling** throughout for consistency

## Repository Structure

```
Lara_Winning_Templates/
├── images/
│   ├── full-quality-images/     # Original high-quality images
│   └── optimised-images/        # Tableau-optimised images (<200KB)
├── content_templates/           # Text files for GitHub Pages hosting
│   ├── Best_Practices/         # 8 templates
│   ├── Personal_Growth/        # 9 templates
│   ├── Reality_Check/          # 7 templates
│   ├── Strategy/               # 6 templates
│   ├── Success_Stories/        # 6 templates
│   ├── Timelines/              # 7 templates
│   ├── Tips/                   # 11 templates
│   └── Truth_Bombs/            # 8 templates
└── README.md
```

## Why This Approach?

### Problem Solved
- **Tableau Public Limitation**: Users couldn't copy template text directly from visualisations
- **Notion URL Issues**: External URLs not suitable for GitHub Pages hosting
- **Category Management**: Needed organised button-friendly categories for Tableau

### Solution Implemented
1. **GitHub Pages Hosting**: Reliable, permanent URLs for text content
2. **Web Objects Integration**: Tableau can embed GitHub-hosted text files
3. **Categorised Structure**: 8 categories with sequential numbering for easy navigation
4. **Dual Image Strategy**: Choice between high-quality and optimised images

## GitHub Authentication Tutorial

During development, we encountered authentication issues when working with multiple GitHub accounts. Here's how to resolve them:

### Issue Encountered
```bash
Permission denied (publickey).
fatal: Could not read from remote repository.
```

### Solution Steps

1. **Check Current Git Configuration**
   ```bash
   git config --global user.name
   git config --global user.email
   ```

2. **Update Global Git Config** (if needed)
   ```bash
   git config --global user.name "Mad4Viz"
   git config --global user.email "valeriemfreelance@gmail.com"
   ```

3. **GitHub CLI Authentication**
   ```bash
   gh auth login
   gh auth setup-git
   ```

4. **Git LFS Setup** (for large files)
   ```bash
   brew install git-lfs
   git lfs install
   git lfs track "images/full-quality-images/*.jpg"
   git add .gitattributes
   ```

### Troubleshooting Tips
- Use `gh auth status` to check authentication
- For permission issues, ensure GitHub account has repository access
- For large files, always use Git LFS to prevent timeout errors
- Test with a small commit before pushing large changes

## Usage Instructions

### For Tableau Integration

1. **Import Dataset**: Use `content_templates_categorised_final.csv` as your data source

2. **Image URLs**: Choose based on your needs:
   - `Original Image URL`: High-quality images for detailed views
   - `Optimised Image URL`: Fast-loading images for dashboards

3. **Text Content URLs**: Use `Text_File_URL` column for web objects:
   ```
   https://mad4viz.github.io/Lara_Winning_Templates/content_templates/[Category]/[File].txt
   ```

4. **Web Objects Setup**: 
   - Add web object to dashboard
   - Use Text_File_URL as the URL source
   - Enable copy/paste functionality for users

### Category Breakdown
- **Tips**: 11 templates - Practical advice and quick wins
- **Personal Growth**: 9 templates - Development and transformation stories
- **Best Practices**: 8 templates - Proven strategies and methods
- **Truth Bombs**: 8 templates - Hard truths and reality checks
- **Reality Check**: 7 templates - Industry insights and real perspectives
- **Timelines**: 7 templates - Before/after and progression content
- **Success Stories**: 6 templates - Achievements and breakthroughs
- **Strategy**: 6 templates - High-level approaches and systems

## Project Evolution

1. **Phase 1**: Notion content extraction and image processing
2. **Phase 2**: Repository restructuring and optimisation for Tableau
3. **Phase 3**: Categorisation system for better content organisation
4. **Phase 4**: GitHub Pages integration for text hosting
5. **Phase 5**: Final URL standardisation and Tableau integration

This approach provides maximum flexibility for Tableau Public users while maintaining professional, organised content delivery.