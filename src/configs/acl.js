import { AbilityBuilder, Ability } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role, isAriadne, subject) => {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility)
  can('read', ['management-nav', 'info-section-nav', 'account-nav'])
  if (role === 'guest') {
    can(['manage'], ['account-settings'])
    cannot('read', 'apps-nav')
    can('read', [
      'faq',
      'faq-nav',
      'help',
      'help-nav',
      'blog',
      'blog-nav',
      'pricing',
      'pricing-nav',
      'demo-page',
      'demo-page-nav'
    ])
  } else if (role === 'admin') {
    if (isAriadne) {
      can('manage', 'all')
      cannot('read', ['demo-page-nav', 'default-ds-nav', 'pricing-nav', 'blog-nav', 'faq-nav'])
    } else {
      can('manage', 'all')
      cannot('read', ['demo-page-nav'])
    }
    cannot('read', ['demo-page-nav', 'default-ds-nav', 'pricing-nav', 'blog-nav', 'faq-nav'])
  } else if (role === 'client') {
    can(['read'], 'acl-page')
  } else if (role === 'moderator') {
    can(['read'], 'demo-page')
  } else {
    can(['read', 'create', 'update', 'delete'], subject)
  }

  return rules
}

export const buildAbilityFor = (role, isAriadne, subject) => {
  return new AppAbility(defineRulesFor(role, isAriadne, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object.type
  })
}

export const defaultACLObj = {
  action: 'read',
  subject: ['demo-page-nav', 'demo-page']
}

export default defineRulesFor
