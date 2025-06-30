# 🌟 বাংলা অভিধান - Modern Bengali Dictionary

<div align="center">

![Bangla Dictionary](https://sjc.microlink.io/KlAjf9X9WmOKuU9whElZrskP3sfTEIXxn0cOuyZeY6IU2EBWm_Xl0ZwZkOpcWi-EiDLPgCwO4JqjTiPzyaDrNw.jpeg)

**Discover the beauty of Bengali language with our comprehensive dictionary**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://bangladictionary.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/parvez-miah/bangla-dictionary.git)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?style=for-the-badge&logo=netlify)](https://bangladictionary.netlify.app/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)](https://bangladictionary.vercel.app/)

</div>

---

## 🚀 **Live Deployments**

| Platform | URL | Status |
|----------|-----|--------|
| **🔥 Vercel** | [bangladictionary.vercel.app](https://bangladictionary.vercel.app/) | ✅ Active |
| **⚡ Netlify** | [bangladictionary.netlify.com](https://bangladictionary.netlify.app/) | ✅ Active |
| **📱 Mobile** | Fully Responsive | ✅ Optimized |

---

## ✨ **Features**

### 🔍 **Smart Search Engine**
- **Real-time search** across Bengali, English, and phonetic pronunciations
- **Intelligent filtering** with instant results
- **Auto-suggestions** for better user experience
- **Case-insensitive** search across multiple fields

### 📚 **Comprehensive Word Database**
- **20+ meticulously curated** Bengali words with rich metadata
- **Authentic Bengali script** using Tiro Bangla font
- **Detailed definitions** with cultural context
- **Pronunciation guides** in both Bengali and English
- **Etymology and word origins** from Sanskrit, Arabic, and Persian
- **Synonyms and antonyms** for vocabulary building
- **Part of speech** classification
- **Difficulty levels**: Beginner, Intermediate, Advanced
- **Usage frequency** indicators
- **Categorization** by topics and themes
- **Related words** and cross-references

### 🎨 **Modern UI/UX Design**
- **Beautiful gradient backgrounds** with glass-morphism effects
- **Responsive design** that works flawlessly on all devices
- **Smooth animations** and hover effects
- **Intuitive navigation** with breadcrumb support
- **Accessibility-first** approach with proper ARIA labels
- **Dark mode ready** architecture

### 🔗 **SEO Optimized**
- **Individual pages** for each word (`/word/[word]`)
- **Static site generation** for lightning-fast performance
- **Rich meta tags** and structured data
- **Open Graph** and Twitter Card support
- **Sitemap.xml** and robots.txt
- **Schema markup** for search engines

---

## 🛠️ **Technology Stack**

<div align="center">

| Frontend | Styling | Backend | Deployment |
|----------|---------|---------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=next.js) | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript) | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel) |
| ![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react) | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js) | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify) |

</div>

---

## 🚀 **Quick Start**

### Prerequisites
- **Node.js 18+** 
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/parvez-miah/bangla-dictionary.git
cd bangla-dictionary

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Open your browser
# Navigate to http://localhost:3000
\`\`\`

### Build for Production

\`\`\`bash
# Build the application
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
\`\`\`

---

## 📁 **Project Structure**

\`\`\`
bangla-dictionary/
├── 📁 app/                    # Next.js 14 App Router
│   ├── 📁 components/         # Reusable React components
│   ├── 📁 word/
│   │   └── 📁 [word]/        # Dynamic word pages
│   ├── 📄 globals.css        # Global styles with Tiro Bangla font
│   ├── 📄 layout.tsx         # Root layout with SEO
│   ├── 📄 page.tsx          # Homepage
│   ├── 📄 sitemap.ts        # SEO sitemap generation
│   ├── ��� robots.ts         # Search engine directives
│   └── 📄 manifest.ts       # PWA manifest
├── 📁 components/            # shadcn/ui components
│   └── 📁 ui/               # Button, Card, Input, etc.
├── 📁 lib/                  # Utility functions and data
│   └── 📄 dictionary-data.ts # Word database
├── 📁 public/               # Static assets
├── 📄 tailwind.config.ts    # Tailwind configuration
├── 📄 next.config.mjs       # Next.js configuration
└── 📄 package.json         # Dependencies and scripts
\`\`\`

---

## 📖 **Usage Examples**

### Adding New Words

Expand the dictionary by editing `lib/dictionary-data.ts`:

\`\`\`typescript
{
  id: 21,
  bangla: "নতুন",
  english: "new",
  pronunciation: "notun",
  definition: "Recently made or created; not existing before.",
  partOfSpeech: "adjective",
  example: "এটি একটি নতুন বই। (This is a new book.)",
  synonyms: ["তাজা", "নব"],
  antonyms: ["পুরাতন", "পুরানো"],
  etymology: "From Sanskrit नव (nava) meaning new",
  difficulty: "beginner",
  frequency: "common",
  categories: ["basic", "time"],
  relatedWords: ["পুরাতন", "আধুনিক"]
}
\`\`\`

### Customizing Styles

The project uses **Tailwind CSS** with **Tiro Bangla** font:

\`\`\`css
/* Custom Bengali text styling */
.bangla-text {
  font-family: var(--font-tiro-bangla), serif;
  font-weight: 400;
  font-style: normal;
}
\`\`\`

---

## 🎯 **Roadmap & Future Features**

- [ ] **🔊 Audio Pronunciations** - Native speaker recordings
- [ ] **🔍 Advanced Search Filters** - Filter by difficulty, frequency, categories
- [ ] **👤 User Accounts** - Save favorites and create personal word lists
- [ ] **🎮 Quiz System** - Interactive vocabulary tests and games
- [ ] **📱 Mobile App** - React Native mobile application
- [ ] **🌐 API Integration** - RESTful API for third-party integrations
- [ ] **📝 Sentence Builder** - More contextual examples and usage patterns
- [ ] **👥 Community Features** - User-contributed content and corrections
- [ ] **🌍 Multi-dialect Support** - Regional Bengali variations
- [ ] **🤖 AI-Powered Suggestions** - Smart word recommendations

---

## 🤝 **Contributing**

We welcome contributions from the Bengali language community! 

### Ways to Contribute

| Type | Description | Difficulty |
|------|-------------|------------|
| 🆕 **Add Words** | Expand our dictionary database | ⭐ Beginner |
| 🔧 **Fix Bugs** | Report and fix issues | ⭐⭐ Intermediate |
| 🎨 **Improve UI** | Enhance user interface | ⭐⭐ Intermediate |
| ⚡ **Add Features** | Implement new functionality | ⭐⭐⭐ Advanced |
| 📚 **Documentation** | Improve guides and docs | ⭐ Beginner |

### Contribution Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📊 **Project Statistics**

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/parvez-miah/bangla-dictionary?style=social)
![GitHub forks](https://img.shields.io/github/forks/parvez-miah/bangla-dictionary?style=social)
![GitHub issues](https://img.shields.io/github/issues/parvez-miah/bangla-dictionary)
![GitHub license](https://img.shields.io/github/license/parvez-miah/bangla-dictionary)
![GitHub last commit](https://img.shields.io/github/last-commit/parvez-miah/bangla-dictionary)

</div>

---

## 🙏 **Acknowledgments & Credits**

### 🌟 **Primary Data Source**
- **[Bangla Dictionary](https://bangla-dictionary.com/)** - Our primary source for authentic Bengali linguistic data, word definitions, cultural context, and etymological information. This comprehensive resource has been instrumental in ensuring the accuracy and authenticity of our dictionary content.

### 📚 **Additional Sources**
- **Bengali Language Academy** - Standardized spellings and definitions
- **Samsad Bengali-English Dictionary** - Reference for translations
- **Bengali Literature Corpus** - Authentic usage examples from classical texts
- **University of Dhaka Linguistics Department** - Academic linguistic research

### 🛠️ **Technical Credits**
- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Vercel](https://vercel.com/)** - Seamless deployment platform
- **[shadcn](https://twitter.com/shadcn)** - Beautiful UI component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Google Fonts](https://fonts.google.com/)** - Tiro Bangla font family

### 🌍 **Community**
- **Bengali Language Enthusiasts** worldwide
- **Open Source Contributors** who make projects like this possible
- **Students and Teachers** who inspire language preservation efforts

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

\`\`\`
MIT License - Feel free to use, modify, and distribute
\`\`\`

---

## 📞 **Support & Contact**

<div align="center">

### 🆘 **Need Help?**

| Platform | Link | Purpose |
|----------|------|---------|
| 🐛 **Issues** | [GitHub Issues](https://github.com/parvez-miah/bangla-dictionary/issues) | Bug reports & feature requests |
| 💬 **Discussions** | [GitHub Discussions](https://github.com/parvez-miah/bangla-dictionary/discussions) | Community chat & questions |
| 📧 **Email** | [contact@bangladictionary.com](mailto:bangladictionaryhelp.com) | Direct support |
| 🌐 **Vercel** | [bangladictionary.vercel.app](https://bangladictionary.vercel.app/) | Primary deployment |
| 🌐 **Netlify** | [bangladictionary.netlify.com](https://bangladictionary.netlify.app/) | Mirror deployment |

</div>

---

## 🌟 **Show Your Support**

If you find this project helpful, please consider:

<div align="center">

⭐ **Star the repository** | 🐛 **Report bugs** | 💡 **Suggest features** | 🤝 **Contribute code** | 📢 **Share with others**

[![GitHub stars](https://img.shields.io/github/stars/parvez-miah/bangla-dictionary?style=social)](https://github.com/parvez-miah/bangla-dictionary)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fparvez-miah%2Fbangla-dictionary)](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20Bengali%20Dictionary!&url=https://bangladictionary.vercel.app/)

</div>

---

<div align="center">

### 💝 **Made with Love for the Bengali Language Community**

**বাংলা ভাষার সৌন্দর্য সংরক্ষণ ও প্রচারে আমাদের ক্ষুদ্র প্রয়াস**

*Preserving and promoting the beauty of Bengali language through modern technology*

---

**© 2025 বাংলা অভিধান - Bengali Dictionary. All rights reserved.**

*Developed with ❤️ by [Parvez Miah](https://github.com/parvez-miah)*

</div>
