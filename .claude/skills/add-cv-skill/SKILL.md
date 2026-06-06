---
name: add-cv-skill
description: Add a new technical skill to the portfolio CV with automatic logo fetching and file updates. Use this skill whenever the user wants to add a new skill, technology, framework, language, or tool to their portfolio. Triggers on phrases like "add [technology] to my CV", "add a new skill", "I want to add [tech] as a [category] skill", or "update my portfolio with [skill]".
---

# Add CV Skill

This skill automates the process of adding a new technical skill to the Angular portfolio application. It handles logo acquisition, image conversion, TypeScript enum/constant updates, and categorization.

## When to Use This Skill

Use this skill whenever the user wants to add a new technology, framework, language, tool, or any technical skill to their portfolio CV section. The skill handles the entire workflow from gathering requirements to updating all necessary files.

## Workflow Overview

1. **Gather Requirements** - Ask user for skill details
2. **Validate** - Check if skill already exists
3. **Find Logo** - Search multiple sources for official logo
4. **Convert Image** - Resize and convert to 288x288 WebP format
5. **Update Files** - Modify TypeScript enums and constants
6. **Verify** - Ensure all updates are syntactically correct

## Step 1: Gather Requirements

Ask the user for the following information (if not already provided):

**Required Fields:**

- **Skill Name**: The display name (e.g., "Flask", "Python", "Claude Code")
- **Category**: One of: Backend, Frontend, Languages, DevOps, AI, Testing, Miscellaneous
- **Skill Level**: Beginner, Intermediate, or Expert
- **Years of Experience**: Integer (typically 1-5)

**Important**: Ask these questions conversationally. If the user has already mentioned some details, don't ask again. For example, if they said "add Flask as a backend skill with 2 years experience", you already have: name=Flask, category=Backend, experience=2. Just ask for the skill level.

## Step 2: Validate Skill Doesn't Exist

Before proceeding, check if the skill already exists:

1. Read `/src/app/shared/types/cv/cv-skills.types.ts`
2. Check if an enum entry already exists (search for the skill name in PascalCase)
3. If it exists, inform the user and ask if they want to update it instead

**Enum Naming Convention**: Convert the skill name to PascalCase and remove special characters:

- "Flask" → `Flask`
- "Claude Code" → `ClaudeCode`
- "OpenAI API" → `OpenAiApi`
- "SQLAlchemy" → `SqlAlchemy`

## Step 3: Find and Download Logo

The skill needs to find an official logo image. Try these sources in order:

### Logo Sources (try in order)

1. **Official website** - Search for "official {skill name} logo" and look for high-res images from the official site (e.g., python.org for Python, flask.palletsprojects.com for Flask). This is the most authoritative source.
2. **SimpleIcons**: `https://cdn.simpleicons.org/{lowercased-skill-name}`
3. **DevIcons**: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{lowercased}//{lowercased}-original.svg`
4. **GitHub Avatar** (for tools/companies): `https://avatars.githubusercontent.com/u/{org-id}` (search GitHub if needed)

### Why Multiple Sources Matter

Different technologies have logos in different places. Official websites are the most authoritative source, but not all technologies have easily accessible logos there. SimpleIcons covers most popular tools, DevIcons has programming languages and frameworks, and GitHub avatars work for open-source projects. Try each source and check if the download succeeded (file size > 100 bytes, valid image format).

### Download Process

```bash
cd /tmp
curl -L -o {skill-name-lowercase}.{ext} "{url}" 2>&1 | tail -5
file {skill-name-lowercase}.{ext}  # Verify it's a valid image
```

If a source fails (404, tiny file, or not an image), try the next source. Keep trying until you get a valid logo or exhaust all sources.

## Step 4: Convert Logo to WebP

Once you have a valid logo image (PNG, SVG, or JPEG):

```bash
magick /tmp/{input-file} \
  -resize 288x288 \
  -background white \
  -gravity center \
  -extent 288x288 \
  /run/media/system/manufactorum/Projects/Development/Personal/portfolio/public/technologies/{category-lowercase}/{skill-name-lowercase}.webp
```

**Target Directory by Category:**

- Backend → `/public/technologies/backend/`
- Frontend → `/public/technologies/frontend/`
- Languages → `/public/technologies/languages/`
- DevOps → `/public/technologies/devops/`
- AI → `/public/technologies/ai/`
- Testing → `/public/technologies/testing/`
- Miscellaneous → `/public/technologies/miscellaneous/`

**Why 288x288?** The portfolio displays skill images at consistent sizes. All existing logos are 288x288 WebP for optimal loading performance and visual consistency.

Verify the conversion succeeded:

```bash
ls -lh /run/media/system/manufactorum/Projects/Development/Personal/portfolio/public/technologies/{category}/{skill}.webp
```

## Step 5: Update TypeScript Files

You need to update three files in a specific order to maintain TypeScript type safety.

### File 1: Add Enum Entry

**Path**: `/src/app/shared/types/cv/cv-skills.types.ts`

Add the new skill to the `AvailableSkill` enum in alphabetical order within its category grouping:

```typescript
export enum AvailableSkill {
  // ... existing entries ...
  Flask = 'Flask' // Add here, maintaining alphabetical order
  // ... existing entries ...
}
```

The enum value (right side) should match the display name exactly.

### File 2: Add Skill Definition

**Path**: `/src/app/shared/config/constants/cv/cv-skills.constants.ts`

Add the skill definition to `CvAvailableSkills` in the same position as the enum (maintain order):

```typescript
[AvailableSkill.Flask]: {
  id: AvailableSkill.Flask,
  label: 'Flask',  // Display name
  imageUrl: 'technologies/backend/flask.webp',  // Relative path from /public
  level: 'Beginner',  // or 'Intermediate', 'Expert'
  experience: 1  // Integer, years of experience
},
```

**Important**: The `imageUrl` is relative to the `/public` directory and doesn't include `/public/` in the path.

### File 3: Add to Category

**Path**: `/src/app/shared/config/constants/cv/cv.constants.ts`

Find the `CvSkills` object and locate the appropriate category array. Add the skill:

```typescript
{
  id: AvailableSkillCategory.Backend,
  label: 'Backend',
  skills: [
    CvAvailableSkills.NodeJS,
    CvAvailableSkills.Flask,  // Add here
    // ... other skills ...
  ]
},
```

Add it in a logical position (alphabetically or grouped by similarity).

## Step 6: Verify Changes

After making all updates:

1. **Syntax Check**: Run `pnpm build` to verify TypeScript compiles without errors
2. **Report to User**: Summarize what was added:
   - Skill name and category
   - Logo source and location
   - Files modified
   - Build status

If the build fails, read the error messages, identify the issue (usually a typo or missing comma), and fix it.

## Common Issues and Solutions

**Problem**: Logo download returns 404 or tiny file
**Solution**: Try next source in the list. If all sources fail, ask user to provide a logo URL or file path.

**Problem**: ImageMagick conversion fails
**Solution**: Check if the input file is valid (`file /tmp/{name}`). If corrupted, try a different logo source.

**Problem**: TypeScript build error after updates
**Solution**: Common causes are missing commas, mismatched enum names, or duplicate entries. Read the error, locate the line, and fix the syntax.

**Problem**: Skill already exists
**Solution**: Inform user and ask if they want to update the existing entry (change level, experience, or logo).

## Example Interaction

**User**: "Add Flask as a backend skill with 2 years experience"

**Assistant**:

1. "What skill level would you say you have with Flask? (Beginner/Intermediate/Expert)"
2. [User: "Intermediate"]
3. Check if Flask exists → Not found, proceed
4. Search logos → Try SimpleIcons → Success
5. Download and convert → 288x288 WebP created
6. Update `cv-skills.types.ts` → Add `Flask = 'Flask'`
7. Update `cv-skills.constants.ts` → Add definition
8. Update `cv.constants.ts` → Add to Backend skills array
9. Run `pnpm build` → Success
10. Report: "✅ Added Flask (Backend, Intermediate, 2 years) to your portfolio. Logo saved to `/public/technologies/backend/flask.webp`."

## Notes

- Always preserve the alphabetical/logical ordering in the TypeScript files
- Use `magick` (not `convert`) for ImageMagick operations on newer systems
- The portfolio project root is at `/run/media/system/manufactorum/Projects/Development/Personal/portfolio`
- After successful addition, the skill will appear in the Skills section when the user runs `pnpm start`
