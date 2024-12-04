import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stories = [
  {
    id: 1,
    quote: "Through the leadership program, I gained the confidence and skills to break into tech leadership. Now I'm mentoring others and advocating for inclusive policies.",
    author: "Sarah Chen",
    role: "Tech Director & DEI Advocate",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    quote: "The economic empowerment initiative helped me start my sustainable fashion business. We now employ 30 people from marginalized communities.",
    author: "Maya Patel",
    role: "Social Entrepreneur",
    location: "India",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    quote: "After facing discrimination, I found support through the legal aid program. Now I advocate for workplace equality and mentor others facing similar challenges.",
    author: "Carmen Rodriguez",
    role: "Labor Rights Advocate",
    location: "Mexico",
    image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

export default function ImpactStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the inspiring individuals who are breaking barriers and creating positive change
            in their communities through our programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 left-6 h-12 w-12" />
              <div className="relative">
                <p className="text-gray-600 mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={story.image}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.author}</h4>
                    <p className="text-sm text-gray-500">{story.role} • {story.location}</p>
                  </div>
                </div>
              </div>
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
          <a href="/stories" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-base font-medium rounded-lg text-primary hover:bg-primary/5 transition">
            Read More Stories
          </a>
        </motion.div>
      </div>
    </section>
  );
}