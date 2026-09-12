import logo from "../assets/logo-text.png"
const Footer = () => {
  return (
    <footer className="border-t border-neutral-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Logo" />
            
          </div>
          <p className="text-sm text-neutral-500 max-w-xs">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-neutral-500">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-neutral-400 tracking-wide mb-3">PRODUCT</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-neutral-400 tracking-wide mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-neutral-400 tracking-wide mb-3">LEGAL</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-100 py-5 px-6 flex flex-col sm:flex-row justify-between max-w-6xl mx-auto text-xs text-neutral-400">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;