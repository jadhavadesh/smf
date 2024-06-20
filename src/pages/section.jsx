import "../scss/components/landing.scss"

import { Landing } from "../components/Landing"
import { WhatWeDo } from "../components/WhatWeDo"
import { LatestMovie } from "../components/LatestMovie"
import { RecentActivities } from "../components/RecentActivities"
import { UpcomingMovie } from "../components/UpcomingMovie"

export const Section = () => {
    return (
        <>
        <Landing />
        <WhatWeDo />
        <LatestMovie />
        <RecentActivities />
        <UpcomingMovie />
        </>
    )
}