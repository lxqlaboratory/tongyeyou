import request from '@/utils/request'

export function productClassificationSetting() {
  return request({
    url: '/product/productClassificationSetting',
    method: 'post',
    data: {}
  })
}
export function ListOfAllProduncts() {
  return request({
    url: '/product/ListOfAllProduncts',
    method: 'post',
    data: {}
  })
}

export function AddTravelProducts() {
  return request({
    url: '/product/AddTravelProducts',
    method: 'post',
    data: {}
  })
}
