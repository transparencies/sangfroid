var searchIndex = JSON.parse('{\
"sangfroid":{"doc":"ci-tests rustdoc","t":[0,0,0,0,3,11,11,11,11,11,12,11,12,12,11,11,11,11,4,13,13,11,11,11,11,11,11,11,13,13,13,13,13,3,4,13,13,12,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,5,11,11,11,11,11,11,11,11,11,5,5,13,13,13,13,13,3,4,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,12,12,11],"n":["job","message","threadpool","worker","Job","borrow","borrow_mut","from","into","new","req","resp_with_result","result_sink","task","try_from","try_into","type_id","with_result_sink","Message","Request","Terminate","borrow","borrow_mut","from","into","try_from","try_into","type_id","JobSchedulingFailed","JoinFailed","LockError","LookupError","TermNoticeFailed","ThreadPool","ThreadPoolError","WorkerTermFailed","WorkerUnavailable","balancer","balancer_thread","borrow","borrow","borrow_mut","borrow_mut","done_channel","drop","fmt","fmt","from","from","into","into","new","new_workers","pool","restore_worker_pool_order","schedule","terminate","to_string","try_from","try_from","try_into","try_into","type_id","type_id","worker_pool_schedule_job","worker_pool_terminate","DispatchFailed","DoneNotificationFailed","JoinFailed","ResultResponseFailed","TermNoticeFailed","Worker","WorkerError","borrow","borrow","borrow_mut","borrow_mut","cmp","dec_load","disp_q","dispatch","drop","eq","fmt","fmt","from","from","inc_load","into","into","new","partial_cmp","pending","terminate","to_string","try_from","try_from","try_into","try_into","type_id","type_id","uid","uid","worker","worker_thread"],"q":["sangfroid","","","","sangfroid::job","","","","","","","","","","","","","","sangfroid::message","","","","","","","","","","sangfroid::threadpool","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","sangfroid::worker","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Jobs to be dispatched and executed.","Message entity for communicating with workers.","A load balanced threadpool.","Workers in a threadpool.","Represents a job to be submitted to the threadpool.","","","","","Creates a new job from a closure and Req arguments to be …","request to service i.e args for task","Consumes this job and responds with the result computed.","Optional result channel to send the result of the …","Task to be executed","","","","Creates a new job like <code>::new()</code> with a result sink for …","Message represents a message to be sent to workers in a …","Request for job execution","Message the thread to terminate itself.","","","","","","","","","","","","","ThreadPool to keep track of worker threads, dynamically …","","","","","Returns a <code>JoinHandle</code> to a balancer thread for the given …","","","","","","Invokes <code>terminate()</code>","","","","","","","Creates a new threadpool with the given number of workers …","Creates the given number of workers and returns them in a …","","Restores the order of the workers in the worker pool …","Schedules a new job to the worker pool by picking up the …","Terminates this threadpool by invoking …","","","","","","","","Schedules a new job to the given worker pool by picking …","Terminates all workers in the given pool of workers by …","","","","","","Worker represents a worker thread capable for receiving …","","","","","","Uses cmp().reverse() on pending tasks to favor Workers …","Decrements pending tasks by 1.","message dispatch queue","Dispatches a job to this worker for execution.","Invokes terminate()","Worker are considered equal if they have the same number …","","","","","Increments pending tasks by 1.","","","Creates a new Worker from the given source, dispatch …","","number of pending jobs to be serviced","Terminates this worker by sending a Terminate message to …","","","","","","","","","uid for uniquely identifying this worker","worker thread for executing jobs","Creates a worker thread from the given job source, done …"],"i":[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,2,2,2,3,3,3,3,3,0,0,3,3,4,4,4,3,4,3,4,4,3,3,4,3,4,3,4,4,4,0,4,4,3,4,3,4,3,4,3,0,0,5,5,5,5,5,0,0,6,5,6,5,6,6,6,6,6,6,5,5,6,5,6,6,5,6,6,6,6,5,6,5,6,5,6,5,6,6,6,6],"f":[null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],null,[[],[["result",4,["senderror"]],["senderror",3]]],null,null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,[[["receiver",3,["option"]],["arc",3,["mutex"]],["option",4,["u64"]],["mutex",3,["binarymaxheap"]]],[["result",4,["threadpoolerror"]],["joinhandle",3,["result"]]]],[[]],[[]],[[]],[[]],null,[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[["usize",15]]],[[["usize",15]]],null,[[["binarymaxheap",3],["u64",15]],[["threadpoolerror",4],["result",4,["threadpoolerror"]]]],[[["job",3]],[["threadpoolerror",4],["result",4,["threadpoolerror"]]]],[[],[["threadpoolerror",4],["result",4,["threadpoolerror"]]]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["binarymaxheap",3],["job",3]],[["threadpoolerror",4],["result",4,["threadpoolerror"]]]],[[["binarymaxheap",3]],[["threadpoolerror",4],["result",4,["threadpoolerror"]]]],null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["ordering",4]],[[]],null,[[["job",3]],[["result",4,["workererror"]],["workererror",4]]],[[]],[[],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[["sender",3,["option"]],["receiver",3,["message"]],["option",4,["u64"]],["sender",3,["message"]],["u64",15],["message",4]]],[[],[["option",4,["ordering"]],["ordering",4]]],null,[[],[["result",4,["workererror"]],["workererror",4]]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["u64",15]],null,null,[[["sender",3,["option"]],["receiver",3,["message"]],["option",4,["u64"]],["u64",15],["message",4]],[["joinhandle",3,["result"]],["result",4,["workererror"]]]]],"p":[[3,"Job"],[4,"Message"],[4,"ThreadPoolError"],[3,"ThreadPool"],[4,"WorkerError"],[3,"Worker"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};