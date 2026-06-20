# Kaighi: CloudCannon deployment

## Build settings

- Static site generator: Astro
- Install command: `npm install`
- Build command: `npm run build`
- Output folder: `dist`
- Source folder: `/`

## Editing model

- Pages live in `src/pages`.
- Podcast episodes live in `src/content/voices`.
- Stories live in `src/content/stories`.
- Recipes live in `src/content/table`.
- Guestbook notes live in `src/content/guestbook`.
- Uploads go to `public/uploads` and are referenced as `/uploads/file-name.jpg`.

CloudCannon schemas are in `.cloudcannon/schemas` and are connected in `cloudcannon.config.yml`.
