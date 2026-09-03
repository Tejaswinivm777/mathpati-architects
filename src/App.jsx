import "./App.css";

const projects = [
{
title: "Modern Residence",
type: "RESIDENTIAL ARCHITECTURE",
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
size: "wide",
},
{
title: "Contemporary Villa",
type: "LUXURY DESIGN",
image:
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Elegant Interiors",
type: "INTERIOR DESIGN",
image:
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Minimal Living",
type: "INTERIOR ARCHITECTURE",
image:
"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
size: "tall",
},
{
title: "Urban Form",
type: "MODERN ARCHITECTURE",
image:
"https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Creative Workspace",
type: "COMMERCIAL INTERIORS",
image:
"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Warm Living Space",
type: "RESIDENTIAL INTERIORS",
image:
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
size: "wide",
},
{
title: "Modern Kitchen",
type: "INTERIOR DESIGN",
image:
"https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Calm Bedroom",
type: "PRIVATE SPACES",
image:
"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Luxury Villa",
type: "RESIDENTIAL DESIGN",
image:
"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
size: "wide",
},
{
title: "Open Spaces",
type: "CONTEMPORARY DESIGN",
image:
"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
size: "normal",
},
{
title: "Modern Facade",
type: "ARCHITECTURAL DESIGN",
image:
"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85",
size: "tall",
},
];

const services = [
{
number: "01",
title: "Architectural Design",
text: "Modern and functional architecture designed around your ideas and lifestyle.",
},
{
number: "02",
title: "Interior Design",
text: "Beautiful interiors where functionality, comfort and aesthetics come together.",
},
{
number: "03",
title: "Residential Projects",
text: "Homes and villas designed to create meaningful and inspiring living experiences.",
},
{
number: "04",
title: "Commercial Spaces",
text: "Professional spaces designed for businesses, productivity and people.",
},
];

function App() {
return ( <div className="website">

```
  {/* NAVBAR */}
  <header className="navbar">
    <a href="#home" className="logo">
      <div className="logo-box">M</div>

      <div>
        <h2>Mathpati</h2>
        <p>ARCHITECTS</p>
      </div>
    </a>

    <nav className="navigation">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" className="nav-button">
      Start a Project
    </a>
  </header>

  <main>

    {/* HERO */}
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="eyebrow">
          ARCHITECTURE • INTERIORS • DESIGN
        </p>

        <h1>
          Designing Spaces
          <br />
          <span>That Inspire.</span>
        </h1>

        <p className="hero-description">
          Mathpati Architects creates thoughtful, modern and functional
          spaces where architecture meets imagination.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects <span>↗</span>
          </a>

          <a href="#contact" className="outline-btn">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div>
          <strong>3+</strong>
          <span>Years of Experience</span>
        </div>

        <div>
          <strong>04</strong>
          <span>Design Services</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Ideas & Possibilities</span>
        </div>
      </div>
    </section>

    {/* IMAGE STRIP */}
    <section className="image-strip">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"
        alt="Modern house architecture"
      />

      <img
        src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1000&q=85"
        alt="Modern villa"
      />

      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"
        alt="Modern interior"
      />

      <img
        src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85"
        alt="Interior architecture"
      />
    </section>

    {/* ABOUT */}
    <section className="about section" id="about">
      <div className="section-top">
        <span>01</span>
        <p>ABOUT MATHPATI ARCHITECTS</p>
      </div>

      <div className="about-grid">
        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1300&q=85"
            alt="Architecture building"
          />

          <div className="experience-badge">
            <strong>3+</strong>
            <span>
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        <div className="about-content">
          <h2>
            Architecture is more
            <br />
            than buildings.
            <br />
            <span>It is an experience.</span>
          </h2>

          <p>
            Mathpati Architects is led by <strong>Praveen Mathpati</strong>,
            with more than 3 years of experience in architecture, interior
            design and creative space planning.
          </p>

          <p>
            Professional experience and exposure includes VK Giridar
            Architects in Delhi, Hafeez Contractor and Ganesha Interiors.
          </p>

          <a href="#contact" className="simple-link">
            Let's create something meaningful <span>↗</span>
          </a>
        </div>
      </div>
    </section>

    {/* EXPERIENCE */}
    <section className="experience">
      <div className="experience-image"></div>

      <div className="experience-content">
        <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>

        <h2>
          Learning from spaces.
          <br />
          <span>Designing for people.</span>
        </h2>

        <div className="experience-list">
          <div className="experience-row">
            <span>01</span>
            <h3>VK Giridar Architects</h3>
            <p>Delhi</p>
          </div>

          <div className="experience-row">
            <span>02</span>
            <h3>Hafeez Contractor</h3>
            <p>Architectural Experience</p>
          </div>

          <div className="experience-row">
            <span>03</span>
            <h3>Ganesha Interiors</h3>
            <p>Interior Design</p>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="services section" id="services">
      <div className="section-top">
        <span>02</span>
        <p>WHAT WE DO</p>
      </div>

      <div className="services-heading">
        <h2>
          Spaces designed
          <br />
          <span>with purpose.</span>
        </h2>

        <p>
          Every space starts with understanding the people who will use it.
          We combine creativity, functionality and modern design.
        </p>
      </div>

      <div className="service-image-grid">
        <img
          src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=900&q=85"
          alt="Architecture service"
        />

        <img
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85"
          alt="Interior design service"
        />

        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85"
          alt="Villa architecture"
        />

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
          alt="Commercial design"
        />
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <b>↗</b>
          </div>
        ))}
      </div>
    </section>

    {/* FEATURE IMAGE */}
    <section className="feature-image">
      <div className="feature-overlay">
        <p>DESIGN WITHOUT LIMITS</p>

        <h2>
          Every space has
          <br />
          <span>a story to tell.</span>
        </h2>
      </div>
    </section>

    {/* PROJECTS */}
    <section className="projects section" id="projects">
      <div className="section-top">
        <span>03</span>
        <p>ARCHITECTURE & INTERIOR INSPIRATION</p>
      </div>

      <div className="projects-heading">
        <h2>
          Spaces.
          <br />
          <span>Possibilities.</span>
        </h2>

        <p>
          A visual collection inspired by modern architecture, interiors,
          residential spaces and contemporary design.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.size}`}
            key={project.title}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* MORE VISUALS */}
    <section className="visual-section">
      <div className="visual-text">
        <p className="eyebrow">THE LANGUAGE OF DESIGN</p>

        <h2>
          Light.
          <br />
          Material.
          <br />
          <span>Space.</span>
        </h2>

        <p>
          Great architecture creates a connection between people, spaces,
          materials and the environment around them.
        </p>
      </div>

      <div className="visual-images">
        <img
          className="visual-image-one"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
          alt="Modern office architecture"
        />

        <img
          className="visual-image-two"
          src="https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=900&q=85"
          alt="Modern home interior"
        />
      </div>
    </section>

    {/* CTA */}
    <section className="cta-section">
      <div className="cta-overlay">
        <p>HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's design
          <br />
          <span>something remarkable.</span>
        </h2>

        <a href="#contact">
          Start a Conversation ↗
        </a>
      </div>
    </section>

    {/* CONTACT */}
    <section className="contact section" id="contact">
      <div className="section-top">
        <span>04</span>
        <p>GET IN TOUCH</p>
      </div>

      <div className="contact-grid">
        <div>
          <h2>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p>
            Whether you are planning a home, interior or commercial space,
            we would love to hear about your ideas.
          </p>
        </div>

        <div className="contact-details">
          <a href="tel:+918792621090" className="contact-item">
            <span>PHONE</span>
            <strong>+91 87926 21090</strong>
          </a>

          <a
href="https://mail.google.com/mail/?view=cm&fs=1&to=pgmathpati222@gmail.com"
target="_blank"
rel="noreferrer"
className="contact-item"

>

<span>EMAIL</span> <strong>pgmathpati222@gmail.com</strong> </a>


          <a
            href="https://wa.me/918792621090"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp Us <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  {/* FOOTER */}
  <footer className="footer">
    <a href="#home" className="logo">
      <div className="logo-box">M</div>

      <div>
        <h2>Mathpati</h2>
        <p>ARCHITECTS</p>
      </div>
    </a>

    <p>Architecture • Interiors • Design</p>

    <span>© 2026 Mathpati Architects</span>
  </footer>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/918792621090"
    target="_blank"
    rel="noreferrer"
    className="floating-whatsapp"
  >
    WhatsApp
  </a>
</div>


);
}

export default App;
