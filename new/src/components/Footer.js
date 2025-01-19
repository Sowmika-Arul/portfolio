import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white-300 py-12" style={{backgroundColor : '#00A97F'}}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center md:text-left">
        {/* Column 1: Welcome Section */}
        <div>
          <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-gray-100 font-bold">
            I’m passionate about building innovative solutions and sharing my journey in tech. Let’s connect and grow together!
          </p>
          <p className="mt-2 font-medium">Chasing Dreams 🚀</p>
          <p className="mt-2 text-sm">Turning ideas into reality, one project at a time.</p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h2 className="text-2xl font-semibold">Services</h2>
          <ul className="mt-4 list-disc list-inside text-white-400 space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Machine Learning</li>
            <li>Devops</li>
          </ul>
        </div>

        {/* Column 3: Get in Touch */}
        <div>
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <ul className="mt-4 space-y-2">
            <li>📞 +91 9345847062</li>
            <li>📧 sowmikaarulkumar@gmail.com</li>
            <li>📍 Tiruchengode, TamilNadu, India</li>
          </ul>
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-200 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-200 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:contact@myportfolio.com"
              className="text-3xl hover:text-gray-200 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-5 border-t border-white-600 pt-2 text-center">
        <p className="text-white-400">
          © 2025 | Built with passion by{' '}
          <span className="text-gray-100 font-bold">Sowmika Arul</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
