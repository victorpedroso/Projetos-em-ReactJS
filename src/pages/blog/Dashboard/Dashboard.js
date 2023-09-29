import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom';

// hooks
import {useAuthValue} from '../../../context/AuthContext';
import {useFetchDocument} from '../../../hooks/useFetchDocument';
import { useDeleteDocument } from '../../../hooks/useDeleteDocument';

const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;

  const {documents: posts, loading, error} = useFetchDocument("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts");


  if(loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className={styles.dashboard_container}>
      <section className={styles.banner}/>
      <div className={styles.conteudo}>
        <h1>Dashboard</h1>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>  
            <Link to="/blog/createpost" className="btn">Criar primeiro post</Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>
            {posts && posts.map((post) => <div key={post.id} className={styles.post_row}>
              <p>{post.title}</p>
              <div>
                <Link to={`/blog/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                <Link to={`/blog/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
                <button onClick={() => deleteDocument(post.id)} className="btn btn-outline btn-danger">Excluir</button>
              </div>
            </div>)}

          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard