import LineChartOne from "@/components/charts/line/LineChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";

export default function LineChart() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Statistics" />
      <div className="space-y-6">
        <ComponentCard title="Statistics">
          <LineChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
