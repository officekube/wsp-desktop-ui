import {NavItemType} from "../components/layout";
import {BlockItemType, CheckboxGroupItemType} from "../components/common";
import { TabsGroupItemType } from "../components/common";

export const initialNavItems: NavItemType[] = [
    {name: 'Home', active: true, path: "#home"},
    {name: 'Tasks', active: false, path: "#tasks"},
    {name: 'Apps', active: false, path: "#apps"},
    {name: 'Models', active: false, path: "#models"},
    {name: 'Chat', active: false, path: "#chat"},
    {name: 'Settings', active: false, path: "#settings"},
];

export const initialTasksExploreItems: BlockItemType[] = [
    {title: "Personal Copilot", content: "Overview : the task installs & launches the personal copilot."},
    {title: "Generate Documentation", content: "Overview : the task generates documentation for source code."},
    {title: "Generate Code", content: "Overview : the task generates app scaffolding."},
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