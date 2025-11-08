"use client";
import Link from 'next/link';
import { ExternalLink, Calendar, Tag as TagIcon } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      key={project.id}
      href={project.demo || '#'}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group block cursor-pointer"
    >
      <div className="relative h-56 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        )}
        <div className="absolute inset-0 hidden items-center justify-center text-white bg-gradient-to-br from-primary-400 to-primary-600">
          <div className="text-center">
            <div className="text-6xl mb-2">
              {project.category === 'IoT' && '🔌'}
              {project.category === 'Web' && '🌐'}
              {project.category === 'Mobile' && '📱'}
              {project.category === 'Unity' && '🎮'}
              {project.category === 'Industriel' && '🏭'}
            </div>
            <div className="text-sm font-medium opacity-90">{project.category}</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {project.status}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
            <span>
              {project.category === 'IoT' && '🔌'}
              {project.category === 'Web' && '🌐'}
              {project.category === 'Mobile' && '📱'}
              {project.category === 'Unity' && '🎮'}
              {project.category === 'Industriel' && '🏭'}
            </span>
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center text-primary-600 font-semibold text-sm">
            <TagIcon size={14} className="mr-1" />
            {project.category}
          </span>
          <span className="inline-flex items-center text-secondary-500 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </span>
        </div>
        <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-secondary-600 mb-3">
          <span className="font-semibold">Client:</span> {project.client}
        </p>
        <p className="text-secondary-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-secondary-800 text-sm mb-2">Fonctionnalités clés:</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="text-sm text-secondary-600 flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-sm text-secondary-500 italic">Cliquez pour voir les détails</span>
          <ExternalLink size={16} className="text-primary-600" />
        </div>
      </div>
    </Link>
  );
}
