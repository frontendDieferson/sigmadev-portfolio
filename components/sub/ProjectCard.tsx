
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {


  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        
        
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          href={link}
          target="_blank"
          className="flex justify-center items-center text-white font-medium mt-8 p-2 rounded-lg bg-indigo-600 cursor-pointer"
        >
          Visitar Projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
