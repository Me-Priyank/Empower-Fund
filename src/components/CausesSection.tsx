import { motion } from 'framer-motion';
import CauseCard from './CauseCard';

const causes = [
  {
    id: 1,
    title: "Education Access Initiative",
    description: "Breaking down barriers to education through scholarships, mentorship programs, and digital learning resources for underserved communities.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 128000,
    goal: 250000,
  },
  {
    id: 2,
    title: "Leadership & Representation",
    description: "Empowering individuals through executive training, mentorship, and advocacy to increase diverse representation in decision-making roles.",
    image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 145000,
    goal: 200000,
  },
  {
    id: 3,
    title: "Workplace Equality",
    description: "Combating discrimination and promoting equal pay, opportunities, and inclusive policies in professional environments.",
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 220000,
    goal: 300000,
  },
  {
    id: 4,
    title: "Safety & Support Services",
    description: "Providing resources and support for survivors of gender-based violence, including legal aid and counseling services.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 95000,
    goal: 150000,
  },
  {
    id: 5,
    title: "Economic Empowerment",
    description: "Creating pathways to financial independence through entrepreneurship support, skills training, and access to resources.",
    image: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 185000,
    goal: 250000,
  },
  {
    id: 6,
    title: "Policy & Advocacy",
    description: "Working with stakeholders to implement gender-responsive policies and eliminate systemic barriers to equality.",
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    raised: 160000,
    goal: 200000,
  }
];

export default function CausesSection() {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're implementing comprehensive programs to address systemic inequalities
            and create lasting change aligned with UN's Sustainable Development Goal 5.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CauseCard {...cause} />
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
            Explore All Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}