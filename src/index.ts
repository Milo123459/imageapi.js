import fetch from 'node-fetch';

/**
 *
 * @param {String} sub The subreddit
 * @example
 * await api("meme");
 * @author Milo123459
 */
export default async function (sub: string): Promise<String> {
	if (!sub) return Promise.reject('Error, you did not specify a subreddit!');

	const response = await (
		await fetch(`https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`)
	).json();

	if (response.error || response.err)
		return Promise.reject('Error, probably due to an invalid subreddit!');

	return response.img;
}

/**
 *
 * @param {String} sub The subreddit
 * @example
 * await api.advanced("meme");
 * @author Milo123459
 */
export async function advanced(sub: string) {
	if (!sub) return Promise.reject('Error, you did not specify a subreddit!');

	const start = Date.now();
	const response = await (
		await fetch(`https://imageapi.fionn.cc/reddit/${sub.toLowerCase()}`)
	).json();
	const responseTime = Date.now() - start;

	if (response.error || response.err)
		return Promise.reject('Error, probably due to an invalid subreddit!');

	return {
		img: response.img,
		res: responseTime,
		title: response.title,
		upvotes: response.upvotes,
		author: response.author,
		upvoteRatio: response.upvoteRatio,
		comments: response.comments,
		downvotes: response.downvotes,
	};
}

/**
 * Get stats via the /stats endpoint
 * @author Milo123459
 */
export async function stats(): Promise<{
	uptime: string;
	memory: string;
	served: number;
}> {
	return await (await fetch('https://imageapi.fionn.cc/stats')).json();
}
