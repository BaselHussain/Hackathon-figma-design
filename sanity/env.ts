export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skDzkpMY6gDtfiRJwJSwAtbtXulmcrdGsaiPW82qwaA0usXUAVoyigXJn62GSbQgMIPPWWlnQnZV6OpuORD4tQsJBAFx5YJQi3QPfvHZu9cw8IVdGv9HsIB74ffFvtP3I1O2XLrnkngXB2PlTqsjLFdPhrPeI4cvApN7GiiRYOrEHk0M75WI",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
