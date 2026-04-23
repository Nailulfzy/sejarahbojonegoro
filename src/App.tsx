/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Database, 
  Info, 
  ChevronRight, 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  User, 
  History, 
  Landmark,
  ShieldCheck, 
  Zap, 
  Archive, 
  Package,
  Mail, 
  Phone, 
  Globe, 
  Instagram, 
  Youtube,
  ExternalLink,
  ArrowUpDown,
  Download,
  ArrowUpRight,
  ChevronLeft,
  Award,
  Layers,
  Sparkles,
  Scale,
  X,
  FileText,
  ClipboardList,
  MessageSquare,
  Users,
  Leaf,
  Wrench
} from 'lucide-react';
import Markdown from 'react-markdown';
import { 
  primerSekunderData, 
  katalogData, 
  contractWorkersData, 
  officialCagarBudaya,
  odcbData,
  type DocumentData,
  type OfficialCagarBudaya
} from './data';
import { Language, translations } from './translations';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// --- Types ---
type Page = 'beranda' | 'katalog' | 'basis-data' | 'wbtb' | 'cagar-budaya' | 'tentang' | 'artikel-detail';

// --- Components ---

const ContractWorkerDetailModal = ({ worker, onClose, lang }: { worker: any, onClose: () => void, lang: Language }) => {
  const t = translations[lang];
  if (!worker) return null;

  const sections = [
    {
      id: 'profile',
      title: t.workerDetail.profile,
      icon: <User size={24} />,
      color: 'bg-brand-terracotta',
      fields: [
        { label: t.workerDetail.fields.name, value: worker["Nama"] },
        { label: t.workerDetail.fields.father, value: worker["Nama Ayah"] },
        { label: t.workerDetail.fields.gender, value: worker["Jenis Kelamin"] },
        { label: t.workerDetail.fields.age, value: worker["Usia"] },
        { label: t.workerDetail.fields.height, value: worker["Tinggi Badan"] },
        { label: t.workerDetail.fields.religion, value: worker["Agama"] },
      ]
    },
    {
      id: 'journey',
      title: t.workerDetail.journey,
      icon: <Globe size={24} />,
      color: 'bg-brand-gold',
      fields: [
        { label: t.workerDetail.fields.departurePlace, value: worker["Tempat Keberangkatan"] },
        { label: t.workerDetail.fields.departureDate, value: worker["Tanggal Keberangkatan"] },
        { label: t.workerDetail.fields.shipName, value: worker["Nama Kapal"] },
        { label: t.workerDetail.fields.arrivalPlace, value: worker["Tempat Kedatangan"] },
      ]
    },
    {
      id: 'contract',
      title: t.workerDetail.contract,
      icon: <FileText size={24} />,
      color: 'bg-brand-clay',
      fields: [
        { label: t.workerDetail.fields.contractCode, value: worker["Kode kontrak"] },
        { label: t.workerDetail.fields.contractStart, value: worker["Tanggal Mulai Kontrak"] },
        { label: t.workerDetail.fields.contractEnd, value: worker["Tanggal Akhir Kontrak"] },
        { label: t.workerDetail.fields.authority, value: worker["Otoritas"] },
        { label: t.workerDetail.fields.plantation, value: worker["Perkebunan"] },
      ]
    },
    {
      id: 'origin',
      title: t.workerDetail.origin,
      icon: <Landmark size={24} />,
      color: 'bg-brand-text',
      fields: [
        { label: t.workerDetail.fields.gewest, value: worker["Gewest"] },
        { label: t.workerDetail.fields.afdeling, value: worker["Afdeling"] },
        { label: t.workerDetail.fields.district, value: worker["Distrik"] },
        { label: t.workerDetail.fields.village, value: worker["Desa"] },
      ]
    },
    {
      id: 'notes',
      title: t.workerDetail.notes,
      icon: <ClipboardList size={24} />,
      color: 'bg-brand-tan',
      fields: [
        { label: t.workerDetail.fields.identityMark, value: worker["Tanda Pengenal"] },
        { label: t.workerDetail.fields.nameNote, value: worker["Catatan Nama"] },
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-text/60 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-brand-ivory rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-brand-sand/30 bg-white flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-terracotta text-white rounded-xl flex items-center justify-center shadow-lg transform -rotate-3">
                <FileText size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-terracotta italic">{t.workerDetail.title}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-text">
              {worker["Nama"]} <span className="text-brand-terracotta/40 font-mono text-xl ml-4 tracking-tighter">#{worker["Nomor Identitas"]}</span>
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-brand-ivory rounded-full flex items-center justify-center text-brand-text hover:text-brand-terracotta transition-all shadow-md active:scale-95"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-[2rem] p-8 border border-brand-sand/20 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-12 h-12 ${section.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/5 shrink-0 transition-transform group-hover:scale-110 duration-500`}>
                    {section.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-display font-bold text-brand-text tracking-tight uppercase leading-none mb-1">{section.title}</h3>
                    <div className="h-0.5 w-8 bg-brand-sand/50 rounded-full group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {section.fields.map((field, idx) => (
                    <div key={idx} className="flex justify-between items-baseline gap-4 py-3 border-b border-brand-sand/10 last:border-0 hover:bg-brand-ivory/50 px-2 rounded-lg transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted shrink-0 w-32">{field.label}</span>
                      <span className="text-right text-sm font-medium text-brand-text/90 italic">{field.value || '-'}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = ({ currentPage, setCurrentPage, lang, setLang }: { currentPage: Page, setCurrentPage: (p: Page) => void, lang: Language, setLang: (l: Language) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const menuItems: { id: Page, label: string }[] = [
    { id: 'beranda', label: t.nav.beranda },
    { id: 'katalog', label: t.nav.katalog },
    { id: 'basis-data', label: t.nav.basisData },
    { id: 'wbtb', label: t.nav.wbtb },
    { id: 'cagar-budaya', label: t.nav.cagarBudaya },
    { id: 'tentang', label: t.nav.tentang },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-ivory/90 backdrop-blur-md border-b border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setCurrentPage('beranda')}
            >
              <div className="w-9 h-9 bg-brand-terracotta rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                <Landmark size={18} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold tracking-[0.05em] uppercase text-[#1a1614]">
                  BOJONEGORO CHRONICLE
                </h1>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-terracotta relative py-2 ${
                  currentPage === item.id ? 'text-brand-terracotta' : 'text-brand-text-muted'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div 
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-terracotta rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex md:hidden items-center">
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="p-2 rounded-xl border border-brand-sand/40"
  >
    ☰
  </button>
</div>
{mobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white border-t border-brand-sand/30 shadow-lg md:hidden z-50">
    <div className="flex flex-col px-6 py-4">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setCurrentPage(item.id);
            setMobileMenuOpen(false);
          }}
          className="text-left py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-brand-text-muted border-b border-brand-sand/20 last:border-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
)}

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-brand-beige/50 p-1 rounded-xl border border-brand-sand/30">
              <button 
                onClick={() => setLang('id')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${lang === 'id' ? 'bg-brand-terracotta text-white shadow-md' : 'text-brand-text-muted hover:text-brand-text'}`}
              >
                ID
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-brand-terracotta text-white shadow-md' : 'text-brand-text-muted hover:text-brand-text'}`}
              >
                EN
              </button>
            </div>
            <button className="p-2 text-brand-text hover:text-brand-terracotta transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ setCurrentPage, lang }: { setCurrentPage: (p: Page) => void, lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="relative bg-[#7d483c] text-brand-ivory pt-32 pb-16 overflow-hidden">
      {/* Premium Refined Earthy Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#824c3e] via-[#6e4034] to-[#5c352b] pointer-events-none"></div>
      <div className="absolute inset-0 bg-pattern opacity-[0.06] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-terracotta/5 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand Identity & Description */}
          <div className="md:col-span-5 space-y-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white/95 rounded-2xl flex items-center justify-center text-brand-terracotta shadow-2xl transform -rotate-3 transition-transform hover:rotate-0">
                <History size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-white tracking-tight leading-none mb-1">
                  {t.footer.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-px bg-brand-gold/40"></span>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">{t.footer.regency}</p>
                </div>
              </div>
            </div>
            
            <p className="text-brand-ivory/70 text-lg leading-relaxed max-w-md font-serif italic text-justify opacity-90 border-l-2 border-brand-gold/20 pl-6 py-1">
              "{t.footer.motto}"
            </p>
            
            {/* Social Icons - Premium Circular Style */}
            <div className="flex gap-4 pt-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/disbudparbojonegoro/" },
                { Icon: Youtube, href: "https://www.youtube.com/@pinarakbojonegoro6425" },
                { Icon: Globe, href: "https://dinbudpar.bojonegorokab.go.id" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/[0.07] flex items-center justify-center hover:bg-brand-terracotta hover:text-white transition-all duration-500 border border-white/10 hover:border-brand-terracotta hover:shadow-[0_10px_20px_-5px_rgba(166,77,51,0.4)] hover:-translate-y-1 group"
                >
                  <item.Icon size={18} className="group-hover:scale-110 transition-transform duration-500" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="relative inline-block mb-10">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-gold">{t.footer.navTitle}</h3>
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-terracotta/40"></div>
            </div>
            <ul className="grid grid-cols-1 gap-y-5 text-sm font-medium">
              {[
                { id: 'beranda', label: t.nav.beranda },
                { id: 'katalog', label: t.nav.katalog },
                { id: 'basis-data', label: t.nav.basisData },
                { id: 'wbtb', label: t.nav.wbtb },
                { id: 'cagar-budaya', label: t.nav.cagarBudaya },
                { id: 'tentang', label: t.nav.tentang },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setCurrentPage(item.id as Page)} 
                    className="text-brand-ivory/60 hover:text-white transition-all hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all text-brand-gold" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            <div className="relative inline-block mb-10">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-gold">{t.footer.contactTitle}</h3>
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-terracotta/40"></div>
            </div>
            <ul className="space-y-8 text-sm font-medium">
              <li className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-terracotta/20 group-hover:border-brand-terracotta/30 transition-all">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div className="pt-1">
                  <p className="text-[10px] uppercase tracking-widest text-brand-ivory/40 mb-1 font-bold">Email Resmi</p>
                  <span className="text-brand-ivory/70 group-hover:text-white transition-colors">disbudpar@bojonegorokab.go.id</span>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-terracotta/20 group-hover:border-brand-terracotta/30 transition-all">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <div className="pt-1">
                  <p className="text-[10px] uppercase tracking-widest text-brand-ivory/40 mb-1 font-bold">Telepon</p>
                  <span className="text-brand-ivory/70 group-hover:text-white transition-colors">(0353) 881571</span>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-terracotta/20 group-hover:border-brand-terracotta/30 transition-all">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <div className="pt-1">
                  <p className="text-[10px] uppercase tracking-widest text-brand-ivory/40 mb-1 font-bold">Alamat Kantor</p>
                  <span className="text-brand-ivory/70 leading-relaxed group-hover:text-white transition-colors block max-w-[240px]">
                    Jl. Teuku Umar No. 80, Bojonegoro, Jawa Timur, 62111
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Institutional Identity Card - Dark Mode Refined */}
        <div className="relative mb-20 p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/[0.05] transition-all duration-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors"></div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-10 opacity-30 select-none pointer-events-none mb-2">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-white"></span>
              <Award size={24} className="text-white" />
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-white"></span>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm md:text-base font-display font-bold text-white tracking-[0.2em] uppercase leading-relaxed max-w-3xl">
                {t.footer.office}
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-brand-ivory/50">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-gold/40 rounded-full"></div>
                  {t.footer.division}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-gold/40 rounded-full"></div>
                  {t.footer.subdivision}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Legal Row - Refined Dark */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-ivory/30">
            <span>© 2026</span>
            <span className="w-8 h-px bg-white/10"></span>
            <span className="text-brand-ivory/20 uppercase tracking-widest">Digital Archives & Heritage Museum</span>
          </div>
          
          <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
            {[
              { label: t.footer.privacy, href: "#" },
              { label: t.footer.terms, href: "#" },
              { label: t.footer.sitemap, href: "#" },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                className="text-brand-ivory/40 hover:text-brand-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual Watermark - Subtle Ivory */}
      <div className="absolute bottom-10 right-10 opacity-[0.05] select-none pointer-events-none transform rotate-12 hidden lg:block">
        <Landmark size={240} className="text-white" />
      </div>
    </footer>
  );
};

// --- Page Content ---
const HomePage = ({ onNavigate, lang }: { onNavigate: (p: Page) => void, lang: Language }) => {
  const t = translations[lang];
  const [selectedTimeline, setSelectedTimeline] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="npm install
npm run devspace-y-0"
    >
     {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-ivory pt-28 md:pt-48 pb-16 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
<img
  src="/hero-kanan.png"
  alt="Bojonegoro Heritage Background"
  className="w-full h-full object-cover md:object-contain object-center md:object-right opacity-40 md:opacity-100"
  style={{ imageRendering: "auto" }}
  referrerPolicy="no-referrer"
/>
          {/* Soft Overlay for Readability - Stronger on the left for text contrast */}
          <div className="absolute inset-0 bg-transparent lg:bg-gradient-to-r lg:from-brand-ivory/88 lg:via-brand-ivory/35 lg:to-transparent"></div>
        </div>

        {/* Subtle Archival Paper Texture Overlay */}
        <div className="absolute inset-0 z-[1] opacity-[0] pointer-events-none mix-blend-multiply">
          <img 
            src="https://picsum.photos/seed/archival-paper/1920/1080" 
            alt="Paper Texture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Brand Logo Strip - Subtle Heritage Identity */}
        <div className="absolute top-0 md:top-0 left-0 right-0 z-20 flex justify-center px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <img
  src="/logobjn.png"
  alt="Logo Bojonegoro Strip"
  className="w-[320px] md:w-[420px] h-auto object-contain opacity-95"
  referrerPolicy="no-referrer"
/>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <span className="text-brand-terracotta font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">{t.home.hero.portal}</span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-brand-text leading-[1.1] mb-8">
                {t.home.hero.title.split('&')[0]} & <br />
                <span className="italic font-serif font-normal text-brand-terracotta">{lang === 'id' ? 'Basis Data' : 'Historical'}</span> {lang === 'id' ? 'Kesejarahan' : 'Database'}
              </h1>
              
              <p className="text-brand-text/80 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-medium max-w-xl text-left md:text-justify">
                {t.home.hero.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <button 
                  onClick={() => onNavigate('katalog')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-terracotta text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-terracotta/90 transition-all shadow-lg shadow-brand-terracotta/20 hover:shadow-xl"
                >
                  {t.home.hero.viewCatalog}
                </button>
                <button 
                  onClick={() => onNavigate('basis-data')}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-terracotta text-brand-terracotta rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-terracotta hover:text-white transition-all"
                >
                  {t.home.hero.accessDatabase}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> 

      {/* Pengantar Section - Redesigned for Premium Layout */}
      <section className="py-40 bg-brand-ivory relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute top-40 -left-64 w-[600px] h-[600px] bg-brand-terracotta/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-px bg-brand-terracotta/30"></span>
                  <span className="text-brand-terracotta font-bold uppercase tracking-[0.4em] text-[10px]">{t.home.intro.tag}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-10 text-brand-text leading-[1.1] tracking-tight">
                  {t.home.intro.title1} <br />
                  <span className="relative inline-block mt-2">
                    <span className="italic font-serif font-normal text-brand-terracotta relative z-10">{t.home.intro.title2}</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold/20 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                    </svg>
                  </span> 
                  <span className="ml-3">Bojonegoro</span>
                </h2>

                <div className="space-y-10 text-brand-text-muted text-lg md:text-xl leading-relaxed font-medium text-justify max-w-xl">
                  <p className="relative">
                    <span className="absolute -left-6 top-0 text-7xl font-serif text-brand-terracotta/10 pointer-events-none">"</span>
                    {t.home.intro.p1}
                  </p>
                  <p className="border-l-2 border-brand-sand/50 pl-8 py-2 italic text-brand-text/70">
                    {t.home.intro.p2}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Column - Layered Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto h-full min-h-[600px]">
                {/* Main Image Container */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-[3/4] z-20"
                >
                  <div className="arch-container w-full h-full editorial-shadow border-[12px] border-white relative overflow-hidden bg-white">
                    <img 
                      src="/kayangan.png" 
                      alt="Kayangan Api" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating Caption/Badge on Image */}
                  <div className="absolute -bottom-6 -right-6 bg-brand-terracotta p-6 rounded-2xl shadow-2xl z-30 max-w-[150px]">
                    <div className="text-white font-display font-bold text-xs uppercase tracking-widest leading-tight">
                      Sumber Api Abadi Kayangan Api
                    </div>
                  </div>
                </motion.div>

                {/* Background Offset Image */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute top-10 right-0 w-[55%] aspect-square z-10 opacity-60 lg:opacity-100"
                >
                  <div className="rounded-[3rem] overflow-hidden w-full h-full border-[8px] border-white editorial-shadow rotate-6 hover:rotate-0 transition-transform duration-700">
                    <img 
                      src="/museum.png"
                      alt="Museum Rajekwesi" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-10 left-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute top-20 left-10 w-24 h-24 border border-brand-terracotta/10 rounded-full z-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-brand-terracotta/5 rounded-full animate-spin-slow"></div>
                </div>

                {/* Watermark/Signature Icon */}
                <div className="absolute bottom-10 left-10 z-30 opacity-20 hidden lg:block">
                  <History size={120} className="text-brand-terracotta" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Redesigned for Premium Look */}
      <section className="py-52 bg-brand-beige relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-pattern opacity-[0.04] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-ivory to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-ivory to-transparent"></div>
        
        {/* Subtle Watermark Illustrations */}
        <div className="absolute top-1/4 -left-20 opacity-[0.03] select-none pointer-events-none transform -rotate-12">
          <BookOpen size={400} className="text-brand-terracotta" />
        </div>
        <div className="absolute bottom-1/4 -right-20 opacity-[0.03] select-none pointer-events-none transform rotate-12">
          <Globe size={350} className="text-brand-terracotta" />
        </div>
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-terracotta font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">{t.home.timeline.tag}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-brand-text leading-tight">{t.home.timeline.title}</h2>
              <div className="w-24 h-1 bg-brand-terracotta/20 mx-auto mb-8 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-brand-terracotta"
                />
              </div>
              <p className="text-brand-text-muted text-xl font-medium italic opacity-80">{t.home.timeline.subtitle}</p>
            </motion.div>
          </div>
          
          <div className="relative pt-10">
            {/* Main Timeline Line - Refined Style */}
            <div className="absolute left-1/2 -track-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-sand/0 via-brand-terracotta/30 to-brand-sand/0 hidden md:block"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-4 bg-brand-beige hidden md:block"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-sand/60 hidden md:block"></div>
            
            <div className="space-y-12">
              {t.timelineData.map((item, i) => {
                const align = i % 2 === 0 ? 'left' : 'right';
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`flex flex-col md:flex-row items-center relative ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content Card Side */}
                    <div className="md:w-1/2 flex justify-center md:px-12 group">
                      <motion.button 
                        onClick={() => setSelectedTimeline({ ...item, index: i + 1 })}
                        whileHover={{ scale: 1.02 }}
                        className={`max-w-md w-full text-left p-7 rounded-3xl bg-white/50 backdrop-blur-sm border border-brand-sand/30 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 relative overflow-hidden group-hover:border-brand-terracotta/30 ${align === 'right' ? 'md:text-left' : 'md:text-right'}`}
                      >
                        {/* Decorative Background for Card */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-terracotta/[0.02] rounded-bl-full -z-10 group-hover:bg-brand-terracotta/[0.05] transition-colors duration-500"></div>
                        
                        <span className="inline-block text-brand-terracotta font-bold text-[11px] uppercase tracking-[0.4em] mb-4 py-1 px-3 bg-brand-terracotta/5 rounded-md">{item.period}</span>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-brand-text group-hover:text-brand-terracotta transition-colors leading-tight mb-4">{item.title}</h3>
                        <p className="text-sm text-brand-text-muted font-medium line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.desc}
                        </p>
                        
                        <div className={`flex items-center gap-2 mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-terracotta opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${align === 'right' ? 'justify-start' : 'justify-end'}`}>
                          {lang === 'id' ? 'Detail Selengkapnya' : 'Learn More'}
                          <ChevronRight size={14} />
                        </div>
                      </motion.button>
                    </div>

                    {/* Center Marker - More Refined */}
                    <div className="relative z-20 flex items-center justify-center my-4 md:my-0">
                      <div className="w-12 h-12 bg-brand-beige flex items-center justify-center rounded-full border border-brand-sand/50 shadow-inner">
                        <div className="w-4 h-4 bg-brand-terracotta rounded-full shadow-[0_0_20px_rgba(166,77,51,0.5)] group-hover:scale-125 transition-transform duration-500">
                          <div className="absolute inset-0 animate-ping bg-brand-terracotta rounded-full opacity-20"></div>
                        </div>
                      </div>
                      
                      {/* Connection Line to Card */}
                      <div className={`absolute h-px bg-brand-sand/40 hidden md:block ${align === 'left' ? 'right-full w-12' : 'left-full w-12'}`}></div>
                    </div>

                    {/* Empty Side for Desktop Spacing */}
                    <div className="md:w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WBTb Summary Section - Refined for Premium Visuals */}
      <section className="py-40 bg-brand-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-brand-beige rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-[0_32px_64px_-12px_rgba(92,75,64,0.08)] border border-white/40">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-terracotta/5 -skew-x-12 translate-x-1/4"></div>
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
            
            {/* Subtle Pattern in Empty Right Area */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
              <svg className="w-full h-full text-brand-terracotta" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-brand-terracotta font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">{t.home.wbtb.tag}</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-brand-text leading-tight tracking-tight">
                    {t.home.wbtb.title1} <br />
                    <span className="italic font-serif font-normal text-brand-terracotta">{t.home.wbtb.title2}</span>
                  </h2>
                  <p className="text-lg text-brand-text/80 leading-relaxed mb-10 font-medium text-justify">
                    {t.home.wbtb.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('wbtb')}
                    className="group flex items-center gap-4 px-10 py-5 bg-brand-terracotta text-white rounded-full font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-brand-clay transition-all shadow-[0_20px_40px_-10px_rgba(166,77,51,0.3)] hover:-translate-y-1"
                  >
                    {t.home.wbtb.viewDetail}
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
              
              <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Decorative Glow Aura */}
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-brand-terracotta/5 rounded-full blur-3xl -z-10 scale-150"></div>
                  
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-sand/30 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                    <div className="text-center">
                      <div className="text-7xl md:text-9xl font-display font-bold text-brand-terracotta leading-none drop-shadow-sm">8</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted mt-2">{t.home.wbtb.label}</div>
                    </div>
                  </div>
                  
                  {/* Refined Badge/Award */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-xl animate-bounce duration-3000 border-4 border-white z-20">
                    <Award size={30} />
                  </div>
                  
                  {/* Decorative Elements Around Badge */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 border border-brand-terracotta/10 rounded-full animate-spin-slow pointer-events-none"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cagar Budaya Section */}
      <section className="py-40 bg-brand-ivory relative overflow-hidden pt-0 pb-52">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            {/* Visual Showcase (Left) */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Structural Lines / Grid decoration */}
                <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-brand-terracotta/20 pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-brand-terracotta/20 pointer-events-none"></div>
                
                {/* Main Image - Layered Editorial Style */}
                <div className="relative pt-10 pr-10">
                  {/* Background Offset Layer */}
                  <div className="absolute top-0 right-0 w-full h-full bg-brand-beige rounded-[4rem] -z-0 translate-x-4 -translate-y-4 border border-brand-sand/50"></div>
                  
                  {/* Main Container */}
                  <div className="aspect-[4/5] rounded-[4rem] editorial-shadow border-[12px] border-white relative z-10 overflow-hidden bg-white shadow-2xl">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      src="/padangan3.png" 
                      alt="Rumah Tua Padangan" 
                      className="w-full h-full object-cover" 
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-text/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-brand-terracotta/20 rounded-tr-[3rem] z-20"></div>
                </div>

                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-brand-terracotta text-white px-8 py-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-white/20 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Landmark size={20} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    {t.home.cagarBudaya.badge}
                  </span>
                </motion.div>
                
                {/* Decorative Blueprint Line */}
                <svg className="absolute -z-10 top-1/2 -right-20 w-40 h-40 text-brand-terracotta/10" viewBox="0 0 100 100">
                  <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
              </motion.div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
                  {t.home.cagarBudaya.tag}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-brand-text leading-tight uppercase">
                  {t.home.cagarBudaya.title}
                </h2>
                <p className="text-lg text-brand-text-muted leading-relaxed mb-12 font-medium text-justify">
                  {t.home.cagarBudaya.desc}
                </p>

                {/* Mini Stat Boxes */}
                <div className="grid grid-cols-2 gap-6 mb-16">
                  <div className="bg-white p-8 rounded-3xl border border-brand-sand/30 shadow-sm hover:shadow-xl hover:border-brand-terracotta/20 transition-all group">
                    <div className="text-4xl font-display font-bold text-brand-terracotta mb-2 group-hover:scale-110 transition-transform origin-left">
                      {t.home.cagarBudaya.statEstablished}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest leading-relaxed">
                      {t.home.cagarBudaya.statEstablishedLabel}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-brand-sand/30 shadow-sm hover:shadow-xl hover:border-brand-terracotta/20 transition-all group">
                    <div className="text-4xl font-display font-bold text-brand-gold mb-2 group-hover:scale-110 transition-transform origin-left">
                      {t.home.cagarBudaya.statYear}
                    </div>
                    <div className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest leading-relaxed">
                      {t.home.cagarBudaya.statYearLabel}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <button 
                    onClick={() => onNavigate('cagar-budaya')}
                    className="w-full sm:w-auto px-12 py-5 bg-brand-text text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-terracotta transition-all shadow-xl shadow-brand-text/10"
                  >
                    {t.home.cagarBudaya.viewBtn}
                  </button>
                  <button 
                    onClick={() => onNavigate('cagar-budaya')}
                    className="text-[10px] font-bold text-brand-terracotta uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all"
                  >
                    {t.home.cagarBudaya.learnMoreBtn}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Modal */}
      <AnimatePresence>
        {selectedTimeline && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTimeline(null)}
              className="absolute inset-0 bg-brand-text/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-brand-ivory rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedTimeline(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-text hover:text-brand-terracotta transition-colors shadow-lg z-20"
              >
                <X size={24} />
              </button>
              
              <div className="p-12 md:p-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-terracotta text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {selectedTimeline.index}
                  </div>
                  <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px]">
                    {selectedTimeline.period}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-brand-text leading-tight">
                  {selectedTimeline.title}
                </h2>
                
                <div className="w-20 h-1 bg-brand-terracotta/20 mb-10"></div>
                
                <div className="text-brand-text-muted text-lg md:text-xl leading-relaxed font-medium text-justify">
                  {selectedTimeline.desc}
                </div>
                
                <div className="mt-16 pt-12 border-t border-brand-sand/30 flex justify-end">
                  <button 
                    onClick={() => setSelectedTimeline(null)}
                    className="px-10 py-4 bg-brand-terracotta text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-clay transition-all shadow-xl"
                  >
                    {t.home.timeline.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


const CatalogPage = ({ onArticleSelect, lang }: { onArticleSelect: (article: DocumentData) => void, lang: Language }) => {
  const t = translations[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJenis, setSelectedJenis] = useState('Semua');
  const [selectedTahun, setSelectedTahun] = useState('Semua');
  const [sortOrder, setSortOrder] = useState<'terbaru' | 'terlama'>('terbaru');

  const categories = [
    lang === 'id' ? "Semua" : "All",
    lang === 'id' ? "Bangunan dan Situs Bersejarah" : "Historical Buildings and Sites",
    lang === 'id' ? "Tokoh Sejarah" : "Historical Figures",
    lang === 'id' ? "Tradisi" : "Traditions and Heritage",
    lang === 'id' ? "Peristiwa Penting" : "Important Events",
    lang === 'id' ? "Arsip dan Foto" : "Archives and Photos",
    lang === 'id' ? "Sejarah Daerah" : "Local History"
  ];

  const jenisOptions = useMemo(() => {
    const types = new Set(katalogData.map(item => item.jenis));
    const combined = new Set([lang === 'id' ? 'Semua' : 'All', ...categories, ...Array.from(types)]);
    return Array.from(combined);
  }, [lang]);

  const tahunOptions = useMemo(() => {
    const years = new Set(katalogData.map(item => item.tahun).filter(y => y))
    const combined = new Set([lang === 'id' ? 'Semua' : 'All', '2026', '2024', '2023', '2022', '2021', '2020', ...Array.from(years)]);
    return Array.from(combined).sort((a, b) => b.localeCompare(a));
  }, [lang]);

  const filteredItems = useMemo(() => {
    let result = katalogData.filter(item => {
      const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesJenis = selectedJenis === (lang === 'id' ? 'Semua' : 'All') || item.jenis === selectedJenis;
      const matchesTahun = selectedTahun === (lang === 'id' ? 'Semua' : 'All') || item.tahun === selectedTahun;
      return matchesSearch && matchesJenis && matchesTahun;
    });

    result.sort((a, b) => {
      if (sortOrder === 'terbaru') return b.tahun.localeCompare(a.tahun);
      return a.tahun.localeCompare(b.tahun);
    });

    return result;
  }, [searchTerm, selectedJenis, selectedTahun, sortOrder, lang]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-ivory pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-terracotta font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
          >
            {t.catalog.tag}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brand-text mb-8 tracking-tight"
          >
            {t.catalog.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1 bg-brand-terracotta mx-auto mb-12"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-brand-text-muted text-lg font-medium opacity-80 leading-relaxed italic max-w-2xl mx-auto"
          >
            {lang === 'id' 
              ? "Menelusuri jejak narasi besar melalui fragmentasi memori, arsip digital, dan dokumentasi visual sejarah Bojonegoro."
              : "Tracing grand narratives through fragmentation of memory, digital archives, and visual documentation of Bojonegoro history."}
          </motion.p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-24 bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-brand-brown/5 border border-brand-sand/30 flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          <div className="relative flex-grow group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-brand-text-muted group-focus-within:text-brand-terracotta transition-colors" size={18} />
            <input 
              type="text"
              placeholder={t.catalog.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-6 bg-transparent outline-none transition-all text-brand-text font-medium text-sm placeholder:text-brand-text-muted/50"
            />
          </div>
          
          <div className="h-px lg:h-10 w-full lg:w-px bg-brand-sand/50 mx-2"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2">
            <div className="relative min-w-[200px] w-full sm:w-auto">
              <select 
                value={selectedJenis}
                onChange={(e) => setSelectedJenis(e.target.value)}
                className="w-full pl-6 pr-12 py-4 bg-brand-beige/50 hover:bg-brand-beige rounded-2xl outline-none transition-all text-brand-text font-bold text-[10px] uppercase tracking-widest cursor-pointer appearance-none"
              >
                {jenisOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <ArrowUpDown className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none" size={12} />
            </div>

            <div className="relative min-w-[140px] w-full sm:w-auto">
              <select 
                value={selectedTahun}
                onChange={(e) => setSelectedTahun(e.target.value)}
                className="w-full pl-6 pr-12 py-4 bg-brand-beige/50 hover:bg-brand-beige rounded-2xl outline-none transition-all text-brand-text font-bold text-[10px] uppercase tracking-widest cursor-pointer appearance-none"
              >
                {tahunOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-text-muted pointer-events-none" size={12} />
            </div>

            <button 
              onClick={() => setSortOrder(sortOrder === 'terbaru' ? 'terlama' : 'terbaru')}
              className="px-8 py-4 bg-brand-terracotta text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-clay transition-all shadow-lg shadow-brand-terracotta/20 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              {sortOrder === 'terbaru' ? t.database.newest : t.database.oldest}
            </button>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div 
                  className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-10 editorial-shadow cursor-pointer"
                  onClick={() => onArticleSelect(item)}
                >
                  <img 
                    src={
 item.judul === "Menelusuri Asal-usul Nama Bojonegoro"
   ? "/namabjn2.png"
 : item.judul === "Ijuk Nganten di Desa Sraturejo: Ritual Penyucian Pengantin yang Menjaga Jejak Leluhur"
   ? "/ijuk.jpg"
 : item.judul === "Gumbregan Samin: Saat Rasa Syukur Dirawat Lewat Doa dan Kebersamaan"
   ? "/samin.jpg"
 : item.judul === "Rumah Tua Padangan: Jejak Kejayaan Niaga dan Warisan Arsitektur Indis"
   ? "/padangan5.png"
 : item.judul === "Di Balik Hutan Tanggir: Jejak Komunitas Kalang yang Masih Bertahan"
   ? "kalang.png"
 : `https://picsum.photos/seed/catalog-${idx}/600/800`
} 
                    alt={item.judul} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-brand-terracotta font-bold text-[9px] uppercase tracking-widest shadow-xl border border-white/50">
                      {item.tahun}
                    </span>
                  </div>
                  
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-brand-text shadow-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-grow px-2">
                  <div className="mb-4">
                    <span className="text-brand-gold font-bold text-[9px] uppercase tracking-[0.25em] inline-block border-b border-brand-gold/30 pb-1">
                      {item.jenis}
                    </span>
                  </div>
                  
                  <h3 
                    onClick={() => onArticleSelect(item)}
                    className="text-2xl font-display font-bold text-brand-text mb-6 leading-[1.2] group-hover:text-brand-terracotta transition-colors cursor-pointer"
                  >
                    {item.judul}
                  </h3>
                  
                  <p className="text-brand-text-muted text-[13px] leading-relaxed line-clamp-3 font-medium opacity-80 mb-10">
                    {item.deskripsi}
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      onClick={() => onArticleSelect(item)}
                      className="inline-flex items-center gap-4 text-brand-text font-bold text-[10px] uppercase tracking-[0.3em] group/btn transition-all hover:gap-6"
                    >
                      <span className="relative">
                        {t.catalog.readMore}
                        <span className="absolute bottom-[-6px] left-0 w-0 h-0.5 bg-brand-terracotta group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <ChevronRight size={14} className="text-brand-terracotta group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-brand-beige/30 rounded-[4rem] border border-brand-sand/50">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-brand-sand mx-auto mb-10 shadow-2xl">
              <Archive size={40} />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-text mb-4 tracking-tight">{t.catalog.noResults}</h3>
            <p className="text-brand-text-muted font-medium opacity-70">{t.catalog.tryOtherKeywords}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ArticleDetailPage = ({ article, onBack, lang }: { article: DocumentData, onBack: () => void, lang: Language }) => {
  const t = translations[lang];
  if (!article) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white pt-32 pb-40"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-3 text-brand-terracotta font-bold text-[10px] uppercase tracking-[0.3em] mb-16 hover:gap-5 transition-all group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {t.articleDetail.backToCatalog}
          </button>
          
          <div className="space-y-8">
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] block">
              {article.jenis} • {article.tahun}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-brand-text leading-[1.1] max-w-3xl mx-auto">
              {article.fullContent?.mainTitle || article.judul}
            </h1>
            <div className="w-24 h-1 bg-brand-terracotta mx-auto mt-12"></div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-brand-text-muted font-bold text-[9px] uppercase tracking-widest opacity-60">
              <div className="flex items-center gap-2">
                <User size={12} />
                {article.kontributor}
              </div>
              {article.sumber && (
                <div className="flex items-center gap-2">
                  <BookOpen size={12} />
                  {article.sumber}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Section - Added Grid Gallery */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="mb-24">
            <div className={`grid gap-8 ${article.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
              {article.gallery.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-brand-sand/30">
                    <img 
                      src={img.url} 
                      alt={img.caption || article.judul} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {img.caption && (
                    <p className="text-[11px] font-medium text-brand-text-muted italic text-center px-4">
                      {img.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="space-y-24">
          {article.fullContent ? (
            <>
              {article.fullContent.sections.map((section, i) => (
                <div key={i} className="space-y-10 group">
                  <div className="flex items-center gap-6">
                    <span className="w-12 h-px bg-brand-terracotta/30 group-hover:w-20 transition-all duration-700"></span>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-brand-text leading-tight tracking-tight uppercase">
                      {section.subtitle}
                    </h2>
                  </div>
                  <div className="text-brand-text/90 text-[17px] md:text-[19px] leading-[1.8] font-medium text-justify first-letter:text-4xl first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-brand-terracotta">
                    <Markdown 
                      components={{ 
                        p: ({node, ...props}) => <p className="mb-8 last:mb-0" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-[lower-roman] list-outside ml-10 mb-8 space-y-6" {...props} />,
                        li: ({node, ...props}) => <li className="pl-4" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold text-brand-text" {...props} />
                      }}
                    >
                      {section.content}
                    </Markdown>
                  </div>
                </div>
              ))}

              {/* References */}
              {article.fullContent.references && article.fullContent.references.length > 0 && (
                <div className="pt-24 border-t border-brand-sand/50">
                  <div className="flex items-center gap-4 mb-12">
                    <History size={16} className="text-brand-terracotta" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-terracotta">{t.articleDetail.references}</h3>
                  </div>
                  <ul className="space-y-8">
                    {article.fullContent.references.map((ref, i) => (
                      <li key={i} className="text-sm text-brand-text-muted font-medium leading-relaxed flex gap-6 hover:translate-x-2 transition-transform duration-300">
                        <span className="text-brand-terracotta/40 font-display text-lg">0{i+1}</span>
                        <div className="flex-1 opacity-80 italic">
                          <Markdown components={{ p: ({node, ...props}) => <p className="inline" {...props} /> }}>{ref}</Markdown>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="text-brand-text/90 text-lg leading-relaxed font-medium text-justify">
              <Markdown components={{ p: ({node, ...props}) => <p className="mb-8 last:mb-0" {...props} /> }}>{article.deskripsi}</Markdown>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-40 pt-20 border-t border-brand-sand/50 flex justify-center">
          <button 
            onClick={onBack}
            className="px-16 py-6 bg-brand-text text-white rounded-full font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-brand-terracotta transition-all shadow-2xl hover:shadow-brand-terracotta/20 active:scale-95"
          >
            {t.articleDetail.backToCatalog}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DatabasePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'sejarah' | 'contractarbeiders'>('sejarah');
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState(lang === 'id' ? 'Semua' : 'All');
  const [districtFilter, setDistrictFilter] = useState(lang === 'id' ? 'Semua' : 'All');
  const [pageSize, setPageSize] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWorker, setSelectedWorker] = useState<any | null>(null);

  const filteredSejarah = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return primerSekunderData.filter(item => 
      item.judul.toLowerCase().includes(lowerSearch) ||
      item.jenis.toLowerCase().includes(lowerSearch) ||
      (item.tahun || "").toLowerCase().includes(lowerSearch) ||
      (item.kontributor || "").toLowerCase().includes(lowerSearch) ||
      (item.sumber || "").toLowerCase().includes(lowerSearch) ||
      (item.deskripsi || "").toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  const filteredContract = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return contractWorkersData.filter(item => {
      const matchesSearch = Object.values(item).some(val => 
        (val || "").toLowerCase().includes(lowerSearch)
      );
      const matchesGender = genderFilter === (lang === 'id' ? 'Semua' : 'All') || item["Jenis Kelamin"] === genderFilter;
      const matchesDistrict = districtFilter === (lang === 'id' ? 'Semua' : 'All') || item["Distrik"] === districtFilter;
      return matchesSearch && matchesGender && matchesDistrict;
    });
  }, [searchTerm, genderFilter, districtFilter, lang]);

  const paginatedContract = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredContract.slice(start, start + pageSize);
  }, [filteredContract, currentPage, pageSize]);

  const districts = useMemo(() => {
    const d = new Set(contractWorkersData.map(item => item["Distrik"]).filter(Boolean));
    return [lang === 'id' ? 'Semua' : 'All', ...Array.from(d).sort()];
  }, [lang]);

  const totalPages = Math.ceil(filteredContract.length / pageSize);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-ivory pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24">
          <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">{t.database.tag}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-text mb-12">{t.database.title}</h1>
          <div className="w-24 h-1 bg-brand-terracotta mb-16"></div>
          
          <div className="flex flex-wrap gap-4 p-2 bg-brand-beige rounded-3xl w-fit">
            <button 
              onClick={() => setActiveTab('sejarah')}
              className={`px-10 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all ${
                activeTab === 'sejarah' ? 'bg-brand-terracotta text-white shadow-xl' : 'text-brand-text-muted hover:text-brand-text'
              }`}
            >
              {t.database.tabSejarah}
            </button>
            <button 
              onClick={() => setActiveTab('contractarbeiders')}
              className={`px-10 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all ${
                activeTab === 'contractarbeiders' ? 'bg-brand-terracotta text-white shadow-xl' : 'text-brand-text-muted hover:text-brand-text'
              }`}
            >
              {t.database.tabContract}
            </button>
          </div>
        </div>

{activeTab === 'contractarbeiders' && (
  <div className="px-10 pt-4">
    <p className="text-sm text-brand-text-muted px-3 pt-4 mb-6 whitespace-pre-line">
  {t.database.contractSource}
</p>
  </div>
)}

        <div className="bg-white rounded-[3rem] editorial-shadow overflow-hidden border border-brand-sand/30">
          <div className="p-10 border-b border-brand-sand/30 bg-brand-cream/30">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="relative w-full lg:w-96 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-muted group-focus-within:text-brand-terracotta" size={18} />
                <input 
                  type="text"
                  placeholder={t.database.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-brand-ivory rounded-2xl border border-brand-sand focus:border-brand-terracotta outline-none transition-all text-sm font-medium"
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                {activeTab === 'contractarbeiders' && (
                  <>
                    <select 
                      value={genderFilter}
                      onChange={(e) => setGenderFilter(e.target.value)}
                      className="px-6 py-4 bg-brand-ivory rounded-2xl border border-brand-sand text-xs font-bold uppercase tracking-widest outline-none focus:border-brand-terracotta"
                    >
                      <option value={lang === 'id' ? 'Semua' : 'All'}>{t.database.allGenders}</option>
                      <option value="Laki-laki">{t.database.male}</option>
                      <option value="Perempuan">{t.database.female}</option>
                    </select>
                    <div className="h-6 w-px bg-brand-sand"></div>
                    <select 
                      value={districtFilter}
                      onChange={(e) => setDistrictFilter(e.target.value)}
                      className="px-6 py-4 bg-brand-ivory rounded-2xl border border-brand-sand text-xs font-bold uppercase tracking-widest outline-none focus:border-brand-terracotta"
                    >
                      {districts.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    <div className="h-6 w-px bg-brand-sand"></div>
                  </>
                )}
                <button className="flex items-center gap-3 px-8 py-4 bg-brand-text text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-brand-terracotta transition-all">
                  <Download size={16} /> {t.database.export}
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-cream/50">
                  {activeTab === 'sejarah' ? (
                    <>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.id}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30 min-w-[320px] lg:min-w-[450px]">{t.database.table.title}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.type}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.year}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.creator}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.source}</th>
                    </>
                  ) : (
                    <>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.regNo}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.name}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.gender}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.age}</th>
                      <th className="px-10 py-8 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand/30">{t.database.table.district}</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-sand/20">
                {activeTab === 'sejarah' ? (
                  filteredSejarah.map((item, i) => (
                    <tr key={i} className="hover:bg-brand-clay/[0.03] transition-colors group">
                      <td className="px-10 py-10 text-xs font-bold text-brand-text-muted border-b border-brand-sand/10">#{i + 1}</td>
                      <td className="px-10 py-10 text-sm text-brand-text group-hover:text-brand-terracotta transition-colors border-b border-brand-sand/10">
                        <div className="flex flex-col gap-2">
                          <div className="font-bold">
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline underline-offset-4 decoration-current"
                              >
                                {item.judul} ↗
                              </a>
                            ) : (
                              item.judul
                            )}
                          </div>
                          {item.deskripsi && item.deskripsi.trim() !== '' && (
                            <p className="text-xs text-brand-text-muted font-normal leading-relaxed max-w-xl line-clamp-2">
                              {item.deskripsi}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-10 py-10 text-xs font-medium text-brand-text-muted border-b border-brand-sand/10">{item.jenis}</td>
                      <td className="px-10 py-10 text-xs font-bold text-brand-gold border-b border-brand-sand/10">{item.tahun}</td>
                      <td className="px-10 py-10 text-xs font-medium text-brand-text-muted border-b border-brand-sand/10">{item.kontributor}</td>
                      <td className="px-10 py-10 text-xs font-medium text-brand-text-muted border-b border-brand-sand/10">{item.sumber}</td>
                    </tr>
                  ))
                ) : (
                  paginatedContract.map((item, i) => (
                    <motion.tr 
                      key={i} 
                      onClick={() => setSelectedWorker(item)}
                      className="hover:bg-brand-clay/[0.03] transition-all group cursor-pointer"
                      whileHover={{ scale: 0.998 }}
                    >
                      <td className="px-10 py-8 text-xs font-bold text-brand-text-muted border-b border-brand-sand/10">{item["Nomor Identitas"]}</td>
                      <td className="px-10 py-8 text-sm font-bold text-brand-text group-hover:text-brand-terracotta transition-colors border-b border-brand-sand/10">{item["Nama"]}</td>
                      <td className="px-10 py-8 text-xs font-medium text-brand-text-muted border-b border-brand-sand/10">{item["Jenis Kelamin"]}</td>
                      <td className="px-10 py-8 text-xs font-bold text-brand-gold border-b border-brand-sand/10">{item["Usia"]}</td>
                      <td className="px-10 py-8 text-xs font-medium text-brand-text-muted border-b border-brand-sand/10">{item["Distrik"]} / {item["Desa"]}</td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <AnimatePresence>
            {selectedWorker && (
              <ContractWorkerDetailModal 
                worker={selectedWorker} 
                onClose={() => setSelectedWorker(null)} 
                lang={lang} 
              />
            )}
          </AnimatePresence>

          {activeTab === 'contractarbeiders' && (
            <div className="p-10 bg-brand-cream/30 border-t border-brand-sand/30 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">{t.database.pagination.show}</span>
                <select 
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="bg-white border border-brand-sand rounded-xl px-4 py-2 text-xs font-bold outline-none"
                >
                  {[10, 25, 50, 100].map(v => <option key={v} value={v}>{v}</option>)}
                </select>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted">{t.database.pagination.from} {filteredContract.length}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="p-3 rounded-xl bg-white border border-brand-sand text-brand-text disabled:opacity-30 hover:bg-brand-terracotta hover:text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${
                        currentPage === i + 1 ? 'bg-brand-terracotta text-white shadow-lg' : 'bg-white border border-brand-sand text-brand-text hover:bg-brand-beige'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="p-3 rounded-xl bg-white border border-brand-sand text-brand-text disabled:opacity-30 hover:bg-brand-terracotta hover:text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const WBTbPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);

  const wbtbData = t.wbtbData;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-ivory"
    >
      <section className="relative min-h-screen overflow-hidden flex items-center bg-brand-ivory">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="/budaya.png" 
              alt="Bojonegoro Heritage Background" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory via-brand-ivory/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand-ivory to-transparent z-10"></div>
        </div>

        {/* Floating Cultural Particle Background */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1], 
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0]
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute bg-brand-gold/10 rounded-full blur-3xl"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center min-h-screen py-32 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-px bg-brand-gold/50"></div>
                  <span className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] drop-shadow-sm">
                    {t.wbtbPage.hero.tag}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-brand-text leading-[1.1] tracking-tight mb-8">
                  <span className="block opacity-90">{t.wbtbPage.hero.title1}</span>
                  <span className="relative inline-block mt-2">
                    <span className="italic font-serif font-normal text-brand-gold">{t.wbtbPage.hero.title2}</span>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute -bottom-2 md:-bottom-4 left-0 h-1 md:h-1.5 bg-gradient-to-r from-brand-gold via-brand-terracotta to-transparent rounded-full"
                    />
                  </span>
                </h1>

                <p className="text-brand-text/70 text-lg md:text-xl xl:text-2xl leading-relaxed font-medium mb-10 md:mb-12 max-w-2xl text-justify lg:text-left drop-shadow-sm">
                  {t.wbtbPage.hero.desc}
                </p>

                <div className="flex flex-wrap gap-6 md:gap-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const el = document.getElementById('inventory-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative px-8 md:px-10 py-4 md:py-5 bg-brand-terracotta text-white rounded-full font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] overflow-hidden shadow-lg shadow-brand-terracotta/20"
                  >
                    <span className="relative z-10">{t.wbtbPage.inventory.detailBtn}</span>
                    <div className="absolute inset-0 bg-brand-clay translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>
                  
                  <div className="flex items-center gap-4 text-brand-text/40">
                    <div className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center animate-bounce">
                      <ChevronRight size={18} className="rotate-90" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{lang === 'id' ? 'Scroll untuk Eksplorasi' : 'Scroll to Explore'}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Column - Multilevel Heritage Display */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative aspect-square md:w-[500px] mx-auto"
              >
                {/* Visual content would go here if needed, or remove motion.div if empty */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang WBTb Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-40 lg:pt-60 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
        >
          <div className="lg:col-span-7">
            <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">{t.wbtbPage.about.tag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-10 text-brand-text leading-tight">{t.wbtbPage.about.title}</h2>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl ring-1 ring-black/5 relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-terracotta text-white rounded-2xl flex items-center justify-center shadow-xl">
                <BookOpen size={28} />
              </div>
              <p className="text-xl text-brand-text-muted leading-relaxed font-medium italic text-justify">
                {t.wbtbPage.about.quote}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="arch-container editorial-shadow border-8 border-white">
              <img src="/sandur.jpg" alt="Pertunjukan Sandur Bojonegoro" className="w-full h-full object-cover object-[center_30%]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Karakteristik Section */}
      <section className="bg-brand-beige py-40 mb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{t.wbtbPage.quality.tag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text">{t.wbtbPage.quality.title}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.wbtbPage.quality.items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] editorial-shadow transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-terracotta mb-10">
                  {React.createElement([Sparkles, History, User, Globe][i], { size: 32 })}
                </div>
                <h3 className="text-xl font-display font-bold mb-6">{item.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Section */}
      <section className="py-40 bg-brand-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{t.wbtbPage.domain.tag}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text mb-6">{t.wbtbPage.domain.title}</h2>
            <p className="text-brand-text-muted font-bold tracking-[0.2em] uppercase text-[10px]">Lima kategori utama dalam klasifikasi warisan budaya takbenda.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar Left: Vertical Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {t.wbtbPage.domain.items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveDomainIndex(i)}
                  whileHover={{ x: 8 }}
                  className={`w-full text-left p-6 rounded-2xl flex items-center gap-6 transition-all duration-300 border ${
                    activeDomainIndex === i 
                      ? "bg-brand-gold text-white border-brand-gold shadow-xl shadow-brand-gold/20" 
                      : "bg-white text-brand-text border-brand-sand/30 hover:border-brand-gold/50 shadow-sm"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeDomainIndex === i ? "bg-white/20" : "bg-brand-beige text-brand-gold"
                  }`}>
                    {React.createElement([MessageSquare, Sparkles, Users, Leaf, Wrench][i], { size: 22 })}
                  </div>
                  <span className="font-display font-bold text-sm tracking-wide uppercase leading-tight">{item.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Content Right: Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDomainIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-3xl p-12 md:p-20 shadow-2xl shadow-brand-brown/5 border border-brand-sand/30 min-h-[500px] flex flex-col justify-center relative overflow-hidden"
                >
                  {/* Subtle Watermark Motif */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-terracotta">
                      <path d="M20,20 L80,20 L80,80 L20,80 Z M30,30 L70,30 M30,40 L70,40 M30,50 L70,50 M30,60 L70,60 M30,70 L70,70" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                    </svg>
                  </div>

                  <div className="mb-8 inline-flex items-center gap-4 py-2 px-6 bg-brand-beige text-brand-gold rounded-full">
                    {React.createElement([MessageSquare, Sparkles, Users, Leaf, Wrench][activeDomainIndex], { size: 20 })}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Domain WBTb</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-8 leading-tight">
                    {t.wbtbPage.domain.items[activeDomainIndex].title}
                  </h3>
                  
                  <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed text-justify font-medium mb-12">
                    {t.wbtbPage.domain.items[activeDomainIndex].desc}
                  </p>

                  {/* Count Badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">{wbtbData.filter(item => item.type === t.wbtbPage.domain.items[activeDomainIndex].title).length}</span>
                    </div>
                    <p className="text-xs text-brand-text-muted font-bold uppercase tracking-widest leading-none">
                      {lang === 'id' ? 'Unsur Terdaftar' : 'Registered Elements'}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Inventarisasi Section */}
      <section id="data-wbtb" className="bg-brand-sand py-40 mb-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24"
          >
            <div>
              <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">{t.wbtbPage.inventory.tag}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text">{t.wbtbPage.inventory.title}</h2>
              <p className="text-brand-text-muted text-lg font-medium mt-6 italic text-justify">{t.wbtbPage.inventory.subtitle}</p>
            </div>
            <div className="bg-white px-8 py-6 rounded-3xl editorial-shadow flex items-center gap-6">
              <div className="text-5xl font-display font-bold text-brand-terracotta">08</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted leading-tight">{t.wbtbPage.inventory.totalLabel.split(' ').slice(0, 2).join(' ')} <br/>{t.wbtbPage.inventory.totalLabel.split(' ').slice(2).join(' ')}</div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wbtbData.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2.5rem] editorial-shadow flex flex-col justify-between min-h-[220px] group transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-brand-beige text-brand-terracotta rounded-xl flex items-center justify-center font-bold text-xs">
                      {item.id}
                    </div>
                    <span className="px-4 py-1.5 bg-brand-terracotta text-white rounded-full text-[9px] font-bold tracking-widest uppercase">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-text group-hover:text-brand-terracotta transition-colors mb-2">{item.name}</h3>
                  <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">{item.type}</p>
                </div>
                
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="mt-6 w-full py-3 bg-brand-beige text-brand-terracotta rounded-xl font-bold text-[9px] uppercase tracking-widest hover:bg-brand-terracotta hover:text-white transition-all"
                >
                  {t.wbtbPage.inventory.detailBtn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-brand-text/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-ivory rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 z-10">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-text hover:bg-brand-terracotta hover:text-white transition-all shadow-lg"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-12 md:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-brand-terracotta text-white rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {t.wbtbPage.modal.year} {selectedItem.year}
                  </span>
                  <span className="text-[10px] font-bold text-brand-terracotta uppercase tracking-widest">
                    {selectedItem.type}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text mb-10">{selectedItem.name}</h2>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.wbtbPage.modal.descTitle}</h4>
                    <p className="text-brand-text-muted leading-8 font-medium text-justify">
                      {selectedItem.desc}
                    </p>
                  </div>

                  <div className="p-8 bg-brand-beige rounded-3xl border border-brand-sand/30">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-brand-terracotta text-white rounded-2xl flex items-center justify-center shrink-0">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-terracotta mb-2">{t.wbtbPage.modal.skTitle}</h4>
                        <p className="text-brand-text font-bold">{selectedItem.sk}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-brand-terracotta text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl"
                  >
                    {t.wbtbPage.modal.viewBtn}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dasar Hukum Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-16 md:p-24 rounded-[4rem] editorial-shadow border border-brand-sand relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-brand-beige text-brand-terracotta rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-inner">
              <Scale size={36} />
            </div>
            <h2 className="text-3xl font-display font-bold mb-10 text-brand-text">{t.wbtbPage.legal.title}</h2>
            <div className="w-16 h-1 bg-brand-terracotta mx-auto mb-12"></div>
            <p className="text-lg text-brand-text-muted leading-relaxed font-medium italic text-center max-w-3xl mx-auto">
              {t.wbtbPage.legal.desc}
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

const AboutPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-brand-ivory pt-32 pb-40"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="mb-32">
        <span className="text-brand-terracotta font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">{t.aboutPage.tag}</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-text mb-12">{t.aboutPage.title}</h1>
        <div className="w-24 h-1 bg-brand-terracotta mb-16"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-7 space-y-32">
          <section>
            <h2 className="text-3xl font-display font-bold text-brand-text mb-12 leading-tight">
              {t.aboutPage.subtitle1} <br />
              <span className="italic font-serif font-normal text-brand-terracotta">{t.aboutPage.subtitle2}</span>
            </h2>
            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-8 font-medium text-justify">
              <p>{t.aboutPage.p1}</p>
              <p>{t.aboutPage.p2}</p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.aboutPage.goals.map((goal, i) => (
              <div key={i} className="p-12 bg-white rounded-[3rem] editorial-shadow group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-brand-beige text-brand-terracotta rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-terracotta group-hover:text-white transition-all">
                  {React.createElement([Archive, Search, ShieldCheck, BookOpen][i], { size: 32 })}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-brand-text">{goal.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed font-medium">{goal.desc}</p>
              </div>
            ))}
          </div> 

          <section className="bg-brand-sand/20 p-16 rounded-[4rem] border border-brand-sand relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold mb-10 text-brand-terracotta uppercase tracking-widest">{t.aboutPage.legalTitle}</h2>
              <div className="space-y-8">
                {t.aboutPage.legalItems.map((text, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="w-8 h-8 bg-brand-terracotta text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-1 shadow-lg">
                      {i + 1}
                    </span>
                    <p className="text-brand-text font-bold text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-5 space-y-12 sticky top-32">
          <div className="arch-container editorial-shadow border-8 border-white mb-16">
            <img src="/kantor.jpg" alt="About" className="w-full h-full object-cover" />
          </div>

          <div className="bg-white p-12 rounded-[3rem] editorial-shadow">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-brand-terracotta">{t.aboutPage.contact.tag}</h3>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-beige text-brand-terracotta rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-widest mb-2">{t.aboutPage.contact.addressLabel}</p>
                  <p className="text-sm text-brand-text font-bold leading-relaxed">
                    {t.aboutPage.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-beige text-brand-terracotta rounded-2xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-widest mb-2">{t.aboutPage.contact.emailLabel}</p>
                  <p className="text-sm text-brand-text font-bold">disbudpar@bojonegorokab.go.id</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-beige text-brand-terracotta rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-brand-text-muted uppercase tracking-widest mb-2">{t.aboutPage.contact.phoneLabel}</p>
                  <p className="text-sm text-brand-text font-bold">(0353) 881571</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-terracotta p-12 rounded-[3rem] text-white shadow-2xl shadow-brand-terracotta/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
            <h3 className="text-2xl font-display font-bold mb-6 relative z-10">{t.aboutPage.help.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-10 relative z-10 font-medium text-justify">
              {t.aboutPage.help.desc}
            </p>
            <button className="w-full py-5 bg-white text-brand-terracotta rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-beige transition-all relative z-10 shadow-xl">
              {t.aboutPage.help.btn}
            </button>
          </div>
        </aside>
      </div>
    </div>
  </motion.div>
  );
};

const CagarBudayaMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div className="w-full h-full bg-brand-beige animate-pulse rounded-[2.5rem]" />;

  const center: [number, number] = [-7.1551, 111.6417];
  
  const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div class="relative flex items-center justify-center">
        <div class="w-8 h-8 md:w-10 md:h-10 bg-brand-terracotta rounded-full flex items-center justify-center border-2 border-white shadow-xl transform hover:scale-110 transition-transform duration-300">
          <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
        </div>
        <div class="absolute -bottom-1 w-2 h-2 bg-brand-terracotta rotate-45 border-r border-b border-white"></div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 38],
    popupAnchor: [0, -38]
  });

  return (
    <div className="h-full w-full relative">
      <MapContainer 
        center={center} 
        zoom={15} 
        scrollWheelZoom={false} 
        className="h-full w-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.15639759774976, 111.61593810857701]} icon={customIcon}>
          <Popup className="premium-popup">
            <div className="p-1">
              <h3 className="font-display font-bold text-base text-brand-text mb-1">Rumah Tua Padangan</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-terracotta mb-2">🏛️ Bangunan Cagar Budaya</p>
              <p className="text-[11px] text-brand-text-muted leading-relaxed italic">Padangan, Bojonegoro</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-7.153886231146923, 111.66747261431625]} icon={customIcon}>
          <Popup className="premium-popup">
            <div className="p-1">
              <h3 className="font-display font-bold text-base text-brand-text mb-1">Perahu Besi Kuno</h3>
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-terracotta mb-2">⚓ Benda Cagar Budaya</p>
              <p className="text-[11px] text-brand-text-muted leading-relaxed italic">Desa Ngraho, Gayam</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-brand-sand shadow-xl">
        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">LEGENDA</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm">🏛️</span>
            <span className="text-[11px] font-bold text-brand-text tracking-wide">Bangunan</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm">⚓</span>
            <span className="text-[11px] font-bold text-brand-text tracking-wide">Benda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CagarBudayaPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [districtFilter, setDistrictFilter] = useState(lang === 'id' ? 'Semua' : 'All');
  const [typeFilter, setTypeFilter] = useState(lang === 'id' ? 'Semua' : 'All');
  const [selectedOfficialItem, setSelectedOfficialItem] = useState<OfficialCagarBudaya | null>(null);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  const districts = useMemo(() => {
    const d = new Set(odcbData.map(item => item.kecamatan));
    return [lang === 'id' ? 'Semua' : 'All', ...Array.from(d).sort()];
  }, [lang]);

  const types = useMemo(() => {
    const types = new Set(odcbData.map(item => item.jenis));
    return [lang === 'id' ? 'Semua' : 'All', ...Array.from(types).sort()];
  }, [lang]);

  const filteredODCB = useMemo(() => {
    return odcbData.filter(item => {
      const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = districtFilter === (lang === 'id' ? 'Semua' : 'All') || item.kecamatan === districtFilter;
      const matchesType = typeFilter === (lang === 'id' ? 'Semua' : 'All') || item.jenis === typeFilter;
      return matchesSearch && matchesDistrict && matchesType;
    });
  }, [searchTerm, districtFilter, typeFilter, lang]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-ivory"
    >
      {/* Section 1: Hero Header */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-brand-clay/5 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="relative w-full h-full">
            <img 
              src="padangan4.png" 
              alt="Cagar Budaya Heritage" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-ivory/50 to-brand-ivory"></div>
            {/* Shape Decorative */}
            <div className="absolute bottom-20 left-10 w-40 h-40 border-l-4 border-b-4 border-brand-terracotta/20 rounded-bl-[4rem]"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-terracotta font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
                {t.cagarBudayaPage.hero.tag}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-brand-text leading-tight mb-8">
                {t.cagarBudayaPage.hero.title}
              </h1>
              <p className="text-brand-text-muted text-xl leading-relaxed mb-12 font-medium max-w-xl text-justify">
                {t.cagarBudayaPage.hero.desc}
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('cagar-budaya-data');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-12 py-5 bg-brand-terracotta text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-brand-clay transition-all shadow-xl shadow-brand-terracotta/20"
              >
                {t.cagarBudayaPage.hero.cta}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Definisi Utama */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text leading-tight">
                {t.cagarBudayaPage.definition.title}
              </h2>
              <div className="w-20 h-1 bg-brand-terracotta mt-8"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-brand-text-muted leading-relaxed font-serif italic text-justify"
            >
              <p>{t.cagarBudayaPage.definition.content}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Klasifikasi Cagar Budaya (Tabbed Navigation) */}
      <section className="py-40 bg-brand-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-text mb-6">
              {t.cagarBudayaPage.types.title}
            </h2>
            <p className="text-brand-text-muted font-bold tracking-[0.2em] uppercase text-[10px]">
              {t.cagarBudayaPage.types.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Sidebar Left: Vertical Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {t.cagarBudayaPage.types.items.map((item, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTypeIndex(i)}
                  whileHover={{ x: 10 }}
                  className={`w-full text-left p-8 rounded-xl flex items-center gap-6 transition-all duration-300 border ${
                    activeTypeIndex === i 
                      ? "bg-brand-terracotta text-white border-brand-terracotta shadow-xl shadow-brand-terracotta/20" 
                      : "bg-white text-brand-text border-brand-sand/30 hover:border-brand-terracotta/50 shadow-sm"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTypeIndex === i ? "bg-white/20" : "bg-brand-beige text-brand-terracotta"
                  }`}>
                    {React.createElement([Package, Landmark, Layers, MapPin, Globe][i], { size: 22 })}
                  </div>
                  <span className="font-display font-bold text-sm tracking-wide uppercase">{item.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Content Right: Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTypeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-16 md:p-24 shadow-2xl shadow-brand-brown/5 border border-brand-sand/30 min-h-[400px] flex flex-col justify-center"
                >
                  <div className="mb-12 inline-flex items-center gap-4 py-2 px-6 bg-brand-beige text-brand-terracotta rounded-full">
                    {React.createElement([Package, Landmark, Layers, MapPin, Globe][activeTypeIndex], { size: 20 })}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Klasifikasi Budaya</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-10 leading-tight">
                    {t.cagarBudayaPage.types.items[activeTypeIndex].title}
                  </h3>
                  
                  <p className="text-brand-text-muted text-lg md:text-xl leading-relaxed text-justify font-medium">
                    {t.cagarBudayaPage.types.items[activeTypeIndex].content}
                  </p>

                  <div className="mt-16 pt-12 border-t border-brand-sand/20 flex items-center gap-6">
                    <div className="w-12 h-12 bg-brand-terracotta/10 text-brand-terracotta rounded-full flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-xs text-brand-text-muted font-bold uppercase tracking-widest leading-none">
                      Dilindungi Undang-Undang No. 11 Tahun 2010
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Data Resmi Cagar Budaya */}
      <section id="cagar-budaya-data" className="py-40 bg-brand-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">
              {t.cagarBudayaPage.officialData.title}
            </h2>
            <p className="text-brand-text-muted font-bold tracking-[0.2em] uppercase text-[10px]">
              {t.cagarBudayaPage.officialData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {officialCagarBudaya.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[4rem] overflow-hidden editorial-shadow flex flex-col md:flex-row group"
              >
                <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                  <img src={item.image} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-brand-terracotta text-white rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                    {item.status}
                  </div>
                </div>
                <div className="md:w-3/5 p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-brand-text mb-8 line-clamp-2">{item.nama}</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-center">
                        <Calendar size={14} className="text-brand-terracotta shrink-0" />
                        <span className="text-[10px] font-bold text-brand-text uppercase tracking-wider">
                          {t.cagarBudayaPage.officialData.labels.year}: {item.tahunPenetapan}
                        </span>
                      </div>
                      <div className="flex gap-4 items-center">
                        <Landmark size={14} className="text-brand-terracotta shrink-0" />
                        <span className="text-[10px] font-bold text-brand-text uppercase tracking-wider">
                          {t.cagarBudayaPage.officialData.labels.type}: {item.jenis}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 flex gap-4">
                    <button 
                      onClick={() => setSelectedOfficialItem(item)}
                      className="flex-1 py-4 bg-brand-beige text-brand-text rounded-2xl font-bold text-[9px] uppercase tracking-widest hover:bg-brand-terracotta hover:text-white transition-all"
                    >
                      {t.cagarBudayaPage.officialData.labels.detail}
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.nama + ' ' + item.lokasi)}`, '_blank')}
                      className="px-6 h-14 bg-brand-clay text-white rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-terracotta transition-all shadow-xl"
                    >
                      <MapPin size={18} />
                      <span className="text-[9px] font-bold uppercase tracking-widest">{t.cagarBudayaPage.officialData.labels.map}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Official Detail Modal */}
          <AnimatePresence>
            {selectedOfficialItem && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedOfficialItem(null)}
                  className="absolute inset-0 bg-brand-text/60 backdrop-blur-sm"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
                >
                  {/* Header / Image Body */}
                  <div className="relative h-64 md:h-80 w-full shrink-0">
                    <img src={selectedOfficialItem.image} alt={selectedOfficialItem.nama} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-8 right-8">
                      <button 
                        onClick={() => setSelectedOfficialItem(null)}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-text transition-all"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <div className="absolute bottom-8 left-12 right-12 text-white">
                      <span className="px-4 py-1.5 bg-brand-terracotta text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">
                        {selectedOfficialItem.status}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">{selectedOfficialItem.nama}</h2>
                    </div>
                  </div>

                  <div className="p-12 md:p-16 overflow-y-auto max-h-[60vh] space-y-10 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.year}</h4>
                        <p className="text-brand-text font-semibold text-[17
                        px] leading-snug">{selectedOfficialItem.tahunPenetapan}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.type}</h4>
                        <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.jenis}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.location}</h4>
                      <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.lokasi}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {selectedOfficialItem.koordinat && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.coordinates}</h4>
                          <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.koordinat}</p>
                        </div>
                      )}
                      {selectedOfficialItem.ukuran && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.size}</h4>
                          <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.ukuran}</p>
                        </div>
                      )}
                      {selectedOfficialItem.kepemilikan && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.ownership}</h4>
                          <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.kepemilikan}</p>
                        </div>
                      )}
                      {selectedOfficialItem.pengelola && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-muted mb-4">{t.cagarBudayaPage.officialData.labels.manager}</h4>
                          <p className="text-brand-text font-semibold text-[17px] leading-snug">{selectedOfficialItem.pengelola}</p>
                        </div>
                      )}
                    </div>

                    <div className="p-8 bg-brand-beige rounded-3xl border border-brand-sand/30">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-brand-terracotta text-white rounded-2xl flex items-center justify-center shrink-0">
                          <ShieldCheck size={24} />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-terracotta mb-2">{t.cagarBudayaPage.officialData.labels.sk}</h4>
                          <p className="text-brand-text font-bold text-sm leading-relaxed">{selectedOfficialItem.skPenetapan}</p>
                        </div>
                      </div>
                    </div>

                    {selectedOfficialItem.link ? (
                      <a 
                        href={selectedOfficialItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-5 bg-brand-terracotta text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl hover:bg-brand-clay transition-all"
                      >
                        {t.cagarBudayaPage.officialData.labels.viewSk} ↗
                      </a>
                    ) : (
                      <button 
                        className="w-full py-5 bg-brand-text text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl opacity-50 cursor-not-allowed"
                        disabled
                      >
                        {t.cagarBudayaPage.officialData.labels.viewSk} (Coming Soon)
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Section 5: Objek Diduga Cagar Budaya */}
      <section className="py-40 bg-brand-sand/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">
                {t.cagarBudayaPage.odcb.title}
              </h2>
              <p className="text-brand-text-muted font-bold tracking-[0.2em] uppercase text-[10px]">
                {t.cagarBudayaPage.odcb.subtitle}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="relative lg:w-80 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-muted group-focus-within:text-brand-terracotta" size={18} />
                <input 
                  type="text"
                  placeholder={t.cagarBudayaPage.odcb.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl border border-brand-sand focus:border-brand-terracotta outline-none transition-all text-xs font-bold uppercase tracking-widest"
                />
              </div>
              <select 
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
                className="px-6 py-4 bg-white rounded-2xl border border-brand-sand text-xs font-bold uppercase tracking-widest outline-none focus:border-brand-terracotta"
              >
                {districts.map(d => <option key={d} value={d}>{d === lang ? t.cagarBudayaPage.odcb.all : d}</option>)}
              </select>
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-6 py-4 bg-white rounded-2xl border border-brand-sand text-xs font-bold uppercase tracking-widest outline-none focus:border-brand-terracotta"
              >
                {types.map(type => <option key={type} value={type}>{type === lang ? t.cagarBudayaPage.odcb.all : type}</option>)}
              </select>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] editorial-shadow overflow-hidden border border-brand-sand overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-beige/50">
                  <th className="px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand">#</th>
                  <th className="px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand">{t.cagarBudayaPage.odcb.table.name}</th>
                  <th className="px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand">{t.cagarBudayaPage.odcb.table.location}</th>
                  <th className="px-12 py-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-terracotta border-b border-brand-sand">{t.cagarBudayaPage.odcb.table.status}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-sand/20">
                {filteredODCB.map((item, i) => (
                  <tr key={i} className="hover:bg-brand-cream/10 transition-colors group">
                    <td className="px-12 py-8 text-xs font-bold text-brand-text-muted leading-relaxed">
                      {(i + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="px-12 py-8">
                      <div className="text-sm font-bold text-brand-text group-hover:text-brand-terracotta transition-colors">{item.nama}</div>
                      <div className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.1em] mt-1">{item.jenis}</div>
                    </td>
                    <td className="px-12 py-8">
                      <div className="flex items-center gap-3 text-xs text-brand-text-muted font-medium">
                        <MapPin size={14} className="text-brand-terracotta" />
                        {item.lokasi}
                      </div>
                    </td>
                    <td className="px-12 py-8">
                      <span className="px-4 py-1.5 bg-brand-beige text-brand-text text-[9px] font-bold rounded-full uppercase tracking-widest border border-brand-sand/50">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-gradient-to-b from-brand-clay to-brand-terracotta text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-5">
              PETA INTERAKTIF
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Peta Interaktif Cagar Budaya
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg font-medium opacity-90">
              Lokasi objek cagar budaya resmi Kabupaten Bojonegoro.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl bg-white p-2 h-[600px] relative"
          >
            <CagarBudayaMap />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};


export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('beranda');
  const [selectedArticle, setSelectedArticle] = useState<DocumentData | null>(null);
  const [lang, setLang] = useState<Language>('id');

  const handleArticleSelect = (article: DocumentData) => {
    setSelectedArticle(article);
    setCurrentPage('artikel-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda': return <HomePage onNavigate={setCurrentPage} lang={lang} />;
      case 'katalog': return <CatalogPage onArticleSelect={handleArticleSelect} lang={lang} />;
      case 'basis-data': return <DatabasePage lang={lang} />;
      case 'wbtb': return <WBTbPage lang={lang} />;
      case 'cagar-budaya': return <CagarBudayaPage lang={lang} />;
      case 'tentang': return <AboutPage lang={lang} />;
      case 'artikel-detail': return <ArticleDetailPage article={selectedArticle!} onBack={() => setCurrentPage('katalog')} lang={lang} />;
      default: return <HomePage onNavigate={setCurrentPage} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-terracotta/20 selection:text-brand-terracotta">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} lang={lang} />
    </div>
  );
}
