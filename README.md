# Product Showcase Website

A clean, single-page React.js product showcase website with modern design and interactive features.

## Features

- **Hero Header**: Eye-catching gradient header with product introduction
- **Features Section**: Detailed feature highlights with icons and descriptions
- **Specifications**: Technical specifications displayed in an organized grid
- **Interactive Gallery**: Clickable image gallery with hover effects and state management
- **Call-to-Action**: Clear CTA section with multiple action buttons
- **Footer**: Professional footer with navigation links

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **PostCSS**: CSS processing with Autoprefixer

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
windsurf-project/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero header section
│   │   ├── Features.jsx      # Features and specifications
│   │   ├── Gallery.jsx       # Interactive image gallery
│   │   ├── CTA.jsx           # Call-to-action section
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## Customization

### Updating Product Information

- **Hero**: Edit `src/components/Hero.jsx` to change the headline, description, and CTA button
- **Features**: Modify the `features` and `specifications` arrays in `src/components/Features.jsx`
- **Gallery**: Update the `images` array in `src/components/Gallery.jsx` with your product images
- **CTA**: Customize the call-to-action text and buttons in `src/components/CTA.jsx`

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify `tailwind.config.js` to customize the theme
- Edit component files to change Tailwind classes
- Add custom styles in `src/index.css`

## Browser Support

Works in all modern browsers that support ES6+ and CSS Grid/Flexbox.

## License

MIT
