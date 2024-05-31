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

// 获取分类游戏
export const getCategoryGamesAPI = (categoryID, page) => {
    return httpInstance({
        // 注意这里使用的是反引号
        url: `/list/${categoryID}`,
        params: {
            page: page,
            limit: 15
        }
    });
};

// 获取游戏详情
export const getGameDetailAPI = (gameID) => {
    return httpInstance({
        url: `/detail/${gameID}`
    });
};

// 获取游戏下载链接
export const getDownloadsAPI = (gameID) => {
    return httpInstance({
        url: `/download/${gameID}`
    });
};