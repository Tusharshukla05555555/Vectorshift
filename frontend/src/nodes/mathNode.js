// mathNode.js

import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Math"
      inputs={[
        { id: 'a', color: '#3b82f6' },
        { id: 'b', color: '#3b82f6' }
      ]}
      outputs={[{ id: 'result', color: '#3b82f6' }]}
      fields={[
        {
          name: 'operation',
          label: 'Operation',
          type: 'select',
          defaultValue: 'add',
          options: [
            { value: 'add', label: 'Add (+)' },
            { value: 'subtract', label: 'Subtract (-)' },
            { value: 'multiply', label: 'Multiply (×)' },
            { value: 'divide', label: 'Divide (÷)' }
          ]
        }
      ]}
      style={{ borderColor: '#3b82f6' }}
    />
  );
};