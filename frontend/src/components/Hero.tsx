import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-skyline.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to TradeBot
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Automate your crypto trading with our powerful bot. Get started in minutes and optimize your strategy for maximum returns.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/dashboard">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;