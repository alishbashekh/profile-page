import {
  FiCreditCard,
  FiGlobe,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

export const dashboardData = [
  {
    id: 1,
    title: "Wallet Balance",
    amount: "AED 125,450",
    subtitle: "Available: AED 100,450",
    growth: "1.5%",
    icon: FiCreditCard,
    actions: [
      { label: "Add Fund +", link: "/wallet/add" },
     
    ],
  },
  {
    id: 2,
    title: "Translations",
    amount: "1,245",
    subtitle: "Completed this month",
    growth: "8.2%",
    icon: FiGlobe,
    actions: [
      { label: "View All", link: "/translations" },
    ],
  },
  
  
  {
    id: 3,
    title: "Pending",
    amount: "980",
    subtitle: "Successfully processed",
    growth: "15.1%",
    icon: FiCheckCircle,
    actions: [
      { label: "Review Now->", link: "/approved" },
     
    ],
  },
  {
    id: 4,
    title: "Documents",
    amount: "560",
    subtitle: "Uploaded documents",
    growth: "9.7%",
    icon: FiFileText,
    actions: [
      { label: "Upload", link: "/documents/upload" },
     
    ],
  },
];
