import { formatDistance } from "date-fns"

export default function getTimeAgo(date: Date): string {
    return formatDistance(date, new Date(), {
        addSuffix: true,
    })
}
