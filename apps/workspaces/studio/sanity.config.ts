import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'
import {workspaceHome} from 'sanity-plugin-workspace-home'

const workspaceSelectorConfig = defineConfig({
  projectId: 'jmb4q9hm',
  dataset: 'production',
  title: 'Workspaces Home',
  name: 'workspace-selector',
  basePath: '/workspaces',
  plugins: [workspaceHome(), structureTool()],
})

const mainWorkspaceConfig = createBaseConfig({
  projectId: 'jmb4q9hm',
  dataset: 'production',
  title: 'Workspaces',
  name: 'main',
  basePath: '/main',
  additionalSchemas: schemaTypes,
  additionalPlugins: [workspaceHome()],
})

export default [workspaceSelectorConfig, mainWorkspaceConfig]
