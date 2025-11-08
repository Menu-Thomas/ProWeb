"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Cpu, Globe, Smartphone, Gamepad2, Wifi, type LucideIcon } from "lucide-react";
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  icon: LucideIcon;
};

// Derive a lean subset of projects for carousel (first 8 for now)
const carouselProjects = projects.slice(0, 8);

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200">
      {children}
    </span>
  );
}

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    const node = scrollRef.current;
    if (!node) return;
    const amount = Math.min(600, node.clientWidth * 0.9);
    node.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Controls (placed in normal flow to avoid overlapping header actions) */}
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          aria-label="Précédent"
          onClick={() => scroll("left")}
          className="p-2 rounded-lg border border-gray-200 bg-white text-secondary-700 hover:text-primary-700 hover:border-primary-300 shadow-sm"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Suivant"
          onClick={() => scroll("right")}
          className="p-2 rounded-lg border border-gray-200 bg-white text-secondary-700 hover:text-primary-700 hover:border-primary-300 shadow-sm"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
        style={{ scrollbarWidth: "thin" }}
      >
        {carouselProjects.map((project) => (
          <div key={project.id} className="snap-start min-w-[300px] md:min-w-[380px] lg:min-w-[420px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
