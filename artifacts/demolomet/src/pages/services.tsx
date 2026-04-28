import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import imgDemo from "@/assets/service-demo.png";
import imgScrap from "@/assets/service-scrap.png";
import imgSite from "@/assets/service-site.png";
import imgCleanup from "@/assets/service-cleanup.png";

const services = [
  {
    id: "demolition",
    title: "Demolition Services",
    description: "Expert demolition for commercial buildings, industrial facilities, and large-scale concrete structures. We utilize heavy machinery and controlled techniques to bring down structures safely, efficiently, and with minimal disruption to surrounding areas. Our team handles the entire process from planning and permits to final execution.",
    image: imgDemo,
    features: ["Commercial buildings", "Industrial silos & factories", "Concrete crushing", "Controlled teardowns"]
  },
  {
    id: "scrap",
    title: "Scrap Metal Collection",
    description: "We are the premier buyers and collectors of industrial scrap metal in the North West. From heavy steel beams and machinery to large volumes of non-ferrous metals, we provide competitive pricing and efficient removal. We bring the transport and the cranes—you just point us to the metal.",
    image: imgScrap,
    features: ["Heavy steel & iron", "Decommissioned machinery", "Copper, aluminum & brass", "On-site weighing & collection"]
  },
  {
    id: "site-clearing",
    title: "Site Clearing",
    description: "Transforming chaotic, overgrown, or debris-filled plots into clean, level ground ready for development. Our site clearing services remove vegetation, rubble, boulders, and unwanted topsoil. We leave your site as a blank canvas for contractors and builders.",
    image: imgSite,
    features: ["Rubble removal", "Vegetation clearing", "Ground leveling", "Bulk earthworks"]
  },
  {
    id: "cleanup",
    title: "Industrial Cleanup",
    description: "Post-operation and post-demolition cleanup for massive industrial spaces. We handle the gritty work of removing hazardous waste, oil spills, metallic debris, and general industrial refuse, restoring facilities to a safe and manageable state.",
    image: imgCleanup,
    features: ["Warehouse stripping", "Factory floor remediation", "Hazardous debris removal", "End-of-lease clearing"]
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Services | Demolomet";
  }, []);

  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Industrial <span className="text-primary">Services</span>
          </h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground">
            We specialize in high-impact projects that require heavy machinery, iron will, and strict safety standards. If it needs to be torn down, cleared out, or hauled away, Demolomet is your contractor.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-black uppercase tracking-wide mb-6">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white font-medium">
                      <div className="w-2 h-2 bg-primary rounded-sm flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="uppercase font-bold tracking-widest">
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
