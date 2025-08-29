import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Bots", value: "12", description: "All configured bots" },
    { label: "Active Bots", value: "8", description: "Currently trading" },
    { label: "Inactive Bots", value: "4", description: "Paused or stopped" }
  ];

  // Sample chart data points for the performance line
  const chartPoints = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 65 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 70 },
    { month: "May", value: 55 },
    { month: "Jun", value: 80 },
    { month: "Jul", value: 75 }
  ];

  // Generate SVG path for the chart
  const generatePath = (points: typeof chartPoints) => {
    const maxValue = Math.max(...points.map(p => p.value));
    const width = 900;
    const height = 200;
    const padding = 40;
    
    const pathPoints = points.map((point, index) => {
      const x = padding + (index * (width - 2 * padding)) / (points.length - 1);
      const y = height - padding - ((point.value / maxValue) * (height - 2 * padding));
      return `${x},${y}`;
    });
    
    return `M ${pathPoints.join(' L ')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Dashboard</h1>
          <p className="text-muted-foreground text-lg max-w-4xl">
            Welcome to TradeBot, your automated crypto trading platform. This dashboard provides a comprehensive overview of your trading activities, bot performance, and market insights. Navigate through the tabs to explore detailed information and manage your trading strategies effectively.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <CardDescription className="text-xs text-muted-foreground">
                    {stat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Performance</h2>
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium text-muted-foreground mb-2">
                    Portfolio Value
                  </CardTitle>
                  <div className="text-4xl font-bold text-foreground">$12,345</div>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-muted-foreground mr-2">Last 30 Days</span>
                    <div className="flex items-center text-success">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">+5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-6">
                <svg viewBox="0 0 900 200" className="w-full h-48">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={40 + i * 30}
                      x2="860"
                      y2={40 + i * 30}
                      stroke="hsl(var(--chart-grid))"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Performance line */}
                  <path
                    d={generatePath(chartPoints)}
                    fill="none"
                    stroke="hsl(var(--chart-line))"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Data points */}
                  {chartPoints.map((point, index) => {
                    const maxValue = Math.max(...chartPoints.map(p => p.value));
                    const x = 40 + (index * (900 - 80)) / (chartPoints.length - 1);
                    const y = 200 - 40 - ((point.value / maxValue) * (200 - 80));
                    
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="3"
                        fill="hsl(var(--chart-line))"
                        className="drop-shadow-sm"
                      />
                    );
                  })}
                </svg>
                
                <div className="flex justify-between mt-4 px-10">
                  {chartPoints.map((point, index) => (
                    <div key={index} className="text-center">
                      <span className="text-xs text-muted-foreground">{point.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;