import {schemaTypes} from './schemaTypes'
import {createBaseConfig} from '@repo/sanity-config'

const baseConfig = createBaseConfig({
  projectId: '3p5kfswt',
  dataset: 'production',
  title: 'Aarons Shed',
  additionalSchemas: schemaTypes
})

export default baseConfig
