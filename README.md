# DropLinkFast

DropLinkFast is a lightning-fast web application for downloading content from various social media platforms, file hosting services, and document sharing sites using just a URL.

![DropLinkFast Screenshot](https://source.unsplash.com/random/1200x630/?download,technology)

## 🚀 Features

- ⚡ Quick and easy downloads from multiple platforms
- 🎥 Support for video and audio downloads
- 📱 Resolution and format selection
- 🌓 Dark mode support
- 📱 Responsive design for both web and mobile

## 🎯 Supported Platforms

- YouTube (videos and audio)
- Instagram (photos and videos)
- Twitter (media content)
- Generic file downloads
- More platforms coming soon!

## 🛠️ Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- Netlify Functions for serverless backend
- ytdl-core for YouTube downloads
- Lucide React for icons

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/droplinkfast.git
   cd droplinkfast
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   TWITTER_BEARER_TOKEN=your_twitter_token
   ```

4. Start the development server:
   ```bash
   npm run dev:netlify
   ```

## 🌐 Deployment

This project is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set up environment variables in Netlify dashboard
3. Deploy with the following settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ytdl-core](https://github.com/fent/node-ytdl-core) for YouTube download functionality
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Lucide React](https://lucide.dev) for icons
- All our amazing contributors!