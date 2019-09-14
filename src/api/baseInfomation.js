import request from '@/utils/request'

export function modifyPasswordSubmit(data) {
  return request({
    url: '/auth/modifyPasswordSubmit',
    method: 'POST',
    data
  })
}
