import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#757575] py-[70px] px-[45px]">
      <div className="max-w-[1000px] mx-auto">
        <p className="mb-8">Questions? Contact us.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Cancel Membership</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Account</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Netflix Shop</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:underline">Impressum</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <select className="bg-transparent border border-[#757575] text-[#757575] px-4 py-1 rounded">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        <p className="mt-6">Netflix Germany</p>
      </div>
    </footer>
  );
};

export default Footer;