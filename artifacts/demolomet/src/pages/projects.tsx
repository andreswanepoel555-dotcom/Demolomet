import { useEffect } from "react";
import { motion } from "framer-motion";

import p1b from "@/assets/proj1-before.png";
import p1a from "@/assets/proj1-after.png";
import p2b from "@/assets/proj2-before.png";
import p2a from "@/assets/proj2-after.png";
import p3b from "@/assets/proj3-before.png";
import p3a from "@/assets/proj3-after.png";
import p4b from "@/assets/proj4-before.png";
import p4a from "@/assets/proj4-after.png";

const projects = [
  { id: 1, title: "Factory Demolition", before: p1b, after: p1a },
  { id: 2, title: "Scrap Yard Clearance", before: p2b, after: p2a },
  { id: 3, title: "Warehouse Levelling", before: p3b, after: p3a },
  { id: 4, title: "Industrial Silo Removal", before: p4b, after: p4a },
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Demolomet";
  }, []);

  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Completed <span className="text-primary">Work</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            A portfolio of destruction and preparation. Hover over the images below to reveal the transformation from chaos to a clean slate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-[16/10] overflow-hidden cursor-crosshair">
                {/* After Image (Background) */}
                <img 
                  src={proj.after} 
                  alt={`${proj.title} After`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Before Image (Foreground, fades out on hover) */}
                <img 
                  src={proj.before} 
                  alt={`${proj.title} Before`} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20 transition-opacity duration-500 group-hover:opacity-0">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  After
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">{proj.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">Hover image to see results</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
