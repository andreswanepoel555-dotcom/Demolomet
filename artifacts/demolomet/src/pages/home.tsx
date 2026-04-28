import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Hammer, Truck } from "lucide-react";
import heroImg from "@/assets/hero.png";

const cycleWords = ["Experts", "Specialists", "Professionals", "Contractors", "Solutions"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    document.title = "Demolomet | South African Scrap Metal & Demolition Experts";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Demolomet provides professional scrap metal collection, demolition, and site clearing services in the North West province, South Africa.");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % cycleWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Demolition site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Demolomet – Scrap Metal & Demolition{" "}
            <span className="text-primary block mt-2 h-[80px]">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {cycleWords[wordIndex]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-medium"
          >
            We show up when others won't. Tough, reliable, and professional industrial clearing in the North West.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/contact">
              <Button size="lg" className="h-16 px-12 text-lg font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6"
            >
              Built for the hardworking people who tear things down to build something better.
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Heavy-duty solutions for industrial sites, commercial properties, and large-scale projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Hammer, title: "Demolition", desc: "Safe, controlled taking down of commercial and industrial structures." },
              { icon: Truck, title: "Scrap Metal", desc: "Efficient collection and processing of heavy industrial scrap." },
              { icon: HardHat, title: "Site Clearing", desc: "Complete levelling and preparation of land for new construction." },
              { icon: ShieldCheck, title: "Industrial Cleanup", desc: "Rigorous cleaning and remediation of large-scale facilities." },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-background border-border/50 h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="uppercase font-bold tracking-widest border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background noise/texture could go here */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Real Muscle. Real Reliability.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                In the scrap and demolition industry, talk is cheap. You need a contractor who brings the right machinery, the right expertise, and the determination to get the job done no matter how tough the conditions.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Uncompromising Safety", desc: "Strict adherence to safety protocols protects your site and our crew." },
                  { title: "Heavy Machinery", desc: "A fleet of professional-grade equipment ready for any scale." },
                  { title: "Local Expertise", desc: "Deep knowledge of North West province industrial requirements." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary mt-1">
                      <div className="w-3 h-3 bg-primary rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold uppercase">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-card rounded-lg border border-border p-8 flex flex-col justify-center text-center">
                <span className="text-8xl font-black text-primary mb-4 opacity-50">15+</span>
                <span className="text-2xl font-bold uppercase tracking-widest text-white">Years of Industrial Experience</span>
                <div className="mt-8 w-16 h-1 bg-primary mx-auto"></div>
                <p className="mt-6 text-muted-foreground">Trusted by South Africa's leading commercial and industrial enterprises.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
