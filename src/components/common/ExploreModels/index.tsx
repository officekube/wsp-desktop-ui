import React, {FC, useState} from 'react';
import {SearchHeader} from "../../layout/Search";
import {ModelCard} from "../../layout/Card";
import {Block} from "../Block";

interface ModelCardProps {
    name: string;
    provider: string;
    type: string;
    fileSize: string;
    ram: string;
    quantization: string[];
}

interface ModelExplorerProps {
    models: ModelCardProps[];
    title?: string;
}

export const ModelExplorer: FC<ModelExplorerProps> = ({
    models,
    title = "Explore Models"
}) => {
    return (
        <Block title={title}>
            <div className="w-full py-4 px-2 border border-t-0 border-gray-700 overflow-x-hidden overflow-y-scroll bg-black">
                <SearchHeader />
                <div className="text-sm text-white/60 mb-4">{models.length} items</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map((model, index) => (
                        <ModelCard key={index} {...model} />
                    ))}
                </div>
            </div>
        </Block>
    );
};