export interface userRegisterAction{
    type: string,
    data: object | number
  }

export interface userLoginAction{
  type: string,
  data: object | number
}

export interface fetchProductsAction{
  type: string,
  data: object | number
}

export interface fetchProductAction{
  type: string,
  data: object
}

export interface createProductAction{
  type: string,
  data: object
}

export interface fetchReviewsAction{
  type: string,
  data: object
}

export interface createReviewAction{
  type: string,
  data: object
}

export interface updateUserAction{
  type: string,
  data: object
}

export interface Route {
  params: string
}

export interface Navigation {
  navigate: Function,
  goBack: Function
}

export interface Actions{
  createProduct: Function
}
