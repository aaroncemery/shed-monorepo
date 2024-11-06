import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'
import {defineConfig} from 'sanity'
import {workspaceHome} from 'sanity-plugin-workspace-home'

const workspaceSelectorConfig = defineConfig({
  name: 'workspace-selector',
  title: 'Aarons Shed Workspaces',
  basePath: '/workspaces',
  projectId: '3p5kfswt',
  dataset: 'production',
  plugins: [workspaceHome()]
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

const devWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
  title: 'Aarons Shed Dev',
  name: 'dev',
  basePath: '/dev',
  additionalSchemas: schemaTypes,
  additionalPlugins: [workspaceHome()]
})

export default [workspaceSelectorConfig, mainWorkspaceConfig, devWorkspaceConfig]
