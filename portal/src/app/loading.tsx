"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Search, Bell, HelpCircle, Settings, LogOut } from "lucide-react";

// Mock data for company apps
const companyApps = [
  {
    id: 1,
    name: "HR Portal",
    description: "Manage employee records, leaves, and HR processes",
    icon: "👥",
    url: "/hr-portal",
    category: "Human Resources",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 2,
    name: "Project Tracker",
    description: "Track projects, tasks, and team progress with real-time updates",
    icon: "📊",
    url: "/project-tracker",
    category: "Productivity",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 3,
    name: "Expense Manager",
    description: "Submit, approve, and track expense reports",
    icon: "💰",
    url: "/expense-manager",
    category: "Finance",
    color: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 4,
    name: "Inventory",
    description: "Manage company assets and inventory levels",
    icon: "📦",
    url: "/inventory",
    category: "Operations",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    id: 5,
    name: "Time Tracking",
    description: "Log working hours and manage timesheets",
    icon: "⏱️",
    url: "/time-tracking",
    category: "Human Resources",
    color: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    id: 6,
    name: "Company Wiki",
    description: "Internal knowledge base and documentation hub",
    icon: "📚",
    url: "/wiki",
    category: "Information",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    id: 7,
    name: "Ecommerce Portal",
    description: "Manage products, orders, and customers",
    icon: "🛒",
    url: "/ecommerce",
    category: "Ecommerce",
    color: "bg-yellow-100 dark:bg-yellow-900/30",
  },
];

const categories = [...new Set(companyApps.map(app => app.category))];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-9 h-9 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 6v12m-3-3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Nexus
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search apps..." 
                className="pl-10 w-64 focus-visible:ring-blue-500"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/user.png" alt="User" />
                    <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@company.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, John</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Access all your company tools in one place
          </p>
        </motion.div>

        {/* Quick Access Section */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Quick Access
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {companyApps.slice(0, 6).map((app) => (
              <motion.div key={app.id} variants={item}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex flex-col items-center justify-center h-24 w-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href={app.url}>
                        <div className={`${app.color} h-12 w-12 rounded-lg flex items-center justify-center text-2xl mb-2`}>
                          {app.icon}
                        </div>
                        <span className="text-sm font-medium">{app.name}</span>
                      </a>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64">
                    <div className="flex flex-col space-y-1">
                      <h4 className="text-sm font-semibold">{app.name}</h4>
                      <p className="text-sm text-muted-foreground">{app.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* All Apps Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              All Applications
            </h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white dark:bg-gray-900">
                All Categories
              </Button>
              {categories.map((category) => (
                <Button key={category} variant="ghost" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {companyApps.map((app) => (
              <motion.div key={app.id} variants={item}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-4">
                      <div className={`${app.color} h-12 w-12 rounded-lg flex items-center justify-center text-2xl`}>
                        {app.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <CardDescription className="text-sm">{app.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{app.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={app.url}>Open App</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-blue-500"></div>
              <span className="text-sm font-medium">Nexus App Portal</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}