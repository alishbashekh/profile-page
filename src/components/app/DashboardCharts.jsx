
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import {
  walletBalanceData,
  transactionVolumeData,
  kycStatusData,
  progressHeatmapData,
} from "../../data/dashboardChartsData";

const COLORS = ["#22C55E", "#FBBF24", "#EF4444"]; // KYC Pie colors

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

      {/* Line Chart - Wallet Balance */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Wallet Balance Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={walletBalanceData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - Transaction Volume */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Transaction Volume</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={transactionVolumeData}>
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - KYC Status */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">KYC Status Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={kycStatusData}
              dataKey="value"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {kycStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Progress Heatmap (simplified) */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Progress Heatmap</h3>
        <div className="space-y-2">
          {progressHeatmapData.map((row) => (
            <div key={row.metric}>
              <span className="text-sm font-medium">{row.metric}</span>
              <div className="flex gap-1 mt-1">
                {Object.keys(row)
                  .filter((key) => key !== "metric")
                  .map((day, idx) => (
                    <div
                      key={day}
                      className="h-4 rounded"
                      style={{
                        width: "20%",
                        backgroundColor: `rgba(79, 70, 229, ${row[day] / 100})`,
                      }}
                    ></div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
