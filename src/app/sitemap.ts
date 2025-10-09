import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    const BASE_URL = "https://el-solo.space";

    return [
        {
            url: `${BASE_URL}/ru`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        },
        {
            url: `${BASE_URL}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0
        }
    ]
};

export default sitemap;