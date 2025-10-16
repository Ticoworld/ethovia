# Ethovia Marketing Agency Website

A premium, modern Next.js 14 marketing agency website featuring smooth animations, responsive design, and best practices.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Framer Motion** animations for smooth user experience
- **Tailwind CSS** for styling with custom color palette
- **React Hook Form** + **Zod** for form validation
- **Lucide React** icons
- Fully responsive design (mobile-first)
- SEO optimized
- Accessibility compliant
- Performance optimized with Next.js Image component

## 🎨 Color Palette

- **Primary Navy**: #00024D
- **Secondary Cyan**: #4A9FFF
- **Accent Cyan**: #00F0FF
- **Dark**: #1A1A2E
- **Light**: #F8F9FA
- **Success**: #00FF88

## 📁 Project Structure

```
ethovia/
├── public/
│   └── images/
│       ├── hero/
│       ├── services/
│       ├── process/
│       ├── portfolio/
│       ├── about/
│       ├── cta/
│       ├── icons/
│       └── background/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── services/
│   │   ├── work/
│   │   │   └── [slug]/
│   │   ├── contact/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   └── globals.css
│   └── components/
│       ├── common/
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── SectionTitle.tsx
│       │   └── ScrollToTop.tsx
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       └── home/
│           ├── Hero.tsx
│           ├── Services.tsx
│           ├── Process.tsx
│           ├── FeaturedWork.tsx
│           ├── Stats.tsx
│           ├── Testimonials.tsx
│           └── CTASection.tsx
├── tailwind.config.ts
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Add placeholder images:**
   
   You need to add images to the following directories in `public/images/`:
   
   - `hero/hero-main-3d.png` - Hero section background
   - `services/` - 4 service images (service-web-development.png, service-google-ads.png, service-social-ads.png, service-strategy.png)
   - `process/` - 4 process step images (process-discover.png, process-design.png, process-develop.png, process-optimize.png)
   - `portfolio/` - 3 portfolio images (portfolio-placeholder-1.png, portfolio-placeholder-2.png, portfolio-placeholder-3.png)
   - `about/` - 2 about images (about-team-illustration.png, about-mission.png)
   - `cta/cta-background.png` - CTA section background
   - `icons/avatar-placeholder.png` - Testimonial avatars
   - `background/` - Pattern images (grid-pattern.png, wave-pattern.png)

   **Quick tip**: Use free stock photos from:
   - [Unsplash](https://unsplash.com/)
   - [Pexels](https://www.pexels.com/)
   - Or generate AI images with tools like Midjourney, DALL-E, or Stable Diffusion

3. **Run development server:**
```bash
npm run dev
```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages

### Homepage (`/`)
- Hero section with gradient background
- Services showcase (4 cards)
- Process timeline (4 steps)
- Featured work (3 portfolio items)
- Stats section with animated counters
- Testimonials (3 client reviews)
- CTA section

### About Page (`/about`)
- Hero section
- Mission statement with stats
- Values (4 cards)
- Team section (placeholder)
- CTA

### Services Page (`/services`)
- Hero section
- Detailed service descriptions (4 services)
- Each service includes:
  - Benefits list
  - Process steps
  - Case study card
- CTA

### Work Page (`/work`)
- Hero section
- Category filter buttons
- Portfolio grid (6 items with filtering)
- Links to individual case studies

### Case Study Page (`/work/[slug]`)
- Hero with project details
- Challenge section
- Solution with technologies used
- Results with metrics
- Client testimonial
- CTA

### Contact Page (`/contact`)
- Hero section
- Contact form with validation:
  - Name, Email, Phone
  - Service selection
  - Budget range
  - Message
- Contact information sidebar
- Social media links
- Success message on submit

### 404 Page (`/not-found`)
- Animated error message
- Navigation options
- Quick links to main pages

## 🎯 Key Components

### Navbar
- Fixed position with scroll detection
- Transparent initially, solid on scroll
- Mobile hamburger menu with slide-in drawer
- Active link highlighting

### Footer
- Company info with tagline
- Quick links
- Services list
- Contact information
- Social media icons
- Copyright and legal links

### Buttons
- Multiple variants: primary, secondary, outline, ghost
- Multiple sizes: sm, md, lg
- Loading states
- Disabled states

### Cards
- Hover effects with lift and border glow
- Configurable hover behavior
- Smooth animations

### Section Titles
- Consistent styling across pages
- Optional gradient text
- Centered or left-aligned

### Scroll to Top
- Appears after scrolling 300px
- Smooth scroll animation
- Gradient button with icon

## 🎨 Animations

All animations use Framer Motion:
- Fade in on scroll
- Slide up on scroll
- Stagger children animations
- Counter animations for stats
- Parallax effects on hero
- Smooth page transitions
- Hover effects on cards and buttons

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- All sections fully responsive
- Touch-friendly buttons (44px min tap target)

## 🔍 SEO

- Comprehensive metadata in layout.tsx
- OpenGraph tags for social sharing
- Twitter card support
- Semantic HTML throughout
- Proper heading hierarchy
- Alt text for all images

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus-visible states
- Color contrast meets WCAG AA standards
- Screen reader friendly

## 🚀 Performance

- Next.js Image component with optimization
- Lazy loading for below-fold images
- Font optimization with next/font
- Minimal bundle size
- Static page generation where possible

## 📝 Customization

### Update Colors
Edit `tailwind.config.ts` to change the color palette.

### Update Content
All content is hardcoded in component files. Future enhancement could integrate a CMS like:
- Sanity
- Contentful
- Strapi
- Prismic

### Add Backend
The contact form currently shows a success message without actual submission. To add backend:
1. Set up API route in `app/api/contact/route.ts`
2. Integrate email service (SendGrid, Resend, etc.)
3. Add database for form submissions (optional)

### Add Blog
Create `app/blog/` directory with similar structure to work pages.

## 🐛 Known Issues / Future Enhancements

- [ ] Add actual logo file (currently using text)
- [ ] Add real team photos to About page
- [ ] Implement backend for contact form
- [ ] Add blog section
- [ ] Add pricing page
- [ ] Add newsletter signup
- [ ] Integrate CMS for content management
- [ ] Add internationalization (i18n)
- [ ] Add dark mode toggle
- [ ] Add cookie consent banner
- [ ] Implement analytics (Google Analytics, Plausible, etc.)

## 📦 Dependencies

- **next**: 15.5.5
- **react**: 19.1.0
- **react-dom**: 19.1.0
- **framer-motion**: ^12.23.24
- **lucide-react**: ^0.545.0
- **react-hook-form**: ^7.65.0
- **zod**: ^4.1.12
- **@hookform/resolvers**: ^5.2.2
- **tailwindcss**: ^4
- **typescript**: ^5

## 📚 Resources

### Design Inspiration
- [RNO1](https://rno1.com/) - West coast vibe, ocean theme
- [Mosaic](https://mosaic.com/) - Immersive video showcases
- [Beans Agency](https://beans.agency/) - Bold colors, playful animations
- [Kota](https://kota.co.uk/) - Interactive elements
- [Bleech](https://bleech.de/en/) - Lightning-fast performance

### Technologies
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Created as a premium marketing agency template.

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**
