import {
    UserRound,
    Globe,
    LayoutDashboard,
    Workflow,
    Database,
    TrendingUp,
} from "lucide-react";

export const nodes = [
    {
        id: "client",
        x: "50%",
        y: "0%",
        title: "Client",
        icon: UserRound,
    },
    {
        id: "website",
        x: "50%",
        y: "30%",
        title: "Website",
        icon: Globe,
    },
    {
        id: "dashboard",
        x: "20%",
        y: "50%",
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "automation",
        x: "80%",
        y: "50%",
        title: "Automation",
        icon: Workflow,
    },
    {
        id: "database",
        x: "50%",
        y: "70%",
        title: "Database",
        icon: Database,
    },
    {
        id: "growth",
        x: "50%",
        y: "100%",
        title: "Business Growth",
        icon: TrendingUp,
    },
];

export const links = [
    ["client", "website"],
    ["website", "dashboard"],
    ["website", "automation"],
    ["dashboard", "database"],
    ["automation", "database"],
    ["database", "growth"],
];