import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cable, Cctv, PhoneCall, Smartphone, Tv, Wifi, X } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  price: string;
  icon: JSX.Element;
  details: {
    [key: string]: string | number | boolean;
  };
}

const features: FeatureProps[] = [
  {
    icon: <Wifi />,
    title: "Internet",
    description: "We offer every type of internet everywhere in America !",
    price: "Max speed upto 2 Gig (apporax 1880 Mbps)",
    details: {
      "Cable Internet": "Uses a Docsis 3.1 modem router for high-speed access, with a 1.25TB monthly data cap (though hard to exceed). Includes free access to 8 million hotspots nationwide.",
      "5G Internet": "Provides unlimited data with no overage fees at a fixed low monthly rate. Comes with a free modem/router, requires no installation, and works wirelessly via cell towers. Ideal for homes or commercial locations (can use residential rates).",
      "WiFi 6": "Supports WiFi 6(Gen), covering up to 5000 sq. ft. and 40 devices.",
      "Contract": "No contract, no tax—just plug it in and enjoy seamless connectivity!",
      "Customization": "Best rates available with auto-pay and customizable network settings.",
    },
  },
  {
    icon: <Smartphone />,
    title: "DSL",
    description: "Used for traditional home telephone services.",
    price: "Max speed upto 140 Mbps",
    details: {
      "Copper Wire Internet": "Offers speeds up to 140 Mbps with unlimited data at a fixed monthly price, though the cost may vary with the cost of living.",
      "Home Phone Service": "Comes with a free phone number for inbound calls and emergency 911. You can use a traditional phone jack for a dial tone.",
      "Benefits": "Useful for blocking spam calls, forwarding cell phone calls to the home line, and using Google Voice for free domestic calls or low-cost international calls.",
      "Modem": "Can be rented or purchased, but is not included in the plan.",
    },
  },
  {
    icon: <PhoneCall />,
    title: "Phone",
    description: "Crystal-clear phone service for reliable communication.",
    price: "Affordable rates starting at $10/month",
    details: {
      "Traditional Copper Wire Home Phone": "Offers reliable service that works even when the internet or electricity is down. Provides unlimited calling with features like 3-way calling and call waiting.",
      "Ultra Mobile": "A mobile carrier using T-Mobile towers, offering plans starting at $10/month for unlimited calling and texting to 91 countries.",
      "VOIP Business Phone Systems": "Custom solutions with the best features at competitive prices, including free equipment and setup.",
      "Satellite Phones": "Coming soon, expanding our service offerings.",
    },
  },
  {
    icon: <Cctv />,
    title: "Home & Commercial Security",
    description: "Secure your place with smart devices.",
    price: "Solutions from $59.99/month",
    details: {
      "Smart Security": "Upgrade your home with smart security, lighting, and AI-powered automation.",
      "Control": "Our smart home services help you control everything from your phone or voice assistant.",
      "Customization": "Flexible solutions for both home and commercial security systems.",
    },
  },
  {
    icon: <Tv />,
    title: "TV",
    description: "Access to a wide range of channels and on-demand content.",
    price: "Direct connection with Satellite TV services",
    details: {
      "Cable TV": "Offers local channels and popular cable channels like CNN, Animal Planet, ESPN, etc. Different packages provide access to more channels, including premium ones.",
      "DirectTV Streaming": "For those who can't or don't want a dish outside, we offer the same channels through DirectTV Streaming via the internet, saving you money.",
      "Unlimited Screens": "Stream on unlimited screens across 4 addresses for a single monthly price.",
      "Additional Services": "We can arrange TV wall mounting services nationwide. We sell new TVs of any size and deliver them within a couple of days or sooner.",
      "Promotions": "Changing promotions, often including free gift cards when you sign up.",
    },
  },
  {
    icon: <Cable />,
    title: "Fiber Optic Internet",
    description: "High speed internet.",
    price: "Download speed upto 500 Mbps",
    details: {
      "Symmetrical Speeds": "Fiber Optic Internet offers symmetrical speeds, meaning your download speed is the same as your upload speed.",
      "Speed": "Can handle much faster speeds if available at your address.",
      "Availability": "We check your address to see what is available and offer a solution based on your location.",
    },
  },
];


export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureProps | null>(
    null
  );

  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Services
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setSelectedFeature(feature)}
          >
            <CardHeader className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-black">
                {feature.icon}
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <CardTitle>{feature.title}</CardTitle>
            </CardContent>
            <CardContent className="text-center flex flex-col items-center justify-center">
              {feature.description}
            </CardContent>
            <CardFooter className="flex items-center justify-center bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {feature.price}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
};

// Modal Component
const FeatureModal = ({
  feature,
  onClose,
}: {
  feature: FeatureProps;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-[-50px] flex items-center justify-center z-50">
      {/* Background Overlay (Disables Interaction Outside Modal) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-auto"></div>

      {/* The Modal */}
      <div className="relative bg-white dark:bg-[hsl(24,9.8%,10%)] p-6 rounded-lg shadow-lg max-w-lg w-full z-50">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-100  rounded-full flex items-center justify-center mb-4 text-black">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
          <p className="text-gray-800 dark:text-gray-400 mt-4">
            {Object.entries(feature.details).map(([key, value], index) => (
              <div key={index} className="mb-2">
                <strong className="text-gray-900 dark:text-gray-100">{key}:</strong>
                <span className="ml-2">{value}</span>
              </div>
            ))}
          </p>

          <p className="text-lg font-semibold mt-4 text-primary dark:text-yellow-400">
            {feature.price}
          </p>
        </div>
      </div>
    </div>


  );
};
