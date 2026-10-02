# Pharmacology test plan (installable checklist)

Plain files, no build step: index.html, manifest.webmanifest, sw.js, icon-180.png, icon-192.png, icon-512.png.

## Host it (pick one)
- GitHub Pages: create a public repo, upload all these files to the root, then Settings > Pages > Deploy from a branch > main / (root). Your link will be https://YOUR-USERNAME.github.io/REPO-NAME/
- Netlify Drop: unzip, then drag the folder onto app.netlify.com/drop.

## Put it on your phone
Open the link on your phone (online, once), then:
- Android (Chrome): menu > Install app / Add to Home screen
- iPhone (Safari): Share > Add to Home Screen

After that it opens like an app and works offline. Ticks are saved on that phone only.

## Updating
Replace the files in your repo or drop the folder again. The app picks up the change the next time you open it with internet.

## Sync across devices (optional)
Progress lives on each device until you connect it to a private gist on your GitHub account.
1. Create a classic token with only the gist permission: https://github.com/settings/tokens/new?scopes=gist&description=Pharm%20plan%20sync
2. Open the app, scroll to the bottom, paste the token and tap Connect. Do this on every device (on iPhone, do it inside the installed app).
3. Ticks then merge between devices whenever the app is opened or you tick something while online. Offline ticks sync later.
Sync only works in this hosted or installed copy, not inside Claude.

## Let classmates see your progress (view only)
1. Connect your token as described above and let it sync once.
2. At the bottom of the app, copy the "View-only link" and send that link (not the plain app link).
3. People who open it see your ticks, your days and what is still pending, plus when you last updated. They cannot change anything.
Anyone who has the link can see your progress. The plain app link still gives each person their own separate tracker.
