import { motion } from 'framer-motion';
import { Book, Building2, UserCheck, Shield, LineChart, Users } from 'lucide-react';

const challenges = [
  {
    icon: Book,
    title: "Education Barriers",
    description: "Addressing unequal access to quality education and training opportunities that limit personal and professional growth."
  },
  {
    icon: Building2,
    title: "Workplace Discrimination",
    description: "Combating systemic bias in hiring, promotion, and pay while promoting inclusive workplace cultures."
  },
  {
    icon: UserCheck,
    title: "Leadership Gap",
    description: "Increasing representation in decision-making roles across public and private sectors through targeted programs."
  },
  {
    icon: Shield,
    title: "Gender-Based Violence",
    description: "Providing support services and advocating for stronger protection measures and prevention programs."
  },
  {
    icon: LineChart,
    title: "Economic Inequality",
    description: "Creating pathways to financial independence through entrepreneurship support and resource access."
  },
  {
    icon: Users,
    title: "Societal Norms",
    description: "Challenging and transforming restrictive gender stereotypes through education and awareness campaigns."
  }
];

export default function Challenges() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Challenges We Address</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're tackling fundamental issues that perpetuate gender inequality,
            working towards comprehensive solutions for lasting change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <challenge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/causes"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-primary hover:bg-primary/5 transition"
          >
            Learn About Our Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}