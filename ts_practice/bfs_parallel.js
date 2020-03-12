"use strict";
exports.__esModule = true;
var threads = require("worker_threads");
var sharedarray = new SharedArrayBuffer(10000);
var queue = Array(sharedarray);
var max_index = 0;
function bfs_worker(data) {
    var queue = data;
    while (max_index < graph.length) {
        console.log(queue)
        while (!(queue.length == 0)) {
            //console.log(queue);
            let node = queue.shift();
            console.log(node)
            if (node[1] * 2 + 1 > graph.length && node[1] * 2 + 2 > graph.length) {
                console.log("Path length is: " + (node[2] + graph[node[1]]).toString());
                continue;
            }
            console.log("here1")
            if (node[1] * 2 + 1 < graph.length) {
                queue.push([graph[node[1] * 2 + 1], node[1] * 2 + 1, node[2] + node[0]]);
                max_index = node[1] * 2 + 1;
            }
            console.log("here2")
            if (node[1] * 2 + 2 < graph.length) {
                queue.push([graph[node[1] * 2 + 2], node[1] * 2 + 2, node[2] + node[0]]);
                max_index = node[1] * 2 + 2;
            }
        }
    }
}
function bfs_parallel(start) {
    queue.push([graph[start], start, 0]);
    console.log(queue)
    var w1 = new threads.Worker(__filename,{workerData:{"data":queue}});
    var w2 = new threads.Worker(__filename,{workerData:{"data":queue}});
}
var graph = [2, 4, 5, 1, 2, 3, 4, 8];
function main() {
    if (threads.isMainThread) {
        bfs_parallel(0);
    }
    else {
        bfs_worker(threads.workerData);
    }
}
main();
