// conditionNode.js

import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Condition"
      inputs={[{ id: 'input', color: '#84cc16' }]}
      outputs={[
        { id: 'true', color: '#22c55e' },
        { id: 'false', color: '#ef4444' }
      ]}
      fields={[
        {
          name: 'condition',
          label: 'If Condition',
          type: 'text',
          defaultValue: 'input === "yes"'
        },
        {
          name: 'trueValue',
          label: 'True Value',
          type: 'text',
          defaultValue: 'Condition met'
        },
        {
          name: 'falseValue',
          label: 'False Value',
          type: 'text',
          defaultValue: 'Condition not met'
        }
      ]}
      style={{ borderColor: '#84cc16' }}
    />
  );
};