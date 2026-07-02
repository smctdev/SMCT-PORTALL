"use client";

import { FiPhone, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Box,
  Computer,
  Ticket,
  Menu,
  FileQuestion,
  DollarSign,
  Sparkles,
  Rocket,
  Globe,
  Target,
  Building2,
  FileText,
  LifeBuoy,
  ChartLine,
  Clock,
  LayoutGrid,
  ShoppingBag,
  MessageCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

import { SiFacebook } from "react-icons/si";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
    name: "PERFORMANCE EVALUATION",
    description:
      "Evaluate and track staff performance, feedback, and assessment records.",
    icon: <ChartLine className="w-6 h-6 " />,
    url: "https://performance-evaluation.smctgroup.ph",
    category: "EVALUATION",
    color: "bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900",
    hoverColor: "bg-blue-500 hover:bg-yellow-400 hover:text-white font-bold",
  },
  {
    id: 3,
    name: "TICKETING PORTAL",
    description:
      "Handle customer and internal support requests efficiently through the SMCT Ticketing Portal.",
    icon: <Ticket className="w-6 h-6" />,
    url: "https://ticketing-portal.smctgroup.ph",
    category: "TICKETING",
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
    id: 17,
    name: "CONTRACT FORM",
    description:
      "A contract form used to confirm the sale or service agreement between the customer and SMCT, detailing the vehicle, terms, and signatures.",
    icon: <FileText className="w-6 h-6" />,
    url: "https://smctgroup.com/contractform/login.php",
    category: "CONTRACT",
    color: "bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700",
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
      "Get ready to experience the future of riding! Last April 26, 2025, is the grand launching of our very own revolutionary Hatasu E-bike in PureGold Ubay, designed to redefine personal mobility. ",
    image: "/art1.png",
    url: "https://strongmotocentrum.com/ride-the-revolution-e-bike-grand-launching/",
    category: "STRONG MOTO",
  },
  {
    id: 14,
    name: "DES APPLIANCE",
    excerpt:
      "The air buzzed with excitement as DES APPLIANCE PLAZA, INC. Initao officially opened its doors to the public on July 03, 2024 at Purok 13, National Highway, Poblacion Initao, Misamis Oriental, bringing a one-stop shop for one’s home, transportation, and business needs.",
    image: "/art 2.png",
    url: "https://desappliance.com/article-des-appliance-plaza-initao/",
    category: "APPLIANCE",
  },
  {
    id: 15,
    name: "DES STRONG",
    excerpt:
      "With a store blessing ceremony in Isulan, Sultan Kudarat, DES STRONG MOTORS, INC. officially opened its doors last October 28, 2025, bringing dedicated support and solutions to the Isulan community.",
    image: "/art 3.png",
    url: "https://desstrongmotors.com/des-strong-motors-inc-isulan-your-new-destination-for-motorcycle-wheels/",
    category: "STRONG",
  },
  {
    id: 16,
    name: "HONDA DES",
    excerpt:
      "Zamboanga City — October 25, 2025 — Honda Des Inc. Zamboanga successfully hosted its  Big Bike Tambike Night, an evening dedicated to celebrating the growing big bike community and strengthening camaraderie among riders.",
    image: "/art 4.png",
    url: "https://hondades.com/big-bike-tambike-night-brings-riders-together-in-zamboanga/",
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
  {
    name: "Dev_Tian",
    link: "https://chat.smctgroup.ph/direct/dev_tian",
    avatar: "/avatars/Dev_Tian.png",
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

function AbstractSectionBackground({
  patternId = "section-grid",
  variant = "internal",
}: {
  patternId?: string;
  variant?: "internal" | "commerce" | "articles";
}) {
  const isCommerce = variant === "commerce";
  const isArticles = variant === "articles";

  const gradientClass = isCommerce
    ? "from-white via-emerald-50/40 to-blue-50/35"
    : isArticles
      ? "from-slate-50 via-violet-50/35 to-blue-50/40"
      : "from-slate-50 via-blue-50/50 to-indigo-50/30";

  const blobTopRight = isCommerce
    ? "bg-emerald-400/15"
    : isArticles
      ? "bg-violet-400/15"
      : "bg-blue-400/20";

  const blobLeft = isCommerce
    ? "bg-teal-400/10"
    : isArticles
      ? "bg-indigo-400/12"
      : "bg-indigo-400/15";

  const blobBottom = isCommerce
    ? "bg-blue-400/15"
    : isArticles
      ? "bg-blue-400/18"
      : "bg-sky-400/20";

  const gridColor = isCommerce
    ? "text-emerald-300/20"
    : isArticles
      ? "text-violet-300/22"
      : "text-blue-300/25";

  const dotGradient = isCommerce
    ? "radial-gradient(circle at 1px 1px, rgb(16 185 129 / 0.1) 1px, transparent 0)"
    : isArticles
      ? "radial-gradient(circle at 1px 1px, rgb(139 92 246 / 0.1) 1px, transparent 0)"
      : "radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.12) 1px, transparent 0)";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
      <div
        className={`absolute -top-20 right-0 h-72 w-72 rounded-full blur-3xl ${blobTopRight}`}
      />
      <div
        className={`absolute top-1/2 -left-24 h-80 w-80 rounded-full blur-3xl ${blobLeft}`}
      />
      <div
        className={`absolute -bottom-16 right-1/3 h-64 w-64 rounded-full blur-3xl ${blobBottom}`}
      />
      <svg
        className={`absolute inset-0 h-full w-full ${gridColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: dotGradient,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

function ApplicationHubsDivider() {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center py-2 sm:py-3"
      aria-hidden
    >
      <div className="flex w-full max-w-md items-center gap-3 px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300/70 to-blue-400/30" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/90 bg-white shadow-md ring-4 ring-gray-100/80">
          <ChevronDown className="h-4 w-4 text-blue-500" strokeWidth={2.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-300/70 to-emerald-400/30" />
      </div>
      <p className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        Brand stores & shops
      </p>
    </div>
  );
}

function ContactSectionDivider() {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center py-2 sm:py-3"
      aria-hidden
    >
      <div className="flex w-full max-w-md items-center gap-3 px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/70 to-blue-300/30" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md ring-4 ring-blue-50/90">
          <LifeBuoy className="h-4 w-4 text-blue-600" strokeWidth={2.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/60 to-blue-400/25" />
      </div>
      <p className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        Get in touch
      </p>
    </div>
  );
}

function AboutSectionDivider() {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center py-2 sm:py-3"
      aria-hidden
    >
      <div className="flex w-full max-w-md items-center gap-3 px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/70 to-blue-300/30" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md ring-4 ring-blue-50/90">
          <Building2 className="h-4 w-4 text-blue-600" strokeWidth={2.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/60 to-blue-400/25" />
      </div>
      <p className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        Our company
      </p>
    </div>
  );
}

function FeaturedArticlesDivider() {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center py-2 sm:py-3"
      aria-hidden
    >
      <div className="flex w-full max-w-md items-center gap-3 px-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-300/70 to-violet-300/40" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md ring-4 ring-blue-50/90">
          <FileText className="h-4 w-4 text-blue-600" strokeWidth={2.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-400/70 to-blue-300/30" />
      </div>
      <p className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        News & highlights
      </p>
    </div>
  );
}

// Live date/time + weather panel for the header bar
function HeaderStatusBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [weather, setWeather] = useState<{
    temp: string;
    condition: string;
    icon: string;
  } | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      const apiKey = "6832420060375fa1f473c4bee1266976";
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Tagbilaran,PH&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        if (res.ok && data.main && data.weather) {
          setWeather({
            temp: `${Math.round(data.main.temp)}°C`,
            condition: data.weather[0].main,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          });
        } else {
          setWeather(null);
        }
      } catch {
        setWeather(null);
      }
    }
    fetchWeather();
  }, []);

  const timeOpts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  };
  const timeShortOpts: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  };

  const time = now?.toLocaleTimeString("en-PH", timeOpts) ?? "--:--:--";
  const timeShort =
    now?.toLocaleTimeString("en-PH", timeShortOpts) ?? "--:--";
  const day =
    now?.toLocaleDateString("en-PH", {
      weekday: "short",
      timeZone: "Asia/Manila",
    }) ?? "---";
  const date =
    now?.toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Manila",
    }) ?? "--- --, ----";

  return (
    <div className="flex w-full sm:w-auto items-center rounded-xl bg-white/15 backdrop-blur-md border border-white/30 shadow-sm overflow-hidden">
      {/* Time */}
      <div className="flex flex-1 sm:flex-initial items-center gap-2.5 px-3 sm:px-4 py-2.5 min-w-0">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20">
          <Clock className="h-4 w-4 text-white" aria-hidden />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] uppercase tracking-wider text-blue-100 font-semibold leading-none">
            <span className="sm:hidden">PST</span>
            <span className="hidden sm:inline">Philippine Standard Time</span>
          </span>
          <time
            dateTime={now?.toISOString()}
            suppressHydrationWarning
            className="text-lg sm:text-xl font-bold text-white tabular-nums leading-tight mt-0.5"
          >
            <span className="sm:hidden">{timeShort}</span>
            <span className="hidden sm:inline">{time}</span>
          </time>
          <span className="text-[11px] sm:text-xs text-blue-100/90 font-medium truncate mt-0.5">
            {day}, {date}
          </span>
        </div>
      </div>

      <div className="w-px h-10 bg-white/30 shrink-0" aria-hidden />

      {/* Weather */}
      <div className="flex items-center gap-2.5 px-3 sm:px-4 py-2.5 shrink-0">
        {weather ? (
          <>
            <img
              src={weather.icon}
              alt={weather.condition}
              className="w-8 h-8 shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-blue-100 font-semibold leading-none">
                Tagbilaran
              </span>
              <span className="text-sm sm:text-base font-bold text-white leading-tight mt-0.5">
                {weather.temp}
              </span>
              <span className="text-[11px] text-blue-100/90 truncate max-w-[100px] sm:max-w-[120px] mt-0.5 hidden sm:block">
                {weather.condition}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-blue-100 font-semibold">
              Weather
            </span>
            <span className="text-xs text-blue-100/80 mt-0.5">Unavailable</span>
          </div>
        )}
      </div>
    </div>
  );
}

function FeedbackFloatingButton({
  showFeedbackModal,
  onToggle,
}: {
  showFeedbackModal: boolean;
  onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const label = showFeedbackModal ? "Close" : "Send Feedback";
  const iconSize = 48;
  const hoverWidth = showFeedbackModal ? 112 : 188;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50">
      <motion.button
        type="button"
        aria-label={showFeedbackModal ? "Close feedback" : "Send feedback"}
        aria-expanded={showFeedbackModal}
        title={label}
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative flex h-12 items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-lg shadow-blue-600/40 ring-2 ring-white/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/80"
        animate={{ width: hovered ? hoverWidth : iconSize }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        whileTap={{ scale: 0.96 }}
      >
        {!showFeedbackModal && !hovered && (
          <motion.span
            className="pointer-events-none absolute inset-0 z-0 rounded-full bg-blue-400/80"
            animate={{ opacity: [0.35, 0.1, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        )}

        <motion.span
          className="flex h-12 min-w-0 items-center overflow-hidden"
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            width: hovered ? hoverWidth - iconSize : 0,
          }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden
        >
          <span className="whitespace-nowrap pl-4 pr-2 text-sm font-semibold leading-none">
            {label}
          </span>
        </motion.span>

        <span
          className="relative z-10 flex shrink-0 items-center justify-center"
          style={{ width: iconSize, height: iconSize }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            {showFeedbackModal ? (
              <X className="h-5 w-5 text-white" strokeWidth={2.5} />
            ) : (
              <MessageCircle className="h-5 w-5 text-white cursor-pointer" strokeWidth={2.25} />
            )}
          </span>
        </span>
      </motion.button>
    </div>
  );
}

// Reminder: Run 'npm install @react-google-maps/api' if you haven't already.

const mapContainerStyle = { width: '100%', height: '400px' };
const defaultCenter = { lat: 9.6556, lng: 123.8531 }; // Tagbilaran City

// Remove LocationMapModal and showMap state

export default function LandingPage() {
  // Feedback modal state and handlers (moved inside component)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  const maxFeedbackLength = 500;

  useEffect(() => {
    if (!showFeedbackModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowFeedbackModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showFeedbackModal]);

  async function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedbackLoading(true);
    setFeedbackError("");
    try {
      const now = new Date();
      const payload = {
        data: [
          {
            timestamp: now.toISOString(),
            date: now.toISOString().slice(0, 10), // YYYY-MM-DD
            time: now.toTimeString().slice(0, 8), // HH:mm:ss
            feedback: feedbackText,
            email: feedbackEmail,
          },
        ],
      };
      const res = await fetch("https://sheetdb.io/api/v1/hp7jd34na7hxd", {
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
  // Remove LocationMapModal and showMap state

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
    <div className="min-h-screen bg-gray-200 flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 shadow-lg border-b border-blue-500/40">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-3.5">
            <motion.a
              href="#"
              className="flex items-center gap-3 sm:gap-4 min-w-0 group"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/smct.png"
                alt="SMCT Group Logo"
                width={80}
                height={80}
                className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 object-contain drop-shadow-md transition-transform group-hover:scale-105"
                priority
              />
              <div className="min-w-0 text-left border-l border-white/25 pl-3 sm:pl-4">
                <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight tracking-tight">
                  SMCT Application Center
                </h1>
                <p className="text-[11px] sm:text-xs text-blue-100/90 font-medium mt-0.5">
                  Your SMCT App Library
                </p>
              </div>
            </motion.a>

            <motion.div
              className="w-full sm:w-auto shrink-0"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <HeaderStatusBar />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-14 sm:py-16 md:py-20 relative min-h-[min(85vh,720px)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/blg.jpg")' }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-black/45 to-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-8 sm:px-10 sm:py-12 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative mb-5 sm:mb-6"
            >
              <div
                className="absolute inset-0 scale-125 rounded-full bg-blue-400/25 blur-2xl"
                aria-hidden
              />
              <Image
                src="/smct.png"
                alt="SMCT Group"
                width={160}
                height={160}
                className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 mb-5 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-200 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                Your Digital Workspace
              </span>
            </motion.div>

            <h2 className="font-bold text-white leading-tight drop-shadow-lg mb-4 sm:mb-5">
              <span className="block text-lg sm:text-2xl md:text-3xl font-semibold text-white/90 mb-1 sm:mb-2">
                Welcome to
              </span>
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] bg-gradient-to-r from-blue-200 via-sky-100 to-white bg-clip-text text-transparent pb-1">
                SMCT Application Center
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto drop-shadow-md mb-6 sm:mb-8 px-1">
              All your team&apos;s tools, resources, and support in one place.
              Streamline your workflow and empower your team to do their best
              work.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <a
                href="#applications"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-blue-700 px-6 py-2.5 text-sm sm:text-base font-bold shadow-lg hover:bg-blue-50 transition-colors w-full sm:w-auto"
              >
                Browse Applications
                <ChevronRight className="h-4 w-4" />
              </a>
              <span className="text-xs sm:text-sm text-white/60 font-medium">
                SMCT Group · Internal Portal
              </span>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <div className="bg-gradient-to-b from-gray-100 via-slate-100/90 to-gray-100 px-3 sm:px-5 lg:px-8 py-8 sm:py-12 lg:py-14 flex flex-col gap-8 sm:gap-10 lg:gap-12">
      {/* Company Applications Hub */}
      <section
        id="applications"
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-14 sm:py-20 scroll-mt-24 shadow-sm ring-1 ring-gray-200/60"
      >
        <AbstractSectionBackground
          patternId="apps-hub-grid"
          variant="internal"
        />
        <div className="container relative z-10 max-w-7xl px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
              <LayoutGrid className="h-3.5 w-3.5" />
              Internal tools
            </span>
            <div className="flex justify-center mb-5 sm:mb-6">
              <Image
                src="/data.png"
                alt="SMCT applications"
                width={120}
                height={120}
                className="h-20 w-20 sm:h-28 sm:w-28 object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Company Applications Hub
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Access all your essential tools and applications in one
              centralized location.
            </p>
            <p className="mt-3 text-sm font-medium text-blue-600">
              {filteredApps.length}{" "}
              {filteredApps.length === 1 ? "application" : "applications"}{" "}
              available
            </p>
          </motion.div>

          <div className="rounded-2xl border border-gray-200/80 bg-white shadow-sm p-4 sm:p-6 mb-8 sm:mb-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <Input
                  placeholder="Search by name or description..."
                  className="pl-11 h-11 sm:h-12 w-full rounded-xl border-gray-200 bg-gray-50/80 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
                  value={search}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(e.target.value)
                  }
                  aria-label="Search applications"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    type="button"
                    variant="outline"
                    size="sm"
                    className={`rounded-full px-4 py-1.5 h-auto text-xs sm:text-sm font-semibold border-gray-200 transition-all ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            {(search || selectedCategory !== "All") && (
              <p className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 text-center sm:text-left">
                Showing {filteredApps.length} matching{" "}
                {filteredApps.length === 1 ? "app" : "apps"}
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in <span className="font-medium text-gray-700">{selectedCategory}</span>
                  </span>
                )}
                {search && (
                  <span>
                    {" "}
                    for &ldquo;
                    <span className="font-medium text-gray-700">{search}</span>
                    &rdquo;
                  </span>
                )}
              </p>
            )}
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredApps.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-14 px-6 text-center">
                <Search className="h-10 w-10 text-gray-300 mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  No applications found
                </p>
                <p className="text-sm text-gray-500 mt-1 max-w-sm">
                  Try a different search term or clear your category filter.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-5 rounded-full"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredApps.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className="group h-full"
                >
                  <Card className="h-full flex flex-col border border-gray-200/80 shadow-md hover:shadow-xl hover:border-blue-200/60 transition-all duration-300 rounded-2xl overflow-hidden bg-white group-hover:bg-white">
                    <div
                      className={`h-1 ${app.color} ${app.hoverColor} transition-all duration-300`}
                    />
                    <CardHeader className="pb-3 pt-5 px-5">
                      <div className="flex items-start gap-3">
                        <div
                          className={`${app.color} h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                        >
                          {app.icon}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <CardTitle className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
                            {app.name}
                          </CardTitle>
                          <CardDescription className="text-xs font-semibold uppercase tracking-wide text-blue-600/80 mt-1">
                            {app.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 px-5 pb-4 pt-0">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {app.description}
                      </p>
                    </CardContent>
                    <CardContent className="px-5 pb-5 pt-0">
                      <Button
                        className={`w-full h-11 rounded-xl font-semibold transition-all duration-300 ${app.color} text-white hover:opacity-95 hover:shadow-md`}
                        asChild
                      >
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span>Open application</span>
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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

      <ApplicationHubsDivider />

      {/* Second Applications Hub — E-Commerce */}
      <section
        id="ecommerce"
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-14 sm:py-20 scroll-mt-24 shadow-sm ring-1 ring-gray-200/60"
      >
        <AbstractSectionBackground
          patternId="ecommerce-hub-grid"
          variant="commerce"
        />
        <div className="container relative z-10 max-w-7xl px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full">
              <ShoppingBag className="h-3.5 w-3.5" />
              E-Commerce
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Brand Stores & Online Shops
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore SMCT group storefronts and partner e-commerce sites in one
              place.
            </p>
            <p className="mt-3 text-sm font-medium text-emerald-700">
              {filteredApps2.length}{" "}
              {filteredApps2.length === 1 ? "store" : "stores"}{" "}
              {search || selectedCategory !== "All"
                ? "matching your filters"
                : "available"}
            </p>
            {(search || selectedCategory !== "All") && (
              <p className="mt-2 text-xs text-gray-500">
                Filters apply from the search bar above.
              </p>
            )}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredApps2.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/90 py-14 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-gray-300 mb-4" />
                <p className="text-lg font-semibold text-gray-800">
                  No stores found
                </p>
                <p className="text-sm text-gray-500 mt-1 max-w-sm">
                  Try another search or reset the category filter in the
                  applications hub above.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-5 rounded-full"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredApps2.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className="group h-full"
                >
                  <Card className="h-full flex flex-col border border-gray-200/80 shadow-md hover:shadow-xl hover:border-emerald-200/60 transition-all duration-300 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                    <div className={`h-1 ${app.color}`} />
                    <CardHeader className="pb-3 pt-5 px-5">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                          {app.icon}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <CardTitle className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
                            {app.name}
                          </CardTitle>
                          <CardDescription className="text-xs font-semibold uppercase tracking-wide text-emerald-700/80 mt-1">
                            {app.category}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 px-5 pb-4 pt-0">
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {app.description}
                      </p>
                    </CardContent>
                    <CardContent className="px-5 pb-5 pt-0">
                      <Button
                        className={`w-full h-11 rounded-xl font-semibold transition-all duration-300 ${app.color} text-white hover:opacity-95 hover:shadow-md`}
                        asChild
                      >
                        <a
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <span>Visit store</span>
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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
      </div>

      <div className="bg-gradient-to-b from-gray-100 via-slate-100/90 to-gray-100 px-3 sm:px-5 lg:px-8 py-8 sm:py-12 lg:py-14 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <FeaturedArticlesDivider />

        {/* Featured Articles Section */}
        <section
          id="featured-articles"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-14 sm:py-20 scroll-mt-24 shadow-sm ring-1 ring-gray-200/60"
        >
          <AbstractSectionBackground
            patternId="articles-hub-grid"
            variant="articles"
          />
          <div className="container relative z-10 max-w-7xl px-4 sm:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-100 rounded-full">
                <FileText className="h-3.5 w-3.5 text-blue-600" />
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                News & Highlights
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-blue-700 max-w-2xl mx-auto leading-relaxed">
                Latest stories and updates from SMCT brands and partner
                companies.
              </p>
              <p className="mt-3 text-sm font-semibold text-blue-600">
                {featuredArticles.length}{" "}
                {featuredArticles.length === 1 ? "article" : "articles"}
              </p>
            </motion.div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {featuredArticles.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-blue-200 bg-white/90 py-14 px-6 text-center">
                  <FileText className="h-10 w-10 text-blue-300 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-blue-900">
                    No articles available
                  </p>
                  <p className="text-sm text-blue-600/80 mt-1">
                    Check back later for company news and updates.
                  </p>
                </div>
              ) : (
                featuredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: Math.min(index * 0.08, 0.32),
                      duration: 0.35,
                    }}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-blue-100/80 bg-white/95 backdrop-blur-sm shadow-md hover:shadow-xl hover:border-blue-300/60 transition-all duration-300">
                      <div className="relative sm:w-[220px] md:w-[260px] shrink-0 bg-gradient-to-br from-blue-50 to-blue-100/80 p-5 sm:p-6 flex items-center justify-center">
                        <div className="relative h-36 w-full sm:h-40 max-w-[200px] mx-auto">
                          <Image
                            src={article.image}
                            alt={article.name}
                            fill
                            className="object-contain drop-shadow-md"
                            sizes="(max-width: 640px) 200px, 260px"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 min-w-0 text-left">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
                            {article.category}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                            {article.name}
                          </h3>
                          <p className="text-sm text-blue-800/85 leading-relaxed line-clamp-3 sm:line-clamp-4">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 sm:mt-5">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
                          >
                            Read article
                            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-gray-100 via-slate-100/90 to-gray-100 px-3 sm:px-5 lg:px-8 py-8 sm:py-12 lg:py-14 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <AboutSectionDivider />

        {/* About Us + Vision / Mission / Values */}
        <section
          id="about"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-14 sm:py-20 scroll-mt-24 shadow-sm ring-1 ring-gray-200/60"
        >
          <AbstractSectionBackground
            patternId="about-hub-grid"
            variant="internal"
          />
          <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-100 rounded-full">
                <Building2 className="h-3.5 w-3.5 text-blue-600" />
                About SMCT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                Who We Are
              </h2>
              <p className="text-sm sm:text-base text-blue-700 max-w-2xl mx-auto leading-relaxed">
                Strong Moto Centrum, Inc. — serving communities across the
                Philippines with quality vehicles and appliances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-blue-100/80 bg-white/95 backdrop-blur-sm shadow-md p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-full lg:w-2/5 flex justify-center">
                  <Image
                    src="/smct.png"
                    alt="SMCT Logo"
                    width={400}
                    height={400}
                    className="w-full max-w-xs sm:max-w-sm object-contain drop-shadow-lg"
                  />
                </div>
                <div className="w-full lg:w-3/5 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
                    About Us
                  </h3>
                  <div className="space-y-4 text-sm sm:text-base text-blue-800/90 leading-relaxed">
                    <p>
                      Strong Moto Centrum, Inc. operates as a multi-brand
                      motorcycle, appliances, and tri-wheeler dealership, aiming
                      to be one of the leading dealers in the Philippines.
                    </p>
                    <p>
                      Our branches in major cities like Cavite, Laguna, Cebu,
                      Davao, Cagayan de Oro, Zamboanga, and other areas in Luzon,
                      Visayas, and Mindanao are open to cater to our
                      customers&apos; needs. With over 30 branches nationwide, we
                      are always ready to give you the best motorcycles and
                      appliances that will suit your needs.
                    </p>
                    <p>
                      At present, we are increasing our efforts in expanding to
                      reach a larger number of customers to help bring comfort to
                      their homes, as we continue to offer quality service and
                      improve customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-10 sm:w-16 bg-blue-300" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Our purpose
                </span>
                <span className="h-px w-10 sm:w-16 bg-blue-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3">
                Vision, Mission & Values
              </h3>
              <p className="text-sm sm:text-base text-blue-700 max-w-2xl mx-auto">
                Empowering businesses through innovative technology solutions that
                drive growth, efficiency, and sustainable success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <Card className="h-full border border-blue-100/80 bg-white/95 shadow-md hover:shadow-lg hover:border-blue-300/60 transition-all rounded-2xl overflow-hidden">
                  <CardHeader className="pb-2 pt-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-blue-900">
                        Our Vision
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6 px-6 pt-0">
                    <p className="text-sm text-blue-800/90 leading-relaxed">
                      To become the leader in the Philippines vehicle and
                      appliance industry. We believe in improving the quality of
                      life of Filipinos both inside and outside their homes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="group h-full"
              >
                <Card className="h-full border border-blue-100/80 bg-white/95 shadow-md hover:shadow-lg hover:border-blue-300/60 transition-all rounded-2xl overflow-hidden">
                  <CardHeader className="pb-2 pt-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                        <Rocket className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-blue-900">
                        Our Mission
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6 px-6 pt-0">
                    <p className="text-sm text-blue-800/90 leading-relaxed">
                      We offer quality technology and excellent services that are
                      affordable and accessible to all Filipinos.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group h-full md:col-span-2 lg:col-span-1"
              >
                <Card className="h-full border border-blue-100/80 bg-white/95 shadow-md hover:shadow-lg hover:border-blue-300/60 transition-all rounded-2xl overflow-hidden">
                  <CardHeader className="pb-2 pt-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                        <Target className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-blue-900">
                        L.E.A.D.E.R. Values
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6 px-6 pt-0">
                    <p className="text-sm text-blue-800/90 leading-relaxed mb-4">
                      Every interaction with our customers, partners, and
                      employees is guided by being a L.E.A.D.E.R.
                    </p>
                    <ul className="space-y-2.5 text-sm text-blue-800/90">
                      {[
                        "L — Loyalty: dedicated to our company, customers, and co-workers.",
                        "E — Expertise: professionals on the job and in our field.",
                        "A — Accountability: we take ownership of our work.",
                        "D — Diligence: we work hard and persevere.",
                        "E — Efficiency: best use of time and energy in service of customers.",
                        "R — Respect: we hold our company, co-workers, customers, and partners in high regard.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-gradient-to-b from-gray-100 via-slate-100/90 to-gray-100 px-3 sm:px-5 lg:px-8 py-8 sm:py-12 lg:py-14 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <ContactSectionDivider />

        {/* Contact Section */}
        <section
          id="contact"
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-14 sm:py-20 scroll-mt-24 shadow-sm ring-1 ring-gray-200/60"
        >
          <AbstractSectionBackground
            patternId="contact-hub-grid"
            variant="internal"
          />
          <motion.div
            className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-semibold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-100 rounded-full">
                <LifeBuoy className="h-3.5 w-3.5 text-blue-600" />
                Contact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-blue-700 max-w-2xl mx-auto">
                Reach our team or visit us — we&apos;re here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
              <div className="flex flex-col items-center text-center rounded-2xl border border-blue-100/80 bg-white/95 backdrop-blur-sm shadow-md p-6 sm:p-7 hover:shadow-lg hover:border-blue-200/60 transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3.5 rounded-full mb-4 shadow-md">
                  <FiMapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Location</h4>
                <p className="text-sm text-blue-800/90 leading-relaxed">
                  J.A. Clarin St, Tagbilaran City, Bohol
                </p>
              </div>

              <div className="flex flex-col items-center text-center rounded-2xl border border-blue-100/80 bg-white/95 backdrop-blur-sm shadow-md p-6 sm:p-7 hover:shadow-lg hover:border-blue-200/60 transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3.5 rounded-full mb-4 shadow-md">
                  <FiPhone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Contact</h4>
                <a
                  href="tel:+639701929564"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  (+63) 970 192 9564
                </a>
                <a
                  href="mailto:info@smctgroup.ph"
                  className="text-sm text-blue-600/90 hover:text-blue-800 mt-1 transition-colors"
                >
                  info@smctgroup.ph
                </a>
              </div>

              <div className="flex flex-col items-center text-center rounded-2xl border border-blue-100/80 bg-white/95 backdrop-blur-sm shadow-md p-6 sm:p-7 hover:shadow-lg hover:border-blue-200/60 transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3.5 rounded-full mb-4 shadow-md">
                  <SiFacebook className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Facebook</h4>
                <a
                  href="https://www.facebook.com/StrongMotoCentrumInc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors line-clamp-2"
                >
                  STRONG MOTO CENTRUM, INC.
                </a>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 text-center">
                Our Branches Location
              </h3>
              <div className="w-full rounded-2xl shadow-lg border border-blue-200/80 bg-white/95 p-2 sm:p-3 aspect-[16/10] max-h-[min(70vh,520px)]">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1vdJPRYaAKd4Igt2lbbicIMcXmes&hl=en&ehbc=2E312F"
                  title="SMCT branches map"
                  className="h-full w-full min-h-[240px] rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-blue-400/25 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center sm:items-start text-center sm:text-left gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/smct.png"
                alt="SMCT Application Center"
                width={72}
                height={72}
                className="h-16 w-16 sm:h-[72px] sm:w-[72px] object-contain shrink-0 drop-shadow-lg"
              />
              <div>
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  SMCT Application Center
                </p>
                <p className="text-sm text-blue-100/90 mt-1">
                  Powered by SMCT Group
                </p>
                <p className="text-xs text-blue-200/80 mt-3 max-w-sm leading-relaxed">
                  Your centralized hub for internal tools, e-commerce stores, and
                  company resources.
                </p>
              </div>
            </motion.div>

            <motion.nav
              className="lg:col-span-3 flex flex-col items-center lg:items-start"
              aria-label="Footer navigation"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200 mb-4">
                Quick links
              </p>
              <ul className="flex flex-col gap-2.5 text-sm font-medium text-white/95">
                {[
                  { label: "Applications", href: "#applications" },
                  { label: "E-Commerce", href: "#ecommerce" },
                  { label: "News & Highlights", href: "#featured-articles" },
                  { label: "About Us", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-blue-200 transition-colors inline-flex items-center gap-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 opacity-70" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              className="lg:col-span-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-5 sm:p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-4">
                <p className="text-sm font-bold text-white">
                  Made with{" "}
                  <span className="text-red-300" aria-label="love">
                    ♥
                  </span>{" "}
                  by
                </p>
                <span className="mt-2 inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-300 to-amber-400 text-blue-950 text-xs font-bold shadow-sm">
                  SMCT Dev Team
                </span>
                <span className="mt-3 block h-0.5 w-full max-w-[12rem] bg-gradient-to-r from-amber-400/80 to-transparent rounded-full" />
              </div>
              <div className="flex flex-row flex-nowrap justify-center sm:justify-start gap-4 md:gap-2 pb-1 pr-2">
                {devs.map((dev) => (
                  <a
                    key={dev.link}
                    href={dev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className="rounded-full p-0.5 ring-2 ring-white/20 group-hover:ring-white/50 transition-all">
                      <Avatar className="h-11 w-11">
                        {dev.avatar ? (
                          <AvatarImage src={dev.avatar} alt={dev.name} />
                        ) : (
                          <AvatarFallback className="bg-blue-500 text-white text-xs">
                            {dev.name.charAt(4)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-blue-100 group-hover:text-white transition-colors">
                      {dev.name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-blue-100/90">
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              SMCT Application Center. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
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
      <FeedbackFloatingButton
        showFeedbackModal={showFeedbackModal}
        onToggle={() => setShowFeedbackModal((open) => !open)}
      />

      <AnimatePresence>
        {showFeedbackModal && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6">
            <motion.button
              type="button"
              aria-label="Close feedback dialog"
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setShowFeedbackModal(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="feedback-dialog-title"
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-blue-100/80 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 48, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.94 }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 320,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 sm:px-6 py-5 text-white">
                <div className="flex items-start gap-3 pr-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 id="feedback-dialog-title" className="text-lg font-bold">
                      Send Feedback
                    </h2>
                    <p className="text-xs text-blue-100 mt-0.5 leading-relaxed">
                      Help us improve the SMCT Application Center.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
                  onClick={() => setShowFeedbackModal(false)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-5 sm:px-6 py-5 sm:py-6 bg-gradient-to-b from-blue-50/80 to-white">
                <AnimatePresence mode="wait">
                  {feedbackSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 22,
                          delay: 0.05,
                        }}
                        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                      >
                        <svg
                          className="h-8 w-8 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <p className="text-lg font-bold text-green-800">
                        Thank you for your feedback!
                      </p>
                      <p className="text-sm text-green-700/80 mt-1">
                        We appreciate you taking the time to share.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleFeedbackSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label
                          htmlFor="feedback-text"
                          className="sr-only"
                        >
                          Your feedback
                        </label>
                        <textarea
                          id="feedback-text"
                          required
                          maxLength={maxFeedbackLength}
                          className="border border-blue-200 rounded-xl p-3 w-full min-h-[100px] text-sm text-blue-900 placeholder:text-blue-400/70 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none bg-white"
                          placeholder="Share your ideas, issues, or suggestions..."
                          value={feedbackText}
                          onChange={(e) => setFeedbackText(e.target.value)}
                          disabled={feedbackLoading}
                        />
                        <div className="flex justify-end text-xs text-blue-500 mt-1">
                          {feedbackText.length}/{maxFeedbackLength}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="feedback-email"
                          className="sr-only"
                        >
                          Your email (optional)
                        </label>
                        <input
                          id="feedback-email"
                          type="email"
                          className="border border-blue-200 rounded-xl p-3 w-full text-sm text-blue-900 placeholder:text-blue-400/70 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                          placeholder="Your email (optional)"
                          value={feedbackEmail}
                          onChange={(e) => setFeedbackEmail(e.target.value)}
                          disabled={feedbackLoading}
                        />
                      </div>
                      {feedbackError && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-red-600 text-sm font-medium text-center"
                        >
                          {feedbackError}
                        </motion.p>
                      )}
                      <Button
                        type="submit"
                        disabled={feedbackLoading}
                        className="w-full cursor-pointer h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
                      >
                        {feedbackLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending...
                          </span>
                        ) : (
                          "Submit feedback"
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
