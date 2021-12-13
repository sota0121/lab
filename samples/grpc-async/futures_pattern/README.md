# futures pattern asynchronous requests

## Output sample

**Client log**

```bash
$ python futures_client.py
Request (index: 0, proctime: 15)
Request (index: 1, proctime: 9)
Request (index: 3, proctime: 15)
Request (index: 4, proctime: 15)
Request (index: 2, proctime: 9)
Request (index: 5, proctime: 9)
Request (index: 6, proctime: 15)
Request (index: 7, proctime: 3)
Request (index: 8, proctime: 15)
Request (index: 9, proctime: 15)
SomethingExecutor client 7 received: Sleeper has done!(proctime: 3)
SomethingExecutor client 2 received: Sleeper has done!(proctime: 9)
SomethingExecutor client 1 received: Sleeper has done!(proctime: 9)
SomethingExecutor client 5 received: Sleeper has done!(proctime: 9)
SomethingExecutor client 3 received: Sleeper has done!(proctime: 15)
SomethingExecutor client 4 received: Sleeper has done!(proctime: 15)
SomethingExecutor client 6 received: Sleeper has done!(proctime: 15)
SomethingExecutor client 0 received: Sleeper has done!(proctime: 15)
SomethingExecutor client 8 received: Sleeper has done!(proctime: 15)
SomethingExecutor client 9 received: Sleeper has done!(proctime: 15)
```

**Server log**

```bash
$ python do_something_server.py
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 9)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 9)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 9)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 3)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:DoSomething requested (name: Sleeper, proctime: 15)
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
DEBUG:root:done !
```