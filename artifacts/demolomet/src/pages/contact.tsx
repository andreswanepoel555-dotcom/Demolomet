import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  phone: z.string().min(10, "Valid contact number required"),
  email: z.string().email("Valid email required"),
  location: z.string().min(3, "Location is required"),
  message: z.string().min(10, "Please provide details about your project")
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | Demolomet";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      location: "",
      message: ""
    }
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted locally:", data);
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            Get a <span className="text-primary">Quote</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Ready to tear it down or clear it out? Contact Dalmain today. We service the entire North West province.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Details & Maps */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-6">Direct Contact</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Contact Person</p>
                    <p className="text-white font-medium">Dalmain</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-lg">
                  <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Phone / WhatsApp</p>
                    <p className="text-white font-medium">072 879 4946</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-lg">
                  <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                    <p className="text-white font-medium">dalmain@demolomet.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-wide">Our Locations</h2>
              
              <div className="bg-card border border-border p-4 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-white">Plot 523 Van Der Hoff Ave, Rietfontein, Hartbeespoort Dam</p>
                </div>
                <div className="w-full bg-muted rounded overflow-hidden">
                  <iframe
                    title="Hartbeespoort Location"
                    src="https://www.google.com/maps?q=Plot+523+Van+Der+Hoff+Ave,+Rietfontein,+Hartbeespoort+Dam&output=embed"
                    width="100%" height="250" style={{border:0}} allowFullScreen loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-card border border-border p-4 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <p className="text-white">15 Theuns Mulder Street, Brits Industrial, Brits</p>
                </div>
                <div className="w-full bg-muted rounded overflow-hidden">
                  <iframe
                    title="Brits Location"
                    src="https://www.google.com/maps?q=15+Theuns+Mulder+Street,+Brits+Industrial,+Brits&output=embed"
                    width="100%" height="250" style={{border:0}} allowFullScreen loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border p-8 rounded-lg h-fit sticky top-24">
            <h2 className="text-2xl font-black uppercase tracking-wide mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We've received your details and Dalmain will be in touch with you shortly.</p>
                <Button 
                  className="mt-8" 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" className="bg-background border-border h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Surname</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" className="bg-background border-border h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="072 123 4567" className="bg-background border-border h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-background border-border h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Site Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Rustenburg, North West" className="bg-background border-border h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about the structure, scrap metal volume, or site clearing required..." 
                            className="bg-background border-border min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-14 text-lg font-bold uppercase tracking-widest" data-testid="button-submit">
                    Send Request
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
