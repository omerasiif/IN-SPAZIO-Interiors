import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleArrowOutUpRight,
  Compass,
  Grid3X3,
  Menu,
  MoveRight,
  Ruler,
  Sparkles,
  X,
} from 'lucide-react';

const images = {
  hero: '/images/spazio1.png',
  main: '/images/spazio.png',
  detail: '/images/spazio2.png',
};
const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

const projects = [
  {
    category: 'Interior Design',
    title: 'Designed for modern living',
    image: images.main,
    className: 'project-large',
  },
  {
    category: 'Home Interiors',
    title: 'Thoughtful spaces',
    image: images.detail,
    className: 'project-tall',
  },
  {
    category: 'Interior Solutions',
    title: 'Details that matter',
    image: images.hero,
    className: 'project-wide',
  },
  {
    category: 'Residential Interiors',
    title: 'Made around you',
    image: images.main,
    className: 'project-medium',
  },
  {
    category: 'Custom Interiors',
    title: 'Function meets character',
    image: images.detail,
    className: 'project-medium',
  },
];

const services = [
  ['01', 'Interior Design Consultation', 'A considered starting point for spaces that reflect how you live.'],
  ['02', 'Modular Kitchens', 'Efficient, elegant kitchens designed around your daily rituals.'],
  ['03', 'Bedroom Interiors', 'Calm, personal rooms with storage and comfort in balance.'],
  ['04', 'Living Room Interiors', 'Layered living spaces made for connection and ease.'],
  ['05', 'Space Planning & Partitions', 'Clearer flow, better proportions and beautifully defined zones.'],
  ['06', 'Custom Furniture & Project Management', 'Thoughtful details carried through with care from idea to space.'],
];

const process = [
  ['01', 'Consultation', 'Understand your space, requirements and vision.'],
  ['02', 'Planning', 'Develop layouts and design directions around the space.'],
  ['03', 'Design', 'Refine materials, details, furniture and overall character.'],
  ['04', 'Execution', 'Bring the design together into a finished space.'],
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const moveLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + direction + projects.length) % projects.length);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">
          <span className="brand-mark">IN SPAZIO</span>
          <span className="brand-subtitle">Interior design<br />& home solution</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}
        </nav>
        <a className="header-cta" href="https://wa.me/9526500070" target="_blank" rel="noreferrer">
          Get a consultation <ArrowUpRight size={15} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => <button key={item.id} style={{ transitionDelay: `${index * 45}ms` }} onClick={() => scrollTo(item.id)}>{item.label}<ArrowUpRight size={17} /></button>)}
        <a href="https://wa.me/9526500070" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={17} /></a>
      </div>

      <main>
       <section className="hero" id="top">
  <div className="hero-image" />
  <div className="hero-overlay" />

  <div className="hero-content reveal-on-load">
    <p className="eyebrow light">
      Hyderabad · Interior Design · Home Interiors
    </p>

    <h1>
      Spaces designed<br />
      <em>around the way</em><br />
      you live.
    </h1>

    <p className="hero-copy">
      Thoughtfully designed interiors that bring together style, comfort and functionality.
    </p>

    <div className="hero-actions">
      <button
        className="button button-light"
        onClick={() => scrollTo('projects')}
      >
        Explore our work <ArrowDown size={16} />
      </button>

      <a
        className="text-link light-link"
        href="https://wa.me/9526500070"
        target="_blank"
        rel="noreferrer"
      >
        Get a consultation <ArrowUpRight size={16} />
      </a>
    </div>
  </div>

  <div className="scroll-cue">
    <span>Scroll to explore</span>
    <ArrowDown size={16} />
  </div>

  <div className="hero-index">
    01 <span>/</span> 04
  </div>
</section>

        <section className="about section-pad" id="about">
          <div className="section-number">01 <span>About IN SPAZIO</span></div>
          <div className="about-grid">
            <div className="about-image-wrap image-reveal"><img
  src={images.detail}
  alt="Interior design project"
  loading="lazy"
/><span className="image-caption">A detail in the making</span></div>
            <div className="about-copy">
              <p className="eyebrow">About IN SPAZIO</p>
              <h2>Creating spaces with purpose, character <em>and detail.</em></h2>
              <p className="body-copy">IN SPAZIO Interior Designing Construction & Home Solution provides interior and home solutions in Hyderabad, helping clients transform their spaces through thoughtful design, practical planning and carefully considered details.</p>
              <div className="about-meta"><span>Hyderabad</span><span>Interior Design</span><span>Home Solutions</span></div>
              <button className="circle-link" onClick={() => scrollTo('services')} aria-label="Explore services"><MoveRight size={20} /></button>
            </div>
          </div>
          <div className="decorative-n">N</div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-heading-row">
            <div><p className="eyebrow">02 / Selected work</p><h2>Spaces that feel<br /><em>like yours.</em></h2></div>
            <p className="section-intro">A glimpse into the interiors, details and spaces we help bring to life.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <button className={`project-card ${project.className}`} key={`${project.title}-${index}`} onClick={() => setLightboxIndex(index)}>
              <img src={project.image} alt={project.title} loading={index === 0 ? 'eager' : 'lazy'} />
              <span className="project-shade" /><span className="project-info"><span>{project.category}</span><strong>{project.title}</strong></span><span className="project-arrow"><ArrowUpRight size={18} /></span>
            </button>)}
          </div>
          <p className="photo-note">Actual project photography · IN SPAZIO Interior Designing Construction & Home Solution</p>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-number">03 <span>What we do</span></div>
          <div className="section-heading-row services-heading"><div><p className="eyebrow">Our services</p><h2>Designed around<br /><em>your everyday.</em></h2></div><p className="section-intro">Interior solutions designed around your space, lifestyle and requirements.</p></div>
          <div className="services-list">{services.map(([number, title, description]) => <div className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-icon" size={18} /></div>)}</div>
        </section>

        <section className="philosophy section-pad">
          <div className="philosophy-image image-reveal"><img
  src={images.main}
  alt="Interior design project"
  loading="lazy"
/><div className="image-stamp"><Sparkles size={17} /><span>Thoughtful<br />by design</span></div></div>
          <div className="philosophy-copy"><p className="eyebrow">04 / Our approach</p><h2>Beautiful spaces should also <em>work beautifully.</em></h2><p className="body-copy">From the overall layout to the smallest detail, every element should have a purpose. Our approach combines visual character with practical functionality to create interiors that feel natural to live in.</p><div className="principles"><div><span>01</span><strong>Function</strong></div><div><span>02</span><strong>Detail</strong></div><div><span>03</span><strong>Character</strong></div></div></div>
        </section>

       <section className="image-break">
  <img src={images.hero} alt="Interior design project" loading="lazy" />
        <section className="gallery section-pad">
          <div className="section-heading-row"><div><p className="eyebrow">05 / Project gallery</p><h2>A closer look at<br /><em>the details.</em></h2></div><div className="gallery-side"><p className="section-intro">Explore the material, light and craft behind our interiors.</p><div className="filter-row"><button className="active">All</button></div></div></div>
          <div className="gallery-grid">{projects.map((project, index) => <button className={`gallery-item gallery-${index + 1}`} key={`gallery-${index}`} onClick={() => setLightboxIndex(index)}><img src={project.image} alt={project.title} loading="lazy" /><span><Grid3X3 size={15} /> View detail</span></button>)}</div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-number">06 <span>Our process</span></div>
          <div className="section-heading-row"><div><p className="eyebrow">From idea to space</p><h2>Good design starts<br /><em>with listening.</em></h2></div><p className="section-intro">A clear, collaborative approach to creating spaces with intention.</p></div>
          <div className="process-list">{process.map(([number, title, description]) => <div className="process-item" key={number}><span>{number}</span><div className="process-line" /><h3>{title}</h3><p>{description}</p></div>)}</div>
        </section>

        <section className="reviews section-pad"><div className="review-grid"><div><p className="eyebrow">07 / Google presence</p><h2>Made to be lived in.<br /><em>Built on trust.</em></h2></div><div className="review-card"><div className="google-g">G</div><div><div className="rating"><strong>4.7</strong><span>★★★★★</span></div><p>Rated 4.7/5 on Google</p><small>29 reviews</small></div><a href="https://maps.app.goo.gl/DwmiYqRW6tw3BhUr7" target="_blank" rel="noreferrer">View Google reviews <ArrowUpRight size={16} /></a></div></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-map"><div className="map-lines" /><div className="map-pin"><Compass size={19} /></div><div className="map-label">Hyderabad<br /><span>Telangana, India</span></div></div><div className="contact-copy"><p className="eyebrow">08 / Visit us</p><h2>Let's talk about<br /><em>your space.</em></h2><p className="address">Nid Interior Designing Construction & Home Solution<br /><br />Parakkal Tower,<br />Pandikkade, Kondotty, Kerala 673638<br />India</p><a className="phone" href="tel:+9526500070">+91 95265 00070</a><div className="contact-actions"><a className="button button-dark" href="tel:+91 9526500070">Call now <ArrowUpRight size={15} /></a><a className="button button-outline" href="https://wa.me/9526500070" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a><a className="directions" href="https://maps.app.goo.gl/DwmiYqRW6tw3BhUr7" target="_blank" rel="noreferrer">Get directions <ChevronRight size={15} /></a></div></div></section>

       <section className="final-cta">
  <img
    src={images.main}
    alt="Interior design project"
    loading="lazy"
  />

  <div className="final-overlay" />

  <div className="final-content">
    <p className="eyebrow light">
      IN SPAZIO Interior Designing Construction & Home Solution
    </p>

    <h2>
      Let's create a space<br />
      that <em>feels like yours.</em>
    </h2>

    <p>
      Have a home or interior project in mind? Start a conversation with us.
    </p>

    <a
      className="button button-light"
      href="https://wa.me/919526500070"
      target="_blank"
      rel="noreferrer"
    >
      Start a conversation <ArrowUpRight size={16} />
    </a>
  </div>
</section>

</main>

<footer className="footer">
  <div className="footer-main">

    <div>
      <span className="footer-logo">IN SPAZIO</span>
      <p>
        Interior Designing Construction<br />
        & Home Solution
      </p>
    </div>

    <div className="footer-links">
      <span>Explore</span>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>

    <div className="footer-links">
      <span>Connect</span>

      <a href="tel:+919526500070">
        +91 95265 00070
      </a>

      <a
        href="https://wa.me/919526500070"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a
        href="https://maps.app.goo.gl/DwmiYqRW6tw3BhUr7"
        target="_blank"
        rel="noreferrer"
      >
        Google Maps
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <span>
      © 2026 IN SPAZIO Interior Designing Construction & Home Solution
    </span>

    <span>
      Hyderabad, Telangana
    </span>
  </div>
</footer>

{lightboxIndex !== null && (
  <div
    className="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Project image viewer"
  >
    <button
      className="lightbox-close"
      onClick={() => setLightboxIndex(null)}
      aria-label="Close"
    >
      <X size={23} />
    </button>

    <button
      className="lightbox-prev"
      onClick={() => moveLightbox(-1)}
      aria-label="Previous image"
    >
      <ChevronLeft size={27} />
    </button>

    <div className="lightbox-image-wrap">
      <img
        src={projects[lightboxIndex].image}
        alt={projects[lightboxIndex].title}
      />

      <p>
        {projects[lightboxIndex].category}
        <span>·</span>
        {projects[lightboxIndex].title}
      </p>
    </div>

    <button
      className="lightbox-next"
      onClick={() => moveLightbox(1)}
      aria-label="Next image"
    >
      <ChevronRight size={27} />
    </button>

    <div className="lightbox-count">
      {String(lightboxIndex + 1).padStart(2, '0')}
      {' / '}
      {String(projects.length).padStart(2, '0')}
    </div>
  </div>
)}

</div>
);
}

export default App;
