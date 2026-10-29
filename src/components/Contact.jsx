import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (field, value) => {
    if (!value.trim()) return 'This field is required.';
    if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors(errs => ({ ...errs, [name]: validate(name, value) }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setErrors(errs => ({ ...errs, [name]: validate(name, value) }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(form).forEach(([k, v]) => {
      newErrors[k] = validate(k, v);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      content: <a href="mailto:business.bdshroud@gmail.com">business.bdshroud@gmail.com</a>
    },
    {
      icon: 'fas fa-globe',
      label: 'Website',
      content: (
        <a href="https://next-gentech.co.uk" target="_blank" rel="noopener noreferrer">
          next-gentech.co.uk
        </a>
      )
    },
    {
      icon: 'fab fa-x-twitter',
      label: 'Twitter / X',
      content: (
        <a href="https://twitter.com/bdShroud" target="_blank" rel="noopener noreferrer">
          @Mohammad_Yasin
        </a>
      )
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      content: <span>Bangladesh</span>
    }
  ];

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact <span className="accent">Me</span></h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Work Together!</h3>
            <p>
              Have a project in mind, need a developer, or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="contact-items">
              {contactItems.map(item => (
                <div className="contact-item" key={item.label}>
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">{item.label}</span>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/bdshroud"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://next-gentech.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Website"
              >
                <i className="fas fa-globe"></i>
              </a>
              <a
                href="https://twitter.com/bdShroud"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter/X"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="mailto:business.bdshroud@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  <span className="form-error">{errors.name}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@email.com"
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  <span className="form-error">{errors.email}</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Project Inquiry"
                  className={errors.subject ? 'error' : ''}
                  required
                />
                <span className="form-error">{errors.subject}</span>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project or idea..."
                  className={errors.message ? 'error' : ''}
                  required
                ></textarea>
                <span className="form-error">{errors.message}</span>
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                <i className="fas fa-paper-plane"></i>
                <span className="btn-text">{sending ? 'Sending…' : 'Send Message'}</span>
              </button>

              {success && (
                <div className="form-success show">
                  <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
