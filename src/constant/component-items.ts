import {NavItemType} from "../components/layout";
import {BlockItemType, CheckboxGroupItemType} from "../components/common";
import {TabsGroupItemType} from "../components/common";
import * as Home from "../pages/Home";
import * as Tasks from "../pages/Tasks";
import * as Apps from "../pages/Apps";
import * as Models from "../pages/Models";
import * as Chat from "../pages/Chat";
import * as Settings from "../pages/Settings";

export const initialNavItems2: NavItemType[] = [
    {name: 'Home', active: true, path: "#home"},
    {name: 'Tasks', active: false, path: "#tasks"},
    {name: 'Apps', active: false, path: "#apps"},
    {name: 'Models', active: false, path: "#models"},
    {name: 'Chat', active: false, path: "#chat"},
    {name: 'Settings', active: false, path: "#settings"},
];

export const ROUTES = {
    HOME: {
        path: "/home",
        main: Home.MainTask,
        aside: Home.AsiderTask
    },
    TASKS: {
        path: "/tasks",
        main: Tasks.MainTask,
        aside: Tasks.AsiderTask
    },
    APPS: {
        path: "/apps",
        main: Apps.MainTask,
        aside: Apps.AsiderTask
    },
    MODELS: {
        path: "/models",
        main: Models.MainTask,
        aside: Models.AsiderTask
    },
    CHAT: {
        path: "/chat",
        main: Chat.MainTask,
        aside: Chat.AsiderTask
    },
    SETTINGS: {
        path: "/settings",
        main: Settings.MainTask,
        aside: Settings.AsiderTask
    }
} as const;

export const initialNavItems: NavItemType[] = [
    {name: 'Home', active: true, path: `#${ROUTES.HOME.path}`},
    {name: 'Tasks', active: false, path: `#${ROUTES.TASKS.path}`},
    {name: 'Apps', active: false, path: `#${ROUTES.APPS.path}`},
    {name: 'Models', active: false, path: `#${ROUTES.MODELS.path}`},
    {name: 'Chat', active: false, path: `#${ROUTES.CHAT.path}`},
    {name: 'Settings', active: false, path: `#${ROUTES.SETTINGS.path}`},
];

export const initialTasksExploreItems: BlockItemType[] = [
    {
        title: "Personal Copilot",
        content: "Overview : the task installs & launches the personal copilot."
    },
    {
        title: "Generate Documentation",
        content: "Overview : the task generates documentation for source code."
    },
    {title: "Generate Code", content: "Overview : the task generates app scaffolding."},
];

export const welcomeTasksItems: BlockItemType[] = [
    {title: "Execute Task", content: ""},
    {title: "Review Task Output", content: ""},
    {title: "Interact with LLM", content: ""},
];

export const initialTaskExcutedItems: TabsGroupItemType[] = [
    {
        title: "Overview",
        subtitle: "The task generates documentation (in markdown format) for your source code and expects 3 inputs:",
        content: [
            "path to a folder with your source code (e.g. /work/project)",
            "documentation folder where generated documentation should be stored (e.g. /work/project/docs)",
            "language used in your source code (e.g. 'go')"
        ]
    },
    {
        title: "Parameters",
        subtitle: "The task generates documentation (in markdown format) for your source code and expects 3 inputs:",
        content: [
            "path to a folder with your source code (e.g. /work/project)",
            "documentation folder where generated documentation should be stored (e.g. /work/project/docs)",
            "language used in your source code (e.g. 'go')"
        ]
    },
    {
        title: "Schedule/Execute",
        subtitle: "The task generates documentation (in markdown format) for your source code and expects 3 inputs:",
        content: [
            "path to a folder with your source code (e.g. /work/project)",
            "documentation folder where generated documentation should be stored (e.g. /work/project/docs)",
            "language used in your source code (e.g. 'go')"
        ]
    },
];

export const initialTaskRunTasksItems: CheckboxGroupItemType[] = [
    {label: "Adminer", value: true},
    {label: "OWASP Check", value: false},
    {label: "DB Atlas", value: false},
    {label: "Storybook", value: true},
    {label: "Adminer", value: false},
    {label: "Storybook", value: true},
];