import { FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';
import Image from 'next/image';

// ─── Shared class constants ───────────────────────────
const navLink = 'no-underline text-[#cccccc] text-[15px] font-medium transition-colors duration-200 hover:text-white flex items-center justify-center gap-3 w-full';
const colHeading = 'font-ebgaramond font-medium text-2xl text-white mb-5 text-center w-full';
const socialLink = 'text-[#aaaaaa] hover:text-white transition-colors duration-200 bg-[#222] p-2.5 rounded-full hover:bg-[#333]';
const legalLink = 'no-underline text-[#888] hover:text-white transition-colors text-[13px] font-medium';

const SOCIAL_LINKS = [
  { Icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  { Icon: FiInstagram, label: 'Instagram', href: '#' },
  { Icon: FiFacebook, label: 'Facebook', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white flex flex-col rounded-t-[60px] w-full px-6 pt-12 pb-6 sm:px-10 sm:pt-14 sm:pb-8 md:px-16 md:pt-16 md:pb-8 border-t border-[#222]">

      {/* ── Top section: Links & Contact ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-[1100px] w-full mx-auto mb-12 md:mb-16">

        {/* Company */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full">
            <h4 className={`${colHeading} !mb-4`}>Company</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 items-center w-full">
              {['About Us', 'Careers', 'Our Team', 'Case Studies', 'Contact'].map(item => (
                <li key={item} className="w-full">
                  <a href="#" className={navLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full">
            <h4 className={`${colHeading} !mb-4`}>Services</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 items-center w-full">
              {['SEO Optimization', 'Social Media Marketing', 'PPC Campaigns', 'Content Creation', 'Web Development'].map(item => (
                <li key={item} className="w-full">
                  <a href="#" className={navLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center w-full">
            <h4 className={`${colHeading} !mb-4`}>Resources</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 items-center w-full">
              {['Marketing Blog', 'Free SEO Audit', 'Industry Reports', 'Talk to Experts', 'Help Center'].map(item => (
                <li key={item} className="w-full">
                  <a href="#" className={navLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* ── Brand lockup ── */}
      <div className="flex items-center justify-center mb-8 md:mb-12 w-full overflow-hidden px-4">
        <Image
          src="/halalogofooter.png"
          alt="Hala Technologies"
          width={1000}
          height={200}
          className="w-full max-w-[1000px] h-auto object-contain"
          priority
        />
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-[#333] pt-6 md:pt-8 gap-6 md:gap-0 max-w-[1200px] mx-auto">
        <div className="flex gap-4 md:gap-6 items-center justify-center flex-wrap">
          <span className="text-[13px] font-semibold text-[#aaa] tracking-wide uppercase">&copy; Hala Technologies 2026</span>
          <div className="hidden md:block w-1 h-1 rounded-full bg-[#555]"></div>
          {['Terms', 'Privacy', 'Data Controls'].map(label => (
            <a key={label} href="#" className={legalLink}>{label}</a>
          ))}
        </div>
        <div className="flex gap-3 justify-center">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={`Follow us on ${label}`} className={socialLink}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
