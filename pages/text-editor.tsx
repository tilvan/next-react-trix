import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
const TrixEditor = dynamic(() => import('../components/TrixEditor'), {
  ssr: false,
});

const TextEditorPage = () => {
  const onDescriptionChange = (html, text) => {
    console.log({ html, text });
  };
  
  const onEditorReady = () => {
    console.log('editor ready');
  };
  
  return(
    <Layout title="TextEditor | Next.js + TypeScript Example">
      <h1>TextEditor</h1>
      <TrixEditor
        onChange={onDescriptionChange}
        onEditorReady={onEditorReady}
      />
    </Layout>
  )
}

export default TextEditorPage
