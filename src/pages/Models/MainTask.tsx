import React from "react";
import "./style.css";
import {aiModels,} from "../../constant/component-items";
import {ModelExplorer} from "../../components/common";


export const MainTask = () => {
    return (
        <div className="w-full flex flex-col gap-10">
            <ModelExplorer models={aiModels}/>
        </div>
    );
};
