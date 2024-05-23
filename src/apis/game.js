import httpInstance from '@/utils/http'

// 获取全部游戏数据
export const getGamesAPI = (page) => {
    return httpInstance({
        url: '/list',
        params: {
            page: page,
            limit: 15
        }
    });
};