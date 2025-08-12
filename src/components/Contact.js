import { Github, Linkedin, Mail} from 'lucide-react';


export default function Contact() {
  return (
 <section id="contact" className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Get in Touch</h2>
          <p className="text-lg text-slate-400 mb-8">
            I'm currently seeking new opportunities and exciting collaborations. Please feel free to reach out to me!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="GitHub">
              <Github size={36} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={36} />
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Email">
              <Mail size={36} />
            </a>
          </div>
        </div>
      </section>
  );
}
