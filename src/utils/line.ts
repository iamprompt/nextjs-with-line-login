import { randomBytes } from 'crypto'

const LINE_CLIENT_ID = process.env.NEXT_PUBLIC_LINE_CLIENT_ID

if (!LINE_CLIENT_ID) {
  throw new Error('LINE_CLIENT_ID is not defined')
}

const generateLoginState = () => {
  return randomBytes(32).toString('hex')
}

export const getLINEAuthURL = (redirect_uri: string) => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: LINE_CLIENT_ID,
    redirect_uri,
    state: generateLoginState(),
    scope: 'openid profile email',
  })

  console.log(params.toString())

  // return `https://access.line.me/oauth2/v2.1/authorize?${params.toString()}`
}
