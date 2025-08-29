import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Zap, Shield, Target, Settings } from "lucide-react";

const Trading = () => {
  const tradingPairs = [
    { pair: "BTC/USDT", price: 43250.45, change: 2.34, status: "active" },
    { pair: "ETH/USDT", price: 2650.87, change: -1.23, status: "active" },
    { pair: "BNB/USDT", price: 315.42, change: 5.67, status: "paused" },
    { pair: "ADA/USDT", price: 0.485, change: 3.21, status: "active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Zap className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Trading</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Trading Pairs Selection */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="manual" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="manual">Manual Trading</TabsTrigger>
              <TabsTrigger value="automated">Bot Trading</TabsTrigger>
            </TabsList>

            <TabsContent value="manual" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Manual Trade Execution</span>
                  </CardTitle>
                  <CardDescription>
                    Execute trades manually with custom parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="trading-pair">Trading Pair</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pair" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btc-usdt">BTC/USDT</SelectItem>
                          <SelectItem value="eth-usdt">ETH/USDT</SelectItem>
                          <SelectItem value="bnb-usdt">BNB/USDT</SelectItem>
                          <SelectItem value="ada-usdt">ADA/USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="trade-type">Trade Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="market">Market Order</SelectItem>
                          <SelectItem value="limit">Limit Order</SelectItem>
                          <SelectItem value="stop-loss">Stop Loss</SelectItem>
                          <SelectItem value="take-profit">Take Profit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (USDT)</Label>
                      <Input id="amount" placeholder="0.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (Optional)</Label>
                      <Input id="price" placeholder="Market price" type="number" />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="stop-loss">Stop Loss (%)</Label>
                      <Input id="stop-loss" placeholder="5.0" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="take-profit">Take Profit (%)</Label>
                      <Input id="take-profit" placeholder="10.0" type="number" />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-success hover:bg-success/90">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Buy
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      <TrendingDown className="mr-2 h-4 w-4" />
                      Sell
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automated" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Bot Configuration</span>
                  </CardTitle>
                  <CardDescription>
                    Configure automated trading bot settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="strategy">Trading Strategy</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dca">Dollar Cost Averaging</SelectItem>
                        <SelectItem value="grid">Grid Trading</SelectItem>
                        <SelectItem value="momentum">Momentum Trading</SelectItem>
                        <SelectItem value="mean-reversion">Mean Reversion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (USDT)</Label>
                      <Input id="budget" placeholder="1000.00" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="risk-level">Risk Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select risk" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Risk</SelectItem>
                          <SelectItem value="medium">Medium Risk</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="max-drawdown">Max Drawdown (%)</Label>
                      <Input id="max-drawdown" placeholder="15.0" type="number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="target-profit">Target Profit (%)</Label>
                      <Input id="target-profit" placeholder="25.0" type="number" />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">
                      <Zap className="mr-2 h-4 w-4" />
                      Start Bot
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Shield className="mr-2 h-4 w-4" />
                      Backtest Strategy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Market Overview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Market Overview</CardTitle>
              <CardDescription>Current trading pairs status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tradingPairs.map((pair) => (
                <div key={pair.pair} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium">{pair.pair}</div>
                    <div className="text-sm text-muted-foreground">
                      ${pair.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center space-x-1 ${
                      pair.change > 0 ? 'text-success' : 'text-destructive'
                    }`}>
                      {pair.change > 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      <span className="text-sm font-medium">
                        {Math.abs(pair.change)}%
                      </span>
                    </div>
                    <Badge 
                      variant={pair.status === 'active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {pair.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Emergency Stop All
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Risk Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="mr-2 h-4 w-4" />
                Portfolio Rebalance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trading;