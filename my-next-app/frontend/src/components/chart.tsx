"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PopulationCount } from "@/models/country.model"

const chartConfig = {
  desktop: {
    label: "Population",
    color: "#2563eb",
  }
} satisfies ChartConfig

interface ComponentProps {
    populationCounts: PopulationCount[];
}

export function Component({ populationCounts }: ComponentProps) {  
  const chartData = populationCounts.map((item) => ({
    year: item.year.toString(),
    value: item.value,
  }));

  return (
<ChartContainer config={chartConfig} className="h-[200px] w-1/2">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="year"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
    />
    <ChartTooltip content={<ChartTooltipContent />}/>
    <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>
  )
}
