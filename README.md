# 🚀 Space Portfolio - Cosmic Coding Experience

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> ✨ **A magical space-themed portfolio showcasing modern web development with enterprise-level performance optimizations**

![Space Portfolio Preview](https://via.placeholder.com/800x400/030014/8B5CF6?text=🚀+Space+Portfolio+Preview)

## 🌟 **Live Demo**

🔗 **[View Live Portfolio](https://your-portfolio-url.vercel.app)** *(Coming Soon)*

## ✨ **Key Features**

### 🎭 **Interactive Experience**
- 🧙‍♂️ **Magical Coding Wizard Splash Screen** with animated spells and particles
- 🌌 **3D Star Field Background** with WebGL-powered cosmic animations
- ⚡ **Smooth Section Transitions** with advanced Framer Motion animations
- 📱 **Responsive Design** optimized for all devices
- 🎨 **Cosmic UI Elements** with glassmorphism and gradient effects

### 🚀 **Performance Optimized**
- ⚡ **Zero Layout Shift (CLS < 0.1)** with comprehensive optimization
- 🔄 **Advanced Lazy Loading** with intersection observers
- 📦 **Code Splitting** for optimal bundle sizes
- 🎯 **Priority Loading** for critical assets
- 📊 **Web Vitals Monitoring** for continuous performance tracking

### 💼 **Professional Portfolio**
- 👨‍💻 **About Section** with experience timeline and achievements
- 🛠️ **Skills Showcase** with animated technology icons
- 🎯 **Project Gallery** with interactive cards and live demos
- 📧 **Contact Form** with EmailJS integration
- 🔒 **Security Section** with matrix-style animations

### 🎪 **Advanced Animations**
- 🌊 **Parallax Scrolling** effects
- ✨ **Particle Systems** with physics simulation
- 🎭 **Hover Interactions** with micro-animations
- 🌈 **Gradient Animations** and color transitions
- 🎬 **Page Transitions** with loading states

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **Next.js 14.2.15** - React framework with App Router
- **React 18.2.0** - Component-based UI library
- **TypeScript 5.0.0** - Type-safe JavaScript

### **Styling & Animation**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Production-ready motion library
- **CSS3** - Custom animations and effects

### **3D & Graphics**
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **HTML5 Canvas** - 2D graphics and particle systems

### **Performance & Optimization**
- **Web Vitals** - Performance monitoring
- **Next.js Image Optimization** - Automatic image optimization
- **Dynamic Imports** - Code splitting and lazy loading

### **Communication**
- **EmailJS** - Email service integration
- **React Hook Form** - Form state management

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Hesham000/protfolio.git

# Navigate to project directory
cd protfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### **Environment Setup**

Create a `.env.local` file with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### **Development**

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### **Production Build**

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 **Project Structure**

```
space-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── web-vitals.tsx     # Performance monitoring
├── components/
│   ├── main/              # Main sections
│   │   ├── hero.tsx       # Hero section
│   │   ├── about.tsx      # About section
│   │   ├── skills.tsx     # Skills showcase
│   │   ├── projects.tsx   # Project gallery
│   │   ├── contact.tsx    # Contact form
│   │   ├── navbar.tsx     # Navigation bar
│   │   ├── footer.tsx     # Footer
│   │   └── splash-screen.tsx # Magical splash screen
│   ├── sub/               # Sub-components
│   │   └── hero-content.tsx
│   ├── ui/                # UI utilities
│   │   ├── cls-prevention.tsx # Layout shift prevention
│   │   └── section-skeleton.tsx # Loading skeletons
│   └── layout/            # Layout components
│       └── layout-wrapper.tsx
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── constants/             # Application constants
├── config/                # Configuration files
└── public/                # Static assets
```

## 🎨 **Customization Guide**

### **Personal Information**

Update your personal details in `config/index.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your Description",
  // ... other config
};
```

### **Projects**

Add your projects in `constants/projects.ts`:

```typescript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/project-image.jpg",
    technologies: ["React", "Next.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-repo"
  }
];
```

### **Skills**

Update your skills in `constants/skills.ts`:

```typescript
export const skills = [
  {
    skill_name: "React",
    icon: ReactIcon,
    width: 80,
    height: 80
  }
];
```

### **Color Scheme**

Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        // ... custom colors
      }
    }
  }
};
```

## 📧 **EmailJS Setup**

1. **Create EmailJS Account**: [https://www.emailjs.com](https://www.emailjs.com)
2. **Create Email Service**: Choose your email provider (Gmail, Outlook, etc.)
3. **Create Email Template**: Use variables like `{{from_name}}`, `{{message}}`
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Update Environment**: Add credentials to `.env.local`

## 🚀 **Deployment**

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Hesham000/protfolio)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### **Netlify**

```bash
# Build command
npm run build

# Publish directory
.next

# Environment variables
# Set in Netlify dashboard
```

### **Traditional Hosting**

```bash
# Build static export
npm run build
npm run export

# Upload 'out' directory to your hosting provider
```

## 📊 **Performance Metrics**

### **Web Vitals Targets**
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅

### **Optimizations Implemented**
- ✅ Image optimization with Next.js Image
- ✅ Code splitting with dynamic imports
- ✅ Resource preloading for critical assets
- ✅ Layout shift prevention
- ✅ Intersection observer for lazy loading
- ✅ Web Vitals monitoring

## 🧪 **Testing Performance**

```bash
# Run Lighthouse audit
npm run lighthouse

# Check Web Vitals in browser console
# (Web Vitals automatically log in development)

# Build and analyze bundle
npm run build
npm run analyze
```

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Framer Motion** for incredible animation capabilities
- **Three.js** for 3D graphics and animations
- **Tailwind CSS** for rapid UI development
- **Next.js** for the amazing React framework
- **EmailJS** for seamless email integration

## 🌟 **Show Your Support**

If you found this project helpful, please consider:

- ⭐ **Starring the repository**
- 🐛 **Reporting bugs**
- 💡 **Suggesting new features**
- 🤝 **Contributing to the codebase**

---

<div align="center">

**🚀 Built with passion by [Your Name](https://github.com/Hesham000)**

*Turning cosmic dreams into digital reality* ✨

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-purple?style=for-the-badge)](https://your-portfolio-url.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/Hesham000)

</div> 