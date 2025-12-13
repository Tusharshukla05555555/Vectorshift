// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 120 });
  const textareaRef = useRef(null);

  // Extract variables from text
  useEffect(() => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const foundVariables = [];
    let match;
    
    while ((match = variableRegex.exec(currText)) !== null) {
      const varName = match[1].trim();
      if (!foundVariables.includes(varName)) {
        foundVariables.push(varName);
      }
    }
    
    setVariables(foundVariables);
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.max(120, Math.min(300, scrollHeight + 40));
      
      // Calculate width based on content
      const lines = currText.split('\n');
      const maxLineLength = Math.max(...lines.map(line => line.length));
      const newWidth = Math.max(200, Math.min(400, maxLineLength * 8 + 60));
      
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const nodeStyle = {
    width: dimensions.width,
    height: dimensions.height,
    border: '2px solid #f59e0b',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative'
  };

  return (
    <div style={nodeStyle}>
      {/* Variable Input Handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
            backgroundColor: '#f59e0b'
          }}
        />
      ))}

      {/* Node Header */}
      <div style={{ 
        fontWeight: 'bold', 
        marginBottom: '8px', 
        color: '#1e293b',
        fontSize: '14px'
      }}>
        Text
      </div>

      {/* Variables Display */}
      {variables.length > 0 && (
        <div style={{ 
          fontSize: '10px', 
          color: '#64748b', 
          marginBottom: '6px',
          fontStyle: 'italic'
        }}>
          Variables: {variables.join(', ')}
        </div>
      )}

      {/* Text Input */}
      <div style={{ marginBottom: '6px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '4px', 
          color: '#475569',
          fontSize: '12px'
        }}>
          Text:
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Enter text with variables like {{variableName}}"
          style={{
            width: '100%',
            minHeight: '60px',
            padding: '6px',
            border: '1px solid #cbd5e1',
            borderRadius: '4px',
            fontSize: '11px',
            resize: 'none',
            fontFamily: 'monospace'
          }}
        />
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ backgroundColor: '#f59e0b' }}
      />
    </div>
  );
};
