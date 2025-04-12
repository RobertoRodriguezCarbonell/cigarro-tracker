import { resources } from "@/recursos/blogs/blogs";

export default function RecursosPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Recursos para dejar de fumar
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                Explora estos recursos externos para encontrar consejos, estrategias y testimonios que te ayuden en tu camino hacia una vida libre de tabaco.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <a
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
                    >
                        <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4 bg-white dark:bg-gray-800">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {resource.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                {resource.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
