import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'

const baseConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
  title: 'Aarons Shed',
  additionalSchemas: schemaTypes,
})

export default baseConfig
