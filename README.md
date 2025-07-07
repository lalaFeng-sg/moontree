# MoonTree IT Support Services

A modern, responsive website for IT support and technology consulting services. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 Single-page application
- 🔧 IT support services showcase
- 📞 Contact form integration
- 🌐 SEO optimized
- 🖼️ Professional business imagery

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd moontree
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
moontree/
├── src/app/
│   ├── layout.tsx      # Root layout with header and footer
│   ├── page.tsx        # Main homepage content
│   └── globals.css     # Global styles and Tailwind imports
├── public/
│   ├── images/         # Business imagery and assets
│   │   ├── hero-bg.jpg # Hero section background
│   │   ├── it-support.jpg # IT support service image
│   │   ├── cybersecurity.jpg # Cybersecurity service image
│   │   ├── cloud-solutions.jpg # Cloud solutions image
│   │   ├── network-infrastructure.jpg # Network infrastructure image
│   │   ├── data-backup.jpg # Data backup service image
│   │   ├── it-consulting.jpg # IT consulting image
│   │   ├── team-working.jpg # Team collaboration image
│   │   ├── office.jpg # Office environment image
│   │   └── README.md # Image documentation
│   └── logo.png       # Company logo
├── components/         # Reusable components (if any)
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Gray shades */ },
  accent: { /* Green shades */ }
}
```

### Content
Update the content in `src/app/page.tsx`:
- Services array
- Contact information
- Company details

### Styling
Global styles and custom components are defined in `src/app/globals.css`.

### Images
Business imagery is stored in `public/images/` directory. See `public/images/README.md` for detailed specifications and recommendations for each image.

To download sample images, run:
```bash
chmod +x download-images.sh
./download-images.sh
```

## Deployment

The project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy to Netlify
```

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: wyl0201@gmail.com