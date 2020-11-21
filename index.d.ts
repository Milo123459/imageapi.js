export default function (subreddit: string, verbose?: boolean): Promise<string>;
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
declare function advanced (subreddit: string, verbose?: boolean): Promise<Advanced>;
declare let fetched: string[] = [];
declare function stats (): Promise<Stats>;
declare function clearFetched (): void;
export { advanced, fetched, stats, clearFetched }