import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'
import {defineConfig} from 'sanity'
import {workspaceHome} from 'sanity-plugin-workspace-home'
import {structureTool} from 'sanity/structure'

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

const devWorkspaceConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
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

export default [workspaceSelectorConfig, mainWorkspaceConfig, devWorkspaceConfig]
