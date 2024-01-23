class Graph { 
    constructor() { 
        this.numberOfNodes = 0;
        this.adjacentList = {}; 
    } 

    addVertex(node) { 
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    } 

    removeVertex(node) { 
        const allNodes = Object.keys(this.adjacentList); 
        delete this.adjacentList[node];
        for (let n of allNodes) { 
            if (this.adjacentList[n]) {
                this.adjacentList[n] = this.adjacentList[n].filter( n => n !== node);
            }
        } 
        this.numberOfNodes--;
    } 

    addEdge(node1, node2) { 
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    } 

    removeEdge(node1, node2) { 
        if (this.adjacentList[node1]) {
            this.adjacentList[node1] = this.adjacentList[node1].filter( n => n !== node2);
        }
        if (this.adjacentList[node2]) {
            this.adjacentList[node2] = this.adjacentList[node2].filter( n => n !== node1);
        }
    } 

    showConnections() { 
        const allNodes = Object.keys(this.adjacentList); 
        for (let node of allNodes) { 
            let nodeConnections = this.adjacentList[node]; 
            let connections = ""; 
            let vertex;
            for (vertex of nodeConnections) {
            connections += vertex + " ";
            } 
            console.log(node + "-->" + connections); 
        } 
        console.log(""); 
    } 
} 
  
  const myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 
  myGraph.removeEdge('4', '2');
  myGraph.showConnections(); 
  myGraph.removeVertex('4');
  myGraph.showConnections(); 
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5