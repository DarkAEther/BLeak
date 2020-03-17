const { PerformanceObserver, performance } = require('perf_hooks');
const { test100 } = require('./test_set_100');
const { test1000 } = require('./test_set_1000');
const { test10000 } = require('./test_set_10000');
const { test100000 } = require('./test_set_100000');
const { test1000000 } = require('./test_set_1000000');
const { test10000000 } = require('./test_set_10000000');

function get_sum(graph, root, length, path_sum) {
    path_sum += graph[root];
    if (2 * root + 1 > length && 2 * root + 2 > length) {
        //console.log(path_sum);
    }
    else {
        if (2 * root + 1 < length) {
            get_sum(graph, 2 * root + 1, length, path_sum);
        }
        if (2 * root + 2 < length) {
            get_sum(graph, 2 * root + 2, length, path_sum);
        }
    }
}
var graph = test10000000;
var t0 = performance.now();
get_sum(graph, 0, graph.length, 0);
var t1 = performance.now();
console.log("Time taken "+(t1-t0));