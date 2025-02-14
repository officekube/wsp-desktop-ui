import React, {FC, useState} from 'react';
import {Search, Filter} from 'lucide-react';

export const SearchHeader: FC = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="relative flex-1 max-w-md">
                <input
                    type="text"
                    placeholder="Type a model name to search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded-lg bg-black text-white/70 placeholder-white/40 focus:outline-none focus:border-gray-600"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/40" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white/60 hover:bg-gray-800 rounded-lg transition-colors duration-200 border border-gray-700">
                <Filter className="h-5 w-5" />
                Filter
            </button>
        </div>
    );
};