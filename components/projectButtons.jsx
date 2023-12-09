import React from 'react'
import { OpenInNew, GitHub } from "@mui/icons-material"

function ProjectButtons({demoUrl, githubUrl, useDemo, useGithub}) {
  return (
    <div className="flex w-fit gap-3 [&>*]:flex [&>*]:gap-2 [&>*]:justify-start [&>*]:items-center">
      {useDemo && (
        <a
          href={demoUrl}
          className="text-sm md:text-xl sm:hover:scale-105 border border-accent bg-accent transition-all rounded-md p-5"
          target="_blank"
        >
          Try the demo <OpenInNew />
        </a>
      )}
      {useGithub && (
        <a
          href={githubUrl}
          className="text-sm md:text-xl border border-secondary sm:hover:bg-secondary translate-color duration-500 rounded-md p-5"
          target="_blank"
        >
          View on GitHub <GitHub />
        </a>
      )}
    </div>
  );
}



export default ProjectButtons