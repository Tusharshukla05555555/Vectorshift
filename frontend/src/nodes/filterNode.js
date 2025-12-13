// filterNode.js

import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      inputs={[{ id: 'data', color: '#06b6d4' }]}
      outputs={[{ id: 'filtered', color: '#06b6d4' }]}
      fields={[
        {
          name: 'condition',
          label: 'Condition',
          type: 'text',
          defaultValue: 'value > 0'
        },
        {
          name: 'filterType',
          label: 'Type',
          type: 'select',
          defaultValue: 'include',
          options: [
            { value: 'include', label: 'Include' },
            { value: 'exclude', label: 'Exclude' }
          ]
        }
      ]}
      style={{ borderColor: '#06b6d4' }}
    />
  );
};