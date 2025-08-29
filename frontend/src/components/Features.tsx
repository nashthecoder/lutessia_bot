import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TrendingUp, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Automated Trading",
      description: "Set up your trading bot in minutes and let it trade for you 24/7. Customize your strategy or choose from pre-built options."
    },
    {
      icon: TrendingUp,
      title: "Smart Strategies",
      description: "Leverage advanced trading algorithms and indicators to optimize your trading strategy. Backtest your strategies to ensure profitability."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Trade with confidence knowing your data and funds are protected with top-tier security measures. Our platform is built for reliability and performance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the powerful features that make TradeBot the ultimate tool for crypto traders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;