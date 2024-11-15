import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'
import {defineConfig} from 'sanity'
import {workspaceHome} from 'sanity-plugin-workspace-home'
import {structureTool} from 'sanity/structure'
import {languageFilter} from '@sanity/language-filter'

const workspaceSelectorConfig = defineConfig({
  name: 'workspace-selector',
  title: 'Aarons Shed Workspaces',
  basePath: '/workspaces',
  projectId: '3p5kfswt',
  dataset: 'production',
  plugins: [workspaceHome(), structureTool()]
})

const mainWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
  title: 'Aarons Shed',
  name: 'main',
  basePath: '/main',
  additionalSchemas: schemaTypes,
  additionalPlugins: [workspaceHome()]
})

const i18nWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
  title: 'i18n Workspace',
  name: 'i18n',
  basePath: '/i18n',
  additionalSchemas: schemaTypes,
  additionalPlugins: [
    workspaceHome(),
    languageFilter({
      supportedLanguages: [
        {
          id: 'en',
          title: 'English'
        },
        {
          id: 'fr',
          title: 'French'
        },
        {
          id: 'es',
          title: 'Spanish'
        }
      ],
      defaultLanguages: ['en'],
      documentTypes: ['post', 'article'],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        console.log('enclosingType', enclosingType.name.startsWith('locale'))
        console.log('member', member.name)
        console.log('selectedLanguageIds', selectedLanguageIds)
        return !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(member.name)
      }
    })
  ]
})

const devWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'development',
  title: 'Aarons Shed Dev',
  name: 'dev',
  basePath: '/dev',
  additionalSchemas: schemaTypes,
  additionalPlugins: [workspaceHome()]
})

const stagingWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'staging',
  title: 'Staging',
  name: 'staging',
  basePath: '/staging',
  additionalSchemas: schemaTypes,
  additionalPlugins: [workspaceHome()]
})

export default [
  workspaceSelectorConfig,
  mainWorkspaceConfig,
  devWorkspaceConfig,
  i18nWorkspaceConfig
]
