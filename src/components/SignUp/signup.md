useState -> [state, setState]
Initial state
When form is filled then we are updating the state.
When signup component useState hook sets the initial state in the memoized state queue
alt text
useEffect -> (() => {}, [dependencies])
Mounting phase

Runs once after the initial render
If dependencies are not provided i.e second argument of useEffect as empty array [].
Updating phase

Runs only if dependencies are changed
(() => {}, [emailChanged,passwordChanged])
Cleanup phase (optional phase)

If the useEffect() return another function, the function will act as a clean for that effect.
(() => { return () => { // body for cleanup } }, [dependencies])
Unmounting phase

When component we need to remove from ReactDOM
Any cleanup from the effect runs if defined
Component mounts | useEffect initialized | Effect runs based on dependencies Every render (no dependency) Once ([emptyArray]) On dependency change ([specificDependencies]) | Cleanup (if applicable) Runs before the next render or unmount | Component unmount Effect cleanup executes if applicable

Axios
Promise based http client for the browser

Makes asynchronous http request to REST endpoints and returns a promise (fulfilled, rejected, pending)

When component renders | Component mounts or updates -> It may trigger an API call | Axios request setup -> HTTP method (GET, POST,PUT,DELETE etc.) -> URL - specifying the endpoint you are trying to reach. -> OPTIONS - where request headers, request body, query params etc. | Sending the axios request | Server response -> Server receives the request, processes it & send back to the client. | Handling the response -> Axios returns a promise -> .then() -> if fulfilled, .catch() => if error occurred Promise chaining | Updating component state -> using useState, setState to store the response data inside the component state. -> Which re-renders th component with passive effect. | Error handling -> if the server response with error 404,500, etc. -> Handle it with try catch

useForm & useFormState
intersection observer