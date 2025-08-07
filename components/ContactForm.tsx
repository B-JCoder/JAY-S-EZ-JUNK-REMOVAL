"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Link, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
  <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your <span className="text-neon">Free Estimate</span>
              </h2>
              <p className="text-xl text-gray-300">
                Ready to get started? Contact us today!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
             <Card className="glass-card p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10">
      <CardContent className="p-0">
       <form
  action="https://formsubmit.co/Jayson@jaysezjunkremoval.com"
  method="POST"
  className="space-y-6"
>
  {/* Hidden input for redirect after success */}
  <input type="hidden" name="_next" value="https://jaysezjunkremoval.com/thank-you" />
  <input type="hidden" name="_captcha" value="false" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">
                Name *
              </label>
              <Input
                required
                type="text"
                name="name"
                className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Phone *
              </label>
              <Input
                required
                type="tel"
                name="phone"
                className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                placeholder="(214) 555-0123"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <Input
              type="email"
              name="email"
              className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Service Needed
            </label>
            <Select name="service">
              <SelectTrigger className="glass-card border-white/20 text-white focus:border-neon rounded-xl">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="glass-card border-white/20">
                <SelectItem value="junk-removal">Junk Removal</SelectItem>
                <SelectItem value="demolition">Demolition</SelectItem>
                <SelectItem value="dumpster-rental">Dumpster Rental</SelectItem>
                <SelectItem value="skid-steer">Skid Steer Work</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <Textarea
              name="message"
              className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
              placeholder="Tell us about your project..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg py-4 rounded-xl neon-glow-hover transition-all duration-300"
          >
            {submitted ? "Sending..." : "Submit Request"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="glass-card p-8 rounded-2xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Phone</p>
                          <p className="text-gray-300">214-258-3511</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Email</p>
                          <p className="text-gray-300">
                            Jayson@jaysezjunkremoval.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Location</p>
                          <p className="text-gray-300">Red Oak, TX</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card p-8 rounded-2xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                       
                       
                       
      <a
  href="https://www.facebook.com/profile.php?id=61576618977663"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
  >
    <Facebook className="w-5 h-5" />
  </Button>
</a>

<a
  href="https://www.instagram.com/jaysezjunk/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
  >
    <Instagram className="w-5 h-5" />
  </Button>
</a>

                      <Button
                        size="lg"
                        className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
                      >
                        G
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
