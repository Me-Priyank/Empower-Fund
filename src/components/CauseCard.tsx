import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CauseCardProps {
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
}

export default function CauseCard({ title, description, image, raised, goal }: CauseCardProps) {
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-3">
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-between text-sm mb-4">
          <span className="text-gray-600">
            Raised: ${raised.toLocaleString()}
          </span>
          <span className="text-gray-600">
            Goal: ${goal.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="px-6 pb-6">
        <motion.button
          whileHover={{ x: 5 }}
          className="w-full flex items-center justify-center py-2 px-4 bg-primary/5 text-primary rounded-lg hover:bg-primary/10 transition"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
}