# Personal Website

A beautiful, responsive React personal website for showcasing your portfolio, biography, and contact information.

## Features

- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 👤 **Profile Section**: Display your profile picture and bio
- 📝 **About Section**: Share your skills and professional information
- 📧 **Contact Form**: Built-in contact form for visitors to reach out
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 🔗 **Social Links**: Connect your GitHub, LinkedIn, Twitter, and other profiles

## Project Structure

```
src/
├── components/
│   ├── Header.js         # Navigation header
│   ├── Header.css        # Header styles
│   ├── About.js          # About/profile section
│   ├── About.css         # About section styles
│   ├── Contact.js        # Contact form
│   └── Contact.css       # Contact form styles
├── App.js                # Main app component
├── App.css               # App styles
├── index.js              # React entry point
└── index.css             # Global styles

public/
└── index.html            # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository (or navigate to the project directory)
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build/` directory.

## Customization

### Update Your Information

Edit the About section in [src/components/About.js](src/components/About.js):
- Replace "Your Name" with your actual name
- Update the professional title/bio
- Replace the profile picture URL with your own image
- Customize the skills list

### Update Social Links

Edit the Contact section in [src/components/Contact.js](src/components/Contact.js) to add your social media profiles.

### Customize Styling

Modify the CSS files to match your personal brand:
- [src/App.css](src/App.css) - Main color scheme
- [src/components/Header.css](src/components/Header.css) - Header styling
- [src/components/About.css](src/components/About.css) - About section styling
- [src/components/Contact.css](src/components/Contact.css) - Contact form styling

## Deployment

You can deploy this website to:

- **Vercel** (Recommended for React): [https://vercel.com](https://vercel.com)
- **Netlify**: [https://netlify.com](https://netlify.com)
- **GitHub Pages**: [https://pages.github.com](https://pages.github.com)
- **AWS Amplify**: [https://aws.amazon.com/amplify](https://aws.amazon.com/amplify)

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## Available Scripts

- `npm start` - Run the development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (irreversible)

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **CSS3** - Modern styling with flexbox and gradients
- **React DOM** - React package for working with the DOM

## Tips for Success

1. **Profile Picture**: Use a high-quality, professional headshot
2. **Bio**: Keep it concise and engaging
3. **Skills**: Highlight your top 5-7 skills
4. **Contact Form**: Make sure to set up email notifications
5. **Social Links**: Include links to your GitHub and LinkedIn profiles
6. **Mobile Testing**: Test on different devices before deployment

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to open an issue or contact the author.

---

Happy hosting! 🚀
