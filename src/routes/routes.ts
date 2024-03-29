// routes.ts
import config from '../config'

// Layouts
import { UserLayout } from '~/layouts/UserLayout'

// Pages
import Home from '~/pages/Home'

// // Admin Page

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: UserLayout }
  //   { path: config.routes.introduce, component: Introduce, layout: MainUserLayout },
  //   { path: config.routes.discount, component: Discount, layout: MainUserLayout },
  //   { path: config.routes.news, component: News, layout: MainUserLayout },
  //   { path: config.routes.contact, component: Contact, layout: MainUserLayout },
  //   { path: config.routes.detailCategory, component: DetailCategory, layout: MainUserLayout },
  //   { path: config.routes.detailProduct, component: DetailProduct, layout: MainUserLayout },
  //   { path: config.routes.cart, component: Cart, layout: MainUserLayout },
  //   { path: config.routes.login, component: LoginAdmin, layout: null }
]

// const privateRoutes = []

export { publicRoutes }
