// BaseNode.js - Abstract base component for all nodes

import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  inputs = [], 
  outputs = [], 
  fields = [], 
  style = {},
  className = ''
}) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialValues = {};
    fields.forEach(field => {
      initialValues[field.name] = data?.[field.name] || field.defaultValue || '';
    });
    return initialValues;
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    // Update the node data in the store if updateNodeField is available
    if (data?.updateNodeField) {
      data.updateNodeField(id, fieldName, value);
    }
  };

  const defaultStyle = {
    width: 200,
    minHeight: 80,
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    ...style
  };

  return (
    <div style={defaultStyle} className={className}>
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: inputs.length === 1 ? '50%' : `${((index + 1) * 100) / (inputs.length + 1)}%`,
            backgroundColor: input.color || '#64748b'
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
        {title}
      </div>

      {/* Node Fields */}
      <div style={{ fontSize: '12px' }}>
        {fields.map(field => (
          <div key={field.name} style={{ marginBottom: '6px' }}>
            <label style={{ display: 'block', marginBottom: '2px', color: '#475569' }}>
              {field.label}:
            </label>
            {field.type === 'select' ? (
              <select
                value={fieldValues[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                style={{
                  width: '100%',
                  padding: '4px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '11px'
                }}
              >
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                value={fieldValues[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '60px',
                  padding: '4px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '11px',
                  resize: 'vertical'
                }}
              />
            ) : (
              <input
                type={field.type || 'text'}
                value={fieldValues[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                style={{
                  width: '100%',
                  padding: '4px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '11px'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: outputs.length === 1 ? '50%' : `${((index + 1) * 100) / (outputs.length + 1)}%`,
            backgroundColor: output.color || '#64748b'
          }}
        />
      ))}
    </div>
  );
};