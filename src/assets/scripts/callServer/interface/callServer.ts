// call server interface
interface CallServer {
  url: string;
  auth?: boolean;
  data?: object;
  method?: string;
  type?: string;
  base?: boolean;
}

// call function
type CallFunction = (options: CallServer) => Promise<Response>;

export { CallServer, CallFunction };
