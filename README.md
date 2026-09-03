# Vincent Nguyen — Portfolio

A multi-page portfolio for Vincent Nguyen, Data/BI Analyst and Consultant. It brings together selected analytics case studies, experience, education, public research interests, and a personal section called Marginalia.

## Publish with GitHub Pages

This repository includes an automatic GitHub Pages workflow. Once Pages is set to **GitHub Actions**, every push to `main` builds and republishes the website.

The recommended repository name for the owner account is:

`vincentnguyencreative06-stack.github.io`

The public URL will then be:

`https://vincentnguyencreative06-stack.github.io/`

Detailed owner instructions are available in [OWNER_GUIDE_VI.md](OWNER_GUIDE_VI.md).

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build:github
npm run lint
npm test
```

The GitHub build exports static files to `out/`. The public résumé is stored in `public/files`. Personal contact information is intentionally limited to email and public profile links.
