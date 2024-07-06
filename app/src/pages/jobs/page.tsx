"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Jobs() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/Taunt-byte/repos');
      const data = await response.json();
      const selectedRepos = data.filter(repo => ['Python-sistema-de-login', 'repo2', 'repo3'].includes(repo.name));
      setRepos(selectedRepos);
    }
    fetchRepos();
  }, []);

  return (
    <main>
      <div className="text-2xl font-extrabold text-center">
        <h1 className="text-black p-10">
          Principais Trabalhos e Projetos
        </h1>
      </div>
      <div className="p-4">
        {repos.map(repo => (
          <div key={repo.id} className="bg-gray-800 text-white rounded-lg flex justify-between p-4 mb-4">
            <div>
              <h2 className="font-bold text-xl">{repo.name}</h2>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
