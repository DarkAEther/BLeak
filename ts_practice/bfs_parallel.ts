import { Worker , isMainThread, parentPort, workerData} from 'worker_threads';
var queue = [];
var max_index = 0;
function bfs_worker(){
    while (max_index < graph.length){
        while(!(queue.length == 0)){
            let node = queue.shift();
            if (node[1]*2+1 > graph.length && node[1]*2+2 > graph.length){
                console.log("Path length is: "+(node[2]+graph[node[1]]).toString());
                continue;
            }
            if (node[1]*2+1 < graph.length){
                queue.push([graph[node[1]*2+1],node[1]*2+1,node[2]+node[0]]);
                max_index = node[1]*2+1;
            }
            if (node[1]*2+2 < graph.length){
                queue.push([graph[node[1]*2+2],node[1]*2+2,node[2]+node[0]]);
                max_index = node[1]*2+2;
            }
        }
    }
}
function bfs_parallel(start){
    queue.push([graph[start],start,0]);
    let w1 = new Worker(__filename,);
    let w2 = new Worker(__filename);
}
var graph = [2, 4, 5, 1, 2, 3, 4, 8];
function main(){
    if (isMainThread){
        bfs_parallel(0);
    }else{
        bfs_worker();
    }
}
main();