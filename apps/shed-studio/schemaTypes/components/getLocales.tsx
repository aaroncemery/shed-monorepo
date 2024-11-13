import {type SanityClient} from 'sanity'

export async function getLocales(client: SanityClient) {
  const languages = await client.fetch(`*[_type == "page" && (es || en)]`)
  return languages
}

export default getLocales
