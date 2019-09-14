import request from '@/utils/request'

export function fillProjectTrainningReportInit(data) {
  return request({
    url: '/nydlWeb/fillProjectTrainningReportInit',
    method: 'POST',
    data
  })
}

export function test() {
  return request({
    url: '/web/test',
    method: 'post',
    data: {}
  })
}
