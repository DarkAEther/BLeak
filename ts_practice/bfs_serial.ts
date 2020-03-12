var queue = [];
function bfs(start,graph){
    queue.push([graph[start],start,0]);
    while(!(queue.length == 0)){
        //console.log(queue)
        let node = queue.shift();
        if (node[1]*2+1 > graph.length && node[1]*2+2 > graph.length){
            console.log("Path length is: "+(node[2]+graph[node[1]]).toString());
            continue;
        }
        if (node[1]*2+1 < graph.length){
            queue.push([graph[node[1]*2+1],node[1]*2+1,node[2]+node[0]]);
        }
        if (node[1]*2+2 < graph.length){
            queue.push([graph[node[1]*2+2],node[1]*2+2,node[2]+node[0]]);
        }
    }
}
var graph = [2, 4, 5, 1, 2, 3, 4, 8];
bfs(0,graph);