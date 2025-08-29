import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Key, Bell, Shield, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <User className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">Change Avatar</Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* API Keys Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5" />
              <span>API Keys</span>
            </CardTitle>
            <CardDescription>
              Manage your exchange API keys and connections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="binance-key">Binance API Key</Label>
              <Input id="binance-key" type="password" placeholder="Enter API key" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="binance-secret">Binance Secret</Label>
              <Input id="binance-secret" type="password" placeholder="Enter secret" />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label htmlFor="coinbase-key">Coinbase API Key</Label>
              <Input id="coinbase-key" type="password" placeholder="Enter API key" />
            </div>
            
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save API Keys
            </Button>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </CardTitle>
            <CardDescription>
              Configure your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="trade-alerts">Trade Alerts</Label>
                <p className="text-sm text-muted-foreground">Notify when trades are executed</p>
              </div>
              <Switch id="trade-alerts" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="profit-alerts">Profit Alerts</Label>
                <p className="text-sm text-muted-foreground">Notify on significant profit/loss</p>
              </div>
              <Switch id="profit-alerts" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="system-alerts">System Alerts</Label>
                <p className="text-sm text-muted-foreground">Bot errors and system updates</p>
              </div>
              <Switch id="system-alerts" />
            </div>
          </CardContent>
        </Card>

        {/* Security Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
            <CardDescription>
              Security settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Enable 2FA for extra security</p>
              </div>
              <Switch id="two-factor" />
            </div>
            
            <Button variant="outline">
              Change Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;