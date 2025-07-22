# Lara_Winning_Templates

A LinkedIn content template system with categorised datasets and GitHub Pages integration for Tableau Public.

## Project Overview

This repository evolved from a Notion content extraction project into a comprehensive LinkedIn content template system, designed for integration with Tableau Public. The project categorises 62 LinkedIn content templates into 8 strategic categories and provides multiple hosting solutions for maximum Tableau flexibility.

### Key Features
- **62 LinkedIn Content Templates** organised into 8 categories
- **Dual Image Hosting**: Original quality + Tableau-optimised versions
- **GitHub Pages Integration** for text content hosting
- **Tableau Public Compatible** with web objects support

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

### Problems Encountered and Solved
- **Tableau Public Limitation**: Users can copy template text directly from Dashboard, which cannot be done with Tableau Worksheet. Moreover, I wanted to avoid using export feature, which would make a poor user experience. 
- **Notion URL Issues**: Notion URLs expire after a period, prompting the need to find a new place to store images which could be linked to Tableau. I utilised github pages.
- **Category Management**: Needed to organise templates into categories for ease of use in Tableau

### Category Breakdown
- **Tips**: 11 templates - Practical advice and quick wins
- **Personal Growth**: 9 templates - Development and transformation stories
- **Best Practices**: 8 templates - Proven strategies and methods
- **Truth Bombs**: 8 templates - Hard truths and reality checks
- **Reality Check**: 7 templates - Industry insights and real perspectives
- **Timelines**: 7 templates - Before/after and progression content
- **Success Stories**: 6 templates - Achievements and breakthroughs
- **Strategy**: 6 templates - High-level approaches and systems
