import BarChartOne from "@/components/charts/bar/BarChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import React from "react";

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Monthly Sales" />
      <div className="space-y-6">
        <ComponentCard title="Monthly Sales">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
