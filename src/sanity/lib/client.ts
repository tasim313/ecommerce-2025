import { createClient } from 'next-sanity'

import {  dataset, projectId } from '../env'
import { sanityFetch } from './live'

const apiVersion = '2025-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export const getAllProducts = async () => {
  const query = `*[_type == "product"]`
  const products = await sanityFetch({ query: query })
  return products.data as Product[];
}