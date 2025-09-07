"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  AlertTriangle,
  Bell,
  DollarSign,
  FileText,
  Users,
  CheckCircle,
  XCircle,
  Calendar,
  Upload,
  Download,
  Phone,
  Mail,
  MessageSquare,
  AlertCircle,
  Eye,
  Clock,
  MapPin,
  Activity,
} from "lucide-react"

export default function InsuranceBrokerDashboard() {
  const [selectedClient, setSelectedClient] = useState("all")

  // Updated endorsement data structure
  const endorsementSummary = [
    {
      title: "Endorsement Not Received This Month",
      count: 8, // number of clients
      avgTAT: 0,
      lives: 0,
      premium: 0,
      memberAddition: 0,
      memberDeletion: 0,
      memberUpdation: 0,
      priority: "High",
      clients: [
        { name: "TechCorp Ltd", memberCount: 0 },
        { name: "FinanceInc", memberCount: 0 },
        { name: "RetailChain", memberCount: 0 },
        { name: "StartupXYZ", memberCount: 0 },
        { name: "HealthcarePlus", memberCount: 0 },
        { name: "ManufacturingCo", memberCount: 0 },
        { name: "ConsultingFirm", memberCount: 0 },
        { name: "TradingCorp", memberCount: 0 },
      ],
    },
    {
      title: "Endorsement Pending with Broker",
      count: 4, // number of clients
      avgTAT: 6,
      lives: 234,
      premium: 2340000,
      memberAddition: 28,
      memberDeletion: 12,
      memberUpdation: 5,
      priority: "High",
      clients: [
        { name: "TechCorp Ltd", memberCount: 45 },
        { name: "FinanceInc", memberCount: 67 },
        { name: "RetailChain", memberCount: 89 },
        { name: "StartupXYZ", memberCount: 33 },
      ],
    },
    {
      title: "Endorsement Pending with Insurance Company",
      count: 4, // number of clients
      avgTAT: 12,
      lives: 445,
      premium: 4450000,
      memberAddition: 42,
      memberDeletion: 18,
      memberUpdation: 7,
      priority: "High",
      clients: [
        { name: "FinanceInc", memberCount: 112 },
        { name: "RetailChain", memberCount: 156 },
        { name: "TechCorp Ltd", memberCount: 98 },
        { name: "HealthcarePlus", memberCount: 79 },
      ],
    },
    {
      title: "Endorsement Pending with TPA",
      count: 3, // number of clients
      avgTAT: 8,
      lives: 156,
      premium: 1560000,
      memberAddition: 18,
      memberDeletion: 8,
      memberUpdation: 2,
      priority: "Medium",
      clients: [
        { name: "StartupXYZ", memberCount: 67 },
        { name: "ManufacturingCo", memberCount: 45 },
        { name: "ConsultingFirm", memberCount: 44 },
      ],
    },
    {
      title: "Endorsement E-card Not Generated",
      count: 3, // number of clients
      avgTAT: 4,
      lives: 189,
      premium: 1890000,
      memberAddition: 22,
      memberDeletion: 10,
      memberUpdation: 2,
      priority: "Medium",
      clients: [
        { name: "TechCorp Ltd", memberCount: 78 },
        { name: "FinanceInc", memberCount: 56 },
        { name: "HealthcarePlus", memberCount: 55 },
      ],
    },
  ]

  // Member details for each client - Updated with correct relations and date format
  const clientMemberDetails = {
    "TechCorp Ltd": [
      {
        id: "MEM001",
        memberName: "John Smith Jr.",
        relationWithEmployee: "Son",
        cover: "Employee + Family",
        endorsementReceivedDate: "12-01-24",
        sumInsured: 500000,
        coverType: "Family Cover",
        premium: 45000,
        documentType: "Birth Certificate",
        endorsementType: "Addition",
      },
      {
        id: "MEM002",
        memberName: "Sarah Smith",
        relationWithEmployee: "Spouse",
        cover: "Employee + Family",
        endorsementReceivedDate: "12-01-24",
        sumInsured: 500000,
        coverType: "Family Cover",
        premium: 35000,
        documentType: "Marriage Certificate",
        endorsementType: "Addition",
      },
    ],
    FinanceInc: [
      {
        id: "MEM003",
        memberName: "Alice Johnson",
        relationWithEmployee: "Self",
        cover: "Individual",
        endorsementReceivedDate: "10-01-24",
        sumInsured: 300000,
        coverType: "Individual Cover",
        premium: 25000,
        documentType: "Employment Letter",
        endorsementType: "Update",
      },
    ],
    RetailChain: [
      {
        id: "MEM004",
        memberName: "Bob Wilson Jr.",
        relationWithEmployee: "Son",
        cover: "Employee + Family",
        endorsementReceivedDate: "08-01-24",
        sumInsured: 400000,
        coverType: "Family Cover",
        premium: 38000,
        documentType: "Birth Certificate",
        endorsementType: "Addition",
      },
    ],
    StartupXYZ: [
      {
        id: "MEM005",
        memberName: "Carol Davis",
        relationWithEmployee: "Self",
        cover: "Individual",
        endorsementReceivedDate: "15-01-24",
        sumInsured: 250000,
        coverType: "Individual Cover",
        premium: 22000,
        documentType: "Identity Proof",
        endorsementType: "Update",
      },
    ],
    HealthcarePlus: [
      {
        id: "MEM006",
        memberName: "David Brown Jr.",
        relationWithEmployee: "Son",
        cover: "Employee + Family",
        endorsementReceivedDate: "11-01-24",
        sumInsured: 600000,
        coverType: "Family Cover",
        premium: 55000,
        documentType: "Birth Certificate",
        endorsementType: "Addition",
      },
    ],
  }

  const [selectedEndorsementCategory, setSelectedEndorsementCategory] = useState("")
  const [showEndorsementDetails, setShowEndorsementDetails] = useState(false)
  const [selectedClientForMembers, setSelectedClientForMembers] = useState("")
  const [showMemberDetails, setShowMemberDetails] = useState(false)

  // Add these state variables after the existing ones
  const [showDetailView, setShowDetailView] = useState("")
  const [selectedDetailData, setSelectedDetailData] = useState(null)
  const [showClaimTracking, setShowClaimTracking] = useState(false)
  const [selectedTrackingClaimId, setSelectedTrackingClaimId] = useState("")

  const handleEndorsementCategoryClick = (category: string) => {
    setSelectedEndorsementCategory(category)
    setShowEndorsementDetails(true)
    setShowMemberDetails(false)
  }

  const handleClientClick = (clientName: string) => {
    setSelectedClientForMembers(clientName)
    setShowMemberDetails(true)
  }

  // Add these handler functions after the existing handlers
  const handleSummaryCardClick = (cardType: string, data?: any) => {
    setShowDetailView(cardType)
    setSelectedDetailData(data)
  }

  const closeDetailView = () => {
    setShowDetailView("")
    setSelectedDetailData(null)
  }

  const handleClaimTracking = (claimId: string) => {
    setSelectedTrackingClaimId(claimId)
    setShowClaimTracking(true)
  }

  const closeClaimTracking = () => {
    setShowClaimTracking(false)
    setSelectedTrackingClaimId("")
  }

  // Enhanced CD Balance Data with corrected logic
  const cdBalanceData = [
    {
      client: "TechCorp Ltd",
      currentBalance: 150000,
      requiredForPending: 25000,
      availableBalance: 125000,
      status: "Sufficient",
      endorsementLives: 45,
      livesCanProcessWithCD: 45, // All can be processed as CD is sufficient
      livesPending: 0, // None pending due to CD
    },
    {
      client: "FinanceInc",
      currentBalance: 80000,
      requiredForPending: 95000,
      availableBalance: -15000,
      status: "Deficit",
      endorsementLives: 67,
      livesCanProcessWithCD: 56, // Based on available CD balance
      livesPending: 11, // Remaining lives pending due to insufficient CD
    },
    {
      client: "RetailChain",
      currentBalance: 200000,
      requiredForPending: 45000,
      availableBalance: 155000,
      status: "Sufficient",
      endorsementLives: 89,
      livesCanProcessWithCD: 89, // All can be processed
      livesPending: 0, // None pending due to CD
    },
    {
      client: "StartupXYZ",
      currentBalance: 60000,
      requiredForPending: 75000,
      availableBalance: -15000,
      status: "Deficit",
      endorsementLives: 33,
      livesCanProcessWithCD: 26, // Based on available CD balance
      livesPending: 7, // Remaining lives pending due to insufficient CD
    },
  ]

  // Enhanced Auto Escalation Data
  const autoEscalations = [
    {
      type: "Endorsement",
      client: "FinanceInc",
      issue: "Endorsement pending with Insurance Company",
      pendingWith: "HDFC ERGO",
      days: 15,
      priority: "High",
      action: "Escalate to Insurance Partner",
    },
    {
      type: "Claim",
      client: "RetailChain",
      issue: "Claim pending with TPA",
      pendingWith: "Medi Assist",
      days: 12,
      priority: "High",
      action: "Follow up with TPA",
    },
    {
      type: "CD Balance",
      client: "StartupXYZ",
      issue: "Endorsement pending due to insufficient balance",
      pendingWith: "Client Finance Team",
      requiredAmount: 15000,
      priority: "Medium",
      action: "Request additional deposit",
    },
    {
      type: "Endorsement",
      client: "TechCorp Ltd",
      issue: "Endorsement pending with Broker",
      pendingWith: "Internal Processing",
      days: 8,
      priority: "Medium",
      action: "Internal follow-up required",
    },
  ]

  // Enhanced Claims Data with tracking and additional details
  const claimsSummary = [
    {
      status: "Under Process",
      count: 89,
      avgTAT: 8,
      overdueTAT: 23,
      totalAmount: 4250000,
      clients: ["TechCorp Ltd", "FinanceInc", "RetailChain", "HealthcarePlus"],
      priority: "High",
      lastUpdated: "20-01-24",
      types: { cashless: 67, reimbursement: 22 },
    },
    {
      status: "Query Raised / Documentation Pending",
      count: 79,
      avgTAT: 13,
      overdueTAT: 30,
      totalAmount: 3140000,
      clients: ["RetailChain", "StartupXYZ", "ManufacturingCo", "TechCorp Ltd", "FinanceInc"],
      priority: "High",
      lastUpdated: "19-01-24",
      types: { cashless: 47, reimbursement: 32 },
    },
    {
      status: "Pre-Authorization Required (Cashless)",
      count: 28,
      avgTAT: 18,
      overdueTAT: 8,
      totalAmount: 2100000,
      clients: ["HealthcarePlus", "TechCorp Ltd", "RetailChain"],
      priority: "Medium",
      lastUpdated: "20-01-24",
      types: { cashless: 28, reimbursement: 0 },
      tatUnit: "hours",
    },
    {
      status: "Approved - Payment Processing",
      count: 56,
      avgTAT: 3,
      overdueTAT: 2,
      totalAmount: 3450000,
      clients: ["FinanceInc", "TechCorp Ltd", "HealthcarePlus", "ManufacturingCo"],
      priority: "Low",
      lastUpdated: "20-01-24",
      types: { cashless: 34, reimbursement: 22 },
    },
    {
      status: "Rejected",
      count: 12,
      avgTAT: 10,
      overdueTAT: 0,
      totalAmount: 450000,
      clients: ["StartupXYZ", "RetailChain"],
      priority: "Low",
      lastUpdated: "19-01-24",
      types: { cashless: 7, reimbursement: 5 },
    },
  ]

  // Enhanced Claims Details with tracking and additional information
  const detailedClaimsData = {
    "Under Process": [
      {
        id: "CLM001",
        client: "TechCorp Ltd",
        employee: "Alice Brown",
        type: "Cashless",
        amount: 45000,
        claimedAmount: 45000,
        submittedDate: "12-01-24",
        claimDate: "10-01-24",
        tat: 8,
        pendencyReason: "Medical records under review",
        hospital: "Apollo Hospital",
        diagnosis: "Cardiac Surgery",
        sumInsured: 500000,
        balanceCovered: 455000,
        tpaInsurer: "HDFC ERGO / Medi Assist",
        trackingStatus: "Under Medical Review",
        claimDetails: {
          admissionDate: "10-01-24",
          dischargeDate: "15-01-24",
          roomType: "Private",
          treatmentType: "Surgery",
          doctorName: "Dr. Sharma",
        },
      },
      {
        id: "CLM002",
        client: "FinanceInc",
        employee: "Bob Davis",
        type: "Reimbursement",
        amount: 12500,
        claimedAmount: 12500,
        submittedDate: "10-01-24",
        claimDate: "08-01-24",
        tat: 10,
        pendencyReason: "Insurance company processing",
        hospital: "Max Healthcare",
        diagnosis: "Orthopedic Treatment",
        sumInsured: 300000,
        balanceCovered: 287500,
        tpaInsurer: "Star Health / Vidal Health",
        trackingStatus: "Insurance Company Review",
        claimDetails: {
          admissionDate: "08-01-24",
          dischargeDate: "10-01-24",
          roomType: "General",
          treatmentType: "Consultation",
          doctorName: "Dr. Patel",
        },
      },
      {
        id: "CLM003",
        client: "RetailChain",
        employee: "Carol White",
        type: "Cashless",
        amount: 78000,
        claimedAmount: 78000,
        submittedDate: "14-01-24",
        claimDate: "12-01-24",
        tat: 6,
        pendencyReason: "Additional medical reports required",
        hospital: "Fortis Hospital",
        diagnosis: "Neurological Treatment",
        sumInsured: 400000,
        balanceCovered: 322000,
        tpaInsurer: "ICICI Lombard / Medi Assist",
        trackingStatus: "Query Raised - Medical Reports",
        claimDetails: {
          admissionDate: "12-01-24",
          dischargeDate: "16-01-24",
          roomType: "ICU",
          treatmentType: "Emergency",
          doctorName: "Dr. Kumar",
        },
      },
      {
        id: "CLM004",
        client: "HealthcarePlus",
        employee: "David Wilson",
        type: "Cashless",
        amount: 125000,
        claimedAmount: 125000,
        submittedDate: "20-01-24",
        claimDate: "20-01-24",
        tat: 24,
        pendencyReason: "Pre-auth approval pending",
        hospital: "Medanta Hospital",
        diagnosis: "Heart Surgery",
        sumInsured: 600000,
        balanceCovered: 475000,
        tpaInsurer: "Bajaj Allianz / Paramount Health",
        trackingStatus: "Pre-Auth Under Review",
        claimDetails: {
          plannedAdmissionDate: "22-01-24",
          estimatedDays: 7,
          roomType: "Private",
          treatmentType: "Surgery",
          doctorName: "Dr. Gupta",
        },
      },
      {
        id: "CLM005",
        client: "StartupXYZ",
        employee: "Emma Johnson",
        type: "Reimbursement",
        amount: 8500,
        claimedAmount: 8500,
        submittedDate: "18-01-24",
        claimDate: "16-01-24",
        tat: 4,
        pendencyReason: "Document verification in progress",
        hospital: "City Hospital",
        diagnosis: "Dental Treatment",
        sumInsured: 250000,
        balanceCovered: 241500,
        tpaInsurer: "New India Assurance / Care Health",
        trackingStatus: "Document Verification",
        claimDetails: {
          admissionDate: "16-01-24",
          dischargeDate: "16-01-24",
          roomType: "OPD",
          treatmentType: "Dental",
          doctorName: "Dr. Singh",
        },
      },
    ],
    "Query Raised / Documentation Pending": [
      {
        id: "CLM006",
        client: "ManufacturingCo",
        employee: "Mike Brown",
        type: "Cashless",
        amount: 95000,
        claimedAmount: 95000,
        submittedDate: "15-01-24",
        claimDate: "13-01-24",
        tat: 7,
        pendencyReason: "Lab reports missing",
        hospital: "Global Hospital",
        diagnosis: "Gastroenterology",
        sumInsured: 400000,
        balanceCovered: 305000,
        tpaInsurer: "Oriental Insurance / Medi Assist",
        trackingStatus: "Query - Lab Reports",
        claimDetails: {
          admissionDate: "13-01-24",
          dischargeDate: "15-01-24",
          roomType: "Private",
          treatmentType: "Treatment",
          doctorName: "Dr. Mehta",
        },
      },
    ],
    "Pre-Authorization Required (Cashless)": [
      {
        id: "CLM007",
        client: "ConsultingFirm",
        employee: "Lisa Anderson",
        type: "Cashless",
        amount: 180000,
        claimedAmount: 180000,
        submittedDate: "21-01-24",
        claimDate: "21-01-24",
        tat: 12,
        pendencyReason: "Pre-auth approval pending",
        hospital: "Super Specialty Hospital",
        diagnosis: "Oncology Treatment",
        sumInsured: 800000,
        balanceCovered: 620000,
        tpaInsurer: "United India Insurance / Paramount Health",
        trackingStatus: "Pre-Auth Review",
        claimDetails: {
          plannedAdmissionDate: "25-01-24",
          estimatedDays: 10,
          roomType: "Private",
          treatmentType: "Chemotherapy",
          doctorName: "Dr. Reddy",
        },
      },
    ],
  }

  // Claim Tracking Data with milestones
  const claimTrackingData = {
    CLM001: {
      claimId: "CLM001",
      currentStatus: "Under Medical Review",
      progress: 60,
      milestones: [
        {
          id: 1,
          title: "Claim Submitted",
          description: "Claim submitted by employee through portal",
          status: "completed",
          timestamp: "12-01-24 09:30 AM",
          completedBy: "Alice Brown (Employee)",
          location: "Employee Portal",
          documents: ["Claim Form", "Medical Bills"],
        },
        {
          id: 2,
          title: "Initial Review",
          description: "Claim received and initial validation completed",
          status: "completed",
          timestamp: "12-01-24 02:15 PM",
          completedBy: "System Auto-Validation",
          location: "TPA System",
          documents: ["Validation Report"],
        },
        {
          id: 3,
          title: "Document Verification",
          description: "All submitted documents verified and accepted",
          status: "completed",
          timestamp: "13-01-24 11:45 AM",
          completedBy: "Priya Sharma (TPA Officer)",
          location: "Medi Assist Office",
          documents: ["Verification Report"],
        },
        {
          id: 4,
          title: "Medical Review",
          description: "Medical team reviewing treatment details and bills",
          status: "in-progress",
          timestamp: "14-01-24 10:00 AM",
          completedBy: "Dr. Rajesh Kumar (Medical Officer)",
          location: "Medical Review Department",
          documents: ["Medical Assessment"],
          estimatedCompletion: "22-01-24",
        },
        {
          id: 5,
          title: "Final Approval",
          description: "Final approval and payment processing",
          status: "pending",
          timestamp: "",
          completedBy: "",
          location: "Approval Department",
          documents: [],
          estimatedCompletion: "24-01-24",
        },
        {
          id: 6,
          title: "Payment Processing",
          description: "Payment initiated to hospital/employee",
          status: "pending",
          timestamp: "",
          completedBy: "",
          location: "Finance Department",
          documents: [],
          estimatedCompletion: "26-01-24",
        },
      ],
    },
    CLM002: {
      claimId: "CLM002",
      currentStatus: "Insurance Company Review",
      progress: 40,
      milestones: [
        {
          id: 1,
          title: "Claim Submitted",
          description: "Reimbursement claim submitted with all documents",
          status: "completed",
          timestamp: "10-01-24 03:20 PM",
          completedBy: "Bob Davis (Employee)",
          location: "Employee Portal",
          documents: ["Claim Form", "Medical Bills", "Discharge Summary"],
        },
        {
          id: 2,
          title: "TPA Review",
          description: "TPA completed initial review and forwarded to insurer",
          status: "completed",
          timestamp: "11-01-24 04:30 PM",
          completedBy: "Vidal Health TPA",
          location: "TPA Office",
          documents: ["TPA Review Report"],
        },
        {
          id: 3,
          title: "Insurance Company Review",
          description: "Insurance company reviewing claim for final approval",
          status: "in-progress",
          timestamp: "12-01-24 09:00 AM",
          completedBy: "Star Health Insurance",
          location: "Insurance Office",
          documents: ["Review in Progress"],
          estimatedCompletion: "25-01-24",
        },
        {
          id: 4,
          title: "Payment Processing",
          description: "Payment processing and disbursement",
          status: "pending",
          timestamp: "",
          completedBy: "",
          location: "Finance Department",
          documents: [],
          estimatedCompletion: "28-01-24",
        },
      ],
    },
  }

  // Enhanced Document Requirements with claim and endorsement categorization
  const documentRequirements = [
    {
      client: "TechCorp Ltd",
      endorsementDocuments: [
        { type: "Birth Certificate", memberName: "John Smith Jr.", endorsementId: "END001", required: true },
        { type: "Marriage Certificate", memberName: "Sarah Smith", endorsementId: "END002", required: true },
      ],
      claimDocuments: [
        { type: "Medical Records", memberName: "Alice Brown", claimId: "CLM001", required: false },
        { type: "Discharge Summary", memberName: "Alice Brown", claimId: "CLM001", required: true },
      ],
    },
    {
      client: "FinanceInc",
      endorsementDocuments: [
        { type: "Employment Letter", memberName: "Bob Davis", endorsementId: "END003", required: true },
        { type: "Death Certificate", memberName: "Carol Johnson", endorsementId: "END004", required: true },
      ],
      claimDocuments: [
        { type: "Medical Bills", memberName: "Bob Davis", claimId: "CLM002", required: true },
        { type: "Prescription", memberName: "Bob Davis", claimId: "CLM002", required: false },
      ],
    },
    {
      client: "RetailChain",
      endorsementDocuments: [
        { type: "Birth Certificate", memberName: "Mike Wilson", endorsementId: "END005", required: true },
      ],
      claimDocuments: [
        { type: "Medical Records", memberName: "Carol White", claimId: "CLM003", required: false },
        { type: "Investigation Reports", memberName: "Carol White", claimId: "CLM003", required: true },
      ],
    },
    {
      client: "StartupXYZ",
      endorsementDocuments: [
        { type: "Identity Proof", memberName: "Emma Davis", endorsementId: "END006", required: true },
      ],
      claimDocuments: [],
    },
  ]

  const [selectedClaimStatus, setSelectedClaimStatus] = useState("")
  const [showClaimDetails, setShowClaimDetails] = useState(false)
  const [selectedClaimId, setSelectedClaimId] = useState("")
  const [showIndividualClaimDetails, setShowIndividualClaimDetails] = useState(false)

  const handleClaimStatusClick = (status: string) => {
    setSelectedClaimStatus(status)
    setShowClaimDetails(true)
    setShowIndividualClaimDetails(false)
  }

  const handleClaimClick = (claimId: string) => {
    setSelectedClaimId(claimId)
    setShowIndividualClaimDetails(true)
  }

  // Enhanced Red Flags with action options
  const redFlags = [
    {
      id: "RF001",
      type: "CD Balance",
      client: "FinanceInc",
      issue: "Insufficient CD balance for pending endorsements",
      priority: "High",
      action: "Collect additional deposit",
      actionOptions: [
        { type: "call", label: "Call Client", description: "Contact client finance team directly" },
        { type: "email", label: "Send Email", description: "Send formal request for additional deposit" },
        { type: "escalate", label: "Escalate", description: "Escalate to senior management" },
        { type: "schedule", label: "Schedule Meeting", description: "Schedule meeting with client" },
      ],
    },
    {
      id: "RF002",
      type: "Claim",
      client: "RetailChain",
      issue: "Claim pending for 15+ days without response",
      priority: "Medium",
      action: "Follow up with employee",
      actionOptions: [
        { type: "call", label: "Call Employee", description: "Contact employee directly" },
        { type: "email", label: "Send Reminder", description: "Send document reminder email" },
        { type: "sms", label: "Send SMS", description: "Send SMS reminder" },
        { type: "escalate", label: "Escalate to HR", description: "Escalate to client HR team" },
      ],
    },
    {
      id: "RF003",
      type: "Endorsement",
      client: "TechCorp Ltd",
      issue: "Multiple endorsements pending RM approval",
      priority: "High",
      action: "Escalate to senior management",
      actionOptions: [
        { type: "escalate", label: "Escalate to RM", description: "Escalate to Relationship Manager" },
        { type: "call", label: "Call RM", description: "Direct call to RM" },
        { type: "meeting", label: "Schedule Review", description: "Schedule review meeting" },
        { type: "email", label: "Send Summary", description: "Send detailed summary email" },
      ],
    },
    {
      id: "RF004",
      type: "Document",
      client: "ManufacturingCo",
      issue: "Critical documents pending for multiple claims",
      priority: "High",
      action: "Immediate document collection",
      actionOptions: [
        { type: "call", label: "Call Employee", description: "Contact employee for documents" },
        { type: "email", label: "Send Notice", description: "Send formal document request" },
        { type: "escalate", label: "Escalate to HR", description: "Escalate to HR department" },
        { type: "meeting", label: "Schedule Meeting", description: "Schedule document collection meeting" },
      ],
    },
  ]

  const enrollmentClosures = [
    {
      client: "TechCorp Ltd",
      period: "Q4 2023",
      livesCovered: 245,
      premium: 2450000,
      cdBalance: 150000,
      pendingPayment: 0,
      status: "Completed",
      closureDate: "31-12-23",
      policyNumber: "POL/TC/2023/001",
    },
    {
      client: "StartupXYZ",
      period: "Q4 2023",
      livesCovered: 89,
      premium: 890000,
      cdBalance: 45000,
      pendingPayment: 125000,
      status: "Payment Pending",
      closureDate: "31-12-23",
      policyNumber: "POL/SXY/2023/001",
    },
    {
      client: "FinanceInc",
      period: "Q4 2023",
      livesCovered: 156,
      premium: 1560000,
      cdBalance: 80000,
      pendingPayment: 0,
      status: "Completed",
      closureDate: "31-12-23",
      policyNumber: "POL/FI/2023/001",
    },
  ]

  // State for action dialogs
  const [selectedRedFlag, setSelectedRedFlag] = useState(null)
  const [showActionDialog, setShowActionDialog] = useState(false)
  const [actionNotes, setActionNotes] = useState("")

  // Helper function to safely calculate and format numbers
  const safeCalculate = (numerator: number, denominator: number, defaultValue = 0): number => {
    if (!denominator || denominator === 0 || !numerator) return defaultValue
    const result = numerator / denominator
    return isNaN(result) ? defaultValue : result
  }

  // Helper function to safely format currency
  const formatCurrency = (amount: number): string => {
    if (!amount || isNaN(amount)) return "₹0L"
    return `₹${(amount / 100000).toFixed(1)}L`
  }

  // Helper function to safely calculate member counts
  const calculateMemberCount = (categoryTotal: number, clientMemberCount: number, categoryLives: number): number => {
    if (!categoryLives || categoryLives === 0) return 0
    const result = Math.floor((categoryTotal * clientMemberCount) / categoryLives)
    return isNaN(result) ? 0 : result
  }

  // Function to handle red flag actions
  const handleRedFlagAction = (redFlag, actionType) => {
    setSelectedRedFlag(redFlag)
    setShowActionDialog(true)
    // Here you would implement the actual action logic
    console.log(`Taking action: ${actionType} for ${redFlag.client}`)
  }

  // Function to download enrollment data as Excel
  const downloadEnrollmentData = () => {
    // Create CSV content
    const headers = [
      "Client",
      "Period",
      "Lives Covered",
      "Premium",
      "CD Balance",
      "Pending Payment",
      "Status",
      "Closure Date",
      "Policy Number",
    ]
    const csvContent = [
      headers.join(","),
      ...enrollmentClosures.map((closure) =>
        [
          closure.client,
          closure.period,
          closure.livesCovered,
          closure.premium,
          closure.cdBalance,
          closure.pendingPayment,
          closure.status,
          closure.closureDate,
          closure.policyNumber,
        ].join(","),
      ),
    ].join("\n")

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `enrollment_closure_report_${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending RM Approval":
      case "Branch Head Review":
        return <Badge className="bg-red-100 text-red-800 border-red-300 hover:bg-red-200">Pending Review</Badge>
      case "Pending Insurance Co":
      case "Under Process":
        return <Badge className="bg-black text-white border-black hover:bg-gray-800">In Process</Badge>
      case "Approved":
      case "Completed":
        return <Badge className="bg-red-600 text-white border-red-600 hover:bg-red-700">Approved</Badge>
      case "Query Raised":
        return <Badge className="bg-red-200 text-red-900 border-red-400 hover:bg-red-300">Query Raised</Badge>
      case "Payment Pending":
        return <Badge className="bg-red-500 text-white hover:bg-red-600">Payment Pending</Badge>
      default:
        return <Badge className="bg-gray-100 text-black border-gray-300">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge className="bg-red-600 text-white hover:bg-red-700">High</Badge>
      case "Medium":
        return <Badge className="bg-red-200 text-red-900 border-red-300 hover:bg-red-300">Medium</Badge>
      case "Low":
        return <Badge className="bg-black text-white hover:bg-gray-800">Low</Badge>
      default:
        return <Badge className="bg-gray-100 text-black border-gray-300">{priority}</Badge>
    }
  }

  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Activity className="h-5 w-5 text-blue-600" />
      case "pending":
        return <Clock className="h-5 w-5 text-gray-400" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with red and black gradient */}
      <div className="bg-gradient-to-r from-red-600 to-black text-white p-6 shadow-lg">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Insurance Broker Dashboard</h1>
              <p className="text-red-100">Employee Benefits Portal Management</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger className="w-48 bg-white text-black border-white">
                  <SelectValue placeholder="Select Client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                  <SelectItem value="techcorp">TechCorp Ltd</SelectItem>
                  <SelectItem value="financeinc">FinanceInc</SelectItem>
                  <SelectItem value="retailchain">RetailChain</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-white text-red-600 hover:bg-red-50 border-white">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mx-auto max-w-7xl space-y-6">
          {/* Summary Cards with red and black theme - Updated to be clickable */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="border-red-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleSummaryCardClick("endorsements")}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-red-50">
                <CardTitle className="text-sm font-medium text-black">Pending Endorsements</CardTitle>
                <Users className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-red-600">193</div>
                <p className="text-xs text-black">+12 from last week</p>
              </CardContent>
            </Card>
            <Card
              className="border-black shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleSummaryCardClick("claims")}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50">
                <CardTitle className="text-sm font-medium text-black">Active Claims</CardTitle>
                <FileText className="h-4 w-4 text-black" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-black">264</div>
                <p className="text-xs text-red-600">55 require attention</p>
              </CardContent>
            </Card>
            <Card
              className="border-red-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleSummaryCardClick("cd-balance")}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-red-50">
                <CardTitle className="text-sm font-medium text-black">CD Balance Alert</CardTitle>
                <DollarSign className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-red-600">2</div>
                <p className="text-xs text-red-700">Clients with deficit</p>
              </CardContent>
            </Card>
            <Card
              className="border-black shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleSummaryCardClick("red-flags")}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-50">
                <CardTitle className="text-sm font-medium text-black">Red Flags</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-black">4</div>
                <p className="text-xs text-red-600">Require immediate action</p>
              </CardContent>
            </Card>
          </div>

          {/* Claim Tracking Page - Amazon Style */}
          {showClaimTracking && selectedTrackingClaimId && (
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-black">Claim Tracking - {selectedTrackingClaimId}</CardTitle>
                    <CardDescription className="text-gray-700">
                      Track your claim status and estimated completion time
                    </CardDescription>
                  </div>
                  <Button
                    className="border-black text-black hover:bg-gray-50 bg-transparent"
                    variant="outline"
                    onClick={closeClaimTracking}
                  >
                    Close Tracking
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {(() => {
                  const trackingData = claimTrackingData[selectedTrackingClaimId]
                  if (!trackingData) return <div>Tracking data not found</div>

                  const currentMilestone = trackingData.milestones.find((m) => m.status === "in-progress")
                  const completedMilestones = trackingData.milestones.filter((m) => m.status === "completed")
                  const nextMilestone = trackingData.milestones.find((m) => m.status === "pending")

                  return (
                    <div className="max-w-4xl mx-auto space-y-8">
                      {/* Header Status - Amazon Style */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-2xl font-bold text-green-700 mb-2">
                              {currentMilestone ? currentMilestone.title : "Processing Complete"}
                            </h2>
                            <p className="text-green-600 text-lg">
                              {currentMilestone
                                ? currentMilestone.description
                                : "Your claim has been processed successfully"}
                            </p>
                            {currentMilestone?.estimatedCompletion && (
                              <p className="text-sm text-gray-600 mt-2">
                                Expected completion:{" "}
                                <span className="font-semibold">{currentMilestone.estimatedCompletion}</span>
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-green-700">{trackingData.progress}%</div>
                            <div className="text-sm text-gray-600">Complete</div>
                          </div>
                        </div>
                      </div>

                      {/* Progress Tracker - Amazon Style */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-black mb-6">Claim Progress</h3>

                        {/* Progress Steps */}
                        <div className="relative">
                          {/* Progress Line */}
                          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200"></div>
                          <div
                            className="absolute left-4 top-8 w-0.5 bg-green-500 transition-all duration-500"
                            style={{
                              height: `${(completedMilestones.length / trackingData.milestones.length) * 100}%`,
                            }}
                          ></div>

                          {/* Milestone Steps */}
                          <div className="space-y-6">
                            {trackingData.milestones.map((milestone, index) => (
                              <div key={milestone.id} className="relative flex items-start">
                                {/* Status Icon */}
                                <div
                                  className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                                    milestone.status === "completed"
                                      ? "bg-green-500 border-green-500"
                                      : milestone.status === "in-progress"
                                        ? "bg-blue-500 border-blue-500 animate-pulse"
                                        : "bg-white border-gray-300"
                                  }}`}
                                >
                                  {milestone.status === "completed" && <CheckCircle className="h-5 w-5 text-white" />}
                                  {milestone.status === "in-progress" && <Activity className="h-4 w-4 text-white" />}
                                  {milestone.status === "pending" && (
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                  )}
                                </div>

                                {/* Content */}
                                <div className="ml-6 flex-1 pb-6">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4
                                      className={`text-lg font-semibold ${
                                        milestone.status === "completed"
                                          ? "text-green-700"
                                          : milestone.status === "in-progress"
                                            ? "text-blue-700"
                                            : "text-gray-500"
                                      }`}
                                    >
                                      {milestone.title}
                                    </h4>
                                    {milestone.timestamp && (
                                      <span className="text-sm text-gray-500">{milestone.timestamp}</span>
                                    )}
                                  </div>

                                  <p
                                    className={`text-sm mb-3 ${
                                      milestone.status === "pending" ? "text-gray-400" : "text-gray-700"
                                    }`}
                                  >
                                    {milestone.description}
                                  </p>

                                  {/* Details */}
                                  {(milestone.status === "completed" || milestone.status === "in-progress") && (
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        {milestone.completedBy && (
                                          <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-gray-500" />
                                            <span className="text-gray-700">{milestone.completedBy}</span>
                                          </div>
                                        )}
                                        {milestone.location && (
                                          <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-gray-500" />
                                            <span className="text-gray-700">{milestone.location}</span>
                                          </div>
                                        )}
                                      </div>

                                      {milestone.documents.length > 0 && (
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                          <div className="flex items-center gap-2 mb-2">
                                            <FileText className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm font-medium text-gray-700">
                                              Documents processed:
                                            </span>
                                          </div>
                                          <div className="flex flex-wrap gap-2">
                                            {milestone.documents.map((doc, docIndex) => (
                                              <Badge key={docIndex} className="bg-blue-100 text-blue-800 text-xs">
                                                {doc}
                                              </Badge>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Estimated Completion for Pending */}
                                  {milestone.status === "pending" && milestone.estimatedCompletion && (
                                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-blue-600" />
                                        <span className="text-sm text-blue-700">
                                          Expected by:{" "}
                                          <span className="font-semibold">{milestone.estimatedCompletion}</span>
                                        </span>
                                      </div>
                                    </div>
                                  )}

                                  {/* In Progress Indicator */}
                                  {milestone.status === "in-progress" && (
                                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mt-3">
                                      <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-blue-700 font-medium">
                                          Currently in progress...
                                        </span>
                                        {milestone.estimatedCompletion && (
                                          <span className="text-sm text-blue-600 ml-auto">
                                            Expected: {milestone.estimatedCompletion}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Summary Cards - Amazon Style */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Claim Details */}
                        <Card className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-black">Claim Details</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Claim ID:</span>
                              <span className="font-medium text-black">{trackingData.claimId}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Current Status:</span>
                              <Badge className="bg-blue-600 text-white text-xs">{trackingData.currentStatus}</Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress:</span>
                              <span className="font-medium text-green-600">{trackingData.progress}% Complete</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Timeline Summary */}
                        <Card className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-black">Timeline</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Completed:</span>
                              <span className="font-medium text-green-600">{completedMilestones.length} steps</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">In Progress:</span>
                              <span className="font-medium text-blue-600">
                                {trackingData.milestones.filter((m) => m.status === "in-progress").length} step
                              </span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Remaining:</span>
                              <span className="font-medium text-gray-600">
                                {trackingData.milestones.filter((m) => m.status === "pending").length} steps
                              </span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Next Steps */}
                        <Card className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-black">What's Next?</CardTitle>
                          </CardHeader>
                          <CardContent>
                            {nextMilestone ? (
                              <div className="space-y-2">
                                <p className="text-sm font-medium text-black">{nextMilestone.title}</p>
                                <p className="text-xs text-gray-600">{nextMilestone.description}</p>
                                {nextMilestone.estimatedCompletion && (
                                  <p className="text-xs text-blue-600">Expected: {nextMilestone.estimatedCompletion}</p>
                                )}
                              </div>
                            ) : (
                              <div className="text-center py-4">
                                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                <p className="text-sm font-medium text-green-700">All steps completed!</p>
                                <p className="text-xs text-gray-600">Your claim has been processed</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>

                      {/* Help Section - Amazon Style */}
                      <Card className="border border-gray-200 bg-gray-50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-black mb-2">Need help with your claim?</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                If you have questions about your claim status or need to provide additional information,
                                our support team is here to help.
                              </p>
                              <div className="flex gap-3">
                                <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                                  <Phone className="h-4 w-4 mr-2" />
                                  Call Support
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                                >
                                  <Mail className="h-4 w-4 mr-2" />
                                  Email Us
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })()}
              </CardContent>
            </Card>
          )}

          {/* Detailed Listing Views - Updated to Tabular Format */}
          {showDetailView && !showClaimTracking && (
            <Card className="border-red-200 shadow-lg">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-black">
                      {showDetailView === "endorsements" && "Pending Endorsements Details"}
                      {showDetailView === "claims" && "Active Claims Details"}
                      {showDetailView === "cd-balance" && "CD Balance Alert Details"}
                      {showDetailView === "red-flags" && "Red Flags Details"}
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      {showDetailView === "endorsements" && "All pending endorsements across clients"}
                      {showDetailView === "claims" && "All active claims requiring attention"}
                      {showDetailView === "cd-balance" && "Clients with CD balance issues"}
                      {showDetailView === "red-flags" && "Critical issues requiring immediate action"}
                    </CardDescription>
                  </div>
                  <Button
                    className="border-black text-black hover:bg-gray-50 bg-transparent"
                    variant="outline"
                    onClick={closeDetailView}
                  >
                    Close Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Endorsements Detail View - Tabular Format */}
                {showDetailView === "endorsements" && (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="text-white">Client</TableHead>
                          <TableHead className="text-white">Category</TableHead>
                          <TableHead className="text-white">Lives</TableHead>
                          <TableHead className="text-white">Premium</TableHead>
                          <TableHead className="text-white">TAT (Days)</TableHead>
                          <TableHead className="text-white">Priority</TableHead>
                          <TableHead className="text-white">Additions</TableHead>
                          <TableHead className="text-white">Deletions</TableHead>
                          <TableHead className="text-white">Updates</TableHead>
                          <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {endorsementSummary.map((category, categoryIndex) =>
                          category.clients.map((client, clientIndex) => (
                            <TableRow key={`${categoryIndex}-${clientIndex}`} className="hover:bg-red-50">
                              <TableCell className="font-medium text-black">{client.name}</TableCell>
                              <TableCell className="text-sm text-gray-700">{category.title}</TableCell>
                              <TableCell className="text-black">{client.memberCount}</TableCell>
                              <TableCell className="text-black">
                                {formatCurrency(
                                  safeCalculate(category.premium * client.memberCount, category.lives, 0),
                                )}
                              </TableCell>
                              <TableCell className="text-black">{category.avgTAT}</TableCell>
                              <TableCell>{getPriorityBadge(category.priority)}</TableCell>
                              <TableCell>
                                <span className="text-green-600 font-medium">
                                  {calculateMemberCount(category.memberAddition, client.memberCount, category.lives)}
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="text-red-600 font-medium">
                                  {calculateMemberCount(category.memberDeletion, client.memberCount, category.lives)}
                                </span>
                              </TableCell>
                              <TableCell>
                                <span className="text-blue-600 font-medium">
                                  {calculateMemberCount(category.memberUpdation, client.memberCount, category.lives)}
                                </span>
                              </TableCell>
                              <TableCell>
                                <Button
                                  size="sm"
                                  className="text-xs bg-red-600 text-white hover:bg-red-700"
                                  onClick={() => handleClientClick(client.name)}
                                >
                                  View Members
                                </Button>
                              </TableCell>
                            </TableRow>
                          )),
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {/* Claims Detail View - Enhanced Tabular Format */}
                {showDetailView === "claims" && (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="text-white">Claim ID</TableHead>
                          <TableHead className="text-white">Client</TableHead>
                          <TableHead className="text-white">Employee</TableHead>
                          <TableHead className="text-white">Type</TableHead>
                          <TableHead className="text-white">Amount</TableHead>
                          <TableHead className="text-white">Hospital</TableHead>
                          <TableHead className="text-white">Diagnosis</TableHead>
                          <TableHead className="text-white">TAT</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white">TPA/Insurer</TableHead>
                          <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.values(detailedClaimsData)
                          .flat()
                          .map((claim) => (
                            <TableRow key={claim.id} className="hover:bg-red-50">
                              <TableCell className="font-medium text-black">{claim.id}</TableCell>
                              <TableCell className="text-black">{claim.client}</TableCell>
                              <TableCell className="text-black">{claim.employee}</TableCell>
                              <TableCell>
                                <Badge
                                  className={
                                    claim.type === "Cashless" ? "bg-red-600 text-white" : "bg-black text-white"
                                  }
                                >
                                  {claim.type}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-medium text-black">
                                ₹{claim.claimedAmount.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-sm text-black">{claim.hospital}</TableCell>
                              <TableCell className="text-sm text-black">{claim.diagnosis}</TableCell>
                              <TableCell>
                                <span className={claim.tat > 10 ? "text-red-600 font-medium" : "text-black"}>
                                  {claim.tat} days
                                </span>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-blue-600 text-white text-xs">{claim.trackingStatus}</Badge>
                              </TableCell>
                              <TableCell className="text-xs text-black">{claim.tpaInsurer}</TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Button
                                    size="sm"
                                    className="text-xs bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => handleClaimClick(claim.id)}
                                  >
                                    <Eye className="h-3 w-3 mr-1" />
                                    Details
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="text-xs border-black text-black hover:bg-gray-50 bg-transparent"
                                    variant="outline"
                                    onClick={() => handleClaimTracking(claim.id)}
                                  >
                                    Track
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {/* CD Balance Detail View - Tabular Format */}
                {showDetailView === "cd-balance" && (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="text-white">Client</TableHead>
                          <TableHead className="text-white">Current Balance</TableHead>
                          <TableHead className="text-white">Required</TableHead>
                          <TableHead className="text-white">Available/Deficit</TableHead>
                          <TableHead className="text-white">Endorsement Lives</TableHead>
                          <TableHead className="text-white">Can Process</TableHead>
                          <TableHead className="text-white">Pending</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cdBalanceData.map((item) => (
                          <TableRow key={item.client} className="hover:bg-red-50">
                            <TableCell className="font-medium text-black">{item.client}</TableCell>
                            <TableCell className="text-black">₹{item.currentBalance.toLocaleString()}</TableCell>
                            <TableCell className="text-black">₹{item.requiredForPending.toLocaleString()}</TableCell>
                            <TableCell
                              className={item.availableBalance < 0 ? "text-red-600 font-medium" : "text-black"}
                            >
                              ₹{item.availableBalance.toLocaleString()}
                            </TableCell>
                            <TableCell className="text-black">{item.endorsementLives}</TableCell>
                            <TableCell>
                              <span className="text-green-600 font-medium">{item.livesCanProcessWithCD}</span>
                            </TableCell>
                            <TableCell>
                              <span className="text-red-600 font-medium">{item.livesPending}</span>
                            </TableCell>
                            <TableCell>
                              {item.status === "Sufficient" ? (
                                <Badge className="bg-black text-white">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Sufficient
                                </Badge>
                              ) : (
                                <Badge className="bg-red-600 text-white">
                                  <XCircle className="h-3 w-3 mr-1" />
                                  Deficit
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {item.status === "Deficit" && (
                                <Button size="sm" className="bg-red-600 text-white hover:bg-red-700">
                                  Request ₹{Math.abs(item.availableBalance).toLocaleString()}
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}

                {/* Red Flags Detail View - Tabular Format */}
                {showDetailView === "red-flags" && (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="text-white">Type</TableHead>
                          <TableHead className="text-white">Client</TableHead>
                          <TableHead className="text-white">Issue</TableHead>
                          <TableHead className="text-white">Priority</TableHead>
                          <TableHead className="text-white">Recommended Action</TableHead>
                          <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {redFlags.map((flag, index) => (
                          <TableRow key={index} className="hover:bg-red-50">
                            <TableCell>
                              <Badge className="bg-black text-white">{flag.type}</Badge>
                            </TableCell>
                            <TableCell className="font-medium text-black">{flag.client}</TableCell>
                            <TableCell className="text-sm text-gray-700 max-w-xs">{flag.issue}</TableCell>
                            <TableCell>{getPriorityBadge(flag.priority)}</TableCell>
                            <TableCell className="text-sm text-red-600 max-w-xs">{flag.action}</TableCell>
                            <TableCell>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button className="bg-red-600 text-white hover:bg-red-700" size="sm">
                                    Take Action
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <DialogHeader>
                                    <DialogTitle>Action Options - {flag.client}</DialogTitle>
                                    <DialogDescription>Choose an action to resolve: {flag.issue}</DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    {flag.actionOptions.map((option, optionIndex) => (
                                      <Button
                                        key={optionIndex}
                                        variant="outline"
                                        className="justify-start h-auto p-4 border-red-200 hover:bg-red-50 bg-transparent"
                                        onClick={() => handleRedFlagAction(flag, option.type)}
                                      >
                                        <div className="flex items-start gap-3">
                                          {option.type === "call" && <Phone className="h-4 w-4 text-red-600 mt-1" />}
                                          {option.type === "email" && <Mail className="h-4 w-4 text-red-600 mt-1" />}
                                          {option.type === "sms" && (
                                            <MessageSquare className="h-4 w-4 text-red-600 mt-1" />
                                          )}
                                          {option.type === "escalate" && (
                                            <AlertCircle className="h-4 w-4 text-red-600 mt-1" />
                                          )}
                                          {option.type === "meeting" && (
                                            <Calendar className="h-4 w-4 text-red-600 mt-1" />
                                          )}
                                          {option.type === "schedule" && (
                                            <Calendar className="h-4 w-4 text-red-600 mt-1" />
                                          )}
                                          <div className="text-left">
                                            <div className="font-medium text-black">{option.label}</div>
                                            <div className="text-sm text-gray-600">{option.description}</div>
                                          </div>
                                        </div>
                                      </Button>
                                    ))}
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="notes">Action Notes</Label>
                                    <Textarea
                                      id="notes"
                                      placeholder="Add any additional notes or comments..."
                                      value={actionNotes}
                                      onChange={(e) => setActionNotes(e.target.value)}
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Main Content Tabs with red and black styling */}
          <Tabs defaultValue="endorsements" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 bg-black">
              <TabsTrigger
                value="endorsements"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                Endorsements
              </TabsTrigger>
              <TabsTrigger
                value="escalations"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                Auto Escalations
              </TabsTrigger>
              <TabsTrigger
                value="cd-balance"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                CD Balance
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                Documents
              </TabsTrigger>
              <TabsTrigger
                value="claims"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                Claims Status
              </TabsTrigger>
              <TabsTrigger
                value="reports"
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-white hover:bg-red-700"
              >
                Reports
              </TabsTrigger>
            </TabsList>

            {/* Endorsements Tab */}
            <TabsContent value="endorsements">
              <div className="space-y-6">
                {/* Endorsement Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {endorsementSummary.map((summary, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-xl border-2 ${
                        summary.priority === "High"
                          ? "border-red-500 bg-red-50 hover:bg-red-100"
                          : "border-red-300 bg-red-25 hover:bg-red-50"
                      }`}
                      onClick={() => handleEndorsementCategoryClick(summary.title)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xs font-medium text-black leading-tight">
                            {summary.title}
                          </CardTitle>
                          {getPriorityBadge(summary.priority)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div
                          className={`text-2xl font-bold ${summary.priority === "High" ? "text-red-600" : "text-black"}`}
                        >
                          {summary.count}
                        </div>

                        {/* TAT, Lives, Premium */}
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">TAT:</span>
                            <span className="font-medium text-black">{summary.avgTAT} days</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Lives:</span>
                            <span className="font-medium text-black">{summary.lives}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Premium:</span>
                            <span className="font-medium text-black">{formatCurrency(summary.premium)}</span>
                          </div>
                        </div>

                        {/* Member Bifurcation */}
                        <div className="pt-2 border-t border-red-200">
                          <div className="text-xs font-medium text-black mb-1">Member Changes:</div>
                          <div className="grid grid-cols-3 gap-1 text-xs">
                            <div className="text-center">
                              <div className="font-medium text-green-600">{summary.memberAddition}</div>
                              <div className="text-gray-500">Add</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-red-600">{summary.memberDeletion}</div>
                              <div className="text-gray-500">Del</div>
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-blue-600">{summary.memberUpdation}</div>
                              <div className="text-gray-500">Upd</div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button size="sm" className="w-full text-xs bg-black text-white hover:bg-red-600">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* TAT Analysis Chart - Updated with Client instead of Count */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-black">Endorsement TAT Analysis</CardTitle>
                    <CardDescription className="text-gray-700">
                      Client-wise endorsement analysis with member details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-black">
                          <TableHead className="text-white">Category</TableHead>
                          <TableHead className="text-white">Client</TableHead>
                          <TableHead className="text-white">Lives</TableHead>
                          <TableHead className="text-white">Premium</TableHead>
                          <TableHead className="text-white">Avg TAT</TableHead>
                          <TableHead className="text-white">Additions</TableHead>
                          <TableHead className="text-white">Deletions</TableHead>
                          <TableHead className="text-white">Updates</TableHead>
                          <TableHead className="text-white">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {endorsementSummary.map((category, categoryIndex) =>
                          category.clients.map((client, clientIndex) => {
                            const clientPremium = safeCalculate(
                              category.premium * client.memberCount,
                              category.lives,
                              0,
                            )
                            const clientAdditions = calculateMemberCount(
                              category.memberAddition,
                              client.memberCount,
                              category.lives,
                            )
                            const clientDeletions = calculateMemberCount(
                              category.memberDeletion,
                              client.memberCount,
                              category.lives,
                            )
                            const clientUpdates = calculateMemberCount(
                              category.memberUpdation,
                              client.memberCount,
                              category.lives,
                            )

                            return (
                              <TableRow
                                key={`${categoryIndex}-${clientIndex}`}
                                className="hover:bg-red-50 cursor-pointer"
                              >
                                <TableCell className="font-medium text-sm text-black">
                                  {clientIndex === 0 ? category.title : ""}
                                </TableCell>
                                <TableCell className="font-medium text-black">{client.name}</TableCell>
                                <TableCell className="text-black">{client.memberCount}</TableCell>
                                <TableCell className="text-black">{formatCurrency(clientPremium)}</TableCell>
                                <TableCell className="text-black">{category.avgTAT} days</TableCell>
                                <TableCell>
                                  <span className="text-green-600 font-medium">{clientAdditions}</span>
                                </TableCell>
                                <TableCell>
                                  <span className="text-red-600 font-medium">{clientDeletions}</span>
                                </TableCell>
                                <TableCell>
                                  <span className="text-blue-600 font-medium">{clientUpdates}</span>
                                </TableCell>
                                <TableCell>
                                  <Button
                                    size="sm"
                                    className="text-xs bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => handleClientClick(client.name)}
                                  >
                                    View Members
                                  </Button>
                                </TableCell>
                              </TableRow>
                            )
                          }),
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Member-wise Details */}
                {showMemberDetails && selectedClientForMembers && (
                  <Card className="border-red-200 shadow-lg">
                    <CardHeader className="bg-red-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-black">Member Details - {selectedClientForMembers}</CardTitle>
                          <CardDescription className="text-gray-700">
                            Individual member endorsement details with documents
                          </CardDescription>
                        </div>
                        <Button
                          className="border-black text-black hover:bg-gray-50 bg-transparent"
                          variant="outline"
                          onClick={() => setShowMemberDetails(false)}
                        >
                          Close Details
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-black">
                            <TableHead className="text-white">Member Name</TableHead>
                            <TableHead className="text-white">Relation</TableHead>
                            <TableHead className="text-white">Cover Type</TableHead>
                            <TableHead className="text-white">Endorsement Date</TableHead>
                            <TableHead className="text-white">Sum Insured</TableHead>
                            <TableHead className="text-white">Cover</TableHead>
                            <TableHead className="text-white">Premium</TableHead>
                            <TableHead className="text-white">Type</TableHead>
                            <TableHead className="text-white">Document</TableHead>
                            <TableHead className="text-white">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {(clientMemberDetails[selectedClientForMembers] || []).map((member) => (
                            <TableRow key={member.id} className="hover:bg-red-50">
                              <TableCell className="font-medium text-black">{member.memberName}</TableCell>
                              <TableCell className="text-black">{member.relationWithEmployee}</TableCell>
                              <TableCell>
                                <Badge
                                  className={
                                    member.coverType === "Family Cover"
                                      ? "bg-blue-600 text-white"
                                      : "bg-green-600 text-white"
                                  }
                                >
                                  {member.coverType}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-black">{member.endorsementReceivedDate}</TableCell>
                              <TableCell className="font-medium text-black">
                                ₹{member.sumInsured.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-black">{member.cover}</TableCell>
                              <TableCell className="font-medium text-black">
                                ₹{member.premium.toLocaleString()}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  className={
                                    member.endorsementType === "Addition"
                                      ? "bg-green-600 text-white"
                                      : member.endorsementType === "Deletion"
                                        ? "bg-red-600 text-white"
                                        : "bg-blue-600 text-white"
                                  }
                                >
                                  {member.endorsementType}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-gray-600" />
                                  <span className="text-sm text-black">{member.documentType}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Button size="sm" className="text-xs bg-black text-white hover:bg-gray-800">
                                    View Doc
                                  </Button>
                                  <Button size="sm" className="text-xs bg-red-600 text-white hover:bg-red-700">
                                    Edit
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Enhanced Auto Escalations Tab */}
            <TabsContent value="escalations">
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-black">Auto Escalations</CardTitle>
                  <CardDescription className="text-gray-700">
                    Items exceeding TAT with detailed pendency information
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {autoEscalations.map((escalation, index) => (
                      <div
                        key={index}
                        className={`p-4 border-2 rounded-lg ${
                          escalation.priority === "High" ? "border-red-400 bg-red-50" : "border-red-200 bg-red-25"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <AlertTriangle
                              className={`h-5 w-5 mt-1 ${
                                escalation.priority === "High" ? "text-red-600" : "text-red-500"
                              }`}
                            />
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge className="bg-black text-white">{escalation.type}</Badge>
                                {getPriorityBadge(escalation.priority)}
                              </div>
                              <div>
                                <p className="font-medium text-black">{escalation.client}</p>
                                <p className="text-sm text-gray-700">{escalation.issue}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-600">Pending With:</span>
                                  <p className="font-medium text-black">{escalation.pendingWith}</p>
                                </div>
                                {escalation.days && (
                                  <div>
                                    <span className="text-gray-600">Days Pending:</span>
                                    <p className="font-medium text-red-600">{escalation.days} days</p>
                                  </div>
                                )}
                                {escalation.requiredAmount && (
                                  <div>
                                    <span className="text-gray-600">Required CD Amount:</span>
                                    <p className="font-medium text-red-600">
                                      ₹{escalation.requiredAmount.toLocaleString()}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <p className="text-sm font-medium text-blue-600">{escalation.action}</p>
                            </div>
                          </div>
                          <Button
                            className={
                              escalation.priority === "High"
                                ? "bg-red-600 text-white hover:bg-red-700"
                                : "border-black text-black hover:bg-gray-50 bg-transparent"
                            }
                            variant={escalation.priority === "High" ? "default" : "outline"}
                          >
                            {escalation.priority === "High" ? "Escalate Now" : "Follow Up"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced CD Balance Tab with corrected logic */}
            <TabsContent value="cd-balance">
              <Card className="border-black shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-black">Corporate Deposit Balance</CardTitle>
                  <CardDescription className="text-gray-700">
                    Client-wise CD balance with endorsement lives and processing capacity
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-black">
                        <TableHead className="text-white">Client</TableHead>
                        <TableHead className="text-white">Current Balance</TableHead>
                        <TableHead className="text-white">Required for Pending</TableHead>
                        <TableHead className="text-white">Available Balance</TableHead>
                        <TableHead className="text-white">Endorsement Lives</TableHead>
                        <TableHead className="text-white">Can Process with CD</TableHead>
                        <TableHead className="text-white">Lives Pending</TableHead>
                        <TableHead className="text-white">Status</TableHead>
                        <TableHead className="text-white">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cdBalanceData.map((item) => (
                        <TableRow key={item.client} className="hover:bg-red-50">
                          <TableCell className="font-medium text-black">{item.client}</TableCell>
                          <TableCell className="text-black">₹{item.currentBalance.toLocaleString()}</TableCell>
                          <TableCell className="text-black">₹{item.requiredForPending.toLocaleString()}</TableCell>
                          <TableCell className={item.availableBalance < 0 ? "text-red-600 font-medium" : "text-black"}>
                            ₹{item.availableBalance.toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-gray-600" />
                              <span className="font-medium text-black">{item.endorsementLives}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="font-medium text-green-600">{item.livesCanProcessWithCD}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <XCircle className="h-3 w-3 text-red-600" />
                              <span className="font-medium text-red-600">{item.livesPending}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {item.status === "Sufficient" ? (
                              <Badge className="bg-black text-white">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Sufficient
                              </Badge>
                            ) : (
                              <Badge className="bg-red-600 text-white">
                                <XCircle className="h-3 w-3 mr-1" />
                                Deficit
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {item.status === "Deficit" && (
                              <Button size="sm" className="bg-red-600 text-white hover:bg-red-700">
                                Request ₹{Math.abs(item.availableBalance).toLocaleString()}
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced Documents Tab with claim and endorsement separation */}
            <TabsContent value="documents">
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-black">Document Management</CardTitle>
                  <CardDescription className="text-gray-700">
                    Client-wise document requirements for claims and endorsements
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {documentRequirements.map((clientDoc, index) => (
                      <Card key={index} className="border border-red-200">
                        <CardHeader className="bg-red-25 pb-3">
                          <CardTitle className="text-lg text-black flex items-center gap-2">
                            <FileText className="h-5 w-5 text-red-600" />
                            {clientDoc.client}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-6">
                          {/* Endorsement Documents */}
                          {clientDoc.endorsementDocuments.length > 0 && (
                            <div>
                              <h4 className="text-md font-semibold text-black mb-3 flex items-center gap-2">
                                <Users className="h-4 w-4 text-red-600" />
                                Endorsement Documents
                              </h4>
                              <Table>
                                <TableHeader>
                                  <TableRow className="bg-gray-100">
                                    <TableHead className="text-black">Document Type</TableHead>
                                    <TableHead className="text-black">Member Name</TableHead>
                                    <TableHead className="text-black">Endorsement ID</TableHead>
                                    <TableHead className="text-black">Required</TableHead>
                                    <TableHead className="text-black">Actions</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {clientDoc.endorsementDocuments.map((doc, docIndex) => (
                                    <TableRow key={docIndex} className="hover:bg-red-50">
                                      <TableCell className="font-medium text-black">{doc.type}</TableCell>
                                      <TableCell className="text-black">{doc.memberName}</TableCell>
                                      <TableCell className="text-black">{doc.endorsementId}</TableCell>
                                      <TableCell>
                                        {doc.required ? (
                                          <Badge className="bg-red-600 text-white">Required</Badge>
                                        ) : (
                                          <Badge className="bg-black text-white">Optional</Badge>
                                        )}
                                      </TableCell>
                                      <TableCell>
                                        <div className="flex gap-2">
                                          <Button size="sm" className="text-xs bg-red-600 text-white hover:bg-red-700">
                                            <Upload className="h-3 w-3 mr-1" />
                                            Upload
                                          </Button>
                                          <Button
                                            size="sm"
                                            className="text-xs border-black text-black hover:bg-gray-50 bg-transparent"
                                            variant="outline"
                                          >
                                            Request
                                          </Button>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}

                          {/* Claim Documents */}
                          {clientDoc.claimDocuments.length > 0 && (
                            <div>
                              <h4 className="text-md font-semibold text-black mb-3 flex items-center gap-2">
                                <FileText className="h-4 w-4 text-red-600" />
                                Claim Documents
                              </h4>
                              <Table>
                                <TableHeader>
                                  <TableRow className="bg-gray-100">
                                    <TableHead className="text-black">Document Type</TableHead>
                                    <TableHead className="text-black">Member Name</TableHead>
                                    <TableHead className="text-black">Claim ID</TableHead>
                                    <TableHead className="text-black">Required</TableHead>
                                    <TableHead className="text-black">Actions</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {clientDoc.claimDocuments.map((doc, docIndex) => (
                                    <TableRow key={docIndex} className="hover:bg-red-50">
                                      <TableCell className="font-medium text-black">{doc.type}</TableCell>
                                      <TableCell className="text-black">{doc.memberName}</TableCell>
                                      <TableCell className="text-black">{doc.claimId}</TableCell>
                                      <TableCell>
                                        {doc.required ? (
                                          <Badge className="bg-red-600 text-white">Required</Badge>
                                        ) : (
                                          <Badge className="bg-black text-white">Optional</Badge>
                                        )}
                                      </TableCell>
                                      <TableCell>
                                        <div className="flex gap-2">
                                          <Button size="sm" className="text-xs bg-red-600 text-white hover:bg-red-700">
                                            <Upload className="h-3 w-3 mr-1" />
                                            Upload
                                          </Button>
                                          <Button
                                            size="sm"
                                            className="text-xs border-black text-black hover:bg-gray-50 bg-transparent"
                                            variant="outline"
                                          >
                                            Request
                                          </Button>
                                        </div>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced Claims Status Tab with tracking and additional details */}
            <TabsContent value="claims">
              <div className="space-y-6">
                {/* Claims Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {claimsSummary.map((summary, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-xl border-2 ${
                        summary.priority === "High"
                          ? "border-red-500 bg-red-50 hover:bg-red-100"
                          : summary.priority === "Medium"
                            ? "border-red-300 bg-red-25 hover:bg-red-50"
                            : "border-black bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => handleClaimStatusClick(summary.status)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium text-black">{summary.status}</CardTitle>
                          {getPriorityBadge(summary.priority)}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div
                          className={`text-2xl font-bold ${summary.priority === "High" ? "text-red-600" : "text-black"}`}
                        >
                          {summary.count}
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Amount:</span>
                            <span className="font-medium text-black">{formatCurrency(summary.totalAmount)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Avg TAT:</span>
                            <span className="font-medium text-black">
                              {summary.avgTAT} {summary.tatUnit || "days"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Overdue:</span>
                            <span className={`font-medium ${summary.overdueTAT > 0 ? "text-red-600" : "text-black"}`}>
                              {summary.overdueTAT}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Cashless:</span>
                            <span className="font-medium text-black">{summary.types.cashless}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Reimbursement:</span>
                            <span className="font-medium text-black">{summary.types.reimbursement}</span>
                          </div>
                        </div>
                        <div className="pt-2">
                          <Button size="sm" className="w-full text-xs bg-black text-white hover:bg-red-600">
                            View Details ({summary.count})
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed Claims View */}
                {showClaimDetails && selectedClaimStatus && !showIndividualClaimDetails && (
                  <Card className="border-red-200 shadow-lg">
                    <CardHeader className="bg-red-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-black">Detailed Claims - {selectedClaimStatus}</CardTitle>
                          <CardDescription className="text-gray-700">
                            Individual claim records with tracking and complete details
                          </CardDescription>
                        </div>
                        <Button
                          className="border-black text-black hover:bg-gray-50 bg-transparent"
                          variant="outline"
                          onClick={() => setShowClaimDetails(false)}
                        >
                          Close Details
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-black">
                            <TableHead className="text-white">Claim ID</TableHead>
                            <TableHead className="text-white">Client</TableHead>
                            <TableHead className="text-white">Employee</TableHead>
                            <TableHead className="text-white">Type</TableHead>
                            <TableHead className="text-white">Claimed Amount</TableHead>
                            <TableHead className="text-white">Sum Insured</TableHead>
                            <TableHead className="text-white">Balance Covered</TableHead>
                            <TableHead className="text-white">Claim Date</TableHead>
                            <TableHead className="text-white">TPA/Insurer</TableHead>
                            <TableHead className="text-white">Tracking Status</TableHead>
                            <TableHead className="text-white">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {(detailedClaimsData[selectedClaimStatus] || []).map((claim) => (
                            <TableRow key={claim.id} className="hover:bg-red-50">
                              <TableCell className="font-medium text-black">{claim.id}</TableCell>
                              <TableCell className="text-black">{claim.client}</TableCell>
                              <TableCell className="text-black">{claim.employee}</TableCell>
                              <TableCell>
                                <Badge
                                  className={
                                    claim.type === "Cashless" ? "bg-red-600 text-white" : "bg-black text-white"
                                  }
                                >
                                  {claim.type}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-medium text-black">
                                ₹{claim.claimedAmount.toLocaleString()}
                              </TableCell>
                              <TableCell className="font-medium text-black">
                                ₹{claim.sumInsured.toLocaleString()}
                              </TableCell>
                              <TableCell className="font-medium text-green-600">
                                ₹{claim.balanceCovered.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-black">{claim.claimDate}</TableCell>
                              <TableCell className="text-sm text-black">{claim.tpaInsurer}</TableCell>
                              <TableCell>
                                <Badge className="bg-blue-600 text-white text-xs">{claim.trackingStatus}</Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Button
                                    size="sm"
                                    className="text-xs bg-red-600 text-white hover:bg-red-700"
                                    onClick={() => handleClaimClick(claim.id)}
                                  >
                                    <Eye className="h-3 w-3 mr-1" />
                                    Details
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="text-xs border-black text-black hover:bg-gray-50 bg-transparent"
                                    variant="outline"
                                    onClick={() => handleClaimTracking(claim.id)}
                                  >
                                    Track
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}

                {/* Individual Claim Details - Enhanced Design */}
                {showIndividualClaimDetails && selectedClaimId && (
                  <Card className="border-red-200 shadow-lg">
                    <CardHeader className="bg-red-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-black">Claim Details - {selectedClaimId}</CardTitle>
                          <CardDescription className="text-gray-700">
                            Complete claim information and treatment details
                          </CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            className="bg-blue-600 text-white hover:bg-blue-700"
                            onClick={() => handleClaimTracking(selectedClaimId)}
                          >
                            <Activity className="h-4 w-4 mr-2" />
                            Track Claim
                          </Button>
                          <Button
                            className="border-black text-black hover:bg-gray-50 bg-transparent"
                            variant="outline"
                            onClick={() => setShowIndividualClaimDetails(false)}
                          >
                            Back to Claims
                          </Button>
                          <Button
                            className="border-black text-black hover:bg-gray-50 bg-transparent"
                            variant="outline"
                            onClick={() => {
                              setShowIndividualClaimDetails(false)
                              setShowClaimDetails(false)
                            }}
                          >
                            Close All
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {(() => {
                        const claim = Object.values(detailedClaimsData)
                          .flat()
                          .find((c) => c.id === selectedClaimId)
                        if (!claim) return <div>Claim not found</div>

                        return (
                          <div className="space-y-6">
                            {/* Claim Overview Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <Card className="border-blue-200 bg-blue-50">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-blue-600">
                                    ₹{claim.claimedAmount.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-blue-700">Claimed Amount</div>
                                </CardContent>
                              </Card>
                              <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-green-600">
                                    ₹{claim.sumInsured.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-green-700">Sum Insured</div>
                                </CardContent>
                              </Card>
                              <Card className="border-purple-200 bg-purple-50">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-purple-600">
                                    ₹{claim.balanceCovered.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-purple-700">Balance Available</div>
                                </CardContent>
                              </Card>
                              <Card className="border-red-200 bg-red-50">
                                <CardContent className="p-4 text-center">
                                  <div className="text-2xl font-bold text-red-600">{claim.tat}</div>
                                  <div className="text-sm text-red-700">Days TAT</div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Detailed Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Basic Claim Information */}
                              <Card className="border-red-200">
                                <CardHeader className="bg-red-50">
                                  <CardTitle className="text-lg text-black">Basic Information</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                  <div className="space-y-3">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Claim ID:</span>
                                      <span className="font-medium text-black">{claim.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Client:</span>
                                      <span className="font-medium text-black">{claim.client}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Employee:</span>
                                      <span className="font-medium text-black">{claim.employee}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Type:</span>
                                      <Badge
                                        className={
                                          claim.type === "Cashless" ? "bg-red-600 text-white" : "bg-black text-white"
                                        }
                                      >
                                        {claim.type}
                                      </Badge>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Claim Date:</span>
                                      <span className="font-medium text-black">{claim.claimDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Submitted Date:</span>
                                      <span className="font-medium text-black">{claim.submittedDate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">TPA/Insurer:</span>
                                      <span className="font-medium text-black">{claim.tpaInsurer}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Current Status:</span>
                                      <Badge className="bg-blue-600 text-white">{claim.trackingStatus}</Badge>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Treatment Details */}
                              <Card className="border-red-200">
                                <CardHeader className="bg-red-50">
                                  <CardTitle className="text-lg text-black">Treatment Details</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                  <div className="space-y-3">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Hospital:</span>
                                      <span className="font-medium text-black">{claim.hospital}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Diagnosis:</span>
                                      <span className="font-medium text-black">{claim.diagnosis}</span>
                                    </div>
                                    {claim.claimDetails.admissionDate && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Admission Date:</span>
                                        <span className="font-medium text-black">
                                          {claim.claimDetails.admissionDate}
                                        </span>
                                      </div>
                                    )}
                                    {claim.claimDetails.dischargeDate && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Discharge Date:</span>
                                        <span className="font-medium text-black">
                                          {claim.claimDetails.dischargeDate}
                                        </span>
                                      </div>
                                    )}
                                    {claim.claimDetails.plannedAdmissionDate && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Planned Admission:</span>
                                        <span className="font-medium text-black">
                                          {claim.claimDetails.plannedAdmissionDate}
                                        </span>
                                      </div>
                                    )}
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Room Type:</span>
                                      <span className="font-medium text-black">{claim.claimDetails.roomType}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Treatment Type:</span>
                                      <span className="font-medium text-black">{claim.claimDetails.treatmentType}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Doctor:</span>
                                      <span className="font-medium text-black">{claim.claimDetails.doctorName}</span>
                                    </div>
                                    {claim.claimDetails.estimatedDays && (
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Estimated Days:</span>
                                        <span className="font-medium text-black">
                                          {claim.claimDetails.estimatedDays} days
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Pendency Information */}
                            <Card className="border-red-300 bg-red-50">
                              <CardHeader>
                                <CardTitle className="text-lg text-black flex items-center gap-2">
                                  <AlertTriangle className="h-5 w-5 text-red-600" />
                                  Pendency Information
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <span className="text-gray-600">Pendency Reason:</span>
                                    <p className="font-medium text-red-600 mt-1">{claim.pendencyReason}</p>
                                  </div>
                                  <div>
                                    <span className="text-gray-600">TAT Status:</span>
                                    <p
                                      className={`font-medium mt-1 ${
                                        claim.tat > 10 ? "text-red-600" : "text-green-600"
                                      }`}
                                    >
                                      {claim.tat} days {claim.tat > 10 ? "(Overdue)" : "(Within TAT)"}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )
                      })()}
                    </CardContent>
                  </Card>
                )}

                {/* Default View when no details selected */}
                {!showClaimDetails && (
                  <Card className="border-red-200 shadow-lg">
                    <CardHeader className="bg-red-50">
                      <CardTitle className="text-black">Claims Overview</CardTitle>
                      <CardDescription className="text-gray-700">
                        Click on any status card above to view detailed claim records with tracking information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-600">
                        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50 text-red-600" />
                        <p className="text-black">Select a claim status above to view individual claim details</p>
                        <p className="text-sm">
                          Click on claim details to view complete treatment and tracking information
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Enhanced Reports Tab */}
            <TabsContent value="reports">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Enhanced Red Flags with Action Options */}
                <Card className="border-red-500 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center gap-2 text-black">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      Red Flags
                    </CardTitle>
                    <CardDescription className="text-gray-700">Items requiring immediate intervention</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {redFlags.map((flag, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between p-4 border-2 border-red-300 rounded-lg bg-red-50"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-black text-white">{flag.type}</Badge>
                              {getPriorityBadge(flag.priority)}
                            </div>
                            <p className="font-medium text-black">{flag.client}</p>
                            <p className="text-sm text-gray-700">{flag.issue}</p>
                            <p className="text-sm font-medium text-red-600">{flag.action}</p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="bg-red-600 text-white hover:bg-red-700">Take Action</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Action Options - {flag.client}</DialogTitle>
                                <DialogDescription>Choose an action to resolve: {flag.issue}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                {flag.actionOptions.map((option, optionIndex) => (
                                  <Button
                                    key={optionIndex}
                                    variant="outline"
                                    className="justify-start h-auto p-4 border-red-200 hover:bg-red-50 bg-transparent"
                                    onClick={() => handleRedFlagAction(flag, option.type)}
                                  >
                                    <div className="flex items-start gap-3">
                                      {option.type === "call" && <Phone className="h-4 w-4 text-red-600 mt-1" />}
                                      {option.type === "email" && <Mail className="h-4 w-4 text-red-600 mt-1" />}
                                      {option.type === "sms" && <MessageSquare className="h-4 w-4 text-red-600 mt-1" />}
                                      {option.type === "escalate" && (
                                        <AlertCircle className="h-4 w-4 text-red-600 mt-1" />
                                      )}
                                      {option.type === "meeting" && <Calendar className="h-4 w-4 text-red-600 mt-1" />}
                                      {option.type === "schedule" && <Calendar className="h-4 w-4 text-red-600 mt-1" />}
                                      <div className="text-left">
                                        <div className="font-medium text-black">{option.label}</div>
                                        <div className="text-sm text-gray-600">{option.description}</div>
                                      </div>
                                    </div>
                                  </Button>
                                ))}
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="notes">Action Notes</Label>
                                <Textarea
                                  id="notes"
                                  placeholder="Add any additional notes or comments..."
                                  value={actionNotes}
                                  onChange={(e) => setActionNotes(e.target.value)}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Enrollment Closure Report with Download */}
                <Card className="border-black shadow-lg">
                  <CardHeader className="bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-black">
                          <Calendar className="h-5 w-5 text-black" />
                          Enrollment Closure Report
                        </CardTitle>
                        <CardDescription className="text-gray-700">
                          Summary of closed enrollment windows
                        </CardDescription>
                      </div>
                      <Button
                        onClick={downloadEnrollmentData}
                        className="bg-black text-white hover:bg-gray-800"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download XLS
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {enrollmentClosures.map((closure, index) => (
                        <div key={index} className="p-4 border-2 border-red-200 rounded-lg hover:bg-red-50">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <p className="font-medium text-black">{closure.client}</p>
                              <p className="text-sm text-gray-600">{closure.period}</p>
                              <p className="text-xs text-gray-500">Policy: {closure.policyNumber}</p>
                            </div>
                            {getStatusBadge(closure.status)}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">Lives Covered</p>
                              <p className="font-medium text-black">{closure.livesCovered}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Premium</p>
                              <p className="font-medium text-black">₹{closure.premium.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">CD Balance</p>
                              <p className="font-medium text-black">₹{closure.cdBalance.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Pending Payment</p>
                              <p
                                className={`font-medium ${closure.pendingPayment > 0 ? "text-red-600" : "text-black"}`}
                              >
                                ₹{closure.pendingPayment.toLocaleString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-600">Closure Date</p>
                              <p className="font-medium text-black">{closure.closureDate}</p>
                            </div>
                          </div>
                          {closure.pendingPayment > 0 && (
                            <Button size="sm" className="mt-3 bg-red-600 text-white hover:bg-red-700">
                              Follow Up Payment
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
