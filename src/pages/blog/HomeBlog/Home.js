// CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocument } from "../../../hooks/useFetchDocument";


// components
import PostDetail from "../../../components/Blog/PostDetail";

const Home = () => {
  
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/blog/search?q=${query}`);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        <h1>Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className={styles.search_form}>
          <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)}/>
          <button className="btn btn-dark">Pesquisar</button>
        </form>
        <div className={styles.post}>
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post}/>
          ))}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram  encontrados posts</p>
              <Link to="/blog/createpost">Criar primeiro post</Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Home