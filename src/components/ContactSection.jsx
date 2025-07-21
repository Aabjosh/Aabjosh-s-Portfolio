import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import links from "@/links.json"

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to have a chat? Schedule a call? Work on a project? I'd love to talk to you!
        </p>

        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="space-y-8 text-center">
            <div className="space-y-6 justify-center items-center">
              <div className="flex items-center items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> My Email:</h4>
                  <a
                    href={links.email.address}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {links.email.name}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> My Phone Number:</h4>
                  <a
                    href="tel:+15195056171"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (519) 505-6171
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Where I'm Based</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kitchener-Waterloo, ON, Canada
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> My LinkedIn</h4>
                  <a 
                    href={links.linkedin.address}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {links.linkedin.name}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Instagram className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> My Instagram</h4>
                  <a href={links.instagram.address}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {links.instagram.name}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Shoot me a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="LeBron Raymone James Sr..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="lebronthegoat@lakers.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-md font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Howdy, I'm reaching out because..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};
