export default function (subreddit: string): Promise<string>;
interface Advanced {
  img: string;
  res: number;
  title: string;
  upvotes: number;
  author: string;
}
interface Stats {
  uptime: string;
  memory: string;
  served: number;
}
declare function advanced(
  subreddit: string
): Promise<Advanced>;
declare function stats(): Promise<Stats>;
export { advanced, stats };
