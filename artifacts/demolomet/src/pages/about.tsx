import { useEffect } from "react";
import { motion } from "framer-motion";
import { HardHat, ShieldAlert, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Demolomet";
  }, []);

  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6"
          >
            The Force Behind The <span className="text-primary">Clearing</span>
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Led by Dalmain, Demolomet is a North West-based enterprise built on the principles of hard work, unyielding reliability, and structural expertise. We are the company developers call when a site is too tough, too messy, or too dangerous for standard contractors.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-10 rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            <h2 className="text-3xl font-black uppercase tracking-wide mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Demolomet started with a simple observation: the North West province needed a scrap and demolition contractor that actually delivered on its promises. No delays, no excuses. Just raw capability.
              </p>
              <p>
                Over the years, we've grown our fleet of heavy machinery and assembled a crew of seasoned professionals who know how to bring a structure down safely. We've cleared massive industrial sites and hauled thousands of tons of scrap metal, turning urban decay into future potential.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white">Uncompromising Safety</h3>
                <p className="text-muted-foreground">Demolition is dangerous work. We mitigate risk through meticulous planning, strict site control, and highly trained operators.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                <HardHat className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white">Professional Muscle</h3>
                <p className="text-muted-foreground">We invest heavily in our machinery. From massive excavators to specialized cutting tools, we bring the right equipment for maximum efficiency.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-2 text-white">Proven Reliability</h3>
                <p className="text-muted-foreground">When Dalmain and the Demolomet crew commit to a timeline, we stick to it. Your construction schedule depends on our clearing speed.</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
