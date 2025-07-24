"use client";

import { FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronRight,
  Box,
  Computer,
  Ticket,
  Menu,
  FileQuestion,
  DollarSign,
  Sparkles,
  Rocket,
  HelpCircle,
  Globe,
  Target,
  GithubIcon,
  FileText,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import { SiFacebook } from "react-icons/si";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type App = {
  id: number;
  name: string;
  description: string;
  icon: React.JSX.Element;
  url: string;
  category: string;
  color: string;
  hoverColor: string;
};

const apps = [
  {
    id: 1,
    name: "SMCT CHAT",
    description:
      "Chat with your team anytime, anywhere. SMCT CHAT keeps everyone in sync",
    icon: <Rocket className="w-6 h-6" />,
    url: "https://chat.smctgroup.ph/",
    category: "ROCKET CHAT",
    color: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 2,
    name: "TICKETING SQL",
    description:
      "Track, manage, and resolve support tickets efficiently with SMCT TICKETING SQL",
    icon: <Ticket className="w-6 h-6 " />,
    url: "http://122.52.134.146:4000/",
    category: "SQL",
    color: "bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 3,
    name: "TICKETING NETSUITE",
    description:
      "Handle customer and internal requests efficiently inside NetSuite with - SMCT TICKETING NETSUITE",
    icon: <Ticket className="w-6 h-6" />,
    url: " https://ticketing-netsuite.smctgroup.ph/",
    category: "NETSUITE",
    color: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 4,
    name: "ORACLE NETSUITE PRINTING",
    description:
      "Bridge NetSuite and Oracle for automated, reliable document printing - SMCT PRINTING NETSUITE ORACLE",
    icon: <Box className="w-6 h-6" />,
    url: "https://netsuite-print.smctgroup.ph/",
    category: "PRINTING",
    color: "bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 5,
    name: "COMPUTER MONITORING",
    description:
      "A centralized solution for tracking device status, performance, and user activity - SMCT COMPUTER MONITORING",
    icon: <Computer className="w-6 h-6" />,
    url: "https://computer-monitoring.smctgroup.ph/",
    category: "MONITORING",
    color: "bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-black font-bold",
  },
  {
    id: 6,
    name: "JOB ORDER",
    description:
      "Simplify task management and workflow processing using SMCT JOB ORDER",
    icon: <Menu className="w-6 h-6" />,
    url: "https://job-order.smctgroup.ph/",
    category: "ORDER",
    color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 7,
    name: "REQUEST FORM",
    description:
      "Submit and manage organizational requests easily with SMCT REQUEST FORM",
    icon: <FileQuestion className="w-6 h-6" />,
    url: "https://request.smctgroup.ph/",
    category: "REQUEST",
    color: "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 8,
    name: "CREDIT ADVICE",
    description:
      "Manage and process employee credit or cash advance requests with ease using SMCT CREDIT ADVANCE",
    icon: <DollarSign className="w-6 h-6" />,
    url: "https://credit-advice.smctgroup.ph/",
    category: "ADVICE",
    color: "bg-gradient-to-br from-green-500 via-green-600 to-green-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
];

// Second set of applications
const apps2 = [
  {
    id: 9,
    name: "STRONG MOTO CENTRUM",
    description:
      "Your reliable partner in quality motorcycle sales, service, and support.",
    icon: (
      <Image
        src="/smct.png"
        alt="STRONG MOTO CENTRUM Icon"
        width={300}
        height={300}
        className="w-25 h-9"
      />
    ),
    url: "https://strongmotocentrum.com/",
    category: "STRONG MOTO",
    color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-black font-bold",
  },
  {
    id: 10,
    name: "DES APPLIANCE",
    description:
      "Affordable, reliable home appliances built for everyday living.",
    icon: (
      <Image
        src="/Da.png"
        alt="DES APPLIANCE Icon"
        width={500}
        height={500}
        className="w-23 h-16"
      />
    ),
    url: "https://desappliance.com/",
    category: "APPLIANCE",
    color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-black font-bold",
  },
  {
    id: 11,
    name: "DES STRONG",
    description:
      "A trusted motorcycle retail company delivering quality bikes built for performance, durability, and everyday adventure.",
    icon: (
      <Image
        src="/Ds.png"
        alt="DES STRONG Icon"
        width={400}
        height={400}
        className="w-25 h-16"
      />
    ),
    url: "https://desstrongmotors.com/",
    category: "STRONG",
    color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-black font-bold",
  },
  {
    id: 12,
    name: "HONDA DES",
    description:
      "Your trusted platform for browsing, selling, and managing Honda motorcycles with ease.",
    icon: (
      <Image
        src="/Hon.jpg"
        alt="HONDA DES Icon"
        width={400}
        height={400}
        className="w-20 h-15 rounded-4xl"
      />
    ),
    url: "https://hondades.com/",
    category: "HONDA DES",
    color: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    hoverColor: "bg-blue-500 hover:bg-yellow-500 hover:text-black font-bold",
  },
];

const featuredArticles = [
  {
    id: 13,
    name: "STRONG MOTO CENTRUM",
    excerpt:
      "The air hummed with a sense of anticipation as STRONG MOTO CENTRUM, INC. Biñan had its store blessing ceremony last September 25, 2024 at National Highway",
    image: "/art1.png",
    url: "https://strongmotocentrum.com/strongmotocentrum-binan-motorcycle/",
    category: "STRONG MOTO",
  },
  {
    id: 14,
    name: "DES APPLIANCE",
    excerpt:
      "Last July 23, 2024, DES APPLIANCE PLAZA, INC. in partnership with Panasonic Philippines hosted its highly anticipated Panasonic Range Review held at Marco Polo Hotel Ortigas.",
    image: "/art2.jpg",
    url: "https://desappliance.com/article-panasonic-range-review/",
    category: "APPLIANCE",
  },
  {
    id: 15,
    name: "DES STRONG",
    excerpt:
      "DES STRONG MOTORS INC. Bajaj Cerilles Grand Opening last February 24, 2024 at Gov. Vicente Cerilles Street, Pagadian City.",
    image: "/art3.png",
    url: "https://desstrongmotors.com/article-bajaj-cerilles-three-wheelers/",
    category: "STRONG",
  },
  {
    id: 16,
    name: "HONDA DES",
    excerpt:
      "The HONDA DES, INC. Camino Flagship actively joined the highly anticipated Zamboanga Hermosa Festival Parade of Lights which took place last October 1, 2024. This festival is a celebration of Zamboanga City’s rich cultural heritage and vibrant spirit.",
    image: "/art4.png",
    url: "https://hondades.com/honda-des-celebrates-hermosa-festival-with-style/",
    category: "HONDA DES",
  },
];

const allCategories = [
  "All",
  ...Array.from(new Set([...apps, ...apps2].map((app) => app.category))),
];

const devs = [
  {
    name: "Dev_allan",
    link: "https://chat.smctgroup.ph/direct/Dev_Allan-j",
    avatar: "/avatars/lan.jpg",
  },
  {
    name: "Dev_jenecil",
    link: "https://chat.smctgroup.ph/direct/dev_jenecil",
    avatar: "/avatars/jen.jpg",
  },
  {
    name: "Dev_Macmac",
    link: "https://chat.smctgroup.ph/direct/Dev_Macmac",
    avatar: "/avatars/mac.png",
  },
  {
    name: "Dev_zart",
    link: "https://chat.smctgroup.ph/direct/dev_zart",
    avatar: "/avatars/zart.jpg",
  },
];

// Add a "Quick Actions" section with frequently used tools
const quickActions = [
  {
    name: "Submit Ticket",
    icon: <Ticket />,
    url: "https://ticketing-netsuite.smctgroup.ph/",
  },
  {
    name: "Request Form",
    icon: <FileQuestion />,
    url: "https://request.smctgroup.ph/",
  },
  {
    name: "Credit Advice",
    icon: <DollarSign />,
    url: "https://credit-advice.smctgroup.ph/",
  },
];

// Show recent activities or notifications
const recentActivities = [
  { type: "ticket", message: "New ticket #1234 assigned", time: "2 hours ago" },
  { type: "request", message: "Request approved", time: "1 day ago" },
];

// Add key metrics
const stats = [
  { label: "Active Tickets", value: "24", trend: "+12%" },
  { label: "Pending Requests", value: "8", trend: "-5%" },
  { label: "System Status", value: "All Systems Operational", status: "green" },
];

// Popular searches
const popularSearches = [
  "ticket submission",
  "credit advance",
  "computer monitoring",
  "job order",
];

// External resources
const quickLinks = [
  { name: "SMCT Website", url: "https://smctgroup.ph/", icon: <Globe /> },
  { name: "Employee Handbook", url: "#", icon: <FileText /> },
  { name: "IT Support", url: "#", icon: <LifeBuoy /> },
];

type Weather = {
  location: string;
  temp: string;
  condition: string;
  icon: string;
};

const officeCities = [
  { name: "Tagbilaran", query: "Tagbilaran,PH" },
  { name: "Cebu", query: "Cebu,PH" },
  { name: "Davao", query: "Davao,PH" },
];

function WeatherWidgetLive() {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "6832420060375fa1f473c4bee1266976";
      const results: Weather[] = await Promise.all(
        officeCities.map(async (city) => {
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                city.query
              )}&appid=${apiKey}&units=metric`
            );
            const data = await res.json();
            console.log(city.name, data); // Log the API response

            if (!res.ok || !data.main || !data.weather) {
              return {
                location: city.name,
                temp: "N/A",
                condition: data.message || "Unavailable",
                icon: "",
              };
            }

            return {
              location: city.name,
              temp: Math.round(data.main.temp) + "°C",
              condition: data.weather[0].main,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            };
          } catch (error) {
            console.error("Weather fetch error for", city.name, error);
            return {
              location: city.name,
              temp: "N/A",
              condition: "Fetch error",
              icon: "",
            };
          }
        })
      );
      setWeather(results);
      setLoading(false);
    }
    fetchWeather();
  }, []);

  if (loading)
    return (
      <div className="bg-white/80 rounded-xl shadow p-4 max-w-xs mx-auto mb-8">
        Loading weather...
      </div>
    );

  return (
    <div className="bg-white/80 rounded-xl shadow p-4 flex flex-col gap-2 w-full max-w-xs mx-auto mb-8">
      <h3 className="text-lg font-bold text-blue-700 mb-2">Office Weather</h3>
      <div className="flex flex-col gap-2">
        {weather.map((w) => (
          <div key={w.location} className="flex items-center justify-between">
            <span className="font-semibold">{w.location}</span>
            <span className="flex items-center gap-2">
              {w.icon ? (
                <img src={w.icon} alt={w.condition} className="w-6 h-6" />
              ) : (
                <span className="w-6 h-6 flex items-center justify-center text-gray-400">
                  ?
                </span>
              )}
              <span>{w.temp}</span>
              <span className="text-gray-500 text-sm">{w.condition}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Company announcements
const announcements = [
  {
    title: "System Maintenance",
    content: "Scheduled maintenance on Sunday",
    priority: "info",
  },
  {
    title: "New Feature",
    content: "Credit advice system updated",
    priority: "success",
  },
];

// User-specific information
const userProfile = {
  name: "John Doe",
  department: "IT",
  role: "Developer",
  lastLogin: "2 hours ago",
  permissions: ["admin", "ticket_management"],
};

// Real-time system status
const systemStatus = [
  { service: "SMCT CHAT", status: "online", uptime: "99.9%" },
  { service: "TICKETING SQL", status: "online", uptime: "99.8%" },
  { service: "COMPUTER MONITORING", status: "maintenance", uptime: "95.2%" },
];

// Emergency contacts
const emergencyContacts = [
  {
    name: "IT Support",
    phone: "+63 970 192 9564",
    email: "support@smctgroup.ph",
  },
  {
    name: "HR Department",
    phone: "+63 XXX XXX XXXX",
    email: "hr@smctgroup.ph",
  },
];

// Live Date and Time Display for Header
function DateTimeDisplay() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Use Asia/Manila timezone for Philippine Standard Time
  const day = now.toLocaleDateString("en-PH", {
    weekday: "long",
    timeZone: "Asia/Manila",
  });
  const date = now.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Manila",
  });
  const time = now.toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  });

  return (
    <div className="flex flex-col items-end ml-4">
      <span className="font-bold tracking-wide text-blue-100 text-xs sm:text-sm mb-1">
        Philippine Standard Time
      </span>
      <span className="font-bold text-white text-sm sm:text-base leading-tight">
        {day}
      </span>
      <span className="text-blue-200 text-xs sm:text-sm font-bold mb-1">
        {date}
      </span>
    </div>
  );
}

// Live Tagbilaran Weather for Header
function TagbilaranWeather() {
  const [weather, setWeather] = useState<{
    temp: string;
    condition: string;
    icon: string;
  } | null>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "6832420060375fa1f473c4bee1266976"; // <-- Use your real OpenWeatherMap API key
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tagbilaran,PH&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (res.ok && data.main && data.weather) {
        setWeather({
          temp: Math.round(data.main.temp) + "°C",
          condition: data.weather[0].main,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      } else {
        setWeather(null);
      }
    }
    fetchWeather();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Philippine Standard Time
  const time = now.toLocaleTimeString("en-PH", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  });

  if (!weather) return <div className="text-white text-[10px] ml-1">N/A</div>;

  return (
    <div className="flex flex-col items-start ml-1 text-white text-[15px] font-mono leading-tight">
      <div className="flex items-center">
        <img
          src={weather.icon}
          alt={weather.condition}
          className="w-7 h-7 mr-1"
        />
        <span className="truncate">
          TAG City: {weather.temp}, {weather.condition}
        </span>
      </div>
      <span className="block w-33 text-[20px] text-blue-100 bg-blue-800 rounded-2xl mt-1 text-center">
        {time}
      </span>
    </div>
  );
}

export default function LandingPage() {
  // Feedback modal state and handlers (moved inside component)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const maxFeedbackLength = 500;

  async function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedbackLoading(true);
    setFeedbackError("");
    try {
      const payload = {
        data: [
          {
            timestamp: new Date().toISOString(),
            feedback: feedbackText,
            email: feedbackEmail,
          },
        ],
      };
      const res = await fetch("https://sheetdb.io/api/v1/ags2gxrfy1pqi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Failed to send feedback. Please try again.");
      }
      setFeedbackSubmitted(true);
      setFeedbackText("");
      setFeedbackEmail("");
      setTimeout(() => {
        setShowFeedbackModal(false);
        setFeedbackSubmitted(false);
      }, 2000);
    } catch (err: any) {
      setFeedbackError(err.message || "An error occurred. Please try again.");
    } finally {
      setFeedbackLoading(false);
    }
  }

  // Unified search and filter state
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Modal state for Help icon
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Filter logic for both arrays
  const filterFn = (app: App) => {
    const matchesCategory =
      selectedCategory === "All" || app.category === selectedCategory;
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  };
  const filteredApps = apps.filter(filterFn);
  const filteredApps2 = apps2.filter(filterFn);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-500 shadow-sm">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Image
                src="/smct.png"
                alt="SMCT Group Logo"
                width={80}
                height={80}
              />
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  SMCT Application Center
                </h1>
                <p className="text-xs text-white font-medium">
                  Your SMCT App Library
                </p>
              </div>
            </div>
          </motion.div>

          {/* Header Icons */}

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={() => setShowHelpModal(true)}
            >
              {/*
              <span className="block">
                <HelpCircle className="w-5 h-5 text-white" />
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              
              className="p-0 rounded-lg bg-white/24 hover:bg-white/30 transition-colors cursor-pointer"
            >
              {/*
              <a href="/global" className="block">
                <Globe className="w-5 h-5 text-white" />
              </a> 
              */}
            </motion.div>
            <DateTimeDisplay />
            <TagbilaranWeather />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 relative">
        {/* Weather widget absolutely positioned in the top right of hero */}
        <div className="absolute top-0 right-0 z-20"></div>
        {/* Background Image for Hero Section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/blg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-white mr-2" />
                <span className="text-sm font-medium text-white">
                  Your Digital Workspace
                </span>
              </motion.div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                SMCT Application Center
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              All your team&apos;s tools, resources, and support in one place.
              Streamline your workflow and empower your team to do their best
              work.
            </p>

            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="relative">
                <Image
                  src="/smct.png"
                  alt="Team App Hub Preview"
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Company Applications Hub */}
      <section className="py-20 bg-white backdrop-blur-md">
        <div className="container px-6 mx-auto relative">
          {/* Weather widget absolutely positioned in the top right of Applications Hub */}
          <div className="absolute top-0 right-0 z-20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className=" justify-items-center-safe mb-22 ">
              <Image
                src="/data.png"
                alt="SMCT Group Logo"
                width={170}
                height={170}
              />
            </div>

            <h2 className="text-4xl font-bold text-black mb-4">
              Company Applications Hub
            </h2>
            <p className="text-xl text-black font-bold max-w-2xl mx-auto">
              Access all your essential tools and applications in one
              centralized location
            </p>
          </motion.div>

          {/* Unified Search and Filter Bar */}
          <section className="py-10 bg-white">
            <div className="container px-6 mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="relative w-full lg:w-96 bg-gray-200 rounded-2xl mb-4 lg:mb-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search all apps..."
                  className="pl-12 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-12 text-lg"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                {allCategories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.2 }}
                  >
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      className={`rounded-full px-6 py-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 text-gray-700 transition-all duration-200 font-bold ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : ""
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {filteredApps.length === 0 ? (
              <div className="col-span-full text-center text-white text-lg py-8">
                No apps found.
              </div>
            ) : (
              filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm group-hover:bg-white">
                    <div
                      className={`h-1 ${app.color} ${app.hoverColor} transition-all duration-300`}
                    />
                    <CardHeader className="pb-4 pt-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${app.color} ${app.hoverColor} h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110`}
                        >
                          {app.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {app.name}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium text-gray-500">
                            {app.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                        {app.description}
                      </p>
                    </CardContent>
                    <CardContent className="pt-0">
                      <Button
                        className={`w-full h-12 rounded-xl font-bold transition-all duration-300 ${app.color} ${app.hoverColor} hover:shadow-lg group-hover:shadow-xl`}
                        asChild
                      >
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-white"
                        >
                          <span>Open App</span>
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Second Applications Hub */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-black mb-2">E-COMMERCE</h1>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {filteredApps2.length === 0 ? (
              <div className="col-span-full text-center text-black text-lg py-8">
                No apps found.
              </div>
            ) : (
              filteredApps2.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white group-hover:bg-gray-50">
                    <div
                      className={`h-1 ${app.color} ${app.hoverColor} transition-all duration-300`}
                    />
                    <CardHeader className="pb-4 pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-14 w-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          {app.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                            {app.name}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium text-gray-500">
                            {app.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                        {app.description}
                      </p>
                    </CardContent>
                    <CardContent className="pt-0">
                      <Button
                        className={`w-full h-12 rounded-xl font-medium transition-all duration-300 ${app.color} ${app.hoverColor} hover:shadow-lg group-hover:shadow-xl`}
                        asChild
                      >
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-white"
                        >
                          <span>Open App</span>
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-200 text-blue-800 rounded-full font-semibold text-xs mb-3 tracking-widest shadow-sm">
              FEATURED
            </span>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-2 drop-shadow">
              Featured Articles
            </h1>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto font-medium">
              Get inspired by our latest stories, insights, and highlights from
              the world of SMCT and its partners.
            </p>
          </motion.div>
          <div className="flex flex-col gap-10">
            {featuredArticles.length === 0 ? (
              <div className="col-span-full text-center text-black text-lg py-8">
                No featured articles found.
              </div>
            ) : (
              featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 group-hover:bg-blue-50">
                    <div className="md:w-1/3 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 md:p-0">
                      <img
                        src={article.image}
                        alt={article.name}
                        className="object-contain w-40 h-40 md:w-56 md:h-56 rounded-2xl shadow-md border border-blue-200"
                      />
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-3 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
                          {article.category}
                        </span>
                        <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {article.name}
                        </h2>
                        <p className="text-base text-gray-700 mb-4 font-medium">
                          {article.excerpt}
                        </p>
                      </div>
                      <div>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition-all duration-200 text-lg group-hover:scale-105"
                        >
                          Read Article
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto text-center mb-20"
          ></motion.div>

          {/* Company Overview */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/smct.png"
                alt="SMCT Logo"
                width={500}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-blue-800 mb-6">
                ABOUT US
              </h3>
              <div className="space-y-4 text-gray-700 font-semibold">
                <p>
                  Strong Moto Centrum, Inc. operates as a multi-brand
                  motorcycle, appliances, and tri-wheeler dealership, aiming to
                  be one of the leading dealers in the Philippines.
                </p>
                <p>
                  Our branches in major cities like Cavite, Laguna, Cebu, Davao,
                  Cagayan de Oro, Zamboanga, and other areas in Luzon, Visayas,
                  and Mindanao are open to cater to our customer`s needs. With
                  over 30 branches nationwide, we are always ready to give you
                  the best motorcycles and appliances that will suit your needs.
                </p>
                <p>
                  At present, we are increasing our efforts in expanding to
                  reach a larger number of customers to help bring comfort to
                  their homes, as we continue to offer quality service and
                  improve customer experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, and Goals Section */}
      <section className="py-24 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center mb-4">
              <span className="h-px w-16 bg-blue-400 mr-4"></span>
              <span className="text-blue-400 font-medium tracking-wider">
                OUR PURPOSE
              </span>
              <span className="h-px w-16 bg-blue-400 ml-4"></span>
            </div>
            <h2 className="text-5xl font-bold text-black mb-6">
              Vision, Mission <span className="text-blue-400">&</span> Goals
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through innovative technology solutions that
              drive growth, efficiency, and sustainable success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="group"
            >
              <Card className="h-full border border-gray-300 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-3xl overflow-hidden bg-gray-300/50 backdrop-blur-sm hover:border-blue-400">
                <CardHeader className="pb-0 pt-8 px-8">
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-black ">
                        Our Vision
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <p className="text-black leading-relaxed text-lg">
                    to become the leader on the philipines vehivle and applaince
                    industry, We believe in imporoving the quality of life of
                    Filipinos both insde and outside their homes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="group"
            >
              <Card className="h-full border border-gray-300  shadow-2xl hover:shadow-green-500/20 transition-all duration-500 rounded-3xl overflow-hidden bg-gray-300/50 backdrop-blur-sm hover:border-blue-400">
                <CardHeader className="pb-0 pt-8 px-8">
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-black">
                        Our Mission
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <p className="text-black leading-relaxed text-lg text-bold">
                    We offer quality technology and excellent services that qre
                    affordable and accessible to all Filipinos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="group"
            >
              <Card className="h-full border border-gray-300 shadow-2xl  hover:shadow-yellow-500/20 transition-all duration-500 rounded-3xl overflow-hidden bg-gray-300/50 backdrop-blur-sm hover:border-blue-400">
                <CardHeader className="pb-0 pt-8 px-8">
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-black">
                        Values
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-8 px-8">
                  <p className="text-black leading-relaxed text-lg">
                    Every interaction with our customers, partner, and employee
                    is guided with being a L.E.A.D.E.R in mind
                  </p>
                  <ul className="text-black leading-relaxed text-lg space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>
                        L- Loyalty -We are dedicated to our company,customer,and
                        co-workers.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>
                        E- Expertise -We are professinals on the job and in our
                        field.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>
                        A- Accountability -We take ownership of our work.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>D- Diligence -We work hard and perservere.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>
                        E- Efficiency -We make the best use of our time and
                        energy in the service of our customers.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>
                        R- Respect -We hold our company, co-workers, customer,
                        and partners in high regard.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <div>
        {/* Contact Section */}
        <motion.div
          className="py-24 bg-white text-black max-w-full mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Location</h4>
              <p>J.A. Clarin St, Tagbilaran City, Bohol</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <FiPhone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Contact</h4>
              <p>(+63) 970 192 9564</p>
              <p>info@smctgroup.ph</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500 p-4 rounded-full mb-4">
                <SiFacebook className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Facebook page :</h4>
              <a
                href="https://www.facebook.com/StrongMotoCentrumInc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
              >
                STRONG MOTO CENTRUM,INC.
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-0 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-md border-t border-blue-400/30 py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Branding */}
            <motion.div
              className="flex items-center space-x-4 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-xl blur-md"></div>
                <Image
                  src="/smct.png"
                  alt="SMCT Application Center Logo"
                  width={80}
                  height={80}
                  className="relative z-10 drop-shadow-lg"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  SMCT Application Center
                </span>
                <p className="text-sm text-blue-100 mt-1">
                  Powered by SMCT Group
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-full flex flex-col items-center sm:items-start mb-4">
                <div className="w-full flex items-center justify-center sm:justify-start mb-2">
                  <span className="text-white font-bold text-xl tracking-wide">
                    Made with ♥️ by:
                  </span>
                  <span className="ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold shadow-md">
                    SMCT Dev Team
                  </span>
                </div>
                <div className="w-full flex items-center justify-center sm:justify-start">
                  <span className="block w-82 h-1 bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-full opacity-60"></span>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-3 justify-center sm:justify-start w-full mb-1">
                {devs.map((dev) => (
                  <motion.div
                    key={dev.link}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                    className="group cursor-pointer flex flex-col items-center"
                  >
                    <a
                      href={dev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center space-y-1 transition-all duration-300"
                    >
                      <div className="bg-white/20 p-1 rounded-full group-hover:bg-blue-500/80 transition-colors duration-300 shadow-md">
                        <Avatar>
                          {dev.avatar ? (
                            <AvatarImage src={dev.avatar} alt={dev.name} />
                          ) : (
                            <AvatarFallback>
                              {dev.name.charAt(4)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                      </div>
                      <span className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors duration-200">
                        {dev.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Additional Social Links */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer hidden sm:flex"
              ></motion.div>
            </div>
          </div>

          {/* Copyright and Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 pt-6 border-t border-blue-500/30 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SMCT Application Center. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      <motion.div
        className="flex space-x-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      ></motion.div>
      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowHelpModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex justify-center mb-8">
              <Image
                src="/smct.png"
                alt="SMCT Group Logo"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              What is the App Library?
            </h2>
            <p className="text-black text-lg font-bold">
              The App Library is your centralized hub for all SMCT applications
              and tools. Easily find, search, and access the resources you need
              to streamline your workflow and empower your team—all in one
              place!
            </p>
          </div>
        </div>
      )}
      {/* Feedback Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full p-5 shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/60 transition-all duration-200 transform hover:scale-110 active:scale-95 group hover:shadow-blue-400/40 hover:shadow-lg flex items-center justify-center"
          onClick={() => setShowFeedbackModal(true)}
          aria-label="Send Feedback"
          type="button"
        >
          {/* Chat bubble icon, larger and centered */}
          <svg
            className="w-8 h-8 group-hover:animate-bounce mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4.28 1.07A1 1 0 013 19.13l1.07-4.28A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="ml-2 font-semibold text-white text-base hidden sm:inline">
            Send Feedback
          </span>
        </button>
      </div>
      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-2xl p-0 max-w-md w-full relative overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center gap-3 px-8 pt-8 pb-4 border-b border-blue-100">
              <div className="bg-blue-600 rounded-full p-2 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4.28 1.07A1 1 0 013 19.13l1.07-4.28A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-700">
                  Send Feedback
                </h2>
                <p className="text-xs text-blue-500 font-medium">
                  We value your feedback! Let us know how we can improve.
                </p>
              </div>
              <button
                className="absolute top-3 right-4 text-gray-400 hover:text-blue-700 text-2xl font-bold focus:outline-none"
                onClick={() => setShowFeedbackModal(false)}
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
            </div>
            <div className="px-8 py-6">
              {feedbackSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  {/* Animated checkmark */}
                  <svg
                    className="w-16 h-16 text-green-500 mb-4 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="text-green-700 font-bold text-lg text-center">
                    Thank you for your feedback!
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleFeedbackSubmit}
                  className="flex flex-col gap-5"
                >
                  <div>
                    <textarea
                      required
                      maxLength={maxFeedbackLength}
                      className="border-2 border-blue-200 rounded-xl p-3 w-full min-h-[90px] text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all resize-none shadow-sm"
                      placeholder="Your feedback..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      aria-label="Your feedback"
                      disabled={feedbackLoading}
                    />
                    <div className="flex justify-end text-xs text-blue-400 mt-1">
                      {feedbackText.length}/{maxFeedbackLength}
                    </div>
                  </div>
                  <input
                    type="email"
                    className="border-2 border-blue-200 rounded-xl p-3 w-full text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all shadow-sm"
                    placeholder="Your email (optional)"
                    value={feedbackEmail}
                    onChange={(e) => setFeedbackEmail(e.target.value)}
                    aria-label="Your email (optional)"
                    disabled={feedbackLoading}
                  />
                  {feedbackError && (
                    <div className="text-red-600 text-sm font-semibold text-center mb-2">
                      {feedbackError}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl px-6 py-3 font-bold shadow-md hover:from-blue-700 hover:to-blue-500 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={feedbackLoading}
                  >
                    {feedbackLoading && (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                    )}
                    {feedbackLoading ? "Sending..." : "Submit Feedback"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
