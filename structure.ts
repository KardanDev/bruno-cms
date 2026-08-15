import type {StructureResolver} from 'sanity/structure'
import {singletonTypes} from './singletons'
import CogIcon from '@sanity/icons/Cog'
import UserIcon from '@sanity/icons/User'
import DocumentTextIcon from '@sanity/icons/DocumentText'
import CaseIcon from '@sanity/icons/Case'
import CreditCardIcon from '@sanity/icons/CreditCard'
import HelpCircleIcon from '@sanity/icons/HelpCircle'
import EnvelopeIcon from '@sanity/icons/Envelope'
import HomeIcon from '@sanity/icons/Home'

function singleton(typeName: string, title: string, icon: typeof CogIcon) {
  return (S: Parameters<StructureResolver>[0]) =>
    S.listItem()
      .title(title)
      .icon(icon)
      .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website content')
    .items([
      singleton('settings', 'Configurações', CogIcon)(S),
      S.divider(),
      singleton('homePage', 'Inicio', HomeIcon)(S),
      singleton('aboutPage', 'Sobre', UserIcon)(S),
      singleton('blogPage', 'Artigos', DocumentTextIcon)(S),
      singleton('servicesPage', 'Atuação', CaseIcon)(S),
      // singleton('pricingPage', 'Pricing', CreditCardIcon)(S),
      // singleton('faqPage', 'General FAQ', HelpCircleIcon)(S),
      singleton('contactPage', 'Contato', EnvelopeIcon)(S),
      S.divider(),
      S.documentTypeListItem('service').title('Serviços').icon(CaseIcon),
      S.documentTypeListItem('post').title('Artigos').icon(DocumentTextIcon),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId() ?? ''

        return !singletonTypes.includes(listItem.getId() ?? '') && id !== 'service' && id !== 'post'
      }),
    ])

// function HomeIcon(props: SVGProps<SVGSVGElement>): ReactElement<unknown, string | JSXElementConstructor<any>> {
//   throw new Error('Function not implemented.')
// }
