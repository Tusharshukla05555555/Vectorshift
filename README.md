# VectorShift Pipeline Builder

A modern, drag-and-drop pipeline builder built with React Flow and FastAPI. This project demonstrates advanced frontend architecture patterns, node abstraction, and real-time pipeline validation.

##  Features

###  Part 1: Node Abstraction
- **BaseNode Component**: Reusable abstraction for all node types
- **Flexible Configuration**: Easy node creation with inputs, outputs, and fields
- **Type Safety**: Consistent interface across all node implementations
- **Scalable Architecture**: Add new nodes with minimal code

###  Part 2: Modern Styling
- **Professional UI**: Clean, modern design with gradients and shadows
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Layout**: Flexible toolbar and canvas layout
- **Visual Hierarchy**: Clear typography and spacing
- **Tooltips**: Helpful descriptions for each node type

###  Part 3: Enhanced Text Node
- **Dynamic Sizing**: Auto-resize based on content length
- **Variable Detection**: Automatic parsing of `{{variableName}}` syntax
- **Dynamic Handles**: Creates input handles for detected variables
- **Real-time Updates**: Live variable display and handle generation
- **Monospace Input**: Better code/template editing experience

###  Part 4: Backend Integration
- **FastAPI Backend**: Modern Python API with automatic documentation
- **DAG Validation**: Sophisticated cycle detection algorithm
- **CORS Support**: Seamless frontend-backend communication
- **Error Handling**: Comprehensive error reporting and validation
- **Pipeline Analysis**: Detailed metrics and validation results

##  Node Types

1. **Input** - Data input with configurable types
2. **Output** - Data output destinations  
3. **LLM** - Large Language Model processing
4. **Text** - Text processing with variable support
5. **Math** - Mathematical operations
6. **Filter** - Data filtering with conditions
7. **API Call** - HTTP requests with multiple methods
8. **Condition** - Conditional logic branching
9. **Delay** - Pipeline timing control
10. **Database** - Database operations and queries

##  Installation & Setup

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

##  Architecture

### Node Abstraction Pattern
The `BaseNode` component provides a flexible foundation for all node types:

```javascript
<BaseNode
  id={id}
  data={data}
  title="Node Title"
  inputs={[{ id: 'input1', color: '#color' }]}
  outputs={[{ id: 'output1', color: '#color' }]}
  fields={[
    {
      name: 'fieldName',
      label: 'Field Label',
      type: 'text|select|textarea|number',
      defaultValue: 'default',
      options: [{ value: 'val', label: 'Label' }] // for select
    }
  ]}
  style={{ borderColor: '#color' }}
/>
```

### Pipeline Validation
The backend implements a sophisticated DAG validation algorithm:
- **Cycle Detection**: DFS-based cycle detection
- **Node Analysis**: Comprehensive pipeline metrics
- **Error Reporting**: Detailed validation feedback

##  Design System

- **Colors**: Semantic color coding for different node types
- **Typography**: Clear hierarchy with appropriate font weights
- **Spacing**: Consistent 8px grid system
- **Shadows**: Subtle depth with layered shadows
- **Animations**: Smooth transitions for better UX

##  Technical Highlights

- **React Flow**: Advanced flow-based UI with custom nodes
- **Zustand**: Lightweight state management
- **FastAPI**: Modern Python web framework
- **Pydantic**: Data validation and serialization
- **CORS**: Cross-origin resource sharing setup
- **TypeScript-ready**: Structured for easy TS migration

##  Pipeline Analysis

The system provides comprehensive pipeline analysis:
- Node and edge counting
- DAG validation with cycle detection
- Real-time feedback via user-friendly alerts
- Error handling for malformed pipelines

##  Future Enhancements

- **Undo/Redo**: Command pattern implementation
- **Node Templates**: Predefined node configurations
- **Export/Import**: Pipeline serialization
- **Real-time Collaboration**: Multi-user editing
- **Execution Engine**: Actual pipeline execution
- **Custom Themes**: User-configurable styling

---

Built for the VectorShift Technical Assessment
