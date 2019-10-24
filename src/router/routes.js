import ParentView from '../components/parent-view'
const pipe = x => () => import(`@/pages/${x}`)
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: pipe('home')
  },
  {
    path: '/course_intro',
    name: 'course_intro',
    meta: { title: '课程介绍 ' },
    component: ParentView,
    children: [
      {
        path: '/graphical_self_operation',
        name: 'graphical_self_operation',
        meta: { title: '图解自运行', parentName: 'course_intro' },
        component: pipe('course-intro/graphical-self-operation')
      },
      {
        path: '/self_operating_mechanism',
        name: 'self_operating_mechanism',
        meta: { title: '自运行机制', parentName: 'course_intro' },
        component: pipe('course-intro/self-operating-mechanism')
      },
      {
        path: '/new_business_model',
        name: 'new_business_model',
        meta: { title: '新商业模式', parentName: 'course_intro' },
        component: pipe('course-intro/new-business-model')
      }
    ]
  },
  {
    path: '/consulting_service',
    name: 'consulting_service',
    meta: { title: '咨询服务 ' },
    component: ParentView,
    children: [
      {
        path: '/consulting_team',
        name: 'consulting_team',
        meta: { title: '咨询团队', parentName: 'consulting_service' },
        component: pipe('consulting-service/consulting-team')
      },
      {
        path: '/chief_designer',
        name: 'chief_designer',
        meta: { title: '总设计师', parentName: 'consulting_service' },
        component: pipe('consulting-service/chief-designer')
      },
      {
        path: '/teacher_team',
        name: 'teacher_team',
        meta: { title: '师资团队', parentName: 'consulting_service' },
        component: pipe('consulting-service/teacher-team')
      }
    ]
  },
  {
    path: '/service_case',
    name: 'service_case',
    meta: { title: '服务案例 ' },
    component: ParentView,
    children: [
      {
        path: '/case',
        name: 'case',
        meta: { title: '服务见证', parentName: 'service_case' },
        component: pipe('service-case/case-intro')
      },
      {
        path: '/case_intro',
        name: 'case_intro',
        meta: { title: '案例介绍', parentName: 'service_case' },
        component: pipe('home')
      },
      {
        path: '/video_sharing',
        name: 'video_sharing',
        meta: { title: '学员分享', parentName: 'service_case' },
        component: pipe('home')
      }
    ]
  },
  {
    path: '/gl_news',
    name: 'gl_news',
    meta: { title: '国立资讯' },
    component: pipe('home')
  },
  {
    path: '/about_us',
    name: 'about_us',
    meta: { title: '关于我们' },
    component: ParentView,
    children: [
      {
        path: '/about_gl',
        name: 'about_gl',
        meta: { title: '关于国立', parentName: 'about_us' },
        component: pipe('about-us/about-gl')
      },
      {
        path: '/staff',
        name: 'staff',
        meta: { title: '员工风采', parentName: 'about_us' },
        component: pipe('about-us/staff')
      }
    ]
  }
]

export default routes
