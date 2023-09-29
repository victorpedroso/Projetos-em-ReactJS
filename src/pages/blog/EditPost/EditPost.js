import styles from './EditPost.module.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../../context/AuthContext';
import { useFetchDocumentSingle   } from '../../../hooks/useFetchDocumentSingle';
import { useUpdateDocument } from '../../../hooks/useUpdateDocument';
import { storage } from '../../../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const EditPost = () => {
  const {id} = useParams();
  const {document: post} = useFetchDocumentSingle("posts", id);

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {

    if(post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post])

  const {user} = useAuthValue();

  const {updateDocument, response} = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!file) {
      setFormError("Por favor faça o uploado da imagem!");
    }
    if(!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    setFormError("");

    const fileExtension = file.name.split('.').pop();
    const modifiedFileName = title.replace(/\s+/g, '-') + '.' + fileExtension;
    const modifiedFile = new File([file], modifiedFileName, { type: file.type });
    const storageRef = ref(storage, `/files/${modifiedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, modifiedFile);

    try{
      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', (snapshot)=>{
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
      },
      (err) => {
        console.log(err);
        reject(err);
      },
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setImage(url);
          const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
          if(formError) return;
          const data = {
            title,
            image: url,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
          };
          updateDocument(id, data);
          console.log(url);
          resolve();
        } catch(error) {
          console.log(error);
          reject(error);
        } 
      } 
      ); 
    });
    }catch(error) {
      setFormError(error);
    }
    navigate(("/blog/dashboard"));
  }
  return (
    <div className={styles.container}>
      <section className={styles.banner}/>
    {post && (
      <>
        <h2>Editando post: {post.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input type="text" name="title" required placeholder="Título do post..." onChange={(e) => setTitle(e.target.value)} value={title}/>
          </label>
          <label>
            <span>Preview da imagem ativa:</span>
            <img src={image} alt={title} />
            <span>Atualizar imagem:</span>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} accept="/image/*" />
          </label>
          <label>
            <span>Conteúdo: </span>
            <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgula" onChange={(e) => setTags(e.target.value)} value={tags}/>
          </label>
          {!response.loading && (<button className="btn">Editar</button>)}
          {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
          {response.error && (<p className="error">{response.error}</p>)}
          {formError && (<p className="error">{formError}</p>)}
        </form>
      </>
    )}
    </div>
  )
}

export default EditPost;