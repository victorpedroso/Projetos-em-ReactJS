import styles from './Post.module.css';

//hooks
import { useParams } from 'react-router-dom';
import { useFetchDocumentSingle } from '../../../hooks/useFetchDocumentSingle';

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocumentSingle("posts", id);
  return (
    <div className={styles.post}>
        <section className={styles.banner}/>
        <div className={styles.conteudo}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}><span>#</span>{tag}</p>
                        )) }
                    </div>
                </>
            )}
        </div>

    </div>
  )
}

export default Post