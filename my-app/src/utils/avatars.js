import undici from "undici"

class RobloxAvatars {
    async getSmallestHeadshot(userId) {
        const req = await undici.request(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=48x48&format=Webp&isCircular=true`)
        return req.body.json()
    }
}

export default new RobloxAvatars()