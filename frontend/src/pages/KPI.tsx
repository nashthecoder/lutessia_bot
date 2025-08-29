import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { TrendingUp, TrendingDown, DollarSign, Target, Activity, BarChart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart as RechartsBarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const KPI = () => {
  // Sample data for charts
  const performanceData = [
    { date: "Jan", profit: 2400, trades: 45 },
    { date: "Feb", profit: 1398, trades: 52 },
    { date: "Mar", profit: 9800, trades: 67 },
    { date: "Apr", profit: 3908, trades: 43 },
    { date: "May", profit: 4800, trades: 55 },
    { date: "Jun", profit: 3800, trades: 49 },
  ];

  const winRateData = [
    { name: "Wins", value: 68, color: "hsl(var(--success))" },
    { name: "Losses", value: 32, color: "hsl(var(--destructive))" },
  ];

  const tradingPairsData = [
    { pair: "BTC/USDT", volume: 45000, profit: 12.5 },
    { pair: "ETH/USDT", volume: 32000, profit: 8.7 },
    { pair: "BNB/USDT", volume: 28000, profit: 6.2 },
    { pair: "ADA/USDT", volume: 15000, profit: 4.1 },
    { pair: "DOT/USDT", volume: 12000, profit: 3.8 },
  ];

  const chartConfig = {
    profit: {
      label: "Profit ($)",
      color: "hsl(var(--chart-line))",
    },
    trades: {
      label: "Trades",
      color: "hsl(var(--muted-foreground))",
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BarChart className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">KPI Dashboard</h1>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">$24,856</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +15.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">68.5%</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">311</div>
            <p className="text-xs text-muted-foreground">
              <TrendingDown className="inline h-3 w-3 mr-1" />
              -5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Trade Size</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$156.8</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8.7% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profit Over Time Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Profit Performance</CardTitle>
            <CardDescription>Monthly profit and trade volume</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={performanceData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} stroke="hsl(var(--chart-grid))" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="profit"
                  type="monotone"
                  stroke="var(--color-profit)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Win Rate Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Win/Loss Ratio</CardTitle>
            <CardDescription>Trading success rate breakdown</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ChartContainer config={{
              wins: { label: "Wins", color: "hsl(var(--success))" },
              losses: { label: "Losses", color: "hsl(var(--destructive))" }
            }}>
              <div className="relative h-[200px] w-[200px]">
                <PieChart width={200} height={200}>
                  <Pie
                    data={winRateData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {winRateData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">68.5%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                </div>
              </div>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Trading Pairs Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Top Trading Pairs</CardTitle>
          <CardDescription>Performance by trading pairs</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{
            volume: { label: "Volume ($)", color: "hsl(var(--primary))" },
            profit: { label: "Profit (%)", color: "hsl(var(--success))" }
          }}>
            <RechartsBarChart
              accessibilityLayer
              data={tradingPairsData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} stroke="hsl(var(--chart-grid))" />
              <XAxis
                dataKey="pair"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="volume" fill="hsl(var(--primary))" radius={4} />
            </RechartsBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default KPI;