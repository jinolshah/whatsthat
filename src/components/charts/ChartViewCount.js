'use client';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from "recharts";
import {addDays, differenceInDays, formatISO9075, parseISO} from "date-fns";

export default function ChartViewCount({viewCount}) {

    const data = [];
    viewCount.forEach(({_id, count}, index) => {
        const date = _id;
        const nextDate = viewCount?.[index + 1]?._id;

        data.push({
            date: _id,
            views: count,
        })

        if (date && nextDate) {
            const daysBetween = differenceInDays(parseISO(nextDate), parseISO(date));
            for (let i=1; i < daysBetween; i++) {
                const dateBetween = formatISO9075(addDays(parseISO(date), i)).split(' ')[0];
                console.log(dateBetween);
                data.push({
                    date: dateBetween,
                    views: 0,
                })
            }

        }
    });

    return(
        <ResponsiveContainer width="100%" height={200}>
            <LineChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickMargin={10}/>
                <YAxis tickMargin={10}/>
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#f6828c" />
            </LineChart>
        </ResponsiveContainer>
    )
}