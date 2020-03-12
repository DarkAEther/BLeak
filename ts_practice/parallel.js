"use strict";
exports.__esModule = true;
var worker_threads_1 = require("worker_threads");
function get_sum(data) {
    var graph = data['graph'];
    var start = data['start'];
    var length = data['length'];
    var path_sum = data['path_sum'];
    path_sum += graph[start];
    if (2 * start + 1 > length && 2 * start + 2 > length) {
        console.log(path_sum);
        return;
    }
    if (2 * start + 1 < length) {
        get_sum({ 'graph': graph, 'start': 2 * start + 1, 'length': graph.length, 'path_sum': path_sum });
    }
    if (2 * start + 2 < length) {
        get_sum({ 'graph': graph, 'start': 2 * start + 2, 'length': graph.length, 'path_sum': path_sum });
    }
}
function main() {
    if (worker_threads_1.isMainThread) {
        var graph = [2, 4, 5, 1, 2, 3, 4, 8];
        var worker1 = new worker_threads_1.Worker(__filename, { workerData: { 'graph': graph, 'start': 1, 'length': graph.length, 'path_sum': graph[0] } });
        var worker2 = new worker_threads_1.Worker(__filename, { workerData: { 'graph': graph, 'start': 2, 'length': graph.length, 'path_sum': graph[0] } });
    }
    else {
        get_sum(worker_threads_1.workerData);
    }
}
main();
