# Poggers.tech Consulting – holding page

A single-page holding site built with Vue 3 and Vite. No contact details or forms.

## Run it locally

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # static site written to dist/
```

Edit the wording in `src/App.vue` and the look in `src/style.css`.

## Put it on GitHub

1. Create an empty repository on GitHub (for example `poggers-tech-site`).
2. From this folder:

```bash
git init
git add .
git commit -m "Poggers.tech holding page"
git branch -M main
git remote add origin https://github.com/<your-account>/poggers-tech-site.git
git push -u origin main
```

On every push to `main`, the workflow in `.github/workflows/deploy.yml` builds the site
and publishes the finished files to a branch called `deploy`. Check the **Actions** tab
on GitHub to see it run (the first run creates the `deploy` branch).

## Deploy on Hostinger (shared / Premium / Business web hosting)

Hostinger's Git deployment copies a branch straight into your site folder and does not
run a build, so point it at the `deploy` branch, which already contains the built site.

1. In hPanel, open **Websites → your domain → Advanced → GIT**.
2. Repository: `https://github.com/<your-account>/poggers-tech-site.git`
   (for a private repo use the SSH form `git@github.com:<your-account>/poggers-tech-site.git`
   and add the SSH key Hostinger shows you under GitHub repo **Settings → Deploy keys**).
3. Branch: `deploy`
4. Install path: leave empty to deploy into `public_html`. The folder must be empty,
   so delete Hostinger's default `default.php` / `index.php` first.
5. Click **Create**, then **Deploy**.
6. For automatic updates, turn on **Auto Deployment** in the same screen, copy the webhook
   URL it gives you, and add it in GitHub under **Settings → Webhooks** (content type
   `application/json`, just the push event).

From then on: edit, commit, push to `main`; GitHub builds it and Hostinger pulls the new version.

### Alternative: Hostinger Node.js web app

If your plan offers **Node.js** apps with GitHub import (Business and Cloud plans), you can
import the repository directly instead: framework **Vue (Vite)**, build command
`npm run build`, output directory `dist`, branch `main`. The `deploy` branch workflow
is then not needed.

### Manual upload (no Git)

Run `npm run build` and upload the contents of `dist/` into `public_html` with
Hostinger's File Manager.
