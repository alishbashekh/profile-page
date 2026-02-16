// src/data/dashboardChartsData.js
export const walletBalanceData = [
  { date: "Jan", balance: 1200 },
  { date: "Feb", balance: 1500 },
  { date: "Mar", balance: 1300 },
  { date: "Apr", balance: 1700 },
  { date: "May", balance: 1600 },
  { date: "Jun", balance: 1900 },
];

export const transactionVolumeData = [
  { type: "Deposit", count: 40 },
  { type: "Withdrawal", count: 25 },
  { type: "Refund", count: 15 },
  { type: "Transfer", count: 20 },
];

export const kycStatusData = [
  { status: "Active", value: 50 },
  { status: "Pending", value: 30 },
  { status: "Rejected", value: 20 },
];

export const progressHeatmapData = [
  { metric: "Wallet", Mon: 80, Tue: 50, Wed: 60, Thu: 40, Fri: 90 },
  { metric: "KYC", Mon: 70, Tue: 60, Wed: 80, Thu: 50, Fri: 60 },
  { metric: "Transactions", Mon: 50, Tue: 70, Wed: 40, Thu: 60, Fri: 80 },
];
