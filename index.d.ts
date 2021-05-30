// default export
export default function (subreddit: string, sort?: string): Promise<string>;

export interface Advanced {
	img?: string;
	title: string;
	upvotes: number;
	author: string;
	upvoteRatio: number;
	downvotes: number;
	comments: number;
	text?: string;
    post: string;
}
export interface Stats {
	uptime: string;
	memory: string;
	served: number;
}
export declare type SortType = 'top' | 'new';
export declare function advanced(
	subreddit: string,
	sort?: SortType
): Promise<Advanced>;
export declare function stats(): Promise<Stats>;
