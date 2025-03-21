
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/dishagiri23", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Dev_DishaGiri", label: "Twitter" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:dishagiri09170@gmail.com", label: "Email" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/disha-giri-414a72314/", label: "LinkedIn" },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground">
              Your personal video bookmark manager with powerful tagging capabilities.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:dishagiri09170@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  dishagiri09170@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} VideoTagGuru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
