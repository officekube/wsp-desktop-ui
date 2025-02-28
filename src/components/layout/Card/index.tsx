import React, {FC} from 'react';

interface ModelCardProps {
    name: string;
    provider: string;
    type: string;
    fileSize: string;
    ram: string;
    quantization: string[];
}


export const ModelCard: FC<ModelCardProps> = ({
    name,
    provider,
    type,
    fileSize,
    ram,
    quantization
}) => {
    return (
        <div className="border border-gray-700 rounded-lg p-4 bg-black">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="text-sm font-medium text-white/70">{name}</h3>
                    <p className="text-xs text-white/60">powered by {provider}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200">
                    {type}
                </span>
            </div>

            <div className="mb-4">
                <div className="flex items-center mb-2">
                    <span className="text-sm text-white/60 mr-1">Quantization Method</span>
                    <select className="text-sm border border-gray-700 rounded px-2 py-1 bg-black text-white/70">
                        {quantization.map((q, index) => (
                            <option key={index} value={q}>{q}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                    <span>File Size: {fileSize}</span>
                    <span>RAM: {ram}</span>
                </div>
            </div>

            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white/70 font-medium py-2 px-4 rounded transition-colors duration-200">
                Download to Use
            </button>
        </div>
    );
};