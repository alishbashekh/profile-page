import {
  FiCreditCard,
  FiGlobe,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

export const dashboardQickData = [
  {
    id: 1,
    title: "New Transaction",
    subtitle: "Send money to beneficiaries",
    growth: "1.5%",
    icon: FiCreditCard,
    // actions: [
    //   { label: "Add Fund +", link: "/wallet/add" },
     
    // ],
  },
  {
    id: 2,
    title: "Add Beneficiary",
    subtitle: "Register new recipient",
    growth: "8.2%",
    icon: FiGlobe,
    // actions: [
    //   { label: "View All", link: "/translations" },
    // ],
  },
  
  
  {
    id: 3,
    title: "Fund Wallent",
    subtitle: "Top up Your balance",
    icon: FiCheckCircle,
    // actions: [
    //   { label: "Review Now->", link: "/approved" },
     
    // ],
  },
  {
    id: 4,
    title: "View Reports",
    subtitle: "Download statements",
    growth: "9.7%",
    icon: FiFileText,
    // actions: [
    //   { label: "Upload", link: "/documents/upload" },
     
    // ],
  },
];
