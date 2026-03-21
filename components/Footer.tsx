import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-neutral-dark)] text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="bg-white inline-block rounded-lg px-3 py-1">
              <Image src="/images/logo.png" alt="IV-LYTES" width={140} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              Kingwood's premier medical wellness clinic led by a board-certified physician.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Reviews</Link></li>
              <li><a href="https://www.vagaro.com/us04/ivlytes" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Book Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5" shrink-0 />
                <span>320 Kingwood Executive Dr<br/>Suite D<br/>Kingwood, TX 77339</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <a href="tel:+12816669211" className="hover:text-white transition-colors">(281) 666-9211</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-heading text-lg">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-slate-700 pb-1"><span>Mon - Thu</span> <span className="text-white">9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between border-b border-slate-700 pb-1 pt-1"><span>Friday</span> <span className="text-white">9:00 AM - 1:00 PM</span></li>
              <li className="flex justify-between pt-1"><span>Sat - Sun</span> <span className="text-slate-500">Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IV-LYTES & Wellness. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        <p className="mt-8 text-[10px] text-slate-600 text-center max-w-4xl mx-auto uppercase tracking-wider">
          Disclaimer: These statements have not been evaluated by the FDA. Our services are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </footer>
  );
}
