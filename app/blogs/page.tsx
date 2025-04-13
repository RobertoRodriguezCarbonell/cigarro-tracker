import ReadTime from "@/components/read-time";
import { resources } from "@/recursos/blogs/blogs";
import { Check, Clock } from "lucide-react";

export default function RecursosPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Recursos para dejar de fumar
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                Explora estos recursos externos para encontrar consejos, estrategias y
                testimonios que te ayuden en tu camino hacia una vida libre de tabaco.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <a
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
                    >
                        <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="flex flex-col flex-1 bg-white dark:bg-gray-800">
                            <div className="mb-2 p-4">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {resource.description}
                                </p>
                            </div>
                            <div className="mt-auto flex justify-between items-center p-2 bg-gray-200 dark:bg-gray-900">
                                <ReadTime className="ml-2" readTime={resource.readTime} />
                                <div className="flex items-center gap-x-1">
                                    {resource.read ? (
                                        <Check className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <Clock className="w-4 h-4 text-orange-500" />
                                    )}
                                    <span className={`text-sm mr-2 ${resource.read ? "text-green-500" : "text-orange-500"}`}>
                                        {resource.read ? "Leído" : "Pendiente"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
