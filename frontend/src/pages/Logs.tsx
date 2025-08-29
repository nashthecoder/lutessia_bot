import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Filter, Download, RefreshCw, AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const Logs = () => {
  const tradingLogs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:30:25",
      type: "success",
      message: "Buy order executed successfully",
      pair: "BTC/USDT",
      amount: "0.025 BTC",
      price: "$43,250.45",
      details: "Market order filled at market price"
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:28:12",
      type: "info",
      message: "Stop loss order placed",
      pair: "ETH/USDT",
      amount: "1.5 ETH",
      price: "$2,580.00",
      details: "Stop loss set at 5% below entry price"
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:25:33",
      type: "warning",
      message: "High volatility detected",
      pair: "BNB/USDT",
      amount: "-",
      price: "$315.42",
      details: "Market conditions show unusual price movements"
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:22:18",
      type: "error",
      message: "Insufficient balance for trade",
      pair: "ADA/USDT",
      amount: "1000 ADA",
      price: "$0.485",
      details: "Available balance: $50.25, Required: $485.00"
    },
    {
      id: 5,
      timestamp: "2024-01-15 14:20:45",
      type: "success",
      message: "Take profit order triggered",
      pair: "DOT/USDT",
      amount: "25 DOT",
      price: "$8.65",
      details: "Profit target reached: +12.5%"
    }
  ];

  const systemLogs = [
    {
      id: 1,
      timestamp: "2024-01-15 14:35:00",
      type: "info",
      component: "Trading Engine",
      message: "System health check completed",
      details: "All systems operational"
    },
    {
      id: 2,
      timestamp: "2024-01-15 14:30:15",
      type: "warning",
      component: "API Connection",
      message: "Rate limit approaching",
      details: "90% of API rate limit reached for Binance"
    },
    {
      id: 3,
      timestamp: "2024-01-15 14:25:42",
      type: "error",
      component: "Database",
      message: "Connection timeout",
      details: "Database connection lost, retrying in 30 seconds"
    },
    {
      id: 4,
      timestamp: "2024-01-15 14:20:00",
      type: "success",
      component: "Bot Manager",
      message: "Bot #3 started successfully",
      details: "DCA strategy initialized with $1000 budget"
    }
  ];

  const getLogIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Info className="h-4 w-4 text-primary" />;
    }
  };

  const getLogBadgeVariant = (type: string) => {
    switch (type) {
      case "success":
        return "default";
      case "warning":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ScrollArea className="h-6 w-6" />
          <h1 className="text-3xl font-bold text-foreground">Logs</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search logs..." className="pl-8" />
              </div>
            </div>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="info">Info</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="today">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Log Tabs */}
      <Tabs defaultValue="trading" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trading">Trading Logs</TabsTrigger>
          <TabsTrigger value="system">System Logs</TabsTrigger>
          <TabsTrigger value="errors">Error Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="trading" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trading Activity</CardTitle>
              <CardDescription>
                Real-time trading operations and bot activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {tradingLogs.map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="mt-0.5">
                        {getLogIcon(log.type)}
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{log.message}</p>
                          <Badge variant={getLogBadgeVariant(log.type)}>
                            {log.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{log.timestamp}</span>
                          <span>{log.pair}</span>
                          {log.amount !== "-" && <span>{log.amount}</span>}
                          <span>{log.price}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {log.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Events</CardTitle>
              <CardDescription>
                System status, health checks, and operational logs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {systemLogs.map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
                    >
                      <div className="mt-0.5">
                        {getLogIcon(log.type)}
                      </div>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{log.message}</p>
                          <Badge variant={getLogBadgeVariant(log.type)}>
                            {log.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{log.timestamp}</span>
                          <span>{log.component}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {log.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Error Logs</CardTitle>
              <CardDescription>
                System errors, exceptions, and critical issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {tradingLogs
                    .filter((log) => log.type === "error")
                    .map((log) => (
                      <div
                        key={log.id}
                        className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors border-l-4 border-destructive"
                      >
                        <div className="mt-0.5">
                          {getLogIcon(log.type)}
                        </div>
                        
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-destructive">{log.message}</p>
                            <Badge variant="destructive">
                              Critical
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{log.timestamp}</span>
                            <span>{log.pair}</span>
                            <span>{log.amount}</span>
                            <span>{log.price}</span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">
                            {log.details}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Logs;