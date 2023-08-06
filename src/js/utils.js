export function findRecommendedPost(posts) {
    // I have only one recommended post, so i find it and return it
    // If dont have a recommended post, i will return a random post
    const recommendedPost = posts.find(post => post.frontmatter.recommended)

    if (recommendedPost) return recommendedPost

    return posts[Math.floor(Math.random() * posts.length)]
}

export function formatBlogPosts(posts, {

    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined

} = {}) {

    const fileredPosts = posts.reduce((acc, post) => {

        const { date, draft } = post.frontmatter

        if (filterOutDrafts && draft) return acc

        if (filterOutFuturePosts && new Date(date) > new Date()) return acc

        acc.push(post)

        return acc

    }, [])

    // Sort by date or random
    if (sortByDate) {
        fileredPosts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    } else {
        fileredPosts.sort(() => Math.random() - 0.5)
    }

    if (typeof limit === 'number') {
        return fileredPosts.slice(0, limit)
    }

    return fileredPosts;
}