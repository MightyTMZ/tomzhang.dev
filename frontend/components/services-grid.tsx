import { Code, Smartphone, Bot, Cog } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Code, title: "Web Development", description: "Modern, responsive websites" },
  { icon: Smartphone, title: "Mobile Apps", description: "iOS & Android applications" },
  { icon: Bot, title: "Bots", description: "Automated solutions & chatbots" },
  { icon: Cog, title: "Automation", description: "Workflow & process automation" }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
            <IconComponent className="w-8 h-8 text-gray-700 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}