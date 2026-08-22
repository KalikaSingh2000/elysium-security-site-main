Upload all editable website images in this folder.

Recommended structure:
- `public/uploads/blogs/` for blog cover images
- `public/uploads/case-studies/` for case study photos
- `public/uploads/about/` for company/about visuals

How to use:
1. Put the image file inside the correct folder.
2. Reference it in the data file with a path like `/uploads/blogs/my-image.jpg`.
3. Save the file and refresh the site.

Examples already wired in code:
- Blog images are configured in `src/data/blogs.ts`
- Case study images are configured in `src/data/caseStudies.ts`

If an image path is missing or the file does not exist, the site shows a styled placeholder instead of a broken image.
