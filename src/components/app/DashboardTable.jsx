import React from "react";
import { walletTransactions, kycRequests } from "../../data/dashboardDummy";

export default function DashboardTables() {
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Wallet Transactions Table */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Wallet Transactions</h3>
        
          <div className="overflow-x-auto">
          <table className="min-w-full text-left border-b border-(--border)">
            <thead className="bg-bg-primary">
              <tr>
                 <th className="px-1 py-2 border-b border-(--border)">Data</th>
                <th className="px-4 py-2 border-b border-(--border)">Amount</th>
                <th className="px-4 py-2 border-b border-(--border)">Type</th>
                <th className="px-4 py-2 border-b border-(--border)">Status</th>
              </tr>
            </thead>
            <tbody>
              {walletTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-bg-surface">
                  <td className=" py-2 border-b border-(--border)">{tx.date}</td>
                  <td className="px-4 py-2 border-b border-(--border)">{tx.amount}</td>
                  <td className="px-4 py-2 border-b border-(--border)">{tx.type}</td>
                  <td className="px-4 py-2 border-b border-(--border)">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KYC Progress Table */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">KYC Completion</h3>
        <div className="space-y-4">
          {kycRequests.map((user) => (
            <div key={user.id}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-text-primary">{user.name}</span>
                <span className="text-sm text-text-secondary">{user.completion}%</span>
              </div>
              <div className="w-full h-4 bg-bg-primary rounded-full">
                <div
                  className="h-4 rounded-full transition-all duration-500"
                  style={{
                    width: `${user.completion}%`,
                    backgroundColor:
                      user.completion >= 75
                        ? "#6366F1" // green
                        : user.completion >= 50
                        ? "#10B981" // yellow
                        : "#F59E0B", // red
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
