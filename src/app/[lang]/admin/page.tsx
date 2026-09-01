"use client";

import React, { useState, useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n";
import {
  Lock,
  Globe,
  Plus,
  Save,
  Trash2,
  CheckCircle2,
  Search,
  Edit,
  RotateCcw,
  Sparkles,
  FileText,
  Wrench,
  BookOpen,
  Landmark,
  Inbox,
  Filter,
  Eye,
  Star,
  X,
  Clock,
  Tag,
  DollarSign,
  Calendar,
  Building2,
  Phone,
  Mail,
  Ticket,
  Percent,
  Layers,
  Award,
  Send,
  UserCheck,
  Loader2,
  Paperclip,
  File,
  Image as ImageIcon
} from "lucide-react";
import {
  getStoredProjects,
  saveStoredProject,
  deleteStoredProject,
  getStoredServices,
  saveStoredService,
  deleteStoredService,
  getStoredInsights,
  saveStoredInsight,
  deleteStoredInsight,
  getStoredSchemes,
  saveStoredScheme,
  deleteStoredScheme
} from "@/lib/cmsStore";

interface AttachmentItem {
  filename: string;
  content: string; // Base64
  size: string;
  type: string;
}

export default function AdminPage() {
  const { t, language } = useTranslation();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Admin Navigation Tabs
  const [activeTab, setActiveTab] = useState<
    "consultation_services" | "coupons" | "library_resources" | "mail_composer" | "consultation_leads" | "project_leads" | "projects" | "services" | "insights" | "schemes"
  >("consultation_services");

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mail Composer Form States
  const [mailTo, setMailTo] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [mailAttachments, setMailAttachments] = useState<AttachmentItem[]>([]);
  const [isSendingMail, setIsSendingMail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Local & DB Collections
  const [consultationServices, setConsultationServices] = useState<any[]>([]);
  const [coupons, setCoupons] = useState<any[]>([]);
  const [libraryResources, setLibraryResources] = useState<any[]>([]);
  const [consultationBookings, setConsultationBookings] = useState<any[]>([]);
  const [projectInquiries, setProjectInquiries] = useState<any[]>([]);

  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [schemes, setSchemes] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" | "error" } | null>(null);

  // Modal State for Editing / Creating
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntityType, setEditingEntityType] = useState<string>("");
  const [editingEntity, setEditingEntity] = useState<any | null>(null);

  const showToast = (message: string, type: "success" | "info" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Load Real Data from Database API & Local Persistence
  const loadDatabaseData = async () => {
    setIsLoading(true);
    try {
      // 01. Consultation Services
      const resCs = await fetch("/api/admin/db?type=consultation_services");
      const jsonCs = await resCs.json();
      if (jsonCs.success) setConsultationServices(jsonCs.data);

      // 02. Coupon Codes
      const resCp = await fetch("/api/admin/db?type=coupons");
      const jsonCp = await resCp.json();
      if (jsonCp.success) setCoupons(jsonCp.data);

      // 03. Library Resources
      const resLib = await fetch("/api/admin/db?type=library_resources");
      const jsonLib = await resLib.json();
      if (jsonLib.success) setLibraryResources(jsonLib.data);

      // 04. Real Consultation Bookings Leads
      const resCb = await fetch("/api/admin/db?type=consultation_bookings");
      const jsonCb = await resCb.json();
      if (jsonCb.success) setConsultationBookings(jsonCb.data);

      // 05. Real Project Inquiries Leads
      const resIq = await fetch("/api/admin/db?type=project_inquiries");
      const jsonIq = await resIq.json();
      if (jsonIq.success) setProjectInquiries(jsonIq.data);

      // Core Website Stores
      setProjects(getStoredProjects());
      setServices(getStoredServices());
      setInsights(getStoredInsights());
      setSchemes(getStoredSchemes());
    } catch (err) {
      console.error("Error loading DB data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadDatabaseData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "odcons2026" || passkey === "admin") {
      setIsAuthenticated(true);
      setErrorMsg("");
      showToast("Authentication successful! Welcome to ODCONS CMS Portal.");
    } else {
      setErrorMsg("Invalid Admin Passkey. Please try again.");
    }
  };

  // -------------------------------------------------------------
  // ATTACHMENT HANDLERS (PDF / Images / Docs)
  // -------------------------------------------------------------
  const handleFileAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64Content = result.includes(",") ? result.split(",")[1] : result;
        const fileSizeFormatted = file.size > 1024 * 1024 
          ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
          : `${(file.size / 1024).toFixed(1)} KB`;

        setMailAttachments((prev) => [
          ...prev,
          {
            filename: file.name,
            content: base64Content,
            size: fileSizeFormatted,
            type: file.type
          }
        ]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRemoveAttachment = (indexToRemove: number) => {
    setMailAttachments((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // -------------------------------------------------------------
  // MAIL COMPOSER HANDLER (Resend API)
  // -------------------------------------------------------------
  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mailTo || !mailSubject || !mailMessage) {
      showToast("Please fill in recipient email, subject, and message content.", "error");
      return;
    }

    setIsSendingMail(true);
    try {
      const res = await fetch("/api/admin/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: mailTo,
          subject: mailSubject,
          message: mailMessage,
          attachments: mailAttachments
        })
      });

      const json = await res.json();
      if (res.ok && json.success) {
        showToast(json.message || "Mail sent successfully!");
        setMailSubject("");
        setMailMessage("");
        setMailAttachments([]);
      } else {
        showToast(json.error || "Failed to send email.", "error");
      }
    } catch (err: any) {
      showToast("Error connecting to Mail API.", "error");
    } finally {
      setIsSendingMail(false);
    }
  };

  const handleSelectLeadEmail = (emailStr: string) => {
    if (!mailTo) {
      setMailTo(emailStr);
    } else if (!mailTo.includes(emailStr)) {
      setMailTo(`${mailTo}, ${emailStr}`);
    }
  };

  // -------------------------------------------------------------
  // OPEN MODAL CREATION HANDLERS
  // -------------------------------------------------------------
  const handleOpenCreateConsultationService = () => {
    setEditingEntityType("consultation_service");
    setEditingEntity({
      id: `cs-${Date.now()}`,
      name: "",
      name_or: "",
      price: 2500,
      duration: "45 Mins",
      desc: "",
      desc_or: "",
      timeSlots: "10:00 AM, 11:30 AM, 02:30 PM, 04:00 PM, 05:30 PM",
      active: true
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateCoupon = () => {
    setEditingEntityType("coupon");
    setEditingEntity({
      id: `cp-${Date.now()}`,
      code: "OFFER1000",
      type: "fixed",
      value: 1000,
      minAmount: 1500,
      desc: "₹1,000 Special Discount",
      desc_or: "",
      active: true
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateLibraryResource = () => {
    setEditingEntityType("library_resource");
    setEditingEntity({
      id: `lib-${Date.now()}`,
      title: "",
      title_or: "",
      category: "Tales of Aquaculture",
      slug: `doc-${Date.now()}`,
      description: "",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
      publishedDate: new Date().toISOString().split("T")[0],
      pages: "20 Pages",
      active: true
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateCoreService = () => {
    setEditingEntityType("core_service");
    setEditingEntity({
      id: `srv-${Date.now()}`,
      slug: `service-${Date.now()}`,
      title: "",
      title_or: "",
      category: "DPR Consultancy",
      description: "",
      description_or: "",
      highlights: "Bankable Reports, Subsidy Documentation, Financial Modeling"
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateProject = () => {
    setEditingEntityType("project");
    setEditingEntity({
      id: `proj-${Date.now()}`,
      slug: `project-${Date.now()}`,
      title: "",
      title_or: "",
      sector: "Fisheries & Aquaculture",
      location: "Bhubaneswar, Odisha",
      year: "2026",
      client: "Private Agribusiness Firm",
      status: "In Progress",
      description: "",
      description_or: "",
      challenge: "",
      solution: "",
      featured: true,
      images: ["https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800"]
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateInsight = () => {
    setEditingEntityType("insight");
    setEditingEntity({
      id: `art-${Date.now()}`,
      slug: `article-${Date.now()}`,
      title: "",
      title_or: "",
      category: "Subsidies & DPR",
      excerpt: "",
      excerpt_or: "",
      content: "",
      read_time: "5 min read",
      author: "Anshuman Mohapatra",
      published_at: new Date().toISOString().split("T")[0],
      image_url: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=800"
    });
    setIsModalOpen(true);
  };

  const handleOpenCreateScheme = () => {
    setEditingEntityType("scheme");
    setEditingEntity({
      id: `sch-${Date.now()}`,
      slug: `scheme-${Date.now()}`,
      name: "",
      name_or: "",
      sector: "Fisheries",
      subsidy_percentage: "40% - 60%",
      max_grant: "₹50 Lakhs",
      nodal_agency: "Dept. of Fisheries / NFDB",
      eligibility: "",
      eligibility_or: ""
    });
    setIsModalOpen(true);
  };

  // -------------------------------------------------------------
  // SAVE HANDLERS
  // -------------------------------------------------------------
  const handleSaveConsultationService = async (e: React.FormEvent) => {
    e.preventDefault();
    let timeSlotsArray = editingEntity.timeSlots;
    if (typeof timeSlotsArray === "string") {
      timeSlotsArray = timeSlotsArray.split(",").map((s: string) => s.trim()).filter(Boolean);
    }
    const payload = {
      ...editingEntity,
      price: Number(editingEntity.price) || 2500,
      timeSlots: timeSlotsArray
    };
    try {
      const res = await fetch("/api/admin/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", type: "consultation_services", data: payload })
      });
      const json = await res.json();
      if (json.success) {
        setConsultationServices(json.data);
        showToast(`Consultation Service "${payload.name}" saved!`);
        setIsModalOpen(false);
      }
    } catch {
      showToast("Failed to save service", "error");
    }
  };

  const handleSaveCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...editingEntity,
      code: (editingEntity.code || "").trim().toUpperCase(),
      value: Number(editingEntity.value) || 500,
      minAmount: Number(editingEntity.minAmount) || 0
    };
    try {
      const res = await fetch("/api/admin/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", type: "coupons", data: payload })
      });
      const json = await res.json();
      if (json.success) {
        setCoupons(json.data);
        showToast(`Coupon Code "${payload.code}" saved!`);
        setIsModalOpen(false);
      }
    } catch {
      showToast("Failed to save coupon", "error");
    }
  };

  const handleSaveLibraryResource = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", type: "library_resources", data: editingEntity })
      });
      const json = await res.json();
      if (json.success) {
        setLibraryResources(json.data);
        showToast(`Library Document "${editingEntity.title}" saved!`);
        setIsModalOpen(false);
      }
    } catch {
      showToast("Failed to save library document", "error");
    }
  };

  const handleSaveCoreService = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveStoredService(editingEntity);
    setServices(updated);
    showToast(`Core Service "${editingEntity.title}" saved!`);
    setIsModalOpen(false);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const imagesArr = typeof editingEntity.images === "string" 
      ? editingEntity.images.split(",").map((s: string) => s.trim()).filter(Boolean)
      : editingEntity.images;

    const payload = { ...editingEntity, images: imagesArr };
    const updated = saveStoredProject(payload);
    setProjects(updated);
    showToast(`Project "${editingEntity.title}" saved!`);
    setIsModalOpen(false);
  };

  const handleSaveInsight = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveStoredInsight(editingEntity);
    setInsights(updated);
    showToast(`Article "${editingEntity.title}" saved!`);
    setIsModalOpen(false);
  };

  const handleSaveScheme = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveStoredScheme(editingEntity);
    setSchemes(updated);
    showToast(`Scheme "${editingEntity.name}" saved!`);
    setIsModalOpen(false);
  };

  // -------------------------------------------------------------
  // DELETE HANDLERS
  // -------------------------------------------------------------
  const handleDeleteConsultationService = async (id: string, nameStr: string) => {
    if (!window.confirm(`Delete "${nameStr}"?`)) return;
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", type: "consultation_services", data: { id } })
    });
    const json = await res.json();
    if (json.success) {
      setConsultationServices(json.data);
      showToast(`"${nameStr}" deleted.`);
    }
  };

  const handleDeleteCoupon = async (id: string, codeStr: string) => {
    if (!window.confirm(`Delete coupon "${codeStr}"?`)) return;
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", type: "coupons", data: { id, code: codeStr } })
    });
    const json = await res.json();
    if (json.success) {
      setCoupons(json.data);
      showToast(`Coupon "${codeStr}" deleted.`);
    }
  };

  const handleDeleteLibraryResource = async (id: string, titleStr: string) => {
    if (!window.confirm(`Delete library document "${titleStr}"?`)) return;
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", type: "library_resources", data: { id } })
    });
    const json = await res.json();
    if (json.success) {
      setLibraryResources(json.data);
      showToast(`Library document "${titleStr}" deleted.`);
    }
  };

  const handleUpdateBookingStatus = async (id: string, status: string) => {
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update_status", type: "consultation_bookings", data: { id, status } })
    });
    const json = await res.json();
    if (json.success) {
      setConsultationBookings(json.data);
      showToast(`Booking ${id} status updated to ${status}.`);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (!window.confirm(`Delete booking ${id}?`)) return;
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", type: "consultation_bookings", data: { id } })
    });
    const json = await res.json();
    if (json.success) {
      setConsultationBookings(json.data);
      showToast(`Booking ${id} deleted.`);
    }
  };

  const handleUpdateInquiryStatus = async (id: string, status: string) => {
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update_status", type: "project_inquiries", data: { id, status } })
    });
    const json = await res.json();
    if (json.success) {
      setProjectInquiries(json.data);
      showToast(`Inquiry ${id} status updated to ${status}.`);
    }
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!window.confirm(`Delete inquiry ${id}?`)) return;
    const res = await fetch("/api/admin/db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", type: "project_inquiries", data: { id } })
    });
    const json = await res.json();
    if (json.success) {
      setProjectInquiries(json.data);
      showToast(`Inquiry ${id} deleted.`);
    }
  };

  // Filter Functions
  const filteredConsultationBookings = consultationBookings.filter((b) => {
    const matchSearch =
      (b.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.mobile || "").includes(searchQuery);
    const matchStatus = filterStatus === "all" || (b.status || "").toLowerCase() === filterStatus.toLowerCase();
    return matchSearch && matchStatus;
  });

  const filteredProjectInquiries = projectInquiries.filter((iq) => {
    const matchSearch =
      (iq.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (iq.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (iq.phone || "").includes(searchQuery) ||
      (iq.sector || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "all" || (iq.status || "").toLowerCase() === filterStatus.toLowerCase();
    return matchSearch && matchStatus;
  });

  const filteredLibraryResources = libraryResources.filter((item) =>
    (item.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.category || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCoreServices = services.filter((s) =>
    (s.title || s.name || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    (p.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (p.sector || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInsights = insights.filter((i) =>
    (i.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (i.category || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSchemes = schemes.filter((sc) =>
    (sc.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (sc.sector || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Extract all client email addresses for quick selection in composer
  const allClientEmails = Array.from(
    new Set([
      ...consultationBookings.map((b) => b.email).filter(Boolean),
      ...projectInquiries.map((iq) => iq.email).filter(Boolean)
    ])
  );

  return (
    <main className="min-h-screen bg-theme-base text-theme-text pt-20">
      <Header />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-forest-900 border border-harvest-400/80 text-sand-50 shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-harvest-400" />
          <span className="text-xs font-bold font-mono">{toast.message}</span>
        </div>
      )}

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="max-w-md mx-auto p-8 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-forest-950 border border-harvest-400/50 mx-auto flex items-center justify-center text-harvest-400 shadow-inner">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="font-display font-extrabold text-2xl text-sand-50 uppercase tracking-tight">
                ODCONS CMS Portal
              </h1>
              <p className="text-xs text-theme-text-muted">Enter administrative passkey to access database & leads</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-theme-gold uppercase">Admin Passkey</label>
                <input
                  type="password"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="Enter passkey (e.g. odcons2026)"
                  className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-sm focus:outline-none focus:border-harvest-400"
                />
              </div>

              {errorMsg && <p className="text-xs text-rose-400 font-bold">{errorMsg}</p>}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-all"
              >
                Authenticate & Access Dashboard
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Portal */
          <div className="space-y-8">
            {/* Top Dashboard Header & Metrics */}
            <div className="p-6 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theme-border/60 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950 border border-forest-800 text-[10px] font-mono font-bold text-harvest-400 uppercase tracking-widest">
                    <span>PERSISTENT LOCAL DB CONTROL CENTER</span>
                  </div>
                  <h1 className="font-display font-extrabold text-3xl text-sand-50 uppercase pt-1">
                    ODCONS Content & Client Leads Manager
                  </h1>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={loadDatabaseData}
                    className="px-4 py-2 rounded-xl bg-forest-950 border border-forest-800 text-xs font-mono font-bold text-theme-text-muted hover:text-harvest-400 transition-colors flex items-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refresh DB</span>
                  </button>

                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="px-4 py-2 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs font-mono font-bold text-rose-400 hover:bg-rose-900/60 transition-colors"
                  >
                    Lock Portal
                  </button>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Consultation Services</span>
                  <p className="font-display font-extrabold text-2xl text-harvest-400">{consultationServices.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Coupon Codes</span>
                  <p className="font-display font-extrabold text-2xl text-emerald-400">{coupons.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Library PDFs</span>
                  <p className="font-display font-extrabold text-2xl text-cyan-400">{libraryResources.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Consultation Leads</span>
                  <p className="font-display font-extrabold text-2xl text-amber-400">{consultationBookings.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Project Inquiries</span>
                  <p className="font-display font-extrabold text-2xl text-aqua-400">{projectInquiries.length}</p>
                </div>
                <div className="p-4 rounded-2xl bg-forest-950 border border-forest-800 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase">Core Services</span>
                  <p className="font-display font-extrabold text-2xl text-sand-50">{services.length}</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-theme-border/80 pb-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "consultation_services", label: "💳 Consultation Services", count: consultationServices.length },
                  { key: "coupons", label: "🎟️ Coupon Codes", count: coupons.length },
                  { key: "library_resources", label: "📚 Library Resources", count: libraryResources.length },
                  { key: "mail_composer", label: "📧 Mail Composer", count: allClientEmails.length },
                  { key: "consultation_leads", label: "📅 Consultation Bookings Leads", count: consultationBookings.length },
                  { key: "project_leads", label: "🏗️ Project Inquiries Leads", count: projectInquiries.length },
                  { key: "services", label: "⚙️ Core Services", count: services.length },
                  { key: "projects", label: "📁 Projects", count: projects.length },
                  { key: "insights", label: "📰 Insights", count: insights.length },
                  { key: "schemes", label: "🏛️ Schemes", count: schemes.length }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActiveTab(tab.key as any);
                      setSearchQuery("");
                      setFilterStatus("all");
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-display font-bold uppercase tracking-wider transition-all border ${
                      activeTab === tab.key
                        ? "bg-forest-900 border-harvest-400 text-sand-50 shadow-lg scale-105"
                        : "glass-card hover:border-theme-border text-theme-text-muted"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="ml-2 px-1.5 py-0.5 rounded-full bg-forest-950 text-[10px] font-mono text-harvest-400">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* ACTION BUTTONS FOR EACH TAB */}
              {activeTab === "consultation_services" && (
                <button
                  onClick={handleOpenCreateConsultationService}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Consultation Service</span>
                </button>
              )}

              {activeTab === "coupons" && (
                <button
                  onClick={handleOpenCreateCoupon}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Coupon Code</span>
                </button>
              )}

              {activeTab === "library_resources" && (
                <button
                  onClick={handleOpenCreateLibraryResource}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Upload Library Document</span>
                </button>
              )}

              {activeTab === "services" && (
                <button
                  onClick={handleOpenCreateCoreService}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Core Service</span>
                </button>
              )}

              {activeTab === "projects" && (
                <button
                  onClick={handleOpenCreateProject}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              )}

              {activeTab === "insights" && (
                <button
                  onClick={handleOpenCreateInsight}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write Insight Article</span>
                </button>
              )}

              {activeTab === "schemes" && (
                <button
                  onClick={handleOpenCreateScheme}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Government Scheme</span>
                </button>
              )}
            </div>

            {/* Search & Filter Bar (Shown for lists) */}
            {activeTab !== "mail_composer" && (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-theme-text-muted absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={`Search ${activeTab.replace("_", " ")} by title, code, client name, email, or mobile...`}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs focus:outline-none focus:border-harvest-400"
                  />
                </div>

                {(activeTab === "consultation_leads" || activeTab === "project_leads") && (
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs focus:outline-none"
                  >
                    <option value="all">All Lead Statuses</option>
                    <option value="new">New / Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="contacted">Contacted</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                )}
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* LIBRARY RESOURCES TAB CRUD */}
            {/* ------------------------------------------------------------- */}
            {activeTab === "library_resources" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLibraryResources.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-3xl glass-panel border border-theme-border space-y-4 shadow-xl hover:border-harvest-400/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-forest-950 border border-forest-700 font-mono font-bold text-xs text-harvest-400 uppercase">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingEntityType("library_resource");
                              setEditingEntity({ ...item });
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 rounded-xl bg-forest-950 border border-forest-800 text-harvest-400 hover:bg-forest-900"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteLibraryResource(item.id, item.title)}
                            className="p-1.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-400 hover:bg-rose-900/60"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display font-extrabold text-base text-sand-50">{item.title}</h3>
                        {item.title_or && <p className="text-xs text-harvest-300 font-sans">{item.title_or}</p>}
                        <p className="text-xs text-theme-text-muted leading-relaxed line-clamp-3 pt-1">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-theme-border/60 text-xs font-mono text-theme-text-muted">
                      <span>PDF: {item.pages || "Document"}</span>
                      <span className="text-emerald-400 font-bold">Protected Reader</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EMAIL COMPOSER MODULE */}
            {activeTab === "mail_composer" && (
              <div className="p-8 rounded-3xl glass-panel border border-theme-border shadow-2xl space-y-6">
                <div className="border-b border-theme-border pb-4 flex justify-between items-center">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-sand-50 uppercase flex items-center gap-2">
                      <Mail className="w-6 h-6 text-harvest-400" />
                      <span>Admin Client Email Composer</span>
                    </h2>
                    <p className="text-xs text-theme-text-muted pt-1">
                      Compose text emails with PDF, Image, and Document attachments delivered via Resend API.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-forest-950 border border-emerald-500/50 text-[11px] font-mono text-emerald-400 font-bold">
                    Resend API + Attachments Enabled
                  </span>
                </div>

                {allClientEmails.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-harvest-400 uppercase block font-mono">
                      Quick Client Recipient Selector (Click to Add):
                    </span>
                    <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-3 rounded-2xl bg-forest-950 border border-forest-800">
                      {allClientEmails.map((emailStr, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectLeadEmail(emailStr)}
                          className="px-3 py-1 rounded-xl bg-forest-900 border border-forest-700 text-xs font-mono text-sand-200 hover:border-harvest-400 hover:text-harvest-400 transition-colors flex items-center gap-1.5"
                        >
                          <UserCheck className="w-3.5 h-3.5 text-harvest-400" />
                          <span>{emailStr}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSendMail} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">
                      Recipient Email Address(es) * (Comma-separated for multiple)
                    </label>
                    <input
                      required
                      type="text"
                      value={mailTo}
                      onChange={(e) => setMailTo(e.target.value)}
                      placeholder="e.g. client@domain.com, lead@agritech.in"
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs font-mono focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Subject Line *</label>
                    <input
                      required
                      type="text"
                      value={mailSubject}
                      onChange={(e) => setMailSubject(e.target.value)}
                      placeholder="e.g. [ODCONS] Technical Consultation Follow-up & Project DPR Blueprint"
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs focus:outline-none focus:border-harvest-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Email Content / Message Body *</label>
                    <textarea
                      required
                      rows={10}
                      value={mailMessage}
                      onChange={(e) => setMailMessage(e.target.value)}
                      placeholder="Type your normal text email message here..."
                      className="w-full p-4 rounded-xl bg-forest-950 border border-forest-800 text-sand-50 text-xs leading-relaxed focus:outline-none focus:border-harvest-400 font-sans"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-harvest-400 uppercase flex items-center gap-1.5">
                        <Paperclip className="w-4 h-4" />
                        <span>File Attachments (PDF, Images, Documents)</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 rounded-xl bg-forest-900 border border-forest-700 text-xs font-bold text-harvest-400 hover:bg-forest-800 hover:border-harvest-400 transition-all flex items-center gap-2"
                      >
                        <Paperclip className="w-3.5 h-3.5" />
                        <span>+ Attach File</span>
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx"
                        onChange={handleFileAttachmentChange}
                        className="hidden"
                      />
                    </div>

                    {mailAttachments.length > 0 && (
                      <div className="flex flex-wrap gap-2.5 p-3 rounded-2xl bg-forest-950 border border-forest-800">
                        {mailAttachments.map((att, index) => (
                          <div
                            key={index}
                            className="px-3 py-2 rounded-xl bg-forest-900 border border-harvest-400/50 text-sand-50 text-xs font-mono flex items-center gap-2.5 shadow-md"
                          >
                            {att.type.includes("image") ? (
                              <ImageIcon className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <File className="w-4 h-4 text-harvest-400" />
                            )}
                            <div className="flex flex-col">
                              <span className="font-bold truncate max-w-[180px]">{att.filename}</span>
                              <span className="text-[10px] text-theme-text-muted">{att.size}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveAttachment(index)}
                              className="p-1 rounded-lg hover:bg-rose-950/60 text-rose-400 ml-1"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-theme-border/60">
                    <button
                      type="submit"
                      disabled={isSendingMail || !mailTo || !mailSubject || !mailMessage}
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-harvest-500 to-harvest-600 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSendingMail ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Email & Attachments...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Email ({mailAttachments.length} Attachments) →</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* CONSULTATION SERVICES TAB */}
            {activeTab === "consultation_services" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consultationServices.map((cs) => {
                  return (
                    <div
                      key={cs.id}
                      className="p-6 rounded-3xl glass-panel border border-theme-border space-y-4 shadow-xl hover:border-harvest-400/60 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="px-3 py-1 rounded-full bg-forest-950 border border-forest-700 font-mono font-extrabold text-sm text-harvest-400 shadow-inner">
                            ₹{cs.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setEditingEntityType("consultation_service");
                                setEditingEntity({
                                  ...cs,
                                  timeSlots: Array.isArray(cs.timeSlots) ? cs.timeSlots.join(", ") : cs.timeSlots
                                });
                                setIsModalOpen(true);
                              }}
                              className="p-1.5 rounded-xl bg-forest-950 border border-forest-800 text-harvest-400 hover:bg-forest-900"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteConsultationService(cs.id, cs.name)}
                              className="p-1.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-400 hover:bg-rose-900/60"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <h3 className="font-display font-extrabold text-lg text-sand-50">{cs.name}</h3>
                          {cs.name_or && <p className="text-xs text-harvest-400 font-sans">{cs.name_or}</p>}
                          <p className="text-xs text-theme-text-muted leading-relaxed pt-1">{cs.desc}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-3 border-t border-theme-border/60 text-xs font-mono text-theme-text-muted">
                        <span>Duration: {cs.duration}</span>
                        <span className="text-harvest-400 font-bold">Status: {cs.active ? "Active" : "Inactive"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* COUPON CODES TAB */}
            {activeTab === "coupons" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {coupons.map((cp) => (
                  <div
                    key={cp.id || cp.code}
                    className={`p-5 rounded-3xl glass-panel border space-y-4 shadow-xl flex flex-col justify-between transition-all ${
                      cp.active ? "border-emerald-500/50 hover:border-emerald-400" : "border-rose-900/60 opacity-65"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-forest-950 border border-forest-700 font-mono font-extrabold text-sm text-harvest-400 uppercase tracking-wider">
                          {cp.code}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingEntityType("coupon");
                              setEditingEntity({ ...cp });
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-forest-950 border border-forest-800 text-harvest-400"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteCoupon(cp.id, cp.code)}
                            className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="font-display font-extrabold text-lg text-sand-50">
                          {cp.type === "fixed" ? `₹${cp.value} FLAT DISCOUNT` : `${cp.value}% OFF`}
                        </div>
                        <p className="text-xs text-theme-text-muted leading-relaxed">{cp.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CONSULTATION LEADS TAB */}
            {activeTab === "consultation_leads" && (
              <div className="rounded-3xl glass-panel border border-theme-border overflow-hidden shadow-2xl">
                {filteredConsultationBookings.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <Inbox className="w-10 h-10 text-theme-text-muted mx-auto" />
                    <h3 className="font-display font-bold text-lg text-sand-50 uppercase">No Consultation Bookings Yet</h3>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-forest-950 text-harvest-400 uppercase font-mono border-b border-theme-border">
                        <tr>
                          <th className="p-4">Booking ID</th>
                          <th className="p-4">Client Contact</th>
                          <th className="p-4">Service Booked</th>
                          <th className="p-4">Scheduled Date & Slot</th>
                          <th className="p-4">Amount</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-theme-border/60">
                        {filteredConsultationBookings.map((b) => (
                          <tr key={b.id} className="hover:bg-forest-900/40 transition-colors">
                            <td className="p-4 font-mono font-bold text-harvest-400">{b.id}</td>
                            <td className="p-4 space-y-1">
                              <div className="font-bold text-sand-50">{b.name}</div>
                              <div className="text-[11px] text-theme-text-muted font-mono">{b.email}</div>
                              <div className="text-[11px] text-harvest-300 font-mono">{b.mobile}</div>
                            </td>
                            <td className="p-4 text-sand-100 font-medium">{b.serviceName}</td>
                            <td className="p-4 font-mono text-sand-200">
                              <div>{b.date}</div>
                              <div className="text-harvest-400 font-bold">{b.time}</div>
                            </td>
                            <td className="p-4 font-mono font-extrabold text-harvest-400">₹{b.amount}</td>
                            <td className="p-4">
                              <select
                                value={b.status || "Confirmed"}
                                onChange={(e) => handleUpdateBookingStatus(b.id, e.target.value)}
                                className="px-2.5 py-1 rounded-lg bg-forest-950 border border-forest-800 text-xs font-mono text-harvest-400 focus:outline-none"
                              >
                                <option value="New">New</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => handleDeleteBooking(b.id)}
                                className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400 hover:bg-rose-900/60"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* PROJECT INQUIRIES LEADS TAB */}
            {activeTab === "project_leads" && (
              <div className="rounded-3xl glass-panel border border-theme-border overflow-hidden shadow-2xl">
                {filteredProjectInquiries.length === 0 ? (
                  <div className="p-12 text-center space-y-3">
                    <Inbox className="w-10 h-10 text-theme-text-muted mx-auto" />
                    <h3 className="font-display font-bold text-lg text-sand-50 uppercase">No Project Inquiries Yet</h3>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-forest-950 text-harvest-400 uppercase font-mono border-b border-theme-border">
                        <tr>
                          <th className="p-4">Inquiry ID</th>
                          <th className="p-4">Client Contact</th>
                          <th className="p-4">Sector & Budget</th>
                          <th className="p-4">Problem Statement / Scope</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-theme-border/60">
                        {filteredProjectInquiries.map((iq) => (
                          <tr key={iq.id} className="hover:bg-forest-900/40 transition-colors">
                            <td className="p-4 font-mono font-bold text-aqua-400">{iq.id}</td>
                            <td className="p-4 space-y-1">
                              <div className="font-bold text-sand-50">{iq.name}</div>
                              <div className="text-[11px] text-theme-text-muted font-mono">{iq.email}</div>
                              <div className="text-[11px] text-harvest-300 font-mono">{iq.phone}</div>
                            </td>
                            <td className="p-4 font-mono space-y-1">
                              <div className="text-harvest-400 font-bold">{iq.sector}</div>
                              <div className="text-theme-text-muted">{iq.budget || "N/A"}</div>
                            </td>
                            <td className="p-4 text-theme-text-muted max-w-xs leading-relaxed">
                              {iq.problem_statement}
                            </td>
                            <td className="p-4">
                              <select
                                value={iq.status || "New"}
                                onChange={(e) => handleUpdateInquiryStatus(iq.id, e.target.value)}
                                className="px-2.5 py-1 rounded-lg bg-forest-950 border border-forest-800 text-xs font-mono text-aqua-400 focus:outline-none"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => handleDeleteInquiry(iq.id)}
                                className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400 hover:bg-rose-900/60"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* CORE SERVICES TAB */}
            {activeTab === "services" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredCoreServices.map((srv) => (
                  <div
                    key={srv.id || srv.slug}
                    className="p-5 rounded-2xl glass-panel border border-theme-border space-y-3 shadow-md hover:border-harvest-400/60 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="px-2.5 py-0.5 rounded-full bg-forest-950 border border-forest-800 text-[10px] font-mono font-bold text-harvest-400">
                          {srv.category || "Consultancy"}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingEntityType("core_service");
                              setEditingEntity({ ...srv });
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-forest-950 border border-forest-800 text-harvest-400"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              const updated = deleteStoredService(srv.id || srv.slug);
                              setServices(updated);
                              showToast(`Service deleted.`);
                            }}
                            className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-base text-sand-50">{srv.title || srv.name}</h3>
                      <p className="text-xs text-theme-text-muted line-clamp-2">{srv.description || srv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PROJECTS TAB */}
            {activeTab === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl glass-panel border space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold text-harvest-400">{proj.sector}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setEditingEntityType("project");
                            setEditingEntity({
                              ...proj,
                              images: Array.isArray(proj.images) ? proj.images.join(", ") : proj.images
                            });
                            setIsModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg bg-forest-950 border border-forest-800 text-harvest-400"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            const updated = deleteStoredProject(proj.id);
                            setProjects(updated);
                            showToast(`Project "${proj.title}" deleted.`);
                          }}
                          className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <h4 className="font-bold text-sand-50">{proj.title}</h4>
                    <p className="text-xs text-theme-text-muted">{proj.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* INSIGHTS TAB */}
            {activeTab === "insights" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInsights.map((ins) => (
                  <div key={ins.id || ins.slug} className="p-5 rounded-2xl glass-panel border space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold text-aqua-400">{ins.category}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setEditingEntityType("insight");
                            setEditingEntity({ ...ins });
                            setIsModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg bg-forest-950 border border-forest-800 text-harvest-400"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            const updated = deleteStoredInsight(ins.id || ins.slug);
                            setInsights(updated);
                            showToast(`Article deleted.`);
                          }}
                          className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <h4 className="font-bold text-sand-50">{ins.title}</h4>
                    <p className="text-xs text-theme-text-muted line-clamp-2">{ins.excerpt || ins.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SCHEMES TAB */}
            {activeTab === "schemes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSchemes.map((sc) => (
                  <div key={sc.id || sc.slug} className="p-5 rounded-2xl glass-panel border space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold text-emerald-400">{sc.sector}</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setEditingEntityType("scheme");
                            setEditingEntity({ ...sc });
                            setIsModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg bg-forest-950 border border-forest-800 text-harvest-400"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            const updated = deleteStoredScheme(sc.id || sc.slug);
                            setSchemes(updated);
                            showToast(`Scheme deleted.`);
                          }}
                          className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <h4 className="font-bold text-sand-50">{sc.name}</h4>
                    <p className="text-xs text-theme-text-muted line-clamp-2">{sc.eligibility}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* DYNAMIC MODALS FOR ALL ENTITIES */}
      {isModalOpen && editingEntity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-xl rounded-3xl bg-forest-950 border border-harvest-400/60 shadow-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-forest-800 pb-4">
              <h3 className="font-display font-extrabold text-xl text-sand-50 uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-harvest-400" />
                <span>Save {editingEntityType.replace("_", " ").toUpperCase()}</span>
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full bg-forest-900 text-theme-text-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FORM 00: LIBRARY RESOURCE */}
            {editingEntityType === "library_resource" && (
              <form onSubmit={handleSaveLibraryResource} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Document Title *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.title || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Title (Odia / ଓଡ଼ିଆ)</label>
                  <input
                    type="text"
                    value={editingEntity.title_or || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, title_or: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none font-sans"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Category *</label>
                    <select
                      value={editingEntity.category || "Tales of Aquaculture"}
                      onChange={(e) => setEditingEntity({ ...editingEntity, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none"
                    >
                      <option value="Tales of Aquaculture">Tales of Aquaculture</option>
                      <option value="Aquamarvel">Aquamarvel</option>
                      <option value="Magazines & Publications">Magazines & Publications</option>
                      <option value="Testimonials">Testimonials</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Pages / Info</label>
                    <input
                      type="text"
                      value={editingEntity.pages || "20 Pages"}
                      onChange={(e) => setEditingEntity({ ...editingEntity, pages: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none font-mono"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">PDF Document URL *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.pdfUrl || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, pdfUrl: e.target.value })}
                    placeholder="https://domain.com/sample.pdf"
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Cover Image Thumbnail URL</label>
                  <input
                    type="text"
                    value={editingEntity.coverImage || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Description</label>
                  <textarea
                    rows={3}
                    value={editingEntity.description || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Library Document →
                </button>
              </form>
            )}

            {/* FORM 01: CONSULTATION SERVICE */}
            {editingEntityType === "consultation_service" && (
              <form onSubmit={handleSaveConsultationService} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Service Name *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.name || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Price (₹) *</label>
                    <input
                      required
                      type="number"
                      value={editingEntity.price || 2500}
                      onChange={(e) => setEditingEntity({ ...editingEntity, price: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Duration</label>
                    <input
                      type="text"
                      value={editingEntity.duration || "45 Mins"}
                      onChange={(e) => setEditingEntity({ ...editingEntity, duration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Time Slots (Comma-Separated)</label>
                  <input
                    type="text"
                    value={editingEntity.timeSlots || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, timeSlots: e.target.value })}
                    placeholder="10:00 AM, 11:30 AM, 02:30 PM"
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Service & Price →
                </button>
              </form>
            )}

            {/* FORM 02: COUPON CODE */}
            {editingEntityType === "coupon" && (
              <form onSubmit={handleSaveCoupon} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Coupon Code *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.code || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, code: e.target.value.toUpperCase() })}
                    placeholder="ODCONS1000"
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono font-bold uppercase focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Discount Type</label>
                    <select
                      value={editingEntity.type || "fixed"}
                      onChange={(e) => setEditingEntity({ ...editingEntity, type: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                    >
                      <option value="fixed">Flat ₹ Amount</option>
                      <option value="percentage">Percentage (%)</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Value *</label>
                    <input
                      required
                      type="number"
                      value={editingEntity.value || 500}
                      onChange={(e) => setEditingEntity({ ...editingEntity, value: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs font-mono focus:outline-none"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Coupon →
                </button>
              </form>
            )}

            {/* FORM 03: CORE SERVICE */}
            {editingEntityType === "core_service" && (
              <form onSubmit={handleSaveCoreService} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Service Title *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.title || editingEntity.name || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Category</label>
                  <input
                    type="text"
                    value={editingEntity.category || "Consultancy"}
                    onChange={(e) => setEditingEntity({ ...editingEntity, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Description</label>
                  <textarea
                    rows={3}
                    value={editingEntity.description || editingEntity.desc || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Core Service →
                </button>
              </form>
            )}

            {/* FORM 04: PROJECT */}
            {editingEntityType === "project" && (
              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Project Title *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.title || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Sector</label>
                    <input
                      type="text"
                      value={editingEntity.sector || ""}
                      onChange={(e) => setEditingEntity({ ...editingEntity, sector: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-harvest-400 uppercase">Location</label>
                    <input
                      type="text"
                      value={editingEntity.location || ""}
                      onChange={(e) => setEditingEntity({ ...editingEntity, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Description</label>
                  <textarea
                    rows={3}
                    value={editingEntity.description || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Project →
                </button>
              </form>
            )}

            {/* FORM 05: INSIGHT ARTICLE */}
            {editingEntityType === "insight" && (
              <form onSubmit={handleSaveInsight} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Article Title *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.title || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Excerpt</label>
                  <textarea
                    rows={3}
                    value={editingEntity.excerpt || editingEntity.content || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, excerpt: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Article →
                </button>
              </form>
            )}

            {/* FORM 06: GOVERNMENT SCHEME */}
            {editingEntityType === "scheme" && (
              <form onSubmit={handleSaveScheme} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Scheme Name *</label>
                  <input
                    required
                    type="text"
                    value={editingEntity.name || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-harvest-400 uppercase">Eligibility / Benefits</label>
                  <textarea
                    rows={3}
                    value={editingEntity.eligibility || ""}
                    onChange={(e) => setEditingEntity({ ...editingEntity, eligibility: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-theme-base border border-forest-700 text-sand-50 text-xs"
                  />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-harvest-500 text-forest-950 font-extrabold text-xs uppercase">
                  Save Scheme →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
