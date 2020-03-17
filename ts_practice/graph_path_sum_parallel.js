const { Worker , isMainThread, parentPort, workerData} = require('worker_threads');
const { performance } = require('perf_hooks');
const { test100 } = require('./test_set_100');
const { test1000 } = require('./test_set_1000');
const { test10000 } = require('./test_set_10000');
const { test100000 } = require('./test_set_100000');
const { test1000000 } = require('./test_set_1000000');
const { test10000000 } = require('./test_set_10000000');

function get_sum(data){
    let graph = data['graph'];
    let start = data['start'];
    let length = data['length'];
    let path_sum = data['path_sum'];
    path_sum += graph[start];

    if (2*start + 1 > length && 2*start+2 > length){
        //console.log(path_sum);
        return;
    }
    if (2*start +1 < length){
        get_sum({'graph':graph,'start':2*start+1,'length':graph.length,'path_sum':path_sum});
    }else{
        //console.log(path_sum);
    }
    if (2*start +2 < length){
        get_sum({'graph':graph,'start':2*start+2,'length':graph.length,'path_sum':path_sum});
    }else{
        //console.log(path_sum);
    }
}
function main(){
    if (isMainThread){
        var graph = test10000000;
        worker1 = new Worker(__filename,{workerData:{'graph':graph,'start':1,'length':graph.length,'path_sum':graph[0]}});
        worker2 = new Worker(__filename,{workerData:{'graph':graph,'start':2,'length':graph.length,'path_sum':graph[0]}});
    }else{
        get_sum(workerData);
    }
}
var t0 = performance.now();
main();
var t1 = performance.now();
console.log("Time taken "+(t1-t0));