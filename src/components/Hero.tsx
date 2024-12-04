import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering All Genders for an Equal Future
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Together, we're building a world where everyone has equal access to education, employment,
              and leadership opportunities. Join us in eliminating gender-based discrimination and creating
              lasting societal change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition"
              >
                Support Gender Equality
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/causes"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-primary hover:bg-primary/5 transition"
              >
                Our Initiatives
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Diverse leaders breaking barriers"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>

      <ImpactStats />
    </div>
  );
}

function ImpactStats() {
  const stats = [
    { number: '500K+', label: 'Lives Can Be Impacted' },
    { number: '75+', label: 'Policy Changes' },
    { number: '2500+', label: 'Leadership Positions' },
    { number: '90%', label: 'Program Success Rate' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="bg-white rounded-xl shadow-lg py-12 px-6 sm:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}