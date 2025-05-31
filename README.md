# Little Lemon Capstone Project

This is the Little Lemon restaurant web application, built as a capstone project for the Coursera Meta Front-End Developer program.

## Features
- Responsive design with a fixed navigation bar
- Hero section with restaurant imagery
- Menu highlights with images
- Online booking and ordering sections
- About section featuring restaurant owners
- Testimonials and footer

## Project Structure
- `src/assets/` — Stock images and assets used throughout the site
- `src/components/` — React components (cards, sections, dialogs)
- `src/App.js` — Main application component
- `public/` — Static files and the main HTML template

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd little-lemon-capstone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running Tests
```sh
npm test
```

### Building for Production
```sh
npm run build
```
The optimized build will be in the `build/` folder.

## Assets & Images
All stock images are located in `src/assets/`. You can update or replace them as needed. Images are imported directly into React components for best performance and cropping.

## Customization
- To change images, replace files in `src/assets/` and update imports in components.
- To update content, edit the relevant React components in `src/components/sections/` or `src/components/cards/`.

## Learn More
- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

© 2025 Little Lemon. For educational use only.
