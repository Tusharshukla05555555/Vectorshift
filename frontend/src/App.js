import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: '#f1f5f9'
    }}>
      <header style={{
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '16px 24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '24px', 
          fontWeight: '700' 
        }}>
          VectorShift Pipeline Builder
        </h1>
        <p style={{ 
          margin: '4px 0 0 0', 
          fontSize: '14px', 
          opacity: 0.8 
        }}>
          Drag and drop nodes to create your pipeline
        </p>
      </header>
      
      <PipelineToolbar />
      
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <PipelineUI />
      </div>
      
      <SubmitButton />
    </div>
  );
}

export default App;
