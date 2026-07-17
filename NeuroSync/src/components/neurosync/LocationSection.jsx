import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ADDRESS = "105 Fulham Rd, Mundingburra QLD 4812";
const PHONE = "0466 341 420";
const MAPS_DIR = "https://www.google.com/maps/dir/?api=1&destination=105+Fulham+Rd+Mundingburra+QLD+4812";
const MAP_EMBED =
  "https://maps.google.com/maps?q=105%20Fulham%20Road%2C%20Mundingburra%20QLD%204812&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 lg:py-32 bg-[#F8FAFC] border-b border-[#003EB3]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#001529]/30 uppercase">
            Find Us
          </span>
          <div className="flex-1 h-px bg-[#003EB3]/5" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-3xl border border-[#003EB3]/8 shadow-sm p-8 flex flex-col"
          >
            <h2 className="font-heading font-extrabold text-3xl text-[#001529] tracking-tight mb-2">
              Visit the <span className="text-gradient">Centre</span>
            </h2>
            <p className="text-[#001529]/55 leading-relaxed mb-8">
              NeuroSync sessions are held at NQ Family Therapy Centre in Mundingburra,
              central Townsville. Easy parking on-site.
            </p>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#003EB3]/6 flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-[#003EB3]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#003EB3]/50 uppercase mb-1">Address</p>
                  <p className="text-[#001529] font-medium">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#003EB3]/6 flex items-center justify-center shrink-0">
                  <Phone size={17} className="text-[#003EB3]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#003EB3]/50 uppercase mb-1">Reception</p>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[#001529] font-medium hover:text-[#003EB3] transition-colors">
                    {PHONE}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#003EB3]/6 flex items-center justify-center shrink-0">
                  <Clock size={17} className="text-[#003EB3]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#003EB3]/50 uppercase mb-1">Hours</p>
                  <p className="text-[#001529] font-medium">By appointment</p>
                  <p className="text-sm text-[#001529]/50">Book online to view live availability</p>
                </div>
              </li>
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#003EB3] rounded-full hover:bg-[#002d8a] transition-all group"
              >
                <Calendar size={16} />
                Book a Session
              </Link>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#003EB3] bg-[#003EB3]/5 rounded-full hover:bg-[#003EB3]/10 transition-all"
              >
                <Navigation size={15} />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-[#003EB3]/8 shadow-sm min-h-[380px] lg:min-h-full"
          >
            <iframe
              src={MAP_EMBED}
              title="NQ Family Therapy Centre location map"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}