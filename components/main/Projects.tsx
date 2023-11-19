import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SigmaLinks.png"
          title="Agregador de Links criado em Reactjs + Firebase"
          description="Projeto baseado no site LinkTree, feito para uso pessoal utilizando tecnologia moderna como Reactjs, Typescript e Firebase"
          link="https://sigmalinks.vercel.app"
          //https://sigmalinks.vercel.app/
        />
        
        <ProjectCard
          src="/Encurtaai.png"
          title="Aplicação de encurtador de links"
          description="Projeto criado com Reactjs, Consumo de Api e localstorage."
          link=''
          
        />
        <ProjectCard
          src="/Doealimentos.png"
          title="Aplicação para doação de alimentos"
          description="Projeto criado para ajudar famílias carentes, para doação de cestas básicas."
          link=""
        />
      </div>
    </div>
  );
};

export default Projects;
