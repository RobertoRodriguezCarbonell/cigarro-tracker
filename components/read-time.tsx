import React from 'react'

interface ReadTimeProps {
    readTime: number;
    className?: string;
}

const ReadTime: React.FC<ReadTimeProps> = ({ readTime, className }) => {
    return (
        <div className={`flex items-center gap-x-2 bg-gray-300 dark:bg-gray-950 rounded-full px-2 ${className}`}>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
                {readTime} min
            </span>
        </div>
    )
}

export default ReadTime
