# WSP Desktop UI

WSP Desktop User Interface is a desktop application that allows users to access and use features of the AI Workspace to power their workflows with AI.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- yarn or npm package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd wsp-desktop-ui
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn electron-dev`

Runs the app in development mode as an Electron desktop application.\
The app will launch automatically and reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn electron-pack`

Packages the app for desktop distribution.\
Builds the production version and creates installable packages in the `dist` folder.\
The packages are optimized for desktop deployment across different platforms.

## Project Structure

```
wsp-desktop-ui/
  ├── public/
  │   ├── electron.js       # Main Electron process
  │   └── index.html        # HTML template
  ├── src/                  # React source files
  ├── assets/              # Build resources
  └── package.json         # Project dependencies and scripts
```

## Contributing

[Add your contribution guidelines here]

## License

[Add your license information here]

Note: Replace all placeholder text in square brackets with your actual project information.