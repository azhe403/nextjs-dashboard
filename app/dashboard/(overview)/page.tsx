import {lusitana} from "@/app/ui/fonts";
import CardWrapper, {Card} from "@/app/ui/dashboard/cards";
import {fetchCardData, fetchLatestInvoices, fetchRevenue} from "@/app/lib/data";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {Suspense} from "react";
import {CardsSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";

export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard Page
            </h1>
            <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
                {/*<Card title="Collected" value={totalPaidInvoices} type="collected"/>*/}
                {/*<Card title="Pending" value={totalPendingInvoices} type="pending"/>*/}
                {/*<Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>*/}
                {/*<Card*/}
                {/*    title="Total Customers"*/}
                {/*    value={numberOfCustomers}*/}
                {/*    type="customers"*/}
                {/*/>*/}

                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    );
}