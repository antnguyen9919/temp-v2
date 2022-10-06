// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import ReceiptIcon from '@mui/icons-material/Receipt'
import BarChartIcon from '@mui/icons-material/BarChart'
import GroupIcon from '@mui/icons-material/Group'
import QuizIcon from '@mui/icons-material/Quiz'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: BarChartIcon,
      // badgeContent: 'new',
      // badgeColor: 'error',
      children: [
        {
          action: 'read',
          subject: 'default-ds-nav',

          title: 'CRM',
          path: '/dashboards/crm'
        },
        { action: 'read', subject: 'default-ds-nav', title: 'Analytics', path: '/dashboards/analytics' },
        { action: 'read', subject: 'default-ds-nav', title: 'eCommerce', path: '/dashboards/ecommerce' }
      ]
    },

    {
      title: 'Admin Dashboards',
      icon: BarChartIcon,

      children: [
        {
          action: 'read',
          subject: 'admin-ds-nav',
          title: 'Overview',
          path: '/admin-dashboards/overview'
        },
        {
          action: 'read',
          subject: 'admin-ds-nav',
          title: 'Summary',
          path: '/admin-dashboards/detailed'
        },
        {
          title: 'Client Dashboards',

          children: [
            {
              action: 'read',
              subject: 'client-ds-nav',
              title: '- Overview',
              path: '/client-dashboards/overview'
            },
            {
              action: 'read',
              subject: 'client-ds-nav',
              title: '- Summary',
              path: '/client-dashboards/detailed'
            }
            // {
            //   action: 'read',
            //   subject: 'client-ds-nav',
            //   title: 'Detailed Reports',
            //   path: '/demo-dashboards/detailed-reports'
            // }
          ]
        }
        // {
        //   action: 'read',
        //   subject: 'admin-ds-nav',
        //   title: 'Detailed Reports',
        //   path: '/demo-dashboards/detailed-reports'
        // }
      ]
    },

    {
      title: 'Demo Dashboards',
      icon: BarChartIcon,

      children: [
        {
          action: 'read',
          subject: 'demo-page-nav',
          title: 'Overview',
          path: '/demo-dashboards/overview'
        },
        {
          action: 'read',
          subject: 'demo-page-nav',
          title: 'Summary',
          path: '/demo-dashboards/summary'
        },
        {
          action: 'read',
          subject: 'demo-page-nav',
          title: 'Detailed Reports',
          path: '/demo-dashboards/detailed-reports'
        }
      ]
    },

    {
      sectionTitle: 'Apps',
      action: 'read',
      subject: 'apps-nav'
    },
    {
      title: 'Private Mail',
      icon: EmailOutline,
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: MessageOutline,
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: CalendarBlankOutline,
      path: '/apps/calendar'
    },
    {
      sectionTitle: 'Management',
      action: 'read',
      subject: 'management-nav'
    },
    {
      action: 'read',
      subject: 'users-list-nav',
      title: 'Users List',
      icon: GroupIcon,
      path: '/apps/user/list'
    },
    {
      title: 'Invoice',
      icon: ReceiptIcon,
      children: [
        {
          action: 'read',
          subject: 'invoice-nav',
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          action: 'read',
          subject: 'invoice-nav',
          title: 'Preview',
          path: '/apps/invoice/preview'
        },
        {
          action: 'read',
          subject: 'invoice-nav',
          title: 'Edit',
          path: '/apps/invoice/edit'
        },
        {
          action: 'read',
          subject: 'invoice-nav',
          title: 'Add',
          path: '/apps/invoice/add'
        }
      ]
    },

    {
      title: 'Roles & Permissions',
      icon: LockOutline,
      children: [
        {
          action: 'read',
          subject: 'users-role-nav',
          title: 'Roles',
          path: '/apps/roles'
        },
        {
          action: 'read',
          subject: 'users-role-nav',
          title: 'Permissions',
          path: '/apps/permissions'
        }
      ]
    },
    {
      action: 'read',
      subject: 'account-nav',
      icon: AccountOutline,
      title: 'Account Settings',
      path: '/pages/account-settings'
    },
    {
      action: 'read',
      subject: 'info-section-nav',
      sectionTitle: 'Information'
    },
    {
      action: 'read',
      subject: 'documentation-nav',
      icon: FileDocumentOutline,
      title: 'Documentation',
      path: '/documentation'
    },
    {
      action: 'read',
      subject: 'pricing-nav',
      icon: FileDocumentOutline,
      title: 'Pricing',
      path: '/pricing'
    },
    {
      icon: QuizIcon,
      action: 'read',
      subject: 'faq-nav',
      title: 'FAQ',
      path: '/faq'
    },
    {
      icon: NewspaperIcon,
      action: 'read',
      subject: 'blog-nav',
      title: 'Blog',
      path: '/blog'
    },

    {
      action: 'read',
      subject: 'help-nav',
      icon: QuestionMarkIcon,
      title: 'Help',
      path: '/blog'
    },

    {
      title: 'Misc',
      icon: MoreHorizIcon,
      children: [
        {
          action: 'read',
          subject: 'misc-nav',
          title: 'Pricing',
          path: '/pricing'
        },
        {
          action: 'read',
          subject: 'misc-nav',

          title: 'FAQ',
          path: '/faq'
        },
        {
          action: 'read',
          subject: 'misc-nav',

          title: 'Blog',
          path: '/blog'
        }
      ]
    }

    // {
    //   title: 'Pages',
    //   icon: FileDocumentOutline,
    //   children: [
    //     {
    //       title: 'Authentication',
    //       children: [
    //         {
    //           title: 'Login',
    //           children: [
    //             {
    //               openInNewTab: true,
    //               title: 'Login v1',
    //               path: '/pages/auth/login-v1'
    //             },
    //             {
    //               openInNewTab: true,
    //               title: 'Login v2',
    //               path: '/pages/auth/login-v2'
    //             },
    //             {
    //               openInNewTab: true,
    //               title: 'Login With AppBar',
    //               path: '/pages/auth/login-with-appbar'
    //             }
    //           ]
    //         },
    //         {
    //           title: 'Register',
    //           children: [
    //             {
    //               openInNewTab: true,
    //               title: 'Register v1',
    //               path: '/pages/auth/register-v1'
    //             },
    //             {
    //               openInNewTab: true,
    //               title: 'Register v2',
    //               path: '/pages/auth/register-v2'
    //             }
    //           ]
    //         },
    //         {
    //           title: 'Forgot Password',
    //           children: [
    //             {
    //               openInNewTab: true,
    //               title: 'Forgot Password v1',
    //               path: '/pages/auth/forgot-password-v1'
    //             },
    //             {
    //               openInNewTab: true,
    //               title: 'Forgot Password v2',
    //               path: '/pages/auth/forgot-password-v2'
    //             }
    //           ]
    //         },
    //         {
    //           title: 'Reset Password',
    //           children: [
    //             {
    //               openInNewTab: true,
    //               title: 'Reset Password v1',
    //               path: '/pages/auth/reset-password-v1'
    //             },
    //             {
    //               openInNewTab: true,
    //               title: 'Reset Password v2',
    //               path: '/pages/auth/reset-password-v2'
    //             }
    //           ]
    //         }
    //       ]
    //     },

    //     {
    //       title: 'Miscellaneous',
    //       children: [
    //         {
    //           openInNewTab: true,
    //           title: 'Coming Soon',
    //           path: '/pages/misc/coming-soon'
    //         },
    //         {
    //           openInNewTab: true,
    //           title: 'Under Maintenance',
    //           path: '/pages/misc/under-maintenance'
    //         },
    //         {
    //           openInNewTab: true,
    //           title: 'Page Not Found - 404',
    //           path: '/pages/misc/404-not-found'
    //         },
    //         {
    //           openInNewTab: true,
    //           title: 'Not Authorized - 401',
    //           path: '/pages/misc/401-not-authorized'
    //         },
    //         {
    //           openInNewTab: true,
    //           title: 'Server Error - 500',
    //           path: '/pages/misc/500-server-error'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   icon: VectorArrangeBelow,
    //   title: 'Dialog Examples',
    //   path: '/pages/dialog-examples'
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/ui/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/ui/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   children: [
    //     {
    //       title: 'Basic',
    //       path: '/ui/cards/basic'
    //     },
    //     {
    //       title: 'Statistics',
    //       path: '/ui/cards/statistics'
    //     },
    //     {
    //       title: 'Advanced',
    //       path: '/ui/cards/advanced'
    //     },
    //     {
    //       title: 'Gamification',
    //       path: '/ui/cards/gamification'
    //     },
    //     {
    //       title: 'Actions',
    //       path: '/ui/cards/actions'
    //     },
    //     {
    //       title: 'Widgets',
    //       path: '/ui/cards/widgets'
    //     }
    //   ]
    // },
    // {
    //   badgeContent: '18',
    //   title: 'Components',
    //   icon: ArchiveOutline,
    //   badgeColor: 'primary',
    //   children: [
    //     {
    //       title: 'Accordion',
    //       path: '/components/accordion'
    //     },
    //     {
    //       title: 'Alerts',
    //       path: '/components/alerts'
    //     },
    //     {
    //       title: 'Avatars',
    //       path: '/components/avatars'
    //     },
    //     {
    //       title: 'Badges',
    //       path: '/components/badges'
    //     },
    //     {
    //       title: 'Buttons',
    //       path: '/components/buttons'
    //     },
    //     {
    //       title: 'Button Group',
    //       path: '/components/button-group'
    //     },
    //     {
    //       title: 'Chips',
    //       path: '/components/chips'
    //     },
    //     {
    //       title: 'Dialogs',
    //       path: '/components/dialogs'
    //     },
    //     {
    //       title: 'List',
    //       path: '/components/list'
    //     },
    //     {
    //       title: 'Menu',
    //       path: '/components/menu'
    //     },
    //     {
    //       title: 'Pagination',
    //       path: '/components/pagination'
    //     },
    //     {
    //       title: 'Ratings',
    //       path: '/components/ratings'
    //     },
    //     {
    //       title: 'Snackbar',
    //       path: '/components/snackbar'
    //     },
    //     {
    //       title: 'Swiper',
    //       path: '/components/swiper'
    //     },
    //     {
    //       title: 'Tabs',
    //       path: '/components/tabs'
    //     },
    //     {
    //       title: 'Timeline',
    //       path: '/components/timeline'
    //     },
    //     {
    //       title: 'Toasts',
    //       path: '/components/toast'
    //     },
    //     {
    //       title: 'Tree View',
    //       path: '/components/tree-view'
    //     },
    //     {
    //       title: 'More',
    //       path: '/components/more'
    //     }
    //   ]
    // },
    // {
    //   sectionTitle: 'Forms & Tables'
    // },
    // {
    //   title: 'Form Elements',
    //   icon: FormSelect,
    //   children: [
    //     {
    //       title: 'Text Field',
    //       path: '/forms/form-elements/text-field'
    //     },
    //     {
    //       title: 'Select',
    //       path: '/forms/form-elements/select'
    //     },
    //     {
    //       title: 'Checkbox',
    //       path: '/forms/form-elements/checkbox'
    //     },
    //     {
    //       title: 'Radio',
    //       path: '/forms/form-elements/radio'
    //     },
    //     {
    //       title: 'Textarea',
    //       path: '/forms/form-elements/textarea'
    //     },
    //     {
    //       title: 'Autocomplete',
    //       path: '/forms/form-elements/autocomplete'
    //     },
    //     {
    //       title: 'Date Pickers',
    //       path: '/forms/form-elements/pickers'
    //     },
    //     {
    //       title: 'Switch',
    //       path: '/forms/form-elements/switch'
    //     },
    //     {
    //       title: 'File Uploader',
    //       path: '/forms/form-elements/file-uploader'
    //     },
    //     {
    //       title: 'Editor',
    //       path: '/forms/form-elements/editor'
    //     },
    //     {
    //       title: 'Slider',
    //       path: '/forms/form-elements/slider'
    //     },
    //     {
    //       title: 'Input Mask',
    //       path: '/forms/form-elements/input-mask'
    //     }
    //   ]
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/forms/form-layouts'
    // },
    // {
    //   title: 'Form Validation',
    //   path: '/forms/form-validation',
    //   icon: CheckboxMarkedCircleOutline
    // },
    // {
    //   title: 'Form Wizard',
    //   path: '/forms/form-wizard',
    //   icon: PackageVariantClosed
    // },
    // {
    //   title: 'Table',
    //   icon: Table,
    //   path: '/tables/mui'
    // },
    // {
    //   title: 'Mui DataGrid',
    //   icon: Table,
    //   path: '/tables/data-grid'
    // },
    // {
    //   sectionTitle: 'Charts & Misc'
    // },
    // {
    //   title: 'Charts',
    //   icon: ChartDonut,
    //   children: [
    //     {
    //       title: 'Apex',
    //       path: '/charts/apex-charts'
    //     },
    //     {
    //       title: 'Recharts',
    //       path: '/charts/recharts'
    //     },
    //     {
    //       title: 'ChartJS',
    //       path: '/charts/chartjs'
    //     }
    //   ]
    // },
    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   icon: ShieldOutline,
    //   title: 'Access Control'
    // },
    // {
    //   title: 'Others',
    //   icon: DotsHorizontal,
    //   children: [
    //     {
    //       title: 'Menu Levels',
    //       children: [
    //         {
    //           title: 'Menu Level 2.1'
    //         },
    //         {
    //           title: 'Menu Level 2.2',
    //           children: [
    //             {
    //               title: 'Menu Level 3.1'
    //             },
    //             {
    //               title: 'Menu Level 3.2'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       title: 'Disabled Menu',
    //       disabled: true
    //     },
    //     {
    //       title: 'Raise Support',
    //       externalLink: true,
    //       openInNewTab: true,
    //       path: 'https://themeselection.com/support'
    //     },
    //     {
    //       title: 'Documentation',
    //       externalLink: true,
    //       openInNewTab: true,
    //       path: 'https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/documentation'
    //     }
    //   ]
    // }
  ]
}

export default navigation
