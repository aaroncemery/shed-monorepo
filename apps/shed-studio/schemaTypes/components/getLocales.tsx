import {type SanityClient} from 'sanity'

export async function getLocales(client: SanityClient) {
  const languages = await client.fetch(`*[_type == "locale"].hrefLang`)
  return languages
}

export default getLocales
