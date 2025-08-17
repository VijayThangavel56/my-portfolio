import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = ({ email, phone, location }) => (
  <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-lg text-slate-300 hover:text-fuchsia-400 transition-colors"
        >
          <Mail size={24} /> {email}
        </a>
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-lg text-slate-300 hover:text-fuchsia-400 transition-colors"
        >
          <Phone size={24} /> {phone}
        </a>
        <div className="flex items-center gap-2 text-lg text-slate-300">
          <MapPin size={24} /> {location}
        </div>
      </div>
    </div>
  </div>
);