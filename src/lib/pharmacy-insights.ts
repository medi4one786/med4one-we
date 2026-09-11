import type { Invoice, Medicine } from "@/hooks/usePharmacyData";

export function daysToExpiry(medicine: Medicine) {
  return Math.round((new Date(medicine.expiry_date).getTime() - Date.now()) / 86_400_000);
}

export function computeMetrics(medicines: Medicine[], invoices: Invoice[]) {
  const completed = invoices.filter((invoice) => invoice.status === "completed");
  const revenue = completed.reduce((sum, invoice) => sum + Number(invoice.total), 0);
  const stockValue = medicines.reduce((sum, m) => sum + m.cost_price * m.stock_qty, 0);
  const retailValue = medicines.reduce((sum, m) => sum + m.mrp * m.stock_qty, 0);
  const lowStock = medicines.filter((m) => m.stock_qty <= m.reorder_level);
  const expiring = medicines.filter((m) => daysToExpiry(m) < 180);
  const avgMargin =
    medicines.length === 0
      ? 0
      : medicines.reduce((sum, m) => sum + (m.mrp > 0 ? ((m.mrp - m.cost_price) / m.mrp) * 100 : 0), 0) /
        medicines.length;

  return {
    revenue,
    invoiceCount: completed.length,
    averageBill: completed.length ? revenue / completed.length : 0,
    stockValue,
    retailValue,
    potentialMargin: retailValue - stockValue,
    lowStock,
    expiring,
    avgMargin,
  };
}

export type Insight = { title: string; detail: string; tone: "urgent" | "watch" | "growth" };

export function buildInsights(medicines: Medicine[], invoices: Invoice[]): Insight[] {
  const metrics = computeMetrics(medicines, invoices);
  const insights: Insight[] = [];

  if (metrics.lowStock.length) {
    insights.push({
      title: `${metrics.lowStock.length} medicine(s) at or below reorder level`,
      detail: `Reorder soon: ${metrics.lowStock
        .slice(0, 3)
        .map((m) => m.name)
        .join(", ")}.`,
      tone: "urgent",
    });
  }

  if (metrics.expiring.length) {
    insights.push({
      title: `${metrics.expiring.length} batch(es) expiring within 6 months`,
      detail: `Plan returns or promotions for ${metrics.expiring
        .slice(0, 3)
        .map((m) => `${m.name} (${m.batch})`)
        .join(", ")}.`,
      tone: "watch",
    });
  }

  const bestMargin = [...medicines]
    .filter((m) => m.mrp > 0)
    .sort((a, b) => (b.mrp - b.cost_price) / b.mrp - (a.mrp - a.cost_price) / a.mrp)[0];
  if (bestMargin) {
    insights.push({
      title: `Highest-margin product: ${bestMargin.name}`,
      detail: `Around ${Math.round(((bestMargin.mrp - bestMargin.cost_price) / bestMargin.mrp) * 100)}% margin — good candidate for counter recommendations.`,
      tone: "growth",
    });
  }

  if (metrics.invoiceCount) {
    insights.push({
      title: `Average bill value across ${metrics.invoiceCount} invoice(s)`,
      detail: `Your recorded average is ₹${Math.round(metrics.averageBill)}. Bundling high-margin items lifts this fastest.`,
      tone: "growth",
    });
  } else {
    insights.push({
      title: "No sales recorded yet",
      detail: "Create your first bill in Billing & POS and insights will update instantly.",
      tone: "watch",
    });
  }

  return insights;
}
