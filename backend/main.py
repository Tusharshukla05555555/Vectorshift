from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]

class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None
    targetHandle: str = None

class PipelineData(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    """
    Check if the graph formed by nodes and edges is a Directed Acyclic Graph (DAG)
    using DFS-based cycle detection.
    """
    if not nodes or not edges:
        return True
    
    # Build adjacency list
    graph = {node.id: [] for node in nodes}
    for edge in edges:
        if edge.source in graph and edge.target in graph:
            graph[edge.source].append(edge.target)
    
    # Track visit states: 0 = unvisited, 1 = visiting, 2 = visited
    state = {node.id: 0 for node in nodes}
    
    def has_cycle(node_id: str) -> bool:
        if state[node_id] == 1:  # Currently visiting - cycle detected
            return True
        if state[node_id] == 2:  # Already visited
            return False
        
        state[node_id] = 1  # Mark as visiting
        
        for neighbor in graph[node_id]:
            if has_cycle(neighbor):
                return True
        
        state[node_id] = 2  # Mark as visited
        return False
    
    # Check for cycles starting from each unvisited node
    for node in nodes:
        if state[node.id] == 0:
            if has_cycle(node.id):
                return False
    
    return True

@app.post('/pipelines/parse')
def parse_pipeline(pipeline_data: PipelineData):
    """
    Parse the pipeline and return analysis results.
    """
    try:
        num_nodes = len(pipeline_data.nodes)
        num_edges = len(pipeline_data.edges)
        is_valid_dag = is_dag(pipeline_data.nodes, pipeline_data.edges)
        
        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_valid_dag
        }
    
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error parsing pipeline: {str(e)}")
