const mainUrl = 'http://192.168.0.15:5000'

const serverUrls = {
  BACKEND_REGISTER: `${mainUrl}/auth/register`,
  BACKEND_LOGIN: `${mainUrl}/auth/login`,
  PRODUCTS: `${mainUrl}/product`,
  REVIEWS: `${mainUrl}/review`,
  UPDATE_USER: `${mainUrl}/user`
}

export default serverUrls
