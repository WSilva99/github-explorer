import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

import '../assets/style/repositories.scss';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/WSilva99/repos')
      .then(res => res.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        { repositories.map(repo => (
          <RepositoryItem repository={repo} key={repo.id} />
        ))}
      </ul>
    </section>
  )
}