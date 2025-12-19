
export type CouponData = {
    id: string
    title: string
    is_enabled: number
    percent: number
    due_date: number
    code: string
}


export type CreateCouponParams = {
    title: string
    is_enabled: number
    percent: number
    due_date: number
    code: string
}


export type EditCouponParams = {
  id: string
  data: {
    title: string
    is_enabled: number
    percent: number
    due_date: number
    code: string
  }
}


export type Pagination = {
  total_pages: number
  current_page: number
  has_pre: boolean
  has_next: boolean
  category: string
}


export type GetCouponsResponse = {
  success: boolean
  // coupons
  coupons:CouponData[]
  pagination: Pagination
  messages: unknown[]
}

type MessageResponse = {
  success: boolean
  message: string
}

export type CreateCouponResponse = MessageResponse
export type EditCouponResponse = MessageResponse
export type DeleteCouponResponse = MessageResponse