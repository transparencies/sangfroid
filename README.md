# sangfroid
[![ci-tests](https://github.com/arindas/sangfroid/actions/workflows/ci-tests.yml/badge.svg)](https://github.com/arindas/sangfroid/actions/workflows/ci-tests.yml)
[![rustdoc](https://github.com/arindas/sangfroid/actions/workflows/rustdoc.yml/badge.svg)](https://github.com/arindas/sangfroid/actions/workflows/rustdoc.yml)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Farindas%2Fsangfroid.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Farindas%2Fsangfroid?ref=badge_shield)

A load balanced thread pool.

## How does it work?

We maintain a binary heap of worker threads. Worker threads are ordered by the number of
pending tasks associated with it. Whenever a new job is scheduled, we pick up the least
loaded worker and dispatch the job to it. We update its pending task count and restore
the heap accordingly.

When a worker is done executing a job, it sends its Uid to the done channel. A background
balancer thread continuously receives on this channel until it receives a None value.
When the balancer thread receives an uid, it looks up the associated worker from the
worker pool heap, decrements it's load and restores the heap accordingly.

All communication to and from threads is done via channels. We use locks as sparingly as
possible. More specifically, we only lock on the binary heap in the thread pool with a
Mutex since it is also used by the balancer thread.
We stay true to the concept:
>Do not communicate by sharing memory; instead, share memory by communicating.

```rust
//! example 0: basic api usage
let thread_pool = ThreadPool::<u8, u8>::new(1);

let (job, result_src) = Job::with_result_sink(|x| x * 2, 2);
thread_pool.schedule(job).expect("job not scheduled");
assert_eq!(result_src.recv().unwrap(), 4);

//! example 1: with shared resource
let shared_hashmap = Arc::new(RwLock::new(HashMap::<u8, u8>::new()));
const PLACE_HOLDER: u8 = 5;

assert_eq!(shared_hashmap.read().unwrap().get(&1), None);

let thread_pool = ThreadPool::<((u8, u8), Arc<RwLock<HashMap<u8, u8>>>), ()>::new(2);

let job = Job::new(
    |((key, value), shared_map)| {
        shared_map.write().unwrap().insert(key, value);
    },
    ((1, 2), Arc::clone(&shared_hashmap)),
);
thread_pool.schedule(job).expect("job not scheduled");

let job = Job::new(
    |((key, _), shared_map)| {
        shared_map.read().unwrap().get(&key);
    },
    ((1, PLACE_HOLDER), Arc::clone(&shared_hashmap)),
);
thread_pool.schedule(job).expect("job not scheduled");

// wait some time for writers to finish
thread::sleep(Duration::from_secs(1));

assert_eq!(shared_hashmap.read().unwrap().get(&1), Some(&2));
```

Refer to [API documentation](https://arindas.github.io/sangfroid/sangfroid) for more details.

### Why did you make this?
This crate was inspired from the load balancer described in the excellent
["Concurrency is not Parallelism"](https://youtu.be/oV9rvDllKEg) talk by Rob Pike.

### Well, did you learn anything?
Thread management and synchorization in Rust. I was also able to improve my ownership concepts.
This was a great project for applying the knowledge I assimilated from the aforementioned
talk and improve my ability to express my ideas in `Rust`.

## Dependencies
This does not depend on any third party crates. The only dependency is the
[`bheap`](https://github.com/arindas/bheap) crate, which I wrote for managing the workers.

## Usage
This is a library crate. You may include it in your `Cargo.toml` as follows:
```toml
[dependencies]
sangfroid = { git = "https://github.com/arindas/sangfroid" }
```

### Why the weird name?
>sangfroid /sɒ̃ˈfrwɑː/ noun;
>composure or coolness shown in danger or under trying circumstances.

I found it fitting.

## LICENSE
`sangfroid` is licensed under the MIT License. See [LICENSE](./LICENSE) for the full license text.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Farindas%2Fsangfroid.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Farindas%2Fsangfroid?ref=badge_large)
