import 'trix/dist/trix';
import { TrixEditor } from 'react-trix';
import "trix/dist/trix.css";

const Component = props => {
  const { onChange, onEditorReady } = props;
  return <TrixEditor onChange={onChange} onEditorReady={onEditorReady} mergeTags={null} />;
};

export default Component;