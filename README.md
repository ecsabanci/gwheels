# Electric Vehicle Comparison Platform

A modern web application built with Next.js that helps users compare electric vehicles and stay updated with the latest EV news.

![Platform Preview](public/preview.png)

## 🚀 Features

### Vehicle Comparison
- Side-by-side comparison of electric vehicles
- Detailed specifications including:
  - Battery & Range
  - Performance metrics
  - Charging capabilities
  - Dimensions & Cargo space
  - Features & Technology
  - Safety ratings
  - Environmental impact
  - Cost of ownership

### Blog Section
- Latest EV news and reviews
- Modern slider for featured articles
- Responsive grid layout
- Load more functionality for seamless content browsing

### Technical Features
- Server-side rendering with Next.js 14
- Dark mode support
- Responsive design for all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Markdown support for blog posts

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Content:** Markdown
- **Icons:** Heroicons, React Icons
- **Image Optimization:** Next.js Image Component
- **Development:** ESLint, Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-blog-main.git
```

2. Install dependencies:
```bash
cd next-blog-main
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂 Project Structure

```
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # Reusable components
│   ├── content/         # Vehicle data and blog posts
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── public/             # Static assets
└── tailwind.config.js  # Tailwind CSS configuration
```

## 💡 Usage

### Adding a New Vehicle
Add vehicle data to `src/content/vehicles.json` following the existing structure:

```json
{
  "id": "vehicle-id",
  "brand": "Brand Name",
  "model": "Model Name",
  ...
}
```

### Creating a Blog Post
1. Create a new markdown file in `src/content/posts/`
2. Include the required frontmatter:
```markdown
---
title: "Post Title"
date: "2024-03-01"
excerpt: "Brief description"
coverImage: "image-url"
category: "Category"
---
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by the growing EV market
- Built with modern web technologies

## 📧 Contact

Emre Sabancı - [LinkedIn](https://www.linkedin.com/in/ecsabanci/)
