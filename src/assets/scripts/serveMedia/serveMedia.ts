function serveMedia(meta: string, url: string): string {
  return new URL(url, meta).href;
}
export default serveMedia;
