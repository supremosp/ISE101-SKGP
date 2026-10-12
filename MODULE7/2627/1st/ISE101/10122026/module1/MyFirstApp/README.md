# MyFirstApp

A small Expo React Native app for ISE101 demonstrating reusable components and JSX. The home screen shows Joshua's greeting and BSIS 3A section; update them in `components/WelcomeMessage.js` if your name or section is different.

## Project location

`MODULE7/TiongcoJoshua/2627/1st/ISE101/10122026/module1/MyFirstApp`

The folder names use the provided example student name, the 2026-2027 academic year, first semester, ISE101, and today's date. Change them if your course details or assigned module number differ.

## Run the app

Install Node.js 22.13.x or newer, then open a terminal in this folder and run:

```powershell
npm install
npm start
```

Install Expo Go on your phone and scan the QR code shown by Expo. Keep the phone and computer on the same network. To try Android with an installed emulator, run `npm run android`.

## Key files

- `App.js` is the app entry point and renders `screens/HomeScreen.js`.
- `components/Header.js`, `components/Footer.js`, and `components/WelcomeMessage.js` are reusable UI components.
- `screens/HomeScreen.js` composes the header, welcome message, page content, and footer.
- Student-defined and imported identifiers use the `skgp` initials suffix.
- `package.json` contains project metadata, dependencies, and run scripts.
- `babel.config.js` configures Expo's JavaScript transpiler.
- `app.json` contains Expo app settings.
- `assets/` is for app images, icons, and fonts.
- `node_modules/` is created by `npm install` and is excluded from Git.
- `env_check.txt` is the version record; replace the unavailable status values after installing Node.js and running the listed commands.

This is a JavaScript/React Native project, so it does not need a Python virtual environment or `pip install kivy/django`. Expo dependencies are installed with npm.

## GitHub backup

Create a private GitHub repository for this project, push this folder, then invite `senseijoswa` (the supplied contact is `jtiongco.work@gmail.com`) from the repository's Settings > Collaborators page. A GitHub sign-in with permission to create repositories and manage collaborators is required; no credentials are stored in this project.