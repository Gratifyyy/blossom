import router from '@renderer/router'

// 全局根页面
import Index from '@renderer/views/Index.vue'
import SettingIndex from '@renderer/views/index/SettingIndex.vue'
import Login from '@renderer/views/index/SettingLogin.vue'

import Home from '@renderer/views/home/Home.vue'
import ArticleIndex from '@renderer/views/article/ArticleIndex.vue'
import PictureIndex from '@renderer/views/picture/PictureIndex.vue'
import TodoIndex from '@renderer/views/todo/TodoIndex.vue'
import NoteIndex from '@renderer/views/note/NoteIndex.vue'
import PlanIndex from '@renderer/views/plan/PlanIndex.vue'
import IconListIndex from '@renderer/components/IconList.vue'

// const Home = () => import('@renderer/views/home/Home.vue')
// const ArticleIndex = () => import('@renderer/views/article/ArticleIndex.vue')
// const PictureIndex = () => import('@renderer/views/picture/PictureIndex.vue')
// const TodoIndex = () => import('@renderer/views/todo/TodoIndex.vue')
// const NoteIndex = () => import('@renderer/views/note/NoteIndex.vue')
// const PlanIndex = () => import('@renderer/views/plan/PlanIndex.vue')
// const IconListIndex = () => import('@renderer/components/IconList.vue')

// 新窗口页面
import ArticleViewWindow from '@renderer/views/article/ArticleViewWindow.vue'
import ArticleReference from '@renderer/views/article/ArticleReferenceChartGraph.vue'
import ArticleHistory from '@renderer/views/article/ArticleHistory.vue'

router.addRoute({
  path: '/',
  redirect: '/settingIndex'
})

router.addRoute({
  path: '/',
  name: 'Index',
  component: Index,
  meta: { keepAlive: true },
  children: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { keepAlive: true, title: '登录' }
    },
    { path: '/home', name: 'Home', component: Home, meta: { keepAlive: true, title: '首页' } },
    { path: '/settingIndex', name: 'SettingIndex', component: SettingIndex, meta: { keepAlive: false, title: '设置' } },
    // 功能页面
    { path: '/articleIndex', name: 'ArticleIndex', component: ArticleIndex, meta: { keepAlive: true, title: '文章编辑' } },
    { path: '/pictureIndex', name: 'PictureIndex', component: PictureIndex, meta: { keepAlive: true, title: '资源库' } },
    { path: '/todoIndex', name: 'TodoIndex', component: TodoIndex, meta: { keepAlive: true, title: '待办事项' } },
    { path: '/noteIndex', name: 'NoteIndex', component: NoteIndex, meta: { keepAlive: false, title: '便签' } },
    { path: '/planIndex', name: 'PlanIndex', component: PlanIndex, meta: { keepAlive: false, title: '日历计划' } },
    {
      path: '/iconListIndex',
      name: 'IconListIndex',
      component: IconListIndex,
      meta: { keepAlive: false, title: '图标库' },
      props: {
        window: false
      }
    }
  ]
})

router.addRoute({ path: '/articleViewWindow', name: 'ArticleViewWindow', component: ArticleViewWindow, meta: { keepAlive: true } })
router.addRoute({ path: '/iconListIndexWindow', name: 'IconListIndexWindow', component: IconListIndex, meta: { keepAlive: true } })
router.addRoute({
  path: '/articleReferenceWindow',
  name: 'ArticleReferenceWindow',
  component: ArticleReference,
  meta: { keepAlive: true }
})
router.addRoute({ path: '/articleHistory', name: 'ArticleHistory', component: ArticleHistory, meta: { keepAlive: true } })
