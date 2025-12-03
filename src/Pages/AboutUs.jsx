import React from "react";
import { motion } from "framer-motion";

const Highlight = ({ children }) => (
  <span className="relative whitespace-nowrap">
    <span className="absolute inset-0 -skew-x-6 bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-orange-500/20 blur-sm" />
    <span className="relative font-bold text-gray-900">{children}</span>
  </span>
);

const StatCard = ({ number, label, suffix = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center p-6"
  >
    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2">
      {number}{suffix}
    </div>
    <div className="text-gray-600 font-medium">{label}</div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full  text-gray-800 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <section className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg shadow-gray-200/50 border border-gray-100 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                ESTABLISHED 2013
              </span>
            </div>
            
            <h1 className="text-6xl font-bold md:text-8xl mb-6">
              About <Highlight>Us</Highlight>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Asian Import and Export Co., LTD is in the business of supplying
              high-quality food products, but it's what we do with our success
              that defines us. Treating our team members like family and
              supporting the communities we all call home is our priority.
            </p>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            <StatCard number="10+" label="Years Experience" />
            <StatCard number="50+" label="Countries Served" />
            <StatCard number="5000+" label="Products" />
            <StatCard number="99.8" label="Satisfaction Rate" suffix="%" />
          </div>
        </motion.section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-2/5">
                  <div className="relative group">
                    <img
                      src="/assets/certificate.png"
                      alt="Asian Import and Export Co., LTD"
                      className="rounded-2xl shadow-lg w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="lg:w-3/5 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 2013, Asian Import and Export Co., LTD has grown from a 
                    local trading company to an international powerhouse in food product 
                    distribution. Our journey began with a simple mission: to bring the 
                    finest quality products to global markets.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We offer complete solutions for distributing quality food products 
                    across Asia, America, Australia, Europe, South Africa, CIS countries, 
                    Middle East, and Eastern Europe.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Partnering with renowned shipping lines, we ensure timely delivery 
                    using both dry and refrigerated containers while maintaining 
                    stringent quality control, grading, packaging, and handling standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Products & Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-amber-100/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Raw Jute & Jute Goods",
                  "Genuine Leathers",
                  "Agro Commodities",
                  "Terracotta Tiles",
                  "Plastic Scrap/Flakes",
                  "Food Products"
                ].map((product, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{product}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Global Reach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Global Reach
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Asia", "America", "Australia", "Europe", 
                  "South Africa", "CIS Countries", "Middle East", "Eastern Europe"
                ].map((region, index) => (
                  <motion.div
                    key={region}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-amber-50 hover:to-emerald-50 transition-all duration-300 group border border-gray-100"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {region}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mission & Vision Stack */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg border border-amber-100/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mr-4 shadow-lg">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated to collection, handling, processing, marketing, and exportation 
                  of quality commodities while maintaining sustainable business practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-emerald-100/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading competitive company in agricultural commodity production 
                  and exportation, adhering to international quality and safety standards.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-600 via-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The principles that guide our business and define our culture
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                desc: "Maintaining the highest standards in all our products, services, and business practices",
                icon: "✓",
                color: "from-emerald-500 to-green-500"
              },
              {
                title: "Integrity First",
                desc: "Building lasting relationships through transparency, honesty, and ethical conduct",
                icon: "🤝",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Innovation Driven",
                desc: "Continuously improving processes and embracing new technologies for better solutions",
                icon: "💡",
                color: "from-amber-500 to-orange-500"
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-amber-200/30 transition-all duration-500 group hover:scale-105 border border-gray-100"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 text-2xl font-bold text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-emerald-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients worldwide who trust us for quality products and reliable service.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
            Get In Touch Today
          </button>
        </motion.section>
      </div>
    </div>
  );
}