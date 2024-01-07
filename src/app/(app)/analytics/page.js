import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ChartViewCount from "@/components/charts/ChartViewCount";
import FormContainer from "@/components/layout/FormContainer";
import { Events } from "@/models/Events";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AnalyticsPage() {
    mongoose.connect(process.env.MONGODB_URI);

    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect('/');
    }

    const page = await Page.findOne({owner: session?.user?.email});
    if (!page) {
        return redirect('/account');
    }

    const viewCount = await Events.aggregate([
        {
            $match: {
                type: 'view',
                uri: page.uri,
            }
        },
        {
            $group: {
                _id: {
                    $dateToString: {
                        date: "$createdAt",
                        format: "%Y-%m-%d"
                    }
                },
                count: {
                    "$count": {},
                },
            },
        }
    ]).sort({_id: 1});

    return (
        <>
            <FormContainer>
                <div className="p-4 md:p-8">
                    <div className="font-bold text-center mb-16 mt-8">Views</div>
                    <ChartViewCount viewCount={viewCount}/>
                    <div className="mt-16 text-slate-500 text-center">Views per day, i.e. number of visits to your page per day.</div>
                </div>
            </FormContainer>
        </>
    )
}