import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacts" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          
          <div className="md:w-1/3">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
              MAKIDS
            </h2>
            <div className="space-y-4">
               <div className="flex items-start gap-4 text-slate-600">
                  <MapPin className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-slate-900">{CONTACT_INFO.zip}, {CONTACT_INFO.city}</p>
                    <p>{CONTACT_INFO.address}</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 text-slate-600">
                  <Phone className="w-6 h-6 text-brand-500 flex-shrink-0" />
                  <p className="font-medium text-slate-900">{CONTACT_INFO.phone}</p>
               </div>
               <div className="flex items-center gap-4 text-slate-600">
                  <Mail className="w-6 h-6 text-brand-500 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-slate-900 hover:text-brand-600 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
               </div>
            </div>
          </div>

          <div className="md:w-2/3">
             {/* Map Placeholder */}
             <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative group">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40268.80295842831!2d47.817349949999995!3d52.03348005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4115b0453730e9d9%3A0x86733276634863f6!2z0JHQsNC70LDQutC-0LLQviwg0KHQsNGA0LDRgtC-0LLRgdC60LDRjyDQvtCx0Lsu!5e0!3m2!1sru!2sru!4v1716300000000!5m2!1sru!2sru" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-lg text-xs font-bold shadow-md">
                    Саратовская область
                </div>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} MAKIDS. Все права защищены.</p>
            <p>Детская одежда оптом от производителя.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;